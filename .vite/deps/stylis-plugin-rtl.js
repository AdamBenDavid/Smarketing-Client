import {
  COMMENT,
  DECLARATION,
  IMPORT,
  KEYFRAMES,
  MEDIA,
  RULESET,
  SUPPORTS,
  compile,
  serialize,
  strlen
} from "./chunk-J74KGKC5.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/cssjanus/src/cssjanus.js
var require_cssjanus = __commonJS({
  "node_modules/cssjanus/src/cssjanus.js"(exports, module) {
    var cssjanus2;
    function Tokenizer(regex, token) {
      var matches = [], index = 0;
      function tokenizeCallback(match) {
        matches.push(match);
        return token;
      }
      function detokenizeCallback() {
        return matches[index++];
      }
      return {
        /**
         * Replace matching strings with tokens.
         *
         * @param {string} str String to tokenize
         * @return {string} Tokenized string
         */
        tokenize: function(str) {
          return str.replace(regex, tokenizeCallback);
        },
        /**
         * Restores tokens to their original values.
         *
         * @param {string} str String previously run through tokenize()
         * @return {string} Original string
         */
        detokenize: function(str) {
          return str.replace(new RegExp("(" + token + ")", "g"), detokenizeCallback);
        }
      };
    }
    function CSSJanus() {
      var temporaryToken = "`TMP`", temporaryLtrToken = "`TMPLTR`", temporaryRtlToken = "`TMPRTL`", noFlipSingleToken = "`NOFLIP_SINGLE`", noFlipClassToken = "`NOFLIP_CLASS`", commentToken = "`COMMENT`", nonAsciiPattern = "[^\\u0020-\\u007e]", unicodePattern = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", numPattern = "(?:[0-9]*\\.[0-9]+|[0-9]+)", unitPattern = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", directionPattern = "direction\\s*:\\s*", urlSpecialCharsPattern = "[!#$%&*-~]", validAfterUriCharsPattern = `['"]?\\s*`, nonLetterPattern = "(^|[^a-zA-Z])", charsWithinSelectorPattern = "[^\\}]*?", noFlipPattern = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", commentPattern = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", escapePattern = "(?:" + unicodePattern + "|\\\\[^\\r\\n\\f0-9a-f])", nmstartPattern = "(?:[_a-z]|" + nonAsciiPattern + "|" + escapePattern + ")", nmcharPattern = "(?:[_a-z0-9-]|" + nonAsciiPattern + "|" + escapePattern + ")", identPattern = "-?" + nmstartPattern + nmcharPattern + "*", quantPattern = numPattern + "(?:\\s*" + unitPattern + "|" + identPattern + ")?", signedQuantPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto))", signedQuantSimplePattern = "(?:-?" + numPattern + "(?:\\s*" + unitPattern + ")?)", mathOperatorsPattern = "(?:\\+|\\-|\\*|\\/)", allowedCharsPattern = "(?:\\(|\\)|\\t| )", calcEquationPattern = "(?:" + allowedCharsPattern + "|" + signedQuantSimplePattern + "|" + mathOperatorsPattern + "){3,}", calcPattern = "(?:calc\\((?:" + calcEquationPattern + ")\\))", signedQuantCalcPattern = "((?:-?" + quantPattern + ")|(?:inherit|auto)|" + calcPattern + ")", fourNotationQuantPropsPattern = "((?:margin|padding|border-width)\\s*:\\s*)", fourNotationColorPropsPattern = "((?:-color|border-style)\\s*:\\s*)", colorPattern = "(#?" + nmcharPattern + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", urlCharsPattern = "(?:" + urlSpecialCharsPattern + "|" + nonAsciiPattern + "|" + escapePattern + ")*?", lookAheadNotLetterPattern = "(?![a-zA-Z])", lookAheadNotOpenBracePattern = "(?!(" + nmcharPattern + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + commentToken + ")*?{)", lookAheadNotClosingParenPattern = "(?!" + urlCharsPattern + validAfterUriCharsPattern + "\\))", lookAheadForClosingParenPattern = "(?=" + urlCharsPattern + validAfterUriCharsPattern + "\\))", suffixPattern = "(\\s*(?:!important\\s*)?[;}])", temporaryTokenRegExp = /`TMP`/g, temporaryLtrTokenRegExp = /`TMPLTR`/g, temporaryRtlTokenRegExp = /`TMPRTL`/g, commentRegExp = new RegExp(commentPattern, "gi"), noFlipSingleRegExp = new RegExp("(" + noFlipPattern + lookAheadNotOpenBracePattern + "[^;}]+;?)", "gi"), noFlipClassRegExp = new RegExp("(" + noFlipPattern + charsWithinSelectorPattern + "})", "gi"), directionLtrRegExp = new RegExp("(" + directionPattern + ")ltr", "gi"), directionRtlRegExp = new RegExp("(" + directionPattern + ")rtl", "gi"), leftRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), rightRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadNotLetterPattern + lookAheadNotClosingParenPattern + lookAheadNotOpenBracePattern, "gi"), leftInUrlRegExp = new RegExp(nonLetterPattern + "(left)" + lookAheadForClosingParenPattern, "gi"), rightInUrlRegExp = new RegExp(nonLetterPattern + "(right)" + lookAheadForClosingParenPattern, "gi"), ltrDirSelector = /(:dir\( *)ltr( *\))/g, rtlDirSelector = /(:dir\( *)rtl( *\))/g, ltrInUrlRegExp = new RegExp(nonLetterPattern + "(ltr)" + lookAheadForClosingParenPattern, "gi"), rtlInUrlRegExp = new RegExp(nonLetterPattern + "(rtl)" + lookAheadForClosingParenPattern, "gi"), cursorEastRegExp = new RegExp(nonLetterPattern + "([ns]?)e-resize", "gi"), cursorWestRegExp = new RegExp(nonLetterPattern + "([ns]?)w-resize", "gi"), fourNotationQuantRegExp = new RegExp(fourNotationQuantPropsPattern + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + "(\\s+)" + signedQuantCalcPattern + suffixPattern, "gi"), fourNotationColorRegExp = new RegExp(fourNotationColorPropsPattern + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + "(\\s+)" + colorPattern + suffixPattern, "gi"), bgHorizontalPercentageRegExp = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + quantPattern + ")", "gi"), bgHorizontalPercentageXRegExp = new RegExp("(background-position-x\\s*:\\s*)(-?" + numPattern + "%)", "gi"), borderRadiusRegExp = new RegExp("(border-radius\\s*:\\s*)" + signedQuantPattern + "(?:(?:\\s+" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?(?:(?:(?:\\s*\\/\\s*)" + signedQuantPattern + ")(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?(?:\\s+" + signedQuantPattern + ")?)?" + suffixPattern, "gi"), boxShadowRegExp = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + signedQuantPattern, "gi"), textShadow1RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern + "(\\s*)" + colorPattern, "gi"), textShadow2RegExp = new RegExp("(text-shadow\\s*:\\s*)" + colorPattern + "(\\s*)" + signedQuantPattern, "gi"), textShadow3RegExp = new RegExp("(text-shadow\\s*:\\s*)" + signedQuantPattern, "gi"), translateXRegExp = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + signedQuantPattern + "(\\s*\\))", "gi"), translateRegExp = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + signedQuantPattern + "((?:\\s*,\\s*" + signedQuantPattern + "){0,2}\\s*\\))", "gi");
      function calculateNewBackgroundPosition(match, pre, value) {
        var idx, len;
        if (value.slice(-1) === "%") {
          idx = value.indexOf(".");
          if (idx !== -1) {
            len = value.length - idx - 2;
            value = 100 - parseFloat(value);
            value = value.toFixed(len) + "%";
          } else {
            value = 100 - parseFloat(value) + "%";
          }
        }
        return pre + value;
      }
      function flipBorderRadiusValues(values) {
        switch (values.length) {
          case 4:
            values = [values[1], values[0], values[3], values[2]];
            break;
          case 3:
            values = [values[1], values[0], values[1], values[2]];
            break;
          case 2:
            values = [values[1], values[0]];
            break;
          case 1:
            values = [values[0]];
            break;
        }
        return values.join(" ");
      }
      function calculateNewBorderRadius(match, pre) {
        var values, args = [].slice.call(arguments), firstGroup = args.slice(2, 6).filter(function(val) {
          return val;
        }), secondGroup = args.slice(6, 10).filter(function(val) {
          return val;
        }), post = args[10] || "";
        if (secondGroup.length) {
          values = flipBorderRadiusValues(firstGroup) + " / " + flipBorderRadiusValues(secondGroup);
        } else {
          values = flipBorderRadiusValues(firstGroup);
        }
        return pre + values + post;
      }
      function flipSign(value) {
        if (parseFloat(value) === 0) {
          return value;
        }
        if (value[0] === "-") {
          return value.slice(1);
        }
        return "-" + value;
      }
      function calculateNewShadow(match, property, offset) {
        return property + flipSign(offset);
      }
      function calculateNewTranslate(match, property, prefix, offset, suffix) {
        return property + prefix + flipSign(offset) + suffix;
      }
      function calculateNewFourTextShadow(match, property, color, space, offset) {
        return property + color + space + flipSign(offset);
      }
      return {
        /**
         * Transform a left-to-right stylesheet to right-to-left.
         *
         * @param {string} css Stylesheet to transform
         * @param {Object} options Options
         * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
         * (e.g. 'ltr', 'rtl')
         * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
         * (e.g. 'left', 'right')
         * @return {string} Transformed stylesheet
         */
        "transform": function(css, options) {
          var noFlipSingleTokenizer = new Tokenizer(noFlipSingleRegExp, noFlipSingleToken), noFlipClassTokenizer = new Tokenizer(noFlipClassRegExp, noFlipClassToken), commentTokenizer = new Tokenizer(commentRegExp, commentToken);
          css = commentTokenizer.tokenize(
            noFlipClassTokenizer.tokenize(
              noFlipSingleTokenizer.tokenize(
                // We wrap tokens in ` , not ~ like the original implementation does.
                // This was done because ` is not a legal character in CSS and can only
                // occur in URLs, where we escape it to %60 before inserting our tokens.
                css.replace("`", "%60")
              )
            )
          );
          if (options.transformDirInUrl) {
            css = css.replace(ltrDirSelector, "$1" + temporaryLtrToken + "$2").replace(rtlDirSelector, "$1" + temporaryRtlToken + "$2").replace(ltrInUrlRegExp, "$1" + temporaryToken).replace(rtlInUrlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(temporaryLtrTokenRegExp, "ltr").replace(temporaryRtlTokenRegExp, "rtl");
          }
          if (options.transformEdgeInUrl) {
            css = css.replace(leftInUrlRegExp, "$1" + temporaryToken).replace(rightInUrlRegExp, "$1left").replace(temporaryTokenRegExp, "right");
          }
          css = css.replace(directionLtrRegExp, "$1" + temporaryToken).replace(directionRtlRegExp, "$1ltr").replace(temporaryTokenRegExp, "rtl").replace(leftRegExp, "$1" + temporaryToken).replace(rightRegExp, "$1left").replace(temporaryTokenRegExp, "right").replace(cursorEastRegExp, "$1$2" + temporaryToken).replace(cursorWestRegExp, "$1$2e-resize").replace(temporaryTokenRegExp, "w-resize").replace(borderRadiusRegExp, calculateNewBorderRadius).replace(boxShadowRegExp, calculateNewShadow).replace(textShadow1RegExp, calculateNewFourTextShadow).replace(textShadow2RegExp, calculateNewFourTextShadow).replace(textShadow3RegExp, calculateNewShadow).replace(translateXRegExp, calculateNewTranslate).replace(translateRegExp, calculateNewTranslate).replace(fourNotationQuantRegExp, "$1$2$3$8$5$6$7$4$9").replace(fourNotationColorRegExp, "$1$2$3$8$5$6$7$4$9").replace(bgHorizontalPercentageRegExp, calculateNewBackgroundPosition).replace(bgHorizontalPercentageXRegExp, calculateNewBackgroundPosition);
          css = noFlipSingleTokenizer.detokenize(
            noFlipClassTokenizer.detokenize(
              commentTokenizer.detokenize(css)
            )
          );
          return css;
        }
      };
    }
    cssjanus2 = new CSSJanus();
    if (typeof module !== "undefined" && module.exports) {
      exports.transform = function(css, options, transformEdgeInUrl) {
        var norm;
        if (typeof options === "object") {
          norm = options;
        } else {
          norm = {};
          if (typeof options === "boolean") {
            norm.transformDirInUrl = options;
          }
          if (typeof transformEdgeInUrl === "boolean") {
            norm.transformEdgeInUrl = transformEdgeInUrl;
          }
        }
        return cssjanus2.transform(css, norm);
      };
    } else if (typeof window !== "undefined") {
      window["cssjanus"] = cssjanus2;
    }
  }
});

