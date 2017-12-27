const execa = require('execa');
const fs = require('fs');
const os = require('os');
const path = require('path');
const when = require('when');
const whenNode = require('when/node');

const mkdir = whenNode.lift(fs.mkdir);
const readFile = whenNode.lift(fs.readFile);
const rimraf = whenNode.lift(require('rimraf'));

export default {
  setNpmVersion(npmVersion) {
    return execa('npm', ['install', '-g', `npm@${npmVersion}`]);
  },
  getNpmVersion() {
    return execa.stdout('npm', ['-v']);
  },
  createTestApp(dirPath, packagePath) {
    return mkdir(dirPath).then(() =>
      when.promise((res, rej) => {
        const read = fs.createReadStream(packagePath);
        const write = fs.createWriteStream(path.join(dirPath, 'package.json'));
        read.pipe(write);

        read.on('error', rej);
        write.on('error', rej);
        write.on('close', res);
      })
    );
  },
  npmInstall(project) {
    return execa('npm', ['install', '--loglevel', 'silly'], { cwd: project });
  },
  shrinkwrap(project) {
    return execa('npm', ['shrinkwrap', '--dev'], { cwd: project });
  },
  shrinkpack(project) {
    return execa('shrinkpack', [], { cwd: project });
  },
  linkShrinkpack(root) {
    return execa('npm', ['install'], { cwd: root })
      .then(() => execa('npm', ['run', 'build'], { cwd: root }))
      .then(() => execa('npm', ['link'], { cwd: root }));
  },
  unlinkShrinkpack(root) {
    return execa('npm', ['unlink', 'shrinkpack'], { cwd: root });
  },
  getShrinkwrapFile(project) {
    return readFile(path.join(project, 'npm-shrinkwrap.json'), {
      encoding: 'utf8'
    });
  },
  rmDirs(...args: string[]) {
    const dirs = [].slice.call(args);
    return when.all(dirs.map((dir: string) => rimraf(dir)));
  },
  getAllDirFiles(root) {
    return execa.shell('find . | sort', { cwd: root }).then((output: any) => output.stdout.split(os.EOL));
  }
};
