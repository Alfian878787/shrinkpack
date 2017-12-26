# shrinkpack

Fast, resilient, reproducible builds with npm install.

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install shrinkpack --save
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [chalk](http://ghub.io/chalk): Terminal string styling done right
- [commander](http://ghub.io/commander): the complete solution for node.js command-line programs
- [execa](http://ghub.io/execa): A better `child_process`
- [graceful-fs](http://ghub.io/graceful-fs): A drop-in replacement for fs, making various improvements.
- [gunzip-maybe](http://ghub.io/gunzip-maybe): Transform stream that gunzips its input if it is gzipped and just echoes it if not
- [semver](http://ghub.io/semver): The semantic version parser used by npm.
- [ssri](http://ghub.io/ssri): Standard Subresource Integrity library --  parses, serializes, generates, and verifies integrity metadata according to the SRI spec.
- [when](http://ghub.io/when): A lightweight Promises/A+ and when() implementation, plus other async goodies.

## Dev Dependencies

- [@types/node](http://ghub.io/@types/node): TypeScript definitions for Node.js
- [ava](http://ghub.io/ava): Futuristic test runner 🚀
- [circular-json](http://ghub.io/circular-json): JSON does not handle circular references. This version does
- [rimraf](http://ghub.io/rimraf): A deep deletion module for node (like `rm -rf`)
- [tslint](http://ghub.io/tslint): An extensible static analysis linter for the TypeScript language
- [typescript](http://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

## License

MIT