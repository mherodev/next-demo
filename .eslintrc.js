// Note: When disabling or modifying linter rules, please include a brief explanation.

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['emotion', 'prettier'],
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'class-methods-use-this': 0, // Always-this reduces thrashing, implies black box behavior.
    'consistent-return': 0, // Implicit `undefined` return is fine.
    'default-case' : 0, // Cleaner than no-op comment.
    'no-lonely-if': 0, // Symmetry for clarity.
    'no-param-reassign': 0, // Support safer defaults than auto-overriding undefined.
    'no-plusplus': 0, // Classic for-loops love a plusplus.
    'no-return-assign': 0, // This is too convenient for one-liner arrow functions.
    'no-underscore-dangle': 0, // Mocks and tests are great places to dangle.
    'no-unused-vars': [2, {
      args: 'none', // Allow unused arguments in functions: (req, res) => res.send('Unused req shouldn't error.');
      varsIgnorePattern: 'React' // Circumvent duplicate React import bug.
    }],

    // Destructuring an initialized let involves esoteric syntax.
    'prefer-destructuring': [2, {
      VariableDeclarator: { object: true, array: false },
      AssignmentExpression: { object: false, array: true }
    }],

    // Enforce emotion 10 syntax.
    'emotion/jsx-import': 2,
    'emotion/import-from-emotion': 2,
    'emotion/styled-import': 2,

    'jsx-a11y/anchor-is-valid': 0, // next-routes <Link /> component passes href down.
    'jsx-a11y/label-has-for': 0, // Deprecated; use following rule.
    "jsx-a11y/label-has-associated-control": [ 2, {
      "depth": 3,
    }],

    'import/extensions': [1, { json: 'always' }], // For clarity.
    'import/no-named-as-default': 0, // Pattern of exporting component with and without HOC for testing.
    'import/prefer-default-export': 0, // Reduce friction when stubbing an initial list with single exported item.

    'prettier/prettier': [1, { trailingComma: 'es5', singleQuote: true, printWidth: 120 }], // Enable Prettier.

    'react/forbid-prop-types': 0, // Allow vague prop types as enforcing strict types has rarely saved us any pain.
    'react/destructuring-assignment': 0, // Prevent forcing terse cases to be overly verbose.
    'react/jsx-filename-extension': 0, // Pattern to name all script files '*.js'.
    'react/jsx-props-no-spreading': 0, // To support HOCs and the `...rest` pattern, this is generally fine.
    'react/no-did-mount-set-state': 0 // This is required for server rendering.
  },
};
