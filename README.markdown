# @asl-19/stylelint-config

Shared [Stylelint](https://stylelint.io/) config for [ASL19](https://asl19.org/) projects.

## How to use

### Install

```sh
yarn add @asl-19/stylelint-config --dev
npx install-peerdeps @asl-19/stylelint-config --dev
```

### Add to Stylelint config

Create a `stylelint.config.js` containing (at least) the following:

```js
const stylelintConfig = {
  extends: ["@asl-19/stylelint-config"],
};

module.exports = stylelintConfig;
```

## Compatibility

This package is developed and used with Node.js 12 (the active LTS [release](https://nodejs.org/en/about/releases/) as of 2020-06). The code should be forward-compatible, but use with newer Node.js versions is untested and unsupported.
