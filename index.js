const stylelintConfig = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  customSyntax: "@stylelint/postcss-css-in-js",
  rules: {
    // As of 2021-10 even the latest version of Safari doesn’t support
    // percentage opacity values, so we’ll need to suppress this rule until 2023
    // at the earliest.
    //
    // https://caniuse.com/mdn-css_properties_opacity_percentages
    "alpha-value-notation": null,
    "at-rule-empty-line-before": null,
    // We can remove this in favour of the default color-function-notation
    // "modern" value once some time passes (maybe mid-2022). As of 2021-10 the
    // complete lack of IE support and relatively recent (2019) Safari support
    // is concerning.
    //
    // https://stylelint.io/user-guide/rules/list/color-function-notation/
    // https://caniuse.com/mdn-css_types_color_space_separated_functional_notation
    "color-function-notation": "legacy",
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "font-family-name-quotes": "always-unless-keyword",
    "no-descending-specificity": null,
    "no-empty-source": null,
    "no-extra-semicolons": null,
    "no-eol-whitespace": null,
    "no-missing-end-of-source-newline": null,
    "order/order": [
      "dollar-variables",
      "declarations",
      { type: "at-rule", name: "font-face" },
      "rules",
      { type: "at-rule", name: "media" },
    ],
    // Based on https://github.com/constverum/stylelint-config-rational-order
    "order/properties-order": [
      {
        groupName: "Positioning",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: ["position", "top", "right", "bottom", "left", "z-index"],
      },
      {
        groupName: "Box model",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: [
          "display",
          "overflow",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "grid",
          "grid-area",
          "grid-auto-rows",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-gap",
          "grid-row",
          "grid-row-start",
          "grid-row-end",
          "grid-row-gap",
          "grid-column",
          "grid-column-start",
          "grid-column-end",
          "grid-column-gap",
          "grid-template",
          "grid-template-areas",
          "grid-template-rows",
          "grid-template-columns",
          "gap",
          "align-content",
          "align-items",
          "align-self",
          "justify-content",
          "justify-items",
          "justify-self",
          "order",
          "float",
          "clear",
          "box-sizing",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "margin-inline-start",
          "margin-inline-end",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "padding-inline-start",
          "padding-inline-end",
        ],
      },
      {
        groupName: "Visual",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: [
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image",
          "table-layout",
          "empty-cells",
          "caption-side",
          "background",
          "background-color",
          "background-image",
          "background-repeat",
          "background-position",
          "background-position-x",
          "background-position-y",
          "background-size",
          "background-clip",
          "background-origin",
          "background-attachment",
          "background-blend-mode",
          "outline",
          "border",
          "border-color",
          "border-style",
          "border-width",
          "border-top",
          "border-top-color",
          "border-top-width",
          "border-top-style",
          "border-right",
          "border-right-color",
          "border-right-width",
          "border-right-style",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-width",
          "border-bottom-style",
          "border-left",
          "border-left-color",
          "border-left-width",
          "border-left-style",
          "border-inline-start-width",
          "border-inline-end-width",
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "border-image",
          "border-image-source",
          "border-image-slice",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "border-collapse",
          "border-spacing",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "box-shadow",
          "box-decoration-break",
          "transform",
          "transform-origin",
          "transform-style",
          "backface-visibility",
          "perspective",
          "perspective-origin",
          "visibility",
          "cursor",
          "opacity",
          "filter",
          "isolation",
          "backdrop-filter",
          "mix-blend-mode",
        ],
      },
      {
        groupName: "Typography",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: [
          "color",
          "font",
          "font-weight",
          "font-size",
          "font-family",
          "font-style",
          "font-variant",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "line-height",
          "direction",
          "letter-spacing",
          "white-space",
          "text-align",
          "text-align-last",
          "text-transform",
          "text-decoration",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-indent",
          "text-justify",
          "text-outline",
          "text-wrap",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "text-orientation",
          "text-shadow",
          "vertical-align",
          "word-wrap",
          "word-break",
          "word-spacing",
          "overflow-wrap",
          "tab-size",
          "hyphens",
          "unicode-bidi",
          "columns",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "src",
        ],
      },
      {
        groupName: "Animation",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: [
          "transition",
          "transition-delay",
          "transition-timing-function",
          "transition-duration",
          "transition-property",
          "animation",
          "animation-name",
          "animation-duration",
          "animation-play-state",
          "animation-timing-function",
          "animation-delay",
          "animation-iteration-count",
          "animation-direction",
          "animation-fill-mode",
        ],
      },
      {
        groupName: "Miscellaneous",
        emptyLineBefore: "always",
        noEmptyLineBetween: true,
        properties: [
          "appearance",
          "content",
          "clip",
          "clip-path",
          "counter-reset",
          "counter-increment",
          "resize",
          "user-select",
          "pointer-events",
          "quotes",
          "touch-action",
          "will-change",
          "zoom",
          "fill",
          "fill-rule",
          "clip-rule",
          "stroke",
        ],
      },
    ],
    "property-disallowed-list": [
      [
        "inset-inline-end",
        "inset-inline-start",
        "margin-block",
        "margin-inline",
        "padding-block",
        "padding-inline",
      ],
      {
        message:
          "Property disallowed due to insufficient browser support (there may be an equivalent Emotion utility function in @asl-19/emotion-utils)",
      },
    ],
    "rule-empty-line-before": null,
    // For the most part when using Emotion we don’t need class or id selectors at
    // all, and when we do we may not have control over their formatting (e.g.
    // with third-party markup).
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-max-empty-lines": 1,
    "value-keyword-case": null,
  },
};

module.exports = stylelintConfig;