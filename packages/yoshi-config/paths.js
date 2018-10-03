const path = require('path');

const ROOT_DIR = process.cwd();

const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const SRC_DIR = resolvePath('src');
const BUILD_DIR = resolvePath('dist');
const TARGET_DIR = resolvePath('target');
const POM_FILE = resolvePath('pom.xml');
const STATS_FILE = resolvePath(BUILD_DIR, 'webpack-stats.json');

module.exports = {
  SRC_DIR,
  BUILD_DIR,
  TARGET_DIR,
  POM_FILE,
  STATS_FILE,
};
