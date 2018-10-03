const addJsRules = require('./addJsRules');

module.exports = addJsRules({
  rulesDirectory: [
    'tslint-microsoft-contrib',
    'tslint-plugin-prettier',
    'tslint-no-unused-expression-chai',
  ],

  extends: [
    'tslint-consistent-codestyle',
    'tslint-eslint-rules',
    'tslint-config-prettier',
  ],

  rules: {
    // https://github.com/palantir/tslint
    'adjacent-overload-signatures': true,
    'ban-comma-operator': true,
    'no-namespace': true,
    'no-non-null-assertion': true,
    'no-reference': true,
    'prefer-for-of': true,
    'await-promise': true,
    curly: true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-duplicate-super': true,
    'no-dynamic-delete': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': false,
    'no-misused-new': true,
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-unsafe-finally': true,
    'no-var-keyword': true,
    'prefer-object-spread': true,
    radix: true,
    'restrict-plus-operands': true,
    'switch-default': true,
    'triple-equals': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    deprecation: true,
    'no-duplicate-imports': true,
    'prefer-const': true,
    'prefer-readonly': true,
    'array-type': [true, 'array'],
    'callable-types': true,
    encoding: true,
    'interface-over-type-literal': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': false,
    'no-reference-import': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'object-literal-shorthand': true,
    'prefer-method-signature': true,
    'prefer-while': true,
    'switch-final-break': true,
    'type-literal-delimiter': true,

    // https://github.com/kwonoj/tslint-no-unused-expression-chai
    'no-unused-expression-chai': [true, 'allow-fast-null-checks'],

    // https://github.com/buzinas/tslint-eslint-rules
    'no-constant-condition': true,
    'no-control-regex': true,
    'no-empty-character-class': true,
    'no-ex-assign': true,
    'no-extra-boolean-cast': true,
    'no-extra-semi': true,
    'no-inner-declarations': true,
    'no-invalid-regexp': true,
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'ter-no-proto': true,
    'ter-no-script-url': true,
    'ter-no-self-compare': true,
    'no-duplicate-case': true,
    'no-irregular-whitespace': true,
    'no-sparse-arrays': true,
    'valid-typeof': true,

    // https://github.com/ajafff/tslint-consistent-codestyle
    'no-accessor-recursion': true,
    'no-collapsible-if': true,
    'no-return-undefined': true,
    'no-static-this': true,
    'no-unnecessary-else': true,
    'prefer-const-enum': true,

    // https://github.com/Microsoft/tslint-microsoft-contrib
    'no-banned-terms': true,
    'no-with-statement': true,

    // custom rules
    ban: [
      true,
      { name: 'fdescribe', message: 'no-focused-test' },
      { name: 'fit', message: 'no-focused-test' },
      { name: ['describe', 'only'], message: 'no-focused-test' },
      { name: ['it', 'only'], message: 'no-focused-test' },
      { name: ['test', 'only'], message: 'no-focused-test' },
    ],

    // https://github.com/ikatyang/tslint-plugin-prettier
    prettier: [
      true,
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
});
