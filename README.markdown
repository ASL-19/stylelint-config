# @asl-19/stylelint-config

Shared [stylelint](https://stylelint.io/) config for [ASL19](https://asl19.org/) projects.

## How to use

### Install

```sh
yarn add @asl-19/stylelint-config --dev
npx install-peerdeps @asl-19/stylelint-config --dev
```

### Add to ESLint config

Create a `.eslintrc.js` containing (at least) the following:

```js
const stylelintConfig = {
  extends: ["@asl-19/stylelint-config"],
};

module.exports = stylelintConfig;
```
