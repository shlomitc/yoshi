const path = require('path');
const fs = require('fs-extra');
const tempy = require('tempy');
const execa = require('execa');
const chalk = require('chalk');
const globby = require('globby');
const Answers = require('../src/Answers');
const { createApp, verifyRegistry, getProjectTypes } = require('../src/index');
const prompts = require('prompts');
const expect = require('expect');

// verbose logs and output
const verbose = process.env.VERBOSE_TESTS;
// A regex pattern to run a focus test on the matched projects types
const focusProjectPattern = process.env.FOCUS_PATTERN;

verbose && console.log(`using ${chalk.yellow('VERBOSE')} mode`);

const stdio = verbose ? 'inherit' : 'pipe';

verifyRegistry();

const projectTypes = getProjectTypes().filter(
  projectType =>
    !focusProjectPattern ? true : projectType.match(focusProjectPattern),
);

focusProjectPattern &&
  console.log(
    `using the pattern ${chalk.magenta(
      focusProjectPattern,
    )} to filter projects`,
  );

console.log('Running e2e tests for the following projects:\n');
projectTypes.forEach(type => console.log(`> ${chalk.cyan(type)}`));

const copyLocalModules = async tempDir => {
  const directories = await globby(path.join(__dirname, '../../**'), {
    onlyDirectories: true,
    deep: false,
  });

  directories.forEach(directory => {
    const directoryName = path.basename(directory);
    const destPath = path.join(tempDir, 'node_modules', directoryName);

    if (fs.existsSync(destPath)) {
      console.log(
        `linking ${chalk.cyan(directory)} -> ${chalk.cyan(destPath)}`,
      );

      fs.removeSync(destPath);
      fs.copySync(directory, destPath);
    }
  });
};

const testTemplate = mockedAnswers => {
  describe(mockedAnswers.fullProjectType, () => {
    const tempDir = tempy.directory();

    before(async () => {
      prompts.inject(mockedAnswers);
      verbose && console.log(chalk.cyan(tempDir));
      await createApp(tempDir);
      await copyLocalModules(tempDir);
    });

    if (mockedAnswers.transpiler === 'typescript') {
      it('should not have errors on typescript strict check', () => {
        console.log('checking strict typescript...');
        execa.shellSync('./node_modules/.bin/tsc --noEmit --strict', {
          cwd: tempDir,
          stdio,
        });
      });
    }

    it(`should run npm test with no configuration warnings`, () => {
      console.log('running npm test...');
      const { stderr } = execa.shellSync('npm test', {
        cwd: tempDir,
        stdio,
      });

      expect(stderr).not.toContain('Warning: Invalid configuration object');
    });
  });
};

describe('create-yoshi-app + yoshi e2e tests', () => {
  projectTypes
    .map(
      projectType =>
        new Answers({
          projectName: `test-${projectType}`,
          authorName: 'rany',
          authorEmail: 'rany@wix.com',
          organization: 'wix',
          projectType: projectType.replace('-typescript', ''),
          transpiler: projectType.endsWith('-typescript')
            ? 'typescript'
            : 'babel',
        }),
    )
    .forEach(testTemplate);
});
