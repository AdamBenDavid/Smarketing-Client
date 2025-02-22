import {
  B,
  C,
  cn,
  j,
  require_baseEach,
  require_baseIteratee,
  require_uniqBy,
  z
} from "./chunk-5EXQJOLE.js";
import {
  Cn,
  Fr,
  H,
  Ht,
  In,
  It,
  Jt,
  Kt,
  O,
  Ot,
  Qt,
  Rn,
  Sn,
  St,
  Ur,
  Wn,
  Xe,
  animated,
  diverging_default,
  gn,
  jn,
  k,
  pr,
  require_Stack,
  require_Symbol,
  require_arrayFilter,
  require_arrayMap,
  require_arrayPush,
  require_assignValue,
  require_baseGet,
  require_baseGetAllKeys,
  require_baseGetTag,
  require_baseUnary,
  require_castPath,
  require_cloneArrayBuffer,
  require_cloneBuffer,
  require_cloneTypedArray,
  require_copyArray,
  require_copyObject,
  require_flatRest,
  require_getAllKeys,
  require_getPrototype,
  require_getSymbols,
  require_getTag,
  require_initCloneObject,
  require_isArray,
  require_isBuffer,
  require_isObject,
  require_isObjectLike,
  require_isPlainObject,
  require_keys,
  require_keysIn,
  require_last,
  require_nodeUtil,
  require_stubArray,
  require_toKey,
  stack_default,
  to,
  useSpring,
  useTransition,
  w,
  wt,
  zt
} from "./chunk-AMKCINI5.js";
import "./chunk-UP6LQVYV.js";
import "./chunk-R2LMYVXF.js";
import {
  require_jsx_runtime
} from "./chunk-RZSASJON.js";
import "./chunk-Q6DFBYTI.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/lodash/_baseFilter.js
var require_baseFilter = __commonJS({
  "node_modules/lodash/_baseFilter.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection2) {
        if (predicate(value, index, collection2)) {
          result.push(value);
        }
      });
      return result;
    }
    module.exports = baseFilter;
  }
});

// node_modules/lodash/filter.js
var require_filter = __commonJS({
  "node_modules/lodash/filter.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var baseFilter = require_baseFilter();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = filter;
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol = require_Symbol();
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }
    module.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module) {
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }
    module.exports = baseUnset;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module) {
    var isPlainObject = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject(value) ? void 0 : value;
    }
    module.exports = customOmitClone;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });
    module.exports = omit;
  }
});

// node_modules/@nivo/bar/dist/nivo-bar.es.js
var import_react2 = __toESM(require_react());

