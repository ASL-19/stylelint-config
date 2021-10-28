# @asl-19/stylelint-config changelog

## 0.4.1 [2021-10-28]

### Changes

* Update version number (forgot to update in 0.4.0!)

## [0.4.0](https://github.com/ASL-19/stylelint-config/pulls?q=is%3Apr+milestone%3A0.4.0) [2021-10-28]

### Changes

* Upgraded dependencies and config for Stylelint 14 support [**Breaking**] [[#28](https://github.com/ASL-19/stylelint-config/pull/28)]

    Note:

    * The config now requires Stylelint 14
    * The config now includes `stylelint-order` as a dependency, so it can be removed from project dependencies

## [0.3.0](https://github.com/ASL-19/stylelint-config/pulls?q=is%3Apr+milestone%3A0.3.0) [2021-08-06]

### Changes

* Upgrade dependencies [[#16](https://github.com/ASL-19/stylelint-config/pull/16)]
    * `stylelint-config-standard` upgraded to 22.0.0 (includes [`stylelint-config-recommended` 5.0.0](https://github.com/stylelint/stylelint-config-recommended/releases/tag/5.0.0))
* Add `margin-inline-*`, `padding-inline-*`, and `border-inline-*` to `order/properties-order` [[#20](https://github.com/ASL-19/stylelint-config/pull/20)]
* Add property-disallowed-list rule [[#24](https://github.com/ASL-19/stylelint-config/pull/24)]
    * Contains CSS logical properties with insufficient browser support

## [0.2.0](https://github.com/ASL-19/stylelint-config/pulls?q=is%3Apr+milestone%3A0.2.0) [2021-03-24]

### Changes

* Upgraded dependencies
    * `stylelint` and `typescript` peer dependencies changed to most recent releases

## 0.1.5 [2020-10-21]

### Changes

* Switched to [@asl-19/eslint-config](https://github.com/ASL-19/eslint-config), upgraded dependencies [[#10](https://github.com/ASL-19/stylelint-config/pull/10)]
* Upgraded dependencies, consolidated rules from internal projects [[#12](https://github.com/ASL-19/stylelint-config/pull/12)]

## 0.1.4 [2020-06-02]

### Fixes

* Package can now be installed in Node.js > 12 [[#6](https://github.com/ASL-19/stylelint-config/pull/6)]
* Fixed README installation instructions [[#8](https://github.com/ASL-19/stylelint-config/pull/8)]

## 0.1.3 [2020-06-02]

### Fixes

* Added LICENSE file [[#2](https://github.com/ASL-19/stylelint-config/pull/2)]

## 0.1.2 [2020-06-02]

First open-source release
