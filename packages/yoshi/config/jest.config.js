const merge = require('lodash/merge');
const projectConfig = require('yoshi-config');
const { inTeamCity } = require('yoshi-helpers');

const jestProjectConfig = projectConfig.jestConfig;

const config = merge(jestProjectConfig, {
  transform: {
    '\\.jsx?$': require.resolve('./jest-transformer'),
    '\\.st.css?$': require.resolve('./jest-stylable-transformer'),
  },
});

config.transformIgnorePatterns = (config.transformIgnorePatterns || []).concat([
  '/node_modules/(?!(.*?\\.st\\.css$))',
]);

if (inTeamCity()) {
  config.testResultsProcessor = require.resolve('jest-teamcity-reporter');
}

module.exports = config;