// node_modules/@nivo/annotations/dist/nivo-annotations.es.js
var import_react = __toESM(require_react());
var import_filter = __toESM(require_filter());
var import_isNumber = __toESM(require_isNumber());
var import_omit = __toESM(require_omit());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function g() {
  return g = Object.assign ? Object.assign.bind() : function(t2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var i2 = arguments[n2];
      for (var o2 in i2) Object.prototype.hasOwnProperty.call(i2, o2) && (t2[o2] = i2[o2]);
    }
    return t2;
  }, g.apply(this, arguments);
}
var k2 = { dotSize: 4, noteWidth: 120, noteTextOffset: 8, animate: true };
var W = function(n2) {
  var i2 = typeof n2;
  return (0, import_react.isValidElement)(n2) || "string" === i2 || "function" === i2 || "object" === i2;
};
var v = function(t2) {
  var n2 = typeof t2;
  return "string" === n2 || "function" === n2;
};
var b = function(t2) {
  return "circle" === t2.type;
};
var w2 = function(t2) {
  return "dot" === t2.type;
};
var z2 = function(t2) {
  return "rect" === t2.type;
};
var P = function(t2) {
  var n2 = t2.data, i2 = t2.annotations, e3 = t2.getPosition, r = t2.getDimensions;
  return i2.reduce(function(t3, i3) {
    var s = i3.offset || 0;
    return [].concat(t3, (0, import_filter.default)(n2, i3.match).map(function(t4) {
      var n3 = e3(t4), o2 = r(t4);
      return (b(i3) || z2(i3)) && (o2.size = o2.size + 2 * s, o2.width = o2.width + 2 * s, o2.height = o2.height + 2 * s), g({}, (0, import_omit.default)(i3, ["match", "offset"]), n3, o2, { size: i3.size || o2.size, datum: t4 });
    }));
  }, []);
};
var C2 = function(t2, n2, i2, o2) {
  var e3 = Math.atan2(o2 - n2, i2 - t2);
  return Qt(Kt(e3));
};
var O2 = function(t2) {
  var n2, i2, o2 = t2.x, a2 = t2.y, r = t2.noteX, s = t2.noteY, h = t2.noteWidth, d = void 0 === h ? k2.noteWidth : h, c = t2.noteTextOffset, f = void 0 === c ? k2.noteTextOffset : c;
  if ((0, import_isNumber.default)(r)) n2 = o2 + r;
  else {
    if (void 0 === r.abs) throw new Error("noteX should be either a number or an object containing an 'abs' property");
    n2 = r.abs;
  }
  if ((0, import_isNumber.default)(s)) i2 = a2 + s;
  else {
    if (void 0 === s.abs) throw new Error("noteY should be either a number or an object containing an 'abs' property");
    i2 = s.abs;
  }
  var y2 = o2, x2 = a2, m2 = C2(o2, a2, n2, i2);
  if (b(t2)) {
    var p2 = Jt(Ht(m2), t2.size / 2);
    y2 += p2.x, x2 += p2.y;
  }
  if (z2(t2)) {
    var g2 = Math.round((m2 + 90) / 45) % 8;
    0 === g2 && (x2 -= t2.height / 2), 1 === g2 && (y2 += t2.width / 2, x2 -= t2.height / 2), 2 === g2 && (y2 += t2.width / 2), 3 === g2 && (y2 += t2.width / 2, x2 += t2.height / 2), 4 === g2 && (x2 += t2.height / 2), 5 === g2 && (y2 -= t2.width / 2, x2 += t2.height / 2), 6 === g2 && (y2 -= t2.width / 2), 7 === g2 && (y2 -= t2.width / 2, x2 -= t2.height / 2);
  }
  var W2 = n2, v2 = n2;
  return (m2 + 90) % 360 > 180 ? (W2 -= d, v2 -= d) : v2 += d, { points: [[y2, x2], [n2, i2], [v2, i2]], text: [W2, i2 - f], angle: m2 + 90 };
};
var S = function(t2) {
  var i2 = t2.data, o2 = t2.annotations, e3 = t2.getPosition, a2 = t2.getDimensions;
  return (0, import_react.useMemo)(function() {
    return P({ data: i2, annotations: o2, getPosition: e3, getDimensions: a2 });
  }, [i2, o2, e3, a2]);
};
var j2 = function(t2) {
  var i2 = t2.annotations;
  return (0, import_react.useMemo)(function() {
    return i2.map(function(t3) {
      return g({}, t3, { computed: O2(g({}, t3)) });
    });
  }, [i2]);
};
var M = function(t2) {
  return (0, import_react.useMemo)(function() {
    return O2(t2);
  }, [t2]);
};
var T = function(t2) {
  var n2 = t2.datum, o2 = t2.x, e3 = t2.y, r = t2.note, s = zt(), l = Ur(), u = l.animate, c = l.config, k4 = useSpring({ x: o2, y: e3, config: c, immediate: !u });
  return "function" == typeof r ? (0, import_react.createElement)(r, { x: o2, y: e3, datum: n2 }) : (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s.annotations.text.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.text, { x: k4.x, y: k4.y, style: g({}, s.annotations.text, { strokeLinejoin: "round", strokeWidth: 2 * s.annotations.text.outlineWidth, stroke: s.annotations.text.outlineColor }), children: r }), (0, import_jsx_runtime.jsx)(animated.text, { x: k4.x, y: k4.y, style: (0, import_omit.default)(s.annotations.text, ["outlineWidth", "outlineColor"]), children: r })] });
};
var E = function(t2) {
  var i2 = t2.points, o2 = t2.isOutline, e3 = void 0 !== o2 && o2, a2 = zt(), r = (0, import_react.useMemo)(function() {
    var t3 = i2[0];
    return i2.slice(1).reduce(function(t4, n2) {
      return t4 + " L" + n2[0] + "," + n2[1];
    }, "M" + t3[0] + "," + t3[1]);
  }, [i2]), s = Fr(r);
  if (e3 && a2.annotations.link.outlineWidth <= 0) return null;
  var l = g({}, a2.annotations.link);
  return e3 && (l.strokeLinecap = "square", l.strokeWidth = a2.annotations.link.strokeWidth + 2 * a2.annotations.link.outlineWidth, l.stroke = a2.annotations.link.outlineColor, l.opacity = a2.annotations.link.outlineOpacity), (0, import_jsx_runtime.jsx)(animated.path, { fill: "none", d: s, style: l });
};
var I = function(t2) {
  var n2 = t2.x, i2 = t2.y, o2 = t2.size, e3 = zt(), a2 = Ur(), r = a2.animate, s = a2.config, l = useSpring({ x: n2, y: i2, radius: o2 / 2, config: s, immediate: !r });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [e3.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.circle, { cx: l.x, cy: l.y, r: l.radius, style: g({}, e3.annotations.outline, { fill: "none", strokeWidth: e3.annotations.outline.strokeWidth + 2 * e3.annotations.outline.outlineWidth, stroke: e3.annotations.outline.outlineColor, opacity: e3.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.circle, { cx: l.x, cy: l.y, r: l.radius, style: e3.annotations.outline })] });
};
var D = function(t2) {
  var n2 = t2.x, i2 = t2.y, o2 = t2.size, e3 = void 0 === o2 ? k2.dotSize : o2, a2 = zt(), r = Ur(), s = r.animate, l = r.config, u = useSpring({ x: n2, y: i2, radius: e3 / 2, config: l, immediate: !s });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [a2.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.circle, { cx: u.x, cy: u.y, r: u.radius, style: g({}, a2.annotations.outline, { fill: "none", strokeWidth: 2 * a2.annotations.outline.outlineWidth, stroke: a2.annotations.outline.outlineColor, opacity: a2.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.circle, { cx: u.x, cy: u.y, r: u.radius, style: a2.annotations.symbol })] });
};
var L = function(t2) {
  var n2 = t2.x, i2 = t2.y, o2 = t2.width, e3 = t2.height, a2 = t2.borderRadius, r = void 0 === a2 ? 6 : a2, s = zt(), l = Ur(), u = l.animate, c = l.config, k4 = useSpring({ x: n2 - o2 / 2, y: i2 - e3 / 2, width: o2, height: e3, config: c, immediate: !u });
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s.annotations.outline.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.rect, { x: k4.x, y: k4.y, rx: r, ry: r, width: k4.width, height: k4.height, style: g({}, s.annotations.outline, { fill: "none", strokeWidth: s.annotations.outline.strokeWidth + 2 * s.annotations.outline.outlineWidth, stroke: s.annotations.outline.outlineColor, opacity: s.annotations.outline.outlineOpacity }) }), (0, import_jsx_runtime.jsx)(animated.rect, { x: k4.x, y: k4.y, rx: r, ry: r, width: k4.width, height: k4.height, style: s.annotations.outline })] });
};
var R = function(t2) {
  var n2 = t2.datum, i2 = t2.x, o2 = t2.y, e3 = t2.note, a2 = M(t2);
  if (!W(e3)) throw new Error("note should be a valid react element");
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)(E, { points: a2.points, isOutline: true }), b(t2) && (0, import_jsx_runtime.jsx)(I, { x: i2, y: o2, size: t2.size }), w2(t2) && (0, import_jsx_runtime.jsx)(D, { x: i2, y: o2, size: t2.size }), z2(t2) && (0, import_jsx_runtime.jsx)(L, { x: i2, y: o2, width: t2.width, height: t2.height, borderRadius: t2.borderRadius }), (0, import_jsx_runtime.jsx)(E, { points: a2.points }), (0, import_jsx_runtime.jsx)(T, { datum: n2, x: a2.text[0], y: a2.text[1], note: e3 })] });
};
var q = function(t2, n2) {
  n2.forEach(function(n3, i2) {
    var o2 = n3[0], e3 = n3[1];
    0 === i2 ? t2.moveTo(o2, e3) : t2.lineTo(o2, e3);
  });
};
var J = function(t2, n2) {
  var i2 = n2.annotations, o2 = n2.theme;
  0 !== i2.length && (t2.save(), i2.forEach(function(n3) {
    if (!v(n3.note)) throw new Error("note is invalid for canvas implementation");
    o2.annotations.link.outlineWidth > 0 && (t2.lineCap = "square", t2.strokeStyle = o2.annotations.link.outlineColor, t2.lineWidth = o2.annotations.link.strokeWidth + 2 * o2.annotations.link.outlineWidth, t2.beginPath(), q(t2, n3.computed.points), t2.stroke(), t2.lineCap = "butt"), b(n3) && o2.annotations.outline.outlineWidth > 0 && (t2.strokeStyle = o2.annotations.outline.outlineColor, t2.lineWidth = o2.annotations.outline.strokeWidth + 2 * o2.annotations.outline.outlineWidth, t2.beginPath(), t2.arc(n3.x, n3.y, n3.size / 2, 0, 2 * Math.PI), t2.stroke()), w2(n3) && o2.annotations.symbol.outlineWidth > 0 && (t2.strokeStyle = o2.annotations.symbol.outlineColor, t2.lineWidth = 2 * o2.annotations.symbol.outlineWidth, t2.beginPath(), t2.arc(n3.x, n3.y, n3.size / 2, 0, 2 * Math.PI), t2.stroke()), z2(n3) && o2.annotations.outline.outlineWidth > 0 && (t2.strokeStyle = o2.annotations.outline.outlineColor, t2.lineWidth = o2.annotations.outline.strokeWidth + 2 * o2.annotations.outline.outlineWidth, t2.beginPath(), t2.rect(n3.x - n3.width / 2, n3.y - n3.height / 2, n3.width, n3.height), t2.stroke()), t2.strokeStyle = o2.annotations.link.stroke, t2.lineWidth = o2.annotations.link.strokeWidth, t2.beginPath(), q(t2, n3.computed.points), t2.stroke(), b(n3) && (t2.strokeStyle = o2.annotations.outline.stroke, t2.lineWidth = o2.annotations.outline.strokeWidth, t2.beginPath(), t2.arc(n3.x, n3.y, n3.size / 2, 0, 2 * Math.PI), t2.stroke()), w2(n3) && (t2.fillStyle = o2.annotations.symbol.fill, t2.beginPath(), t2.arc(n3.x, n3.y, n3.size / 2, 0, 2 * Math.PI), t2.fill()), z2(n3) && (t2.strokeStyle = o2.annotations.outline.stroke, t2.lineWidth = o2.annotations.outline.strokeWidth, t2.beginPath(), t2.rect(n3.x - n3.width / 2, n3.y - n3.height / 2, n3.width, n3.height), t2.stroke()), "function" == typeof n3.note ? n3.note(t2, { datum: n3.datum, x: n3.computed.text[0], y: n3.computed.text[1], theme: o2 }) : (t2.font = o2.annotations.text.fontSize + "px " + o2.annotations.text.fontFamily, t2.textAlign = "left", t2.textBaseline = "alphabetic", t2.fillStyle = o2.annotations.text.fill, t2.strokeStyle = o2.annotations.text.outlineColor, t2.lineWidth = 2 * o2.annotations.text.outlineWidth, o2.annotations.text.outlineWidth > 0 && (t2.lineJoin = "round", t2.strokeText(n3.note, n3.computed.text[0], n3.computed.text[1]), t2.lineJoin = "miter"), t2.fillText(n3.note, n3.computed.text[0], n3.computed.text[1]));
  }), t2.restore());
};

