const constantCase = require('constant-case');

module.exports = answers => {
  const valuesMap = {
    projectName: answers.projectName,
    authorName: answers.authorName,
    authorEmail: answers.authorEmail,
    organization: answers.organization,
    gitignore: '.gitignore',
    packagejson: 'package.json',
  };

  for (const key in valuesMap) {
    // create CONSTANT_CASE entries for values map
    valuesMap[constantCase(key)] = constantCase(valuesMap[key]);
  }

  return valuesMap;
};
