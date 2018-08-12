# Changelog

## 2.13.2 (Aug 12, 2018)

* `yoshi`
  * [#488](https://github.com/wix/yoshi/pull/488) Upgrade `stylable` to new scoped package

## 2.13.1 (Jul 29, 2018)

#### :bug: Bug

* `yoshi`
  * [#469](https://github.com/wix/yoshi/pull/469) Fixed mocha to not throw an error and exit while in watch mode

## 2.13.0 (Jul 26, 2018)

#### :nail_care: Enhancement
* [#458](https://github.com/wix/yoshi/pull/458) Add an option to disable `threadLoader` for typescript projects.

## 2.12.0 (Jul 3, 2018)

#### :nail_care: Enhancement
* [#413](https://github.com/wix/yoshi/pull/413) Add configuration for Webpack's `resolve.alias` Using Yoshi's `resolveAlias` option

## 2.11.3 (Jul 1, 2018)

#### :bug: Bug
* [#395](https://github.com/wix/yoshi/pull/395) Mocha `--watch` mode do not run the tests after a change in the `dist` directory
* [#408](https://github.com/wix/yoshi/pull/408) Do not fail the build on an older yoshi version.

## 2.11.2 (Jun 24, 2018)

#### :bug: Bug
* [#382](https://github.com/wix/yoshi/pull/382) Fix `start --no-server` work
* [#390](https://github.com/wix/yoshi/pull/390) Drop `petri-specs` convert task

## 2.11.1 (Jun 20, 2018)

#### :bug: Bug
* [#383](https://github.com/wix/yoshi/pull/383) Fix configuration done in [#371](https://github.com/wix/yoshi/pull/371)

## 2.11.0 (Jun 14, 2018)

#### :nail_care: Enhancement
* [#367](https://github.com/wix/yoshi/pull/367) Add support for a new font type (otf)
* [#371](https://github.com/wix/yoshi/pull/371) Configure Stylable with `{ "shortNamespaces": false }` for optimization

## 2.10.1 (Jun 13, 2018)

#### :bug: Bug
* Revert [#364](https://github.com/wix/yoshi/pull/364) as it contains several breaking changes and it will be merged again into `v3.x.x`

## 2.10.0 (Jun 13, 2018)

#### :nail_care: Enhancement
* [#364](https://github.com/wix/yoshi/pull/364) Bump `node-sass` version from `~4.5.3` to `^4.5.3`

## 2.9.0 (Jun 12, 2018)

#### :nail_care: Enhancement
* [#358](https://github.com/wix/yoshi/pull/358) [#361](https://github.com/wix/yoshi/pull/358) Add an option to configure live-reload
* [#352](https://github.com/wix/yoshi/pull/352) Add support for exclude property in `protractor.conf.js`
* [#332](https://github.com/wix/yoshi/pull/332) Add an option to override DEBUG environment parameter in app-server

## 2.8.3 (Jun 7, 2018)

#### :bug: Bug
* [#345](https://github.com/wix/yoshi/pull/345) Revert `esnext` enforced configuration for `ts-loader`.
* [#335](https://github.com/wix/yoshi/pull/335) Support `--debug=0` option (enable debug with auto port generation)

## 2.8.2 (Jun 6, 2018)

#### :nail_care: Enhancement
* [#341](https://github.com/wix/yoshi/pull/341) Add `.json` to the list of resolved extensions by Webpack

## 2.8.1 (May 31, 2018)

#### :bug: Bug
* [#330](https://github.com/wix/yoshi/pull/330) Fix library (UMD) bundles to work when loaded by Node.js and as WebWorkers
* [#329](https://github.com/wix/yoshi/pull/329) Patch stylable to always be part of the app's JavaScript bundle

## 2.8.0 (May 31, 2018)

#### :nail_care: Enhancement
* [#327](https://github.com/wix/yoshi/pull/327) Support `--coverage` option for `test` command
* [#325](https://github.com/wix/yoshi/pull/325) Add stylable support for karma tests
* [#322](https://github.com/wix/yoshi/pull/322) Support tree shaking in TypeScript by:
  * Create an `es` version if a `module` field exist in   `package.json`
  * Force TypeScript loader to use `{ module: "esnext" }` to enable tree shaking

## 2.7.0 (May 31, 2018)

#### :bug: Bug
* [#320](https://github.com/wix/yoshi/pull/320) Upgrade `haste` dependencies to version `~0.2.8`

#### :nail_care: Enhancement
* [#319](https://github.com/wix/yoshi/pull/319) Change cdn host to 0.0.0.0 so it will be available from all network iterfaces

## 2.6.2 (May 29, 2018)

#### :nail_care: Enhancement
* [#251](https://github.com/wix/yoshi/pull/251) Force `{ module: 'commonjs' }` for TypeScript projects when running tests with `ts-node`

#### :house: Internal
* [#306](https://github.com/wix/yoshi/pull/306) Set Stylable’s `classNameOptimizations` option to `false`
* [#310](https://github.com/wix/yoshi/pull/310) Change `Wix Style React`'s DepKeeper configuration

## 2.6.1 (May 23, 2018)

#### :bug: Bug
 * [#302](https://github.com/wix/yoshi/pull/302) Be able to run protractor after mocha/jest

## 2.6.0 (May 22, 2018)

#### :nail_care: Enhancement
 * [#291](https://github.com/wix/yoshi/pull/291) Add support for `--debug-brk` option on `test` and `start` commands

## 2.5.1 (May 22, 2018)

#### :bug: Bug
  * [#300](https://github.com/wix/yoshi/pull/300) Make tree shaking work with `babel-preset-wix`

## 2.5.0 (May 21, 2018)

#### :nail_care: Enhancement
 * [#298](https://github.com/wix/yoshi/pull/298) Support es transpilation also for typescript

#### :bug: Bug
  * [#295](https://github.com/wix/yoshi/pull/295) Bump `webpack-hot-client` from `v2.2.0` to `v3.0.0` (fixes hmr multiple entries bug)

## 2.4.1 (May 19, 2018)
  * [#296](https://github.com/wix/yoshi/pull/296) Fix es modules readme, upgrade `babel-preset-wix` version to 2.0.0

## 2.4.0 (May 13, 2018)

#### :bug: Bug
  * [#274](https://github.com/wix/yoshi/pull/274) Lint fixes for wallaby config
  * [#277](https://github.com/wix/yoshi/pull/277) Jest Stylable Transform Fix for Windows

#### :nail_care: Enhancement
* `eslint-config-yoshi-base`
  * [#258](https://github.com/wix/yoshi/pull/258) Has been created and can be used
* `eslint-config-yoshi`
  * [#276](https://github.com/wix/yoshi/pull/276) Has been created and can be used
* `babel-preset-yoshi`
  * [#205](https://github.com/wix/yoshi/pull/205) Has been created and can be used
* `yoshi`
  * [#253](https://github.com/wix/yoshi/pull/253) support nvm version in wallaby

## 2.3.0 (May 9, 2018)

#### :nail_care: Enhancement
* [#264](https://github.com/wix/yoshi/pull/264) Add debug ability for tests and app-server
  * `yoshi test --debug`
  * `yoshi start --debug`

## 2.2.0 (May 9, 2018)

#### :bug: Bug
* Fixate `eslint` version to `4.13.1` in order to be compatiable with `eslint-config-wix` (with `babel-eslint` version)

## 2.1.10 (May 8, 2018)

#### :bug: Bug
* [#267](https://github.com/wix/yoshi/pull/267) Update `haste-task-typescript` to support windows
* Remove all `eslint-config-yoshi-base` related dependencies to prevent clash with `eslint-config-wix`

## 2.1.9 (May 8, 2018)

#### :bug: Bug
* Add `eslint-config-wix` to be a dependency of yoshi for backwards compatibility.

## 2.1.7 (May 6, 2018)

#### :nail_care: Enhancement
* [#208](https://github.com/wix/yoshi/pull/208) Add the `--ssl` option to `start` that serves the app bundle on https

#### :bug: Bug
* [#257](https://github.com/wix/yoshi/pull/257) HMR "auto" fallbacks to default entry if non supplied
* [#250](https://github.com/wix/yoshi/pull/250) Fix wallaby-jest to work with Stylable

## 2.1.6 (May 2, 2018)

#### :bug: Bug
* [#237](https://github.com/wix/yoshi/pull/237) Consider the different runtime context for wallaby setup function

#### :house: Internal
* [#243](https://github.com/wix/yoshi/pull/243) Remove custom publish script and use CI's built-in one instead
* Remove a dependency on `semver`
* [#245](https://github.com/wix/yoshi/pull/245) Release script will now exit with status code 0 if running in CI
* [#231](https://github.com/wix/yoshi/pull/231) Add contribution templates for issues and pull requests
* [#246](https://github.com/wix/yoshi/pull/246) Improve test and reduce flakiness by creating symlinks instead of installing specific dependencies
* [#249](https://github.com/wix/yoshi/pull/249) Internal refactor to `protractor.conf.js`

## 2.1.5 (April 29, 2018)
* Internal: [#232](https://github.com/wix/yoshi/pull/232) Better release script for creating new versions
* Internal: [#207](https://github.com/wix/yoshi/pull/207), [#242](https://github.com/wix/yoshi/pull/242) Rewrite build command tests and decrease test time
* [#223](https://github.com/wix/yoshi/pull/223) Documented how to configure Jest
* Update version of `stylable-webpack-plugin` to `1.0.5`
* [#233](https://github.com/wix/yoshi/pull/233) `yoshi info` now displays the project's yoshi config

## 2.1.4 (April 26, 2018)
* Hotfix: fix `stylable-webpack-plugin` to `1.0.4` to prevent runtime error

## 2.1.3 (April 25, 2018)
* [#211](https://github.com/wix/yoshi/pull/211) Yoshi Lint - Add support for file list
* [#228](https://github.com/wix/yoshi/pull/228) Add `yoshi info` command to gather local environment information
* [#229](https://github.com/wix/yoshi/pull/229) Fix `test-setup` and `wallaby-common` paths for wallaby configs

## 2.1.2 (April 24, 2018)
* [#220](https://github.com/wix/yoshi/pull/220) Fix a bug in webpack configuration for karma based projects

## 2.1.1 (April 23, 2018)
* [#216](https://github.com/wix/yoshi/pull/216) Add stylable support for storybook webpack configuration

## 2.1.0 (April 23, 2018)
* [#210](https://github.com/wix/yoshi/pull/210) Add stylable support for webpack using [stylable-webpack-plugin](https://github.com/wix-playground/stylable-webpack-plugin)
* [#209](https://github.com/wix/yoshi/pull/209) Add support for 'it' test suffix for wallaby

## 2.0.0 (April 22, 2018)
* See [migration guide](https://github.com/wix-private/fed-handbook/wiki/Yoshi-2.0#migration-guide)

## 2.0.0-rc.0 (April 18, 2018)
* :house_with_garden: Changes in the code structure, build configuration in CI and release script

## 2.0.0-beta.3 (March 28, 2018)
* [#189](https://github.com/wix/yoshi/pull/189) Add `hmr: "auto"` option, which customizes [webpack HMR](https://webpack.js.org/concepts/hot-module-replacement/) and [react-hot-loader](https://github.com/gaearon/react-hot-loader) automatically
* [#191](https://github.com/wix/yoshi/pull/191) Fix `test-setup` paths for wallaby configs
* [#187](https://github.com/wix/yoshi/pull/187) When compiling ES modules, move styles and assets to `es` directory

## 2.0.0-beta.2 (March 19, 2018)
* **(Breaking)** Remove `haste` as a bin alias, from now on only `yoshi` would be valid bin. (for example `haste start` would not be supported, use `yoshi start` instead)

## 2.0.0-beta.1 (March 19, 2018)
* [#181](https://github.com/wix/yoshi/pull/181) Exclude the following tasks logs:
  1. `wixUpdateNodeVersion`
  2. `migrateScopePackages`
  3. `migrateBowerArtifactory`
  4. `wixDepCheck`
  5. `copy-server-assets`
  6. `copy-static-assets-legacy`
  7. `copy-static-assets`
  8. `maven-statics`
  9. `petri-specs`

* [#182](https://github.com/wix/yoshi/pull/182) Remove `yoshi-utils` as a dev dependency and replace with a local function
* [#183](https://github.com/wix/yoshi/pull/183) Copy `yoshi-runtime` package from original yoshi repository

## 2.0.0-beta.0 (March 15, 2018)
* [#178](https://github.com/wix/yoshi/pull/178) Add ES6 modules support

## 2.0.0-alpha.2 (March 6, 2018)
* [#171](https://github.com/wix/yoshi/pull/171) Update release script to support `old` npm dist-tag
* [#172](https://github.com/wix/yoshi/pull/172) Add `yoshi.config.js` support

## 1.2.0-alpha.1 (March 4, 2018)
  * [#169](https://github.com/wix/yoshi/pull/169) Add a custom publish script, the ci will automaticlly release after changing the version on `package.json`
    * [#157](https://github.com/wix/yoshi/pull/157) Update webpack and related packages:
    * Bump loaders: [css-loader](https://github.com/webpack-contrib/css-loader), [resolve-url-loader](https://github.com/bholloway/resolve-url-loader), [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin), [file-loader](https://github.com/webpack-contrib/file-loader) and [ts-loader](https://github.com/TypeStrong/ts-loader)
        * Replace [happypack](https://github.com/amireh/happypack) with [thread-loader](https://github.com/webpack-contrib/thread-loader) (since it's faster and compatible with webpack 4)
        * Rename `commonsChunk` to `splitChunks` to match webpack's naming
        * Use `splitChunks.chunks: 'all'` by default (see more: [RIP CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693))
        * Disable [stylable-loader](github.com/wix/stylable-integration) (since it's incompatible with webpack 4)

## 1.2.1 (April 8, 2018)
start releasing on `yoshi` exclusively, update release script to publish one package, and updated relatived paths from `haste-preset-yoshi` to `yoshi`

## 1.2.0 (April 3, 2018)
* [#194](https://github.com/wix/yoshi/pull/194) Stop saving webpack stats on start command

## 1.1.2 (March 27, 2018)
* [#168](https://github.com/wix/yoshi/pull/168) Set default formatter for tslint to `stylish` and add `--format` option for `lint` command

## 1.1.0 (March 25, 2018)
* [#188](https://github.com/wix/yoshi/pull/188) Add option to only separate CSS on production

## 1.0.48 (March 21, 2018)
* [#143](https://github.com/wix/yoshi/pull/143) Add `stylable-integration` require-hooks and transform functions for testing environments (jest + mocha)

## 1.0.47 (March 7, 2018)
* [#176](https://github.com/wix/yoshi/pull/176) Adding `ts` files to the glob pattern provided by `debug/mocha`

## 1.0.46 (March 7, 2018)
  * [#177](https://github.com/wix/yoshi/pull/177) Fix: Remove webpack output from `start` & `test` commands

## 1.0.45 (February 21, 2018)
  * [#156](https://github.com/wix/yoshi/pull/156) Inline wix tasks instead of using them as external packages
  * [#154](https://github.com/wix/yoshi/pull/154) Add `wix-bootstrap-*` to depcheck task

## 1.0.44 (February 18, 2018)
  * Start of manual releases (see commit history for changes in previous versions of [yoshi](https://github.com/wix/yoshi))