// node_modules/@nivo/bar/dist/nivo-bar.es.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_uniqBy = __toESM(require_uniqBy());
function j3() {
  return j3 = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var a2 = arguments[t2];
      for (var i2 in a2) Object.prototype.hasOwnProperty.call(a2, i2) && (e3[i2] = a2[i2]);
    }
    return e3;
  }, j3.apply(this, arguments);
}
function q2(e3, t2) {
  if (null == e3) return {};
  var a2, i2, n2 = {}, l = Object.keys(e3);
  for (i2 = 0; i2 < l.length; i2++) a2 = l[i2], t2.indexOf(a2) >= 0 || (n2[a2] = e3[a2]);
  return n2;
}
var K;
var _ = function(e3) {
  var t2 = e3.bars, a2 = e3.annotations, i2 = S({ data: t2, annotations: a2, getPosition: function(e4) {
    return { x: e4.x + e4.width / 2, y: e4.y + e4.height / 2 };
  }, getDimensions: function(e4) {
    var t3 = e4.height, a3 = e4.width;
    return { width: a3, height: t3, size: Math.max(a3, t3) };
  } });
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: i2.map(function(e4, t3) {
    return (0, import_jsx_runtime2.jsx)(R, j3({}, e4), t3);
  }) });
};
var J2 = function(e3) {
  var t2 = e3.width, a2 = e3.height, i2 = e3.legends, n2 = e3.toggleSerie;
  return (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: i2.map(function(e4, i3) {
    var l, r = e4[0], o2 = e4[1];
    return (0, import_jsx_runtime2.jsx)(O, j3({}, r, { containerWidth: t2, containerHeight: a2, data: null != (l = r.data) ? l : o2, toggleSerie: r.toggleSerie && "keys" === r.dataFrom ? n2 : void 0 }), i3);
  }) });
};
var Q = ["data"];
var U = function(e3) {
  var t2, a2 = e3.bar, i2 = a2.data, l = q2(a2, Q), r = e3.style, o2 = r.borderColor, d = r.color, u = r.height, c = r.labelColor, s = r.labelOpacity, h = r.labelX, f = r.labelY, b2 = r.transform, v2 = r.width, g2 = r.textAnchor, x2 = e3.borderRadius, w4 = e3.borderWidth, L3 = e3.label, C4 = e3.shouldRenderLabel, V2 = e3.isInteractive, M3 = e3.onClick, W2 = e3.onMouseEnter, T2 = e3.onMouseLeave, B2 = e3.tooltip, O3 = e3.isFocusable, P3 = e3.ariaLabel, H2 = e3.ariaLabelledBy, R2 = e3.ariaDescribedBy, F = e3.ariaDisabled, D2 = e3.ariaHidden, X = zt(), Y = k(), G = Y.showTooltipFromEvent, z3 = Y.showTooltipAt, N2 = Y.hideTooltip, K2 = (0, import_react2.useMemo)(function() {
    return function() {
      return (0, import_react2.createElement)(B2, j3({}, l, i2));
    };
  }, [B2, l, i2]), _2 = (0, import_react2.useCallback)(function(e4) {
    null == M3 || M3(j3({ color: l.color }, i2), e4);
  }, [l, i2, M3]), J3 = (0, import_react2.useCallback)(function(e4) {
    return G(K2(), e4);
  }, [G, K2]), U2 = (0, import_react2.useCallback)(function(e4) {
    null == W2 || W2(i2, e4), G(K2(), e4);
  }, [i2, W2, G, K2]), Z2 = (0, import_react2.useCallback)(function(e4) {
    null == T2 || T2(i2, e4), N2();
  }, [i2, N2, T2]), $2 = (0, import_react2.useCallback)(function() {
    z3(K2(), [l.absX + l.width / 2, l.absY]);
  }, [z3, K2, l]), ee2 = (0, import_react2.useCallback)(function() {
    N2();
  }, [N2]);
  return (0, import_jsx_runtime2.jsxs)(animated.g, { transform: b2, children: [(0, import_jsx_runtime2.jsx)(animated.rect, { width: to(v2, function(e4) {
    return Math.max(e4, 0);
  }), height: to(u, function(e4) {
    return Math.max(e4, 0);
  }), rx: x2, ry: x2, fill: null != (t2 = i2.fill) ? t2 : d, strokeWidth: w4, stroke: o2, focusable: O3, tabIndex: O3 ? 0 : void 0, "aria-label": P3 ? P3(i2) : void 0, "aria-labelledby": H2 ? H2(i2) : void 0, "aria-describedby": R2 ? R2(i2) : void 0, "aria-disabled": F ? F(i2) : void 0, "aria-hidden": D2 ? D2(i2) : void 0, onMouseEnter: V2 ? U2 : void 0, onMouseMove: V2 ? J3 : void 0, onMouseLeave: V2 ? Z2 : void 0, onClick: V2 ? _2 : void 0, onFocus: V2 && O3 ? $2 : void 0, onBlur: V2 && O3 ? ee2 : void 0 }), C4 && (0, import_jsx_runtime2.jsx)(animated.text, { x: h, y: f, textAnchor: g2, dominantBaseline: "central", fillOpacity: s, style: j3({}, X.labels.text, { pointerEvents: "none", fill: c }), children: L3 })] });
};
var Z = ["color", "label"];
var $ = function(e3) {
  var t2 = e3.color, a2 = e3.label, i2 = q2(e3, Z);
  return (0, import_jsx_runtime2.jsx)(w, { id: a2, value: i2.formattedValue, enableChip: true, color: t2 });
};
var ee = { indexBy: "id", keys: ["value"], groupMode: "stacked", layout: "vertical", reverse: false, minValue: "auto", maxValue: "auto", valueScale: { type: "linear" }, indexScale: { type: "band", round: true }, padding: 0.1, innerPadding: 0, axisBottom: {}, axisLeft: {}, enableGridX: false, enableGridY: true, enableLabel: true, label: "formattedValue", labelPosition: "middle", labelOffset: 0, labelSkipWidth: 0, labelSkipHeight: 0, labelTextColor: { from: "theme", theme: "labels.text.fill" }, colorBy: "id", colors: { scheme: "nivo" }, borderRadius: 0, borderWidth: 0, borderColor: { from: "color" }, isInteractive: true, tooltip: $, tooltipLabel: function(e3) {
  return e3.id + " - " + e3.indexValue;
}, legends: [], initialHiddenIds: [], annotations: [], markers: [], enableTotals: false, totalsOffset: 10 };
var te = j3({}, ee, { layers: ["grid", "axes", "bars", "totals", "markers", "legends", "annotations"], barComponent: U, defs: [], fill: [], animate: true, motionConfig: "default", role: "img", isFocusable: false });
var ae = j3({}, ee, { layers: ["grid", "axes", "bars", "totals", "legends", "annotations"], pixelRatio: "undefined" != typeof window && null != (K = window.devicePixelRatio) ? K : 1 });
var ie = function(e3, t2, a2, i2, n2, l) {
  return cn(i2, { all: e3.map(t2), min: 0, max: 0 }, n2, l).padding(a2);
};
var ne = function(e3, t2) {
  return e3.map(function(e4) {
    return j3({}, t2.reduce(function(e5, t3) {
      return e5[t3] = null, e5;
    }, {}), e4);
  });
};
var le = function(e3) {
  return Object.keys(e3).reduce(function(t2, a2) {
    return e3[a2] && (t2[a2] = e3[a2]), t2;
  }, {});
};
var re = function(e3) {
  return [e3, Number(e3)];
};
function oe(e3, t2, a2, i2) {
  return void 0 === e3 && (e3 = ee.layout), void 0 === t2 && (t2 = ee.reverse), void 0 === a2 && (a2 = ee.labelPosition), void 0 === i2 && (i2 = ee.labelOffset), function(n2, l) {
    var r = i2 * (t2 ? -1 : 1);
    if ("horizontal" === e3) {
      var o2 = n2 / 2;
      return "start" === a2 ? o2 = t2 ? n2 : 0 : "end" === a2 && (o2 = t2 ? 0 : n2), { labelX: o2 + r, labelY: l / 2, textAnchor: "middle" === a2 ? "middle" : t2 ? "end" : "start" };
    }
    var d = l / 2;
    return "start" === a2 ? d = t2 ? 0 : l : "end" === a2 && (d = t2 ? l : 0), { labelX: n2 / 2, labelY: d - r, textAnchor: "middle" };
  };
}
var de = ["layout", "minValue", "maxValue", "reverse", "width", "height", "padding", "innerPadding", "valueScale", "indexScale", "hiddenIds"];
var ue = function(e3, t2) {
  return e3 > t2;
};
var ce = function(e3, t2) {
  return e3 < t2;
};
var se = function(e3, t2) {
  return Array.from(" ".repeat(t2 - e3), function(t3, a2) {
    return e3 + a2;
  });
};
var he = function(e3) {
  return ue(e3, 0) ? 0 : e3;
};
var fe = function(e3, t2, a2, i2) {
  var n2 = e3.data, l = e3.formatValue, r = e3.getColor, o2 = e3.getIndex, d = e3.getTooltipLabel, u = e3.innerPadding, c = void 0 === u ? 0 : u, s = e3.keys, h = e3.xScale, f = e3.yScale, b2 = e3.margin, v2 = a2 ? ce : ue, g2 = n2.map(le), m2 = [];
  return s.forEach(function(e4, a3) {
    return se(0, h.domain().length).forEach(function(u2) {
      var s2, p2, x2, y2 = re(n2[u2][e4]), S3 = y2[0], k4 = y2[1], w4 = o2(n2[u2]), L3 = (null != (s2 = h(w4)) ? s2 : 0) + t2 * a3 + c * a3, C4 = v2(p2 = k4, 0) ? null != (x2 = f(p2)) ? x2 : 0 : i2, V2 = function(e5, t3) {
        var a4;
        return v2(e5, 0) ? i2 - t3 : (null != (a4 = f(e5)) ? a4 : 0) - i2;
      }(k4, C4), M3 = { id: e4, value: null === S3 ? S3 : k4, formattedValue: l(k4), hidden: false, index: u2, indexValue: w4, data: g2[u2] };
      m2.push({ key: e4 + "." + M3.indexValue, index: m2.length, data: M3, x: L3, y: C4, absX: b2.left + L3, absY: b2.top + C4, width: t2, height: V2, color: r(M3), label: d(M3) });
    });
  }), m2;
};
var be = function(e3, t2, a2, i2) {
  var n2 = e3.data, l = e3.formatValue, r = e3.getIndex, o2 = e3.getColor, d = e3.getTooltipLabel, u = e3.keys, c = e3.innerPadding, s = void 0 === c ? 0 : c, h = e3.xScale, f = e3.yScale, b2 = e3.margin, v2 = a2 ? ce : ue, g2 = n2.map(le), m2 = [];
  return u.forEach(function(e4, a3) {
    return se(0, f.domain().length).forEach(function(u2) {
      var c2, p2, x2, y2 = re(n2[u2][e4]), S3 = y2[0], k4 = y2[1], w4 = r(n2[u2]), L3 = v2(p2 = k4, 0) ? i2 : null != (x2 = h(p2)) ? x2 : 0, C4 = (null != (c2 = f(w4)) ? c2 : 0) + t2 * a3 + s * a3, V2 = function(e5, t3) {
        var a4;
        return v2(e5, 0) ? (null != (a4 = h(e5)) ? a4 : 0) - i2 : i2 - t3;
      }(k4, L3), M3 = { id: e4, value: null === S3 ? S3 : k4, formattedValue: l(k4), hidden: false, index: u2, indexValue: w4, data: g2[u2] };
      m2.push({ key: e4 + "." + M3.indexValue, index: m2.length, data: M3, x: L3, y: C4, absX: b2.left + L3, absY: b2.top + C4, width: V2, height: t2, color: o2(M3), label: d(M3) });
    });
  }), m2;
};
var ve = function(e3) {
  var t2, a2, i2 = e3.layout, n2 = e3.minValue, l = e3.maxValue, r = e3.reverse, o2 = e3.width, d = e3.height, u = e3.padding, c = void 0 === u ? 0 : u, s = e3.innerPadding, h = void 0 === s ? 0 : s, f = e3.valueScale, b2 = e3.indexScale, v2 = e3.hiddenIds, g2 = void 0 === v2 ? [] : v2, m2 = q2(e3, de), p2 = m2.keys.filter(function(e4) {
    return !g2.includes(e4);
  }), x2 = ne(m2.data, p2), y2 = "vertical" === i2 ? ["y", "x", o2] : ["x", "y", d], S3 = y2[0], k4 = y2[1], w4 = y2[2], L3 = ie(x2, m2.getIndex, c, b2, w4, k4), C4 = j3({ max: l, min: n2, reverse: r }, f), V2 = "auto" === C4.min ? he : function(e4) {
    return e4;
  }, M3 = x2.reduce(function(e4, t3) {
    return [].concat(e4, p2.map(function(e5) {
      return t3[e5];
    }));
  }, []).filter(Boolean), W2 = V2(Math.min.apply(Math, M3)), T2 = (a2 = Math.max.apply(Math, M3), isFinite(a2) ? a2 : 0), B2 = cn(C4, { all: M3, min: W2, max: T2 }, "x" === S3 ? o2 : d, S3), O3 = "vertical" === i2 ? [L3, B2] : [B2, L3], I3 = O3[0], P3 = O3[1], E3 = (L3.bandwidth() - h * (p2.length - 1)) / p2.length, H2 = [j3({}, m2, { data: x2, keys: p2, innerPadding: h, xScale: I3, yScale: P3 }), E3, C4.reverse, null != (t2 = B2(0)) ? t2 : 0];
  return { xScale: I3, yScale: P3, bars: E3 > 0 ? "vertical" === i2 ? fe.apply(void 0, H2) : be.apply(void 0, H2) : [] };
};
var ge = ["data", "layout", "minValue", "maxValue", "reverse", "width", "height", "padding", "valueScale", "indexScale", "hiddenIds"];
var me = function e2(t2) {
  var a2;
  return t2.some(Array.isArray) ? e2((a2 = []).concat.apply(a2, t2)) : t2;
};
var pe = function(e3, t2, a2) {
  var i2 = e3.formatValue, n2 = e3.getColor, l = e3.getIndex, r = e3.getTooltipLabel, o2 = e3.innerPadding, d = e3.stackedData, u = e3.xScale, c = e3.yScale, s = e3.margin, h = [];
  return d.forEach(function(e4) {
    return u.domain().forEach(function(d2, f) {
      var b2, v2, g2 = e4[f], m2 = null != (b2 = u(l(g2.data))) ? b2 : 0, p2 = (null != (v2 = function(e5) {
        return c(e5[a2 ? 0 : 1]);
      }(g2)) ? v2 : 0) + 0.5 * o2, x2 = function(e5, t3) {
        var i3;
        return (null != (i3 = c(e5[a2 ? 1 : 0])) ? i3 : 0) - t3;
      }(g2, p2) - o2, y2 = re(g2.data[e4.key]), S3 = y2[0], k4 = y2[1], w4 = { id: e4.key, value: null === S3 ? S3 : k4, formattedValue: i2(k4), hidden: false, index: f, indexValue: d2, data: le(g2.data) };
      h.push({ key: e4.key + "." + d2, index: h.length, data: w4, x: m2, y: p2, absX: s.left + m2, absY: s.top + p2, width: t2, height: x2, color: n2(w4), label: r(w4) });
    });
  }), h;
};
var xe = function(e3, t2, a2) {
  var i2 = e3.formatValue, n2 = e3.getColor, l = e3.getIndex, r = e3.getTooltipLabel, o2 = e3.innerPadding, d = e3.stackedData, u = e3.xScale, c = e3.yScale, s = e3.margin, h = [];
  return d.forEach(function(e4) {
    return c.domain().forEach(function(d2, f) {
      var b2, v2, g2 = e4[f], m2 = null != (b2 = c(l(g2.data))) ? b2 : 0, p2 = (null != (v2 = function(e5) {
        return u(e5[a2 ? 1 : 0]);
      }(g2)) ? v2 : 0) + 0.5 * o2, x2 = function(e5, t3) {
        var i3;
        return (null != (i3 = u(e5[a2 ? 0 : 1])) ? i3 : 0) - t3;
      }(g2, p2) - o2, y2 = re(g2.data[e4.key]), S3 = y2[0], k4 = y2[1], w4 = { id: e4.key, value: null === S3 ? S3 : k4, formattedValue: i2(k4), hidden: false, index: f, indexValue: d2, data: le(g2.data) };
      h.push({ key: e4.key + "." + d2, index: h.length, data: w4, x: p2, y: m2, absX: s.left + p2, absY: s.top + m2, width: x2, height: t2, color: n2(w4), label: r(w4) });
    });
  }), h;
};
var ye = function(e3) {
  var t2, a2 = e3.data, i2 = e3.layout, n2 = e3.minValue, l = e3.maxValue, r = e3.reverse, o2 = e3.width, d = e3.height, u = e3.padding, c = void 0 === u ? 0 : u, s = e3.valueScale, h = e3.indexScale, f = e3.hiddenIds, b2 = void 0 === f ? [] : f, v2 = q2(e3, ge), g2 = v2.keys.filter(function(e4) {
    return !b2.includes(e4);
  }), m2 = stack_default().keys(g2).offset(diverging_default)(ne(a2, g2)), p2 = "vertical" === i2 ? ["y", "x", o2] : ["x", "y", d], x2 = p2[0], y2 = p2[1], S3 = p2[2], k4 = ie(a2, v2.getIndex, c, h, S3, y2), w4 = j3({ max: l, min: n2, reverse: r }, s), L3 = (t2 = me(m2), "log" === s.type ? t2.filter(function(e4) {
    return 0 !== e4;
  }) : t2), C4 = Math.min.apply(Math, L3), V2 = Math.max.apply(Math, L3), M3 = cn(w4, { all: L3, min: C4, max: V2 }, "x" === x2 ? o2 : d, x2), W2 = "vertical" === i2 ? [k4, M3] : [M3, k4], T2 = W2[0], B2 = W2[1], O3 = v2.innerPadding > 0 ? v2.innerPadding : 0, I3 = k4.bandwidth(), P3 = [j3({}, v2, { innerPadding: O3, stackedData: m2, xScale: T2, yScale: B2 }), I3, w4.reverse];
  return { xScale: T2, yScale: B2, bars: I3 > 0 ? "vertical" === i2 ? pe.apply(void 0, P3) : xe.apply(void 0, P3) : [] };
};
var Se = function(e3) {
  var t2 = e3.bars, a2 = e3.direction, i2 = e3.from, n2 = e3.groupMode, r = e3.layout, o2 = e3.legendLabel, d = e3.reverse, u = Cn(null != o2 ? o2 : "indexes" === i2 ? "indexValue" : "id");
  return "indexes" === i2 ? function(e4, t3, a3) {
    var i3 = (0, import_uniqBy.default)(e4.map(function(e5) {
      var t4, i4;
      return { id: null != (t4 = e5.data.indexValue) ? t4 : "", label: a3(e5.data), hidden: e5.data.hidden, color: null != (i4 = e5.color) ? i4 : "#000" };
    }), function(e5) {
      return e5.id;
    });
    return "horizontal" === t3 && i3.reverse(), i3;
  }(t2, r, u) : function(e4, t3, a3, i3, n3, l) {
    var r2 = (0, import_uniqBy.default)(e4.map(function(e5) {
      var t4;
      return { id: e5.data.id, label: l(e5.data), hidden: e5.data.hidden, color: null != (t4 = e5.color) ? t4 : "#000" };
    }), function(e5) {
      return e5.id;
    });
    return ("vertical" === t3 && "stacked" === i3 && "column" === a3 && true !== n3 || "horizontal" === t3 && "stacked" === i3 && true === n3) && r2.reverse(), r2;
  }(t2, r, a2, n2, d, u);
};
var ke = function(e3, t2, a2) {
  var i2 = e3.get(t2) || 0;
  e3.set(t2, i2 + a2);
};
var we = function(e3, t2, a2) {
  var i2 = e3.get(t2) || 0;
  e3.set(t2, i2 + (a2 > 0 ? a2 : 0));
};
var Le = function(e3, t2, a2) {
  var i2 = e3.get(t2) || 0;
  e3.set(t2, Math.max(i2, Number(a2)));
};
var Ce = function(e3, t2) {
  var a2 = e3.get(t2) || 0;
  e3.set(t2, a2 + 1);
};
var Ve = function(e3) {
  var t2 = e3.indexBy, a2 = void 0 === t2 ? ee.indexBy : t2, i2 = e3.keys, l = void 0 === i2 ? ee.keys : i2, d = e3.label, u = void 0 === d ? ee.label : d, c = e3.tooltipLabel, s = void 0 === c ? ee.tooltipLabel : c, h = e3.valueFormat, f = e3.colors, b2 = void 0 === f ? ee.colors : f, v2 = e3.colorBy, g2 = void 0 === v2 ? ee.colorBy : v2, m2 = e3.borderColor, p2 = void 0 === m2 ? ee.borderColor : m2, x2 = e3.labelTextColor, S3 = void 0 === x2 ? ee.labelTextColor : x2, L3 = e3.groupMode, C4 = void 0 === L3 ? ee.groupMode : L3, V2 = e3.layout, M3 = void 0 === V2 ? ee.layout : V2, W2 = e3.reverse, T2 = void 0 === W2 ? ee.reverse : W2, B2 = e3.data, O3 = e3.minValue, I3 = void 0 === O3 ? ee.minValue : O3, P3 = e3.maxValue, E3 = void 0 === P3 ? ee.maxValue : P3, H2 = e3.margin, R2 = e3.width, A = e3.height, X = e3.padding, Y = void 0 === X ? ee.padding : X, G = e3.innerPadding, z3 = void 0 === G ? ee.innerPadding : G, N2 = e3.valueScale, q3 = void 0 === N2 ? ee.valueScale : N2, K2 = e3.indexScale, _2 = void 0 === K2 ? ee.indexScale : K2, J3 = e3.initialHiddenIds, Q2 = void 0 === J3 ? ee.initialHiddenIds : J3, U2 = e3.enableLabel, Z2 = void 0 === U2 ? ee.enableLabel : U2, $2 = e3.labelSkipWidth, te2 = void 0 === $2 ? ee.labelSkipWidth : $2, ae2 = e3.labelSkipHeight, ie2 = void 0 === ae2 ? ee.labelSkipHeight : ae2, ne2 = e3.legends, le2 = void 0 === ne2 ? ee.legends : ne2, re2 = e3.legendLabel, oe2 = e3.totalsOffset, de2 = void 0 === oe2 ? ee.totalsOffset : oe2, ue2 = (0, import_react2.useState)(null != Q2 ? Q2 : []), ce2 = ue2[0], se2 = ue2[1], he2 = (0, import_react2.useCallback)(function(e4) {
    se2(function(t3) {
      return t3.indexOf(e4) > -1 ? t3.filter(function(t4) {
        return t4 !== e4;
      }) : [].concat(t3, [e4]);
    });
  }, []), fe2 = Wn(a2), be2 = Wn(u), ge2 = Wn(s), me2 = Ot(h), pe2 = zt(), xe2 = pr(b2, g2), Ve2 = Xe(p2, pe2), Me2 = Xe(S3, pe2), We2 = ("grouped" === C4 ? ve : ye)({ layout: M3, reverse: T2, data: B2, getIndex: fe2, keys: l, minValue: I3, maxValue: E3, width: R2, height: A, getColor: xe2, padding: Y, innerPadding: z3, valueScale: q3, indexScale: _2, hiddenIds: ce2, formatValue: me2, getTooltipLabel: ge2, margin: H2 }), Te2 = We2.bars, Be2 = We2.xScale, Oe2 = We2.yScale, Ie2 = (0, import_react2.useMemo)(function() {
    return Te2.filter(function(e4) {
      return null !== e4.data.value;
    }).map(function(e4, t3) {
      return j3({}, e4, { index: t3 });
    });
  }, [Te2]), Pe2 = (0, import_react2.useCallback)(function(e4) {
    var t3 = e4.width, a3 = e4.height;
    return !!Z2 && (!(te2 > 0 && t3 < te2) && !(ie2 > 0 && a3 < ie2));
  }, [Z2, te2, ie2]), Ee2 = (0, import_react2.useMemo)(function() {
    return l.map(function(e4) {
      var t3 = Te2.find(function(t4) {
        return t4.data.id === e4;
      });
      return j3({}, t3, { data: j3({ id: e4 }, null == t3 ? void 0 : t3.data, { hidden: ce2.includes(e4) }) });
    });
  }, [ce2, l, Te2]), He2 = (0, import_react2.useMemo)(function() {
    return le2.map(function(e4) {
      return [e4, Se({ bars: "keys" === e4.dataFrom ? Ee2 : Te2, direction: e4.direction, from: e4.dataFrom, groupMode: C4, layout: M3, legendLabel: re2, reverse: T2 })];
    });
  }, [le2, Ee2, Te2, C4, M3, re2, T2]), Re2 = (0, import_react2.useMemo)(function() {
    return function(e4, t3, a3, i3, n2, l2, r) {
      void 0 === i3 && (i3 = ee.layout), void 0 === n2 && (n2 = ee.groupMode);
      var o2 = [];
      if (0 === e4.length) return o2;
      var d2 = /* @__PURE__ */ new Map(), u2 = e4[0].width, c2 = e4[0].height;
      if ("stacked" === n2) {
        var s2 = /* @__PURE__ */ new Map();
        e4.forEach(function(e5) {
          var t4 = e5.data, a4 = t4.indexValue, i4 = t4.value;
          ke(d2, a4, Number(i4)), we(s2, a4, Number(i4));
        }), s2.forEach(function(e5, n3) {
          var s3, h3, f3, b3 = d2.get(n3) || 0;
          "vertical" === i3 ? (s3 = t3(n3), h3 = a3(e5), f3 = a3(e5 / 2)) : (s3 = t3(e5), h3 = a3(n3), f3 = t3(e5 / 2)), s3 += "vertical" === i3 ? u2 / 2 : l2, h3 += "vertical" === i3 ? -l2 : c2 / 2, o2.push({ key: "total_" + n3, x: s3, y: h3, value: b3, formattedValue: r(b3), animationOffset: f3 });
        });
      } else if ("grouped" === n2) {
        var h2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map();
        e4.forEach(function(e5) {
          var t4 = e5.data, a4 = t4.indexValue, i4 = t4.value;
          ke(d2, a4, Number(i4)), Le(h2, a4, Number(i4)), Ce(f2, a4);
        }), h2.forEach(function(e5, n3) {
          var s3, h3, b3, v3 = d2.get(n3) || 0, g3 = f2.get(n3);
          "vertical" === i3 ? (s3 = t3(n3), h3 = a3(e5), b3 = a3(e5 / 2)) : (s3 = t3(e5), h3 = a3(n3), b3 = t3(e5 / 2)), s3 += "vertical" === i3 ? g3 * u2 / 2 : l2, h3 += "vertical" === i3 ? -l2 : g3 * c2 / 2, o2.push({ key: "total_" + n3, x: s3, y: h3, value: v3, formattedValue: r(v3), animationOffset: b3 });
        });
      }
      return o2;
    }(Te2, Be2, Oe2, M3, C4, de2, me2);
  }, [Te2, Be2, Oe2, M3, C4, de2, me2]);
  return { bars: Te2, barsWithValue: Ie2, xScale: Be2, yScale: Oe2, getIndex: fe2, getLabel: be2, getTooltipLabel: ge2, formatValue: me2, getColor: xe2, getBorderColor: Ve2, getLabelColor: Me2, shouldRenderBarLabel: Pe2, hiddenIds: ce2, toggleSerie: he2, legendsWithData: He2, barTotals: Re2 };
};
var Me = function(e3) {
  var t2 = e3.data, a2 = e3.springConfig, i2 = e3.animate, l = e3.layout, r = void 0 === l ? te.layout : l, o2 = zt();
  return useTransition(t2, { keys: function(e4) {
    return e4.key;
  }, from: function(e4) {
    return { x: "vertical" === r ? e4.x : e4.animationOffset, y: "vertical" === r ? e4.animationOffset : e4.y, labelOpacity: 0 };
  }, enter: function(e4) {
    return { x: e4.x, y: e4.y, labelOpacity: 1 };
  }, update: function(e4) {
    return { x: e4.x, y: e4.y, labelOpacity: 1 };
  }, leave: function(e4) {
    return { x: "vertical" === r ? e4.x : e4.animationOffset, y: "vertical" === r ? e4.animationOffset : e4.y, labelOpacity: 0 };
  }, config: a2, immediate: !i2, initial: i2 ? void 0 : null })(function(e4, t3) {
    return (0, import_jsx_runtime2.jsx)(animated.text, { x: e4.x, y: e4.y, fillOpacity: e4.labelOpacity, style: j3({}, o2.labels.text, { pointerEvents: "none", fill: o2.text.fill }), fontWeight: "bold", fontSize: o2.labels.text.fontSize, fontFamily: o2.labels.text.fontFamily, textAnchor: "vertical" === r ? "middle" : "start", alignmentBaseline: "vertical" === r ? "alphabetic" : "middle", children: t3.formattedValue }, t3.key);
  });
};
var We = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var Te = function(a2) {
  var i2 = a2.data, n2 = a2.indexBy, l = a2.keys, r = a2.margin, o2 = a2.width, d = a2.height, b2 = a2.groupMode, v2 = a2.layout, g2 = a2.reverse, m2 = a2.minValue, p2 = a2.maxValue, k4 = a2.valueScale, w4 = a2.indexScale, C4 = a2.padding, V2 = a2.innerPadding, M3 = a2.axisTop, W2 = a2.axisRight, T2 = a2.axisBottom, B2 = void 0 === T2 ? te.axisBottom : T2, O3 = a2.axisLeft, P3 = void 0 === O3 ? te.axisLeft : O3, E3 = a2.enableGridX, H2 = void 0 === E3 ? te.enableGridX : E3, R2 = a2.enableGridY, F = void 0 === R2 ? te.enableGridY : R2, D2 = a2.gridXValues, A = a2.gridYValues, X = a2.layers, Y = void 0 === X ? te.layers : X, G = a2.barComponent, z3 = void 0 === G ? te.barComponent : G, N2 = a2.enableLabel, q3 = void 0 === N2 ? te.enableLabel : N2, K2 = a2.label, Q2 = a2.labelSkipWidth, U2 = void 0 === Q2 ? te.labelSkipWidth : Q2, Z2 = a2.labelSkipHeight, $2 = void 0 === Z2 ? te.labelSkipHeight : Z2, ee2 = a2.labelTextColor, ae2 = a2.labelPosition, ie2 = void 0 === ae2 ? te.labelPosition : ae2, ne2 = a2.labelOffset, le2 = void 0 === ne2 ? te.labelOffset : ne2, re2 = a2.markers, de2 = void 0 === re2 ? te.markers : re2, ue2 = a2.colorBy, ce2 = a2.colors, se2 = a2.defs, he2 = void 0 === se2 ? te.defs : se2, fe2 = a2.fill, be2 = void 0 === fe2 ? te.fill : fe2, ve2 = a2.borderRadius, ge2 = void 0 === ve2 ? te.borderRadius : ve2, me2 = a2.borderWidth, pe2 = void 0 === me2 ? te.borderWidth : me2, xe2 = a2.borderColor, ye2 = a2.annotations, Se2 = void 0 === ye2 ? te.annotations : ye2, ke2 = a2.legendLabel, we2 = a2.tooltipLabel, Le2 = a2.valueFormat, Ce2 = a2.isInteractive, We2 = void 0 === Ce2 ? te.isInteractive : Ce2, Te2 = a2.tooltip, Be2 = void 0 === Te2 ? te.tooltip : Te2, Oe2 = a2.onClick, Ie2 = a2.onMouseEnter, Pe2 = a2.onMouseLeave, Ee2 = a2.legends, He2 = a2.role, Re2 = void 0 === He2 ? te.role : He2, Fe = a2.ariaLabel, De = a2.ariaLabelledBy, Ae = a2.ariaDescribedBy, Xe2 = a2.isFocusable, Ye = void 0 === Xe2 ? te.isFocusable : Xe2, Ge = a2.barAriaLabel, ze = a2.barAriaLabelledBy, Ne = a2.barAriaDescribedBy, je = a2.barAriaHidden, qe = a2.barAriaDisabled, Ke = a2.initialHiddenIds, _e = a2.enableTotals, Je = void 0 === _e ? te.enableTotals : _e, Qe = a2.totalsOffset, Ue = void 0 === Qe ? te.totalsOffset : Qe, Ze = Ur(), $e = Ze.animate, et = Ze.config, tt = wt(o2, d, r), at = tt.outerWidth, it = tt.outerHeight, nt = tt.margin, lt = tt.innerWidth, rt = tt.innerHeight, ot = Ve({ indexBy: n2, label: K2, tooltipLabel: we2, valueFormat: Le2, colors: ce2, colorBy: ue2, borderColor: xe2, labelTextColor: ee2, groupMode: b2, layout: v2, reverse: g2, data: i2, keys: l, minValue: m2, maxValue: p2, margin: nt, width: lt, height: rt, padding: C4, innerPadding: V2, valueScale: k4, indexScale: w4, enableLabel: q3, labelSkipWidth: U2, labelSkipHeight: $2, legends: Ee2, legendLabel: ke2, initialHiddenIds: Ke, totalsOffset: Ue }), dt = ot.bars, ut = ot.barsWithValue, ct = ot.xScale, st = ot.yScale, ht = ot.getLabel, ft = ot.getTooltipLabel, bt = ot.getBorderColor, vt = ot.getLabelColor, gt = ot.shouldRenderBarLabel, mt = ot.toggleSerie, pt = ot.legendsWithData, xt = ot.barTotals, yt = ot.getColor, St2 = oe(v2, g2, ie2, le2), kt = useTransition(ut, { keys: function(e3) {
    return e3.key;
  }, from: function(e3) {
    return j3({ borderColor: bt(e3), color: e3.color, height: 0, labelColor: vt(e3), labelOpacity: 0 }, St2(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + (e3.y + e3.height) + ")", width: e3.width }, "vertical" === v2 ? {} : { height: e3.height, transform: "translate(" + e3.x + ", " + e3.y + ")", width: 0 });
  }, enter: function(e3) {
    return j3({ borderColor: bt(e3), color: e3.color, height: e3.height, labelColor: vt(e3), labelOpacity: 1 }, St2(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + e3.y + ")", width: e3.width });
  }, update: function(e3) {
    return j3({ borderColor: bt(e3), color: e3.color, height: e3.height, labelColor: vt(e3), labelOpacity: 1 }, St2(e3.width, e3.height), { transform: "translate(" + e3.x + ", " + e3.y + ")", width: e3.width });
  }, leave: function(e3) {
    return j3({ borderColor: bt(e3), color: e3.color, height: 0, labelColor: vt(e3), labelOpacity: 0 }, St2(e3.width, e3.height), { labelY: 0, transform: "translate(" + e3.x + ", " + (e3.y + e3.height) + ")", width: e3.width }, "vertical" === v2 ? {} : j3({}, St2(e3.width, e3.height), { labelX: 0, height: e3.height, transform: "translate(" + e3.x + ", " + e3.y + ")", width: 0 }));
  }, config: et, immediate: !$e, initial: $e ? void 0 : null }), wt2 = (0, import_react2.useMemo)(function() {
    return { borderRadius: ge2, borderWidth: pe2, enableLabel: q3, isInteractive: We2, labelSkipWidth: U2, labelSkipHeight: $2, onClick: Oe2, onMouseEnter: Ie2, onMouseLeave: Pe2, getTooltipLabel: ft, tooltip: Be2, isFocusable: Ye, ariaLabel: Ge, ariaLabelledBy: ze, ariaDescribedBy: Ne, ariaHidden: je, ariaDisabled: qe };
  }, [ge2, pe2, q3, ft, We2, $2, U2, Oe2, Ie2, Pe2, Be2, Ye, Ge, ze, Ne, je, qe]), Lt = In(he2, dt, be2, { dataKey: "data", targetKey: "data.fill" }), Ct = { annotations: null, axes: null, bars: null, grid: null, legends: null, markers: null, totals: null };
  Y.includes("annotations") && (Ct.annotations = (0, import_jsx_runtime2.jsx)(_, { bars: dt, annotations: Se2 }, "annotations")), Y.includes("axes") && (Ct.axes = (0, import_jsx_runtime2.jsx)(B, { xScale: ct, yScale: st, width: lt, height: rt, top: M3, right: W2, bottom: B2, left: P3 }, "axes")), Y.includes("bars") && (Ct.bars = (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: kt(function(e3, t2) {
    return (0, import_react2.createElement)(z3, j3({}, wt2, { bar: t2, style: e3, shouldRenderLabel: gt(t2), label: ht(t2.data) }));
  }) }, "bars")), Y.includes("grid") && (Ct.grid = (0, import_jsx_runtime2.jsx)(C, { width: lt, height: rt, xScale: H2 ? ct : null, yScale: F ? st : null, xValues: D2, yValues: A }, "grid")), Y.includes("legends") && (Ct.legends = (0, import_jsx_runtime2.jsx)(J2, { width: lt, height: rt, legends: pt, toggleSerie: mt }, "legends")), Y.includes("markers") && (Ct.markers = (0, import_jsx_runtime2.jsx)(Rn, { markers: de2, width: lt, height: rt, xScale: ct, yScale: st }, "markers")), Y.includes("totals") && Je && (Ct.totals = (0, import_jsx_runtime2.jsx)(Me, { data: xt, springConfig: et, animate: $e, layout: v2 }, "totals"));
  var Vt = (0, import_react2.useMemo)(function() {
    return j3({}, wt2, { margin: nt, width: o2, height: d, innerWidth: lt, innerHeight: rt, bars: dt, legendData: pt, enableLabel: q3, xScale: ct, yScale: st, tooltip: Be2, getTooltipLabel: ft, onClick: Oe2, onMouseEnter: Ie2, onMouseLeave: Pe2, getColor: yt });
  }, [wt2, nt, o2, d, lt, rt, dt, pt, q3, ct, st, Be2, ft, Oe2, Ie2, Pe2, yt]);
  return (0, import_jsx_runtime2.jsx)(gn, { width: at, height: it, margin: nt, defs: Lt, role: Re2, ariaLabel: Fe, ariaLabelledBy: De, ariaDescribedBy: Ae, isFocusable: Ye, children: Y.map(function(e3, t2) {
    var a3;
    return "function" == typeof e3 ? (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: (0, import_react2.createElement)(e3, Vt) }, t2) : null != (a3 = null == Ct ? void 0 : Ct[e3]) ? a3 : null;
  }) });
};
var Be = function(e3) {
  var t2 = e3.isInteractive, a2 = void 0 === t2 ? te.isInteractive : t2, i2 = e3.animate, n2 = void 0 === i2 ? te.animate : i2, l = e3.motionConfig, r = void 0 === l ? te.motionConfig : l, o2 = e3.theme, u = e3.renderWrapper, c = q2(e3, We);
  return (0, import_jsx_runtime2.jsx)(St, { animate: n2, isInteractive: a2, motionConfig: r, renderWrapper: u, theme: o2, children: (0, import_jsx_runtime2.jsx)(Te, j3({ isInteractive: a2 }, c)) });
};
var Oe = ["isInteractive", "renderWrapper", "theme"];
var Ie = function(e3, t2, a2, i2) {
  return e3.find(function(e4) {
    return jn(e4.x + t2.left, e4.y + t2.top, e4.width, e4.height, a2, i2);
  });
};
var Pe = function(e3) {
  var t2 = e3.data, l = e3.indexBy, r = e3.keys, d = e3.margin, u = e3.width, s = e3.height, h = e3.groupMode, f = e3.layout, v2 = e3.reverse, g2 = e3.minValue, m2 = e3.maxValue, p2 = e3.valueScale, x2 = e3.indexScale, w4 = e3.padding, L3 = e3.innerPadding, C4 = e3.axisTop, T2 = e3.axisRight, P3 = e3.axisBottom, E3 = void 0 === P3 ? ae.axisBottom : P3, H2 = e3.axisLeft, F = void 0 === H2 ? ae.axisLeft : H2, D2 = e3.enableGridX, X = void 0 === D2 ? ae.enableGridX : D2, Y = e3.enableGridY, G = void 0 === Y ? ae.enableGridY : Y, z3 = e3.gridXValues, N2 = e3.gridYValues, q3 = e3.labelPosition, K2 = void 0 === q3 ? ae.labelPosition : q3, _2 = e3.labelOffset, J3 = void 0 === _2 ? ae.labelOffset : _2, Q2 = e3.layers, U2 = void 0 === Q2 ? ae.layers : Q2, Z2 = e3.renderBar, $2 = void 0 === Z2 ? function(e4, t3) {
    var a2 = t3.bar, i2 = a2.color, n2 = a2.height, l2 = a2.width, r2 = a2.x, o2 = a2.y, d2 = t3.borderColor, u2 = t3.borderRadius, c = t3.borderWidth, s2 = t3.label, h2 = t3.labelColor, f2 = t3.shouldRenderLabel, b2 = t3.labelX, v3 = t3.labelY, g3 = t3.textAnchor;
    if (e4.fillStyle = i2, c > 0 && (e4.strokeStyle = d2, e4.lineWidth = c), e4.beginPath(), u2 > 0) {
      var m3 = Math.min(u2, n2);
      e4.moveTo(r2 + m3, o2), e4.lineTo(r2 + l2 - m3, o2), e4.quadraticCurveTo(r2 + l2, o2, r2 + l2, o2 + m3), e4.lineTo(r2 + l2, o2 + n2 - m3), e4.quadraticCurveTo(r2 + l2, o2 + n2, r2 + l2 - m3, o2 + n2), e4.lineTo(r2 + m3, o2 + n2), e4.quadraticCurveTo(r2, o2 + n2, r2, o2 + n2 - m3), e4.lineTo(r2, o2 + m3), e4.quadraticCurveTo(r2, o2, r2 + m3, o2), e4.closePath();
    } else e4.rect(r2, o2, l2, n2);
    e4.fill(), c > 0 && e4.stroke(), f2 && (e4.textBaseline = "middle", e4.textAlign = "middle" === g3 ? "center" : g3, e4.fillStyle = h2, e4.fillText(s2, r2 + b2, o2 + v3));
  } : Z2, ee2 = e3.enableLabel, te2 = void 0 === ee2 ? ae.enableLabel : ee2, ie2 = e3.label, ne2 = e3.labelSkipWidth, le2 = void 0 === ne2 ? ae.labelSkipWidth : ne2, re2 = e3.labelSkipHeight, de2 = void 0 === re2 ? ae.labelSkipHeight : re2, ue2 = e3.labelTextColor, ce2 = e3.colorBy, se2 = e3.colors, he2 = e3.borderRadius, fe2 = void 0 === he2 ? ae.borderRadius : he2, be2 = e3.borderWidth, ve2 = void 0 === be2 ? ae.borderWidth : be2, ge2 = e3.borderColor, me2 = e3.annotations, pe2 = void 0 === me2 ? ae.annotations : me2, xe2 = e3.legendLabel, ye2 = e3.tooltipLabel, Se2 = e3.valueFormat, ke2 = e3.isInteractive, we2 = void 0 === ke2 ? ae.isInteractive : ke2, Le2 = e3.tooltip, Ce2 = void 0 === Le2 ? ae.tooltip : Le2, Me2 = e3.onClick, We2 = e3.onMouseEnter, Te2 = e3.onMouseLeave, Be2 = e3.legends, Oe2 = e3.pixelRatio, Pe2 = void 0 === Oe2 ? ae.pixelRatio : Oe2, Ee2 = e3.canvasRef, He2 = e3.enableTotals, Re2 = void 0 === He2 ? ae.enableTotals : He2, Fe = e3.totalsOffset, De = void 0 === Fe ? ae.totalsOffset : Fe, Ae = (0, import_react2.useRef)(null), Xe2 = zt(), Ye = wt(u, s, d), Ge = Ye.margin, ze = Ye.innerWidth, Ne = Ye.innerHeight, je = Ye.outerWidth, qe = Ye.outerHeight, Ke = Ve({ indexBy: l, label: ie2, tooltipLabel: ye2, valueFormat: Se2, colors: se2, colorBy: ce2, borderColor: ge2, labelTextColor: ue2, groupMode: h, layout: f, reverse: v2, data: t2, keys: r, minValue: g2, maxValue: m2, margin: Ge, width: ze, height: Ne, padding: w4, innerPadding: L3, valueScale: p2, indexScale: x2, enableLabel: te2, labelSkipWidth: le2, labelSkipHeight: de2, legends: Be2, legendLabel: xe2, totalsOffset: De }), _e = Ke.bars, Je = Ke.barsWithValue, Qe = Ke.xScale, Ue = Ke.yScale, Ze = Ke.getLabel, $e = Ke.getTooltipLabel, et = Ke.getBorderColor, tt = Ke.getLabelColor, at = Ke.shouldRenderBarLabel, it = Ke.legendsWithData, nt = Ke.barTotals, lt = Ke.getColor, rt = k(), ot = rt.showTooltipFromEvent, dt = rt.hideTooltip, ut = j2({ annotations: S({ data: _e, annotations: pe2, getPosition: function(e4) {
    return { x: e4.x, y: e4.y };
  }, getDimensions: function(e4) {
    var t3 = e4.width, a2 = e4.height;
    return { width: t3, height: a2, size: Math.max(t3, a2) };
  } }) }), ct = (0, import_react2.useMemo)(function() {
    return { borderRadius: fe2, borderWidth: ve2, isInteractive: we2, isFocusable: false, labelSkipWidth: le2, labelSkipHeight: de2, margin: Ge, width: u, height: s, innerWidth: ze, innerHeight: Ne, bars: _e, legendData: it, enableLabel: te2, xScale: Qe, yScale: Ue, tooltip: Ce2, getTooltipLabel: $e, onClick: Me2, onMouseEnter: We2, onMouseLeave: Te2, getColor: lt };
  }, [fe2, ve2, we2, le2, de2, Ge, u, s, ze, Ne, _e, it, te2, Qe, Ue, Ce2, $e, Me2, We2, Te2, lt]), st = Ot(Se2), ht = oe(f, v2, K2, J3);
  (0, import_react2.useEffect)(function() {
    var e4, t3 = null == (e4 = Ae.current) ? void 0 : e4.getContext("2d");
    Ae.current && t3 && (Ae.current.width = je * Pe2, Ae.current.height = qe * Pe2, t3.scale(Pe2, Pe2), t3.fillStyle = Xe2.background, t3.fillRect(0, 0, je, qe), t3.translate(Ge.left, Ge.top), U2.forEach(function(e5) {
      "grid" === e5 ? "number" == typeof Xe2.grid.line.strokeWidth && Xe2.grid.line.strokeWidth > 0 && (t3.lineWidth = Xe2.grid.line.strokeWidth, t3.strokeStyle = Xe2.grid.line.stroke, X && z(t3, { width: ze, height: Ne, scale: Qe, axis: "x", values: z3 }), G && z(t3, { width: ze, height: Ne, scale: Ue, axis: "y", values: N2 })) : "axes" === e5 ? j(t3, { xScale: Qe, yScale: Ue, width: ze, height: Ne, top: C4, right: T2, bottom: E3, left: F, theme: Xe2 }) : "bars" === e5 ? Je.forEach(function(e6) {
        $2(t3, j3({ bar: e6, borderColor: et(e6), borderRadius: fe2, borderWidth: ve2, label: Ze(e6.data), labelColor: tt(e6), shouldRenderLabel: at(e6) }, ht(e6.width, e6.height)));
      }) : "legends" === e5 ? it.forEach(function(e6) {
        var a2 = e6[0], i2 = e6[1];
        H(t3, j3({}, a2, { data: i2, containerWidth: ze, containerHeight: Ne, theme: Xe2 }));
      }) : "annotations" === e5 ? J(t3, { annotations: ut, theme: Xe2 }) : "totals" === e5 && Re2 ? function(e6, t4, a2, i2) {
        void 0 === i2 && (i2 = ae.layout), e6.fillStyle = a2.text.fill, e6.font = "bold " + a2.labels.text.fontSize + "px " + a2.labels.text.fontFamily, e6.textBaseline = "vertical" === i2 ? "alphabetic" : "middle", e6.textAlign = "vertical" === i2 ? "center" : "start", t4.forEach(function(t5) {
          e6.fillText(t5.formattedValue, t5.x, t5.y);
        });
      }(t3, nt, Xe2, f) : "function" == typeof e5 && e5(t3, ct);
    }), t3.save());
  }, [E3, F, T2, C4, Je, fe2, ve2, ut, X, G, et, Ze, tt, z3, N2, h, s, Ne, ze, ct, U2, f, it, Ge.left, Ge.top, qe, je, Pe2, $2, Qe, Ue, v2, at, Xe2, u, nt, Re2, st, ht]);
  var ft = (0, import_react2.useCallback)(function(e4) {
    if (_e && Ae.current) {
      var t3 = Sn(Ae.current, e4), a2 = t3[0], i2 = t3[1], n2 = Ie(_e, Ge, a2, i2);
      void 0 !== n2 ? (ot((0, import_react2.createElement)(Ce2, j3({}, n2.data, { color: n2.color, label: n2.label, value: Number(n2.data.value) })), e4), "mouseenter" === e4.type && (null == We2 || We2(n2.data, e4))) : dt();
    }
  }, [dt, Ge, We2, _e, ot, Ce2]), bt = (0, import_react2.useCallback)(function(e4) {
    if (_e && Ae.current) {
      dt();
      var t3 = Sn(Ae.current, e4), a2 = t3[0], i2 = t3[1], n2 = Ie(_e, Ge, a2, i2);
      n2 && (null == Te2 || Te2(n2.data, e4));
    }
  }, [dt, Ge, Te2, _e]), vt = (0, import_react2.useCallback)(function(e4) {
    if (_e && Ae.current) {
      var t3 = Sn(Ae.current, e4), a2 = t3[0], i2 = t3[1], n2 = Ie(_e, Ge, a2, i2);
      void 0 !== n2 && (null == Me2 || Me2(j3({}, n2.data, { color: n2.color }), e4));
    }
  }, [Ge, Me2, _e]);
  return (0, import_jsx_runtime2.jsx)("canvas", { ref: function(e4) {
    Ae.current = e4, Ee2 && "current" in Ee2 && (Ee2.current = e4);
  }, width: je * Pe2, height: qe * Pe2, style: { width: je, height: qe, cursor: we2 ? "auto" : "normal" }, onMouseEnter: we2 ? ft : void 0, onMouseMove: we2 ? ft : void 0, onMouseLeave: we2 ? bt : void 0, onClick: we2 ? vt : void 0 });
};
var Ee = (0, import_react2.forwardRef)(function(e3, t2) {
  var a2 = e3.isInteractive, i2 = e3.renderWrapper, n2 = e3.theme, l = q2(e3, Oe);
  return (0, import_jsx_runtime2.jsx)(St, { isInteractive: a2, renderWrapper: i2, theme: n2, animate: false, children: (0, import_jsx_runtime2.jsx)(Pe, j3({}, l, { canvasRef: t2 })) });
});
var He = function(e3) {
  return (0, import_jsx_runtime2.jsx)(It, { children: function(t2) {
    var a2 = t2.width, i2 = t2.height;
    return (0, import_jsx_runtime2.jsx)(Be, j3({ width: a2, height: i2 }, e3));
  } });
};
var Re = (0, import_react2.forwardRef)(function(e3, t2) {
  return (0, import_jsx_runtime2.jsx)(It, { children: function(a2) {
    var i2 = a2.width, n2 = a2.height;
    return (0, import_jsx_runtime2.jsx)(Ee, j3({ width: i2, height: n2 }, e3, { ref: t2 }));
  } });
});
export {
  Be as Bar,
  Ee as BarCanvas,
  U as BarItem,
  $ as BarTooltip,
  Me as BarTotals,
  He as ResponsiveBar,
  Re as ResponsiveBarCanvas,
  ae as canvasDefaultProps,
  ee as defaultProps,
  te as svgDefaultProps
};
//# sourceMappingURL=@nivo_bar.js.map