// node_modules/stylis-plugin-rtl/dist/stylis-rtl.js
var import_cssjanus = __toESM(require_cssjanus());
function stringifyPreserveComments(element, index, children) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
    case COMMENT:
      return element.return = element.return || element.value;
    case RULESET: {
      element.value = Array.isArray(element.props) ? element.props.join(",") : element.props;
      if (Array.isArray(element.children)) {
        element.children.forEach(function(x) {
          if (x.type === COMMENT)
            x.children = x.value;
        });
      }
    }
  }
  var serializedChildren = serialize(Array.prototype.concat(element.children), stringifyPreserveComments);
  return strlen(serializedChildren) ? element.return = element.value + "{" + serializedChildren + "}" : "";
}
function stylisRTLPlugin(element, index, children, callback) {
  if (element.type === KEYFRAMES || element.type === SUPPORTS || element.type === RULESET && (!element.parent || element.parent.type === MEDIA || element.parent.type === RULESET)) {
    var stringified = import_cssjanus.default.transform(stringifyPreserveComments(element, index, children));
    element.children = stringified ? compile(stringified)[0].children : [];
    element.return = "";
  }
}
Object.defineProperty(stylisRTLPlugin, "name", { value: "stylisRTLPlugin" });
var stylis_rtl_default = stylisRTLPlugin;
export {
  stylis_rtl_default as default
};
/*! Bundled license information:

cssjanus/src/cssjanus.js:
  (*!
   * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
   *
   * Copyright 2014 Trevor Parscal
   * Copyright 2010 Roan Kattouw
   * Copyright 2008 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=stylis-plugin-rtl.js.map
