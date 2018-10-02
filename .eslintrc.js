module.exports = {
  'root': true,
  'env': {
    node: true
  },
  'extends': [
    'unu',
    'unu/rules/vue'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    // don't require .vue extension when importing
    'import/extensions': 'off',
    'max-len': 'off',
    'vue/require-default-prop': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
