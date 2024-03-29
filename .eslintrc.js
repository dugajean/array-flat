module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jest/globals": true
  },
  "extends": "eslint:recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "plugins": [
    "jest"
  ],
  "parserOptions": {
      "ecmaVersion": 2018
  },
  "rules": {
  }
};