import {
  Ht,
  Mt,
  Ur,
  animated,
  band,
  format,
  friday,
  hour_default,
  linear,
  log,
  millisecond_default,
  minute_default,
  monday,
  month_default,
  newInterval,
  point,
  require_Set,
  require_SetCache,
  require_Stack,
  require_arrayIncludes,
  require_arrayIncludesWith,
  require_arrayMap,
  require_baseFlatten,
  require_baseFor,
  require_baseGet,
  require_baseGetTag,
  require_baseIsEqual,
  require_baseRest,
  require_baseUnary,
  require_cacheHas,
  require_get,
  require_hasIn,
  require_identity,
  require_isArray,
  require_isArrayLike,
  require_isIterateeCall,
  require_isKey,
  require_isObject,
  require_isObjectLike,
  require_isSymbol,
  require_keys,
  require_last,
  require_nodeUtil,
  require_setToArray,
  require_toKey,
  rn,
  saturday,
  second_default,
  sunday,
  symlog,
  thursday,
  time,
  timeFormat,
  timeParse,
  tuesday,
  useSpring,
  useTransition,
  utcFriday,
  utcHour_default,
  utcMinute_default,
  utcMonday,
  utcMonth_default,
  utcParse,
  utcSaturday,
  utcSunday,
  utcThursday,
  utcTime,
  utcTuesday,
  utcWednesday,
  utcYear_default,
  wednesday,
  year_default,
  zt
} from "./chunk-AMKCINI5.js";
import {
  require_jsx_runtime
} from "./chunk-RZSASJON.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity = require_identity();
    var isArray = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// node_modules/lodash/_baseIsDate.js
var require_baseIsDate = __commonJS({
  "node_modules/lodash/_baseIsDate.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var dateTag = "[object Date]";
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }
    module.exports = baseIsDate;
  }
});

// node_modules/lodash/isDate.js
var require_isDate = __commonJS({
  "node_modules/lodash/isDate.js"(exports, module) {
    var baseIsDate = require_baseIsDate();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsDate = nodeUtil && nodeUtil.isDate;
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
    module.exports = isDate;
  }
});

// node_modules/@nivo/scales/dist/nivo-scales.es.js
var import_uniq = __toESM(require_uniq());
var import_uniqBy = __toESM(require_uniqBy());
var import_sortBy = __toESM(require_sortBy());
var import_last = __toESM(require_last());
var import_isDate = __toESM(require_isDate());
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(n3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var r3 = arguments[t3];
      for (var e3 in r3) Object.prototype.hasOwnProperty.call(r3, e3) && (n3[e3] = r3[e3]);
    }
    return n3;
  }, $.apply(this, arguments);
}
var J = [function(n3) {
  return n3.setMilliseconds(0);
}, function(n3) {
  return n3.setSeconds(0);
}, function(n3) {
  return n3.setMinutes(0);
}, function(n3) {
  return n3.setHours(0);
}, function(n3) {
  return n3.setDate(1);
}, function(n3) {
  return n3.setMonth(0);
}];
var K = { millisecond: [], second: J.slice(0, 1), minute: J.slice(0, 2), hour: J.slice(0, 3), day: J.slice(0, 4), month: J.slice(0, 5), year: J.slice(0, 6) };
var L = function(n3) {
  return function(t3) {
    return K[n3].forEach(function(n4) {
      n4(t3);
    }), t3;
  };
};
var Q = function(n3) {
  var t3 = n3.format, r3 = void 0 === t3 ? "native" : t3, e3 = n3.precision, a2 = void 0 === e3 ? "millisecond" : e3, u = n3.useUTC, c = void 0 === u || u, s = L(a2);
  return function(n4) {
    if (void 0 === n4) return n4;
    if ("native" === r3 || n4 instanceof Date) return s(n4);
    var t4 = c ? utcParse(r3) : timeParse(r3);
    return s(t4(n4));
  };
};
var W = function(n3, t3, r3, e3) {
  var a2, i2, o, c, s = n3.min, d = void 0 === s ? 0 : s, f = n3.max, l = void 0 === f ? "auto" : f, m = n3.stacked, v2 = void 0 !== m && m, y = n3.reverse, p2 = void 0 !== y && y, h = n3.clamp, g2 = void 0 !== h && h, x = n3.nice, k2 = void 0 !== x && x;
  "auto" === d ? a2 = true === v2 ? null != (i2 = t3.minStacked) ? i2 : 0 : t3.min : a2 = d;
  "auto" === l ? o = true === v2 ? null != (c = t3.maxStacked) ? c : 0 : t3.max : o = l;
  var T2 = linear().rangeRound("x" === e3 ? [0, r3] : [r3, 0]).domain(p2 ? [o, a2] : [a2, o]).clamp(g2);
  return true === k2 ? T2.nice() : "number" == typeof k2 && T2.nice(k2), X(T2, v2);
};
var X = function(n3, t3) {
  void 0 === t3 && (t3 = false);
  var r3 = n3;
  return r3.type = "linear", r3.stacked = t3, r3;
};
var Y = function(n3, t3, r3) {
  var e3 = point().range([0, r3]).domain(t3.all);
  return e3.type = "point", e3;
};
var _ = function(n3, t3, r3, e3) {
  var a2 = n3.round, i2 = void 0 === a2 || a2, o = band().range("x" === e3 ? [0, r3] : [r3, 0]).domain(t3.all).round(i2);
  return nn(o);
};
var nn = function(n3) {
  var t3 = n3;
  return t3.type = "band", t3;
};
var tn = function(n3, t3, r3) {
  var e3, a2, i2 = n3.format, o = void 0 === i2 ? "native" : i2, u = n3.precision, c = void 0 === u ? "millisecond" : u, s = n3.min, l = void 0 === s ? "auto" : s, m = n3.max, v2 = void 0 === m ? "auto" : m, y = n3.useUTC, p2 = void 0 === y || y, h = n3.nice, g2 = void 0 !== h && h, x = Q({ format: o, precision: c, useUTC: p2 });
  e3 = "auto" === l ? x(t3.min) : "native" !== o ? x(l) : l, a2 = "auto" === v2 ? x(t3.max) : "native" !== o ? x(v2) : v2;
  var k2 = p2 ? utcTime() : time();
  k2.range([0, r3]), e3 && a2 && k2.domain([e3, a2]), true === g2 ? k2.nice() : "object" != typeof g2 && "number" != typeof g2 || k2.nice(g2);
  var T2 = k2;
  return T2.type = "time", T2.useUTC = p2, T2;
};
var rn2 = function(n3, t3, r3, e3) {
  var a2, i2 = n3.base, o = void 0 === i2 ? 10 : i2, u = n3.min, c = void 0 === u ? "auto" : u, s = n3.max, d = void 0 === s ? "auto" : s;
  if (t3.all.some(function(n4) {
    return 0 === n4;
  })) throw new Error("a log scale domain must not include or cross zero");
  var f, m, v2 = false;
  if (t3.all.filter(function(n4) {
    return null != n4;
  }).forEach(function(n4) {
    v2 || (void 0 === a2 ? a2 = Math.sign(n4) : Math.sign(n4) !== a2 && (v2 = true));
  }), v2) throw new Error("a log scale domain must be strictly-positive or strictly-negative");
  f = "auto" === c ? t3.min : c, m = "auto" === d ? t3.max : d;
  var y = log().domain([f, m]).rangeRound("x" === e3 ? [0, r3] : [r3, 0]).base(o).nice();
  return y.type = "log", y;
};
var en = function(n3, t3, r3, e3) {
  var a2, i2, o = n3.constant, u = void 0 === o ? 1 : o, c = n3.min, s = void 0 === c ? "auto" : c, d = n3.max, f = void 0 === d ? "auto" : d, l = n3.reverse, v2 = void 0 !== l && l;
  a2 = "auto" === s ? t3.min : s, i2 = "auto" === f ? t3.max : f;
  var y = symlog().constant(u).rangeRound("x" === e3 ? [0, r3] : [r3, 0]).nice();
  true === v2 ? y.domain([i2, a2]) : y.domain([a2, i2]);
  var p2 = y;
  return p2.type = "symlog", p2;
};
var an = function(n3) {
  return "x" === n3 ? "y" : "x";
};
var on = function(n3, t3) {
  return n3 === t3;
};
var un = function(n3, t3) {
  return n3.getTime() === t3.getTime();
};
function cn(n3, t3, r3, e3) {
  switch (n3.type) {
    case "linear":
      return W(n3, t3, r3, e3);
    case "point":
      return Y(n3, t3, r3);
    case "band":
      return _(n3, t3, r3, e3);
    case "time":
      return tn(n3, t3, r3);
    case "log":
      return rn2(n3, t3, r3, e3);
    case "symlog":
      return en(n3, t3, r3, e3);
    default:
      throw new Error("invalid scale spec");
  }
}
var sn = function(n3, t3, r3) {
  var e3;
  if ("stacked" in r3 && r3.stacked) {
    var a2 = n3.data["x" === t3 ? "xStacked" : "yStacked"];
    return null == a2 ? null : r3(a2);
  }
  return null != (e3 = r3(n3.data[t3])) ? e3 : null;
};
var dn = function(n3, t3, r3, e3, a2) {
  var i2 = n3.map(function(n4) {
    return function(n5) {
      return $({}, n5, { data: n5.data.map(function(n6) {
        return { data: $({}, n6) };
      }) });
    }(n4);
  }), o = fn(i2, t3, r3);
  "stacked" in t3 && true === t3.stacked && vn(o, i2), "stacked" in r3 && true === r3.stacked && yn(o, i2);
  var u = cn(t3, o.x, e3, "x"), c = cn(r3, o.y, a2, "y"), s = i2.map(function(n4) {
    return $({}, n4, { data: n4.data.map(function(n5) {
      return $({}, n5, { position: { x: sn(n5, "x", u), y: sn(n5, "y", c) } });
    }) });
  });
  return $({}, o, { series: s, xScale: u, yScale: c });
};
var fn = function(n3, t3, r3) {
  return { x: ln(n3, "x", t3), y: ln(n3, "y", r3) };
};
var ln = function(a2, i2, o, u) {
  var c = void 0 === u ? {} : u, s = c.getValue, d = void 0 === s ? function(n3) {
    return n3.data[i2];
  } : s, f = c.setValue, l = void 0 === f ? function(n3, t3) {
    n3.data[i2] = t3;
  } : f;
  if ("linear" === o.type) a2.forEach(function(n3) {
    n3.data.forEach(function(n4) {
      var t3 = d(n4);
      t3 && l(n4, parseFloat(String(t3)));
    });
  });
  else if ("time" === o.type && "native" !== o.format) {
    var m = Q(o);
    a2.forEach(function(n3) {
      n3.data.forEach(function(n4) {
        var t3 = d(n4);
        t3 && l(n4, m(t3));
      });
    });
  }
  var v2 = [];
  switch (a2.forEach(function(n3) {
    n3.data.forEach(function(n4) {
      v2.push(d(n4));
    });
  }), o.type) {
    case "linear":
      var y = (0, import_sortBy.default)((0, import_uniq.default)(v2).filter(function(n3) {
        return null !== n3;
      }), function(n3) {
        return n3;
      });
      return { all: y, min: Math.min.apply(Math, y), max: Math.max.apply(Math, y) };
    case "time":
      var p2 = (0, import_uniqBy.default)(v2, function(n3) {
        return n3.getTime();
      }).slice(0).sort(function(n3, t3) {
        return t3.getTime() - n3.getTime();
      }).reverse();
      return { all: p2, min: p2[0], max: (0, import_last.default)(p2) };
    default:
      var h = (0, import_uniq.default)(v2);
      return { all: h, min: h[0], max: (0, import_last.default)(h) };
  }
};
var mn = function(n3, t3, r3) {
  var i2 = an(n3), o = [];
  t3[i2].all.forEach(function(t4) {
    var u = (0, import_isDate.default)(t4) ? un : on, c = [];
    r3.forEach(function(r4) {
      var a2 = r4.data.find(function(n4) {
        return u(n4.data[i2], t4);
      }), s = null, d = null;
      if (void 0 !== a2) {
        if (null !== (s = a2.data[n3])) {
          var f = (0, import_last.default)(c);
          void 0 === f ? d = s : null !== f && (d = f + s);
        }
        a2.data["x" === n3 ? "xStacked" : "yStacked"] = d;
      }
      c.push(d), null !== d && o.push(d);
    });
  }), t3[n3].minStacked = Math.min.apply(Math, o), t3[n3].maxStacked = Math.max.apply(Math, o);
};
var vn = function(n3, t3) {
  return mn("x", n3, t3);
};
var yn = function(n3, t3) {
  return mn("y", n3, t3);
};
var pn = function(n3) {
  var t3 = n3.bandwidth();
  if (0 === t3) return n3;
  var r3 = t3 / 2;
  return n3.round() && (r3 = Math.round(r3)), function(t4) {
    var e3;
    return (null != (e3 = n3(t4)) ? e3 : 0) + r3;
  };
};
var hn = { millisecond: [millisecond_default, millisecond_default], second: [second_default, second_default], minute: [minute_default, utcMinute_default], hour: [hour_default, utcHour_default], day: [newInterval(function(n3) {
  return n3.setHours(0, 0, 0, 0);
}, function(n3, t3) {
  return n3.setDate(n3.getDate() + t3);
}, function(n3, t3) {
  return (t3.getTime() - n3.getTime()) / 864e5;
}, function(n3) {
  return Math.floor(n3.getTime() / 864e5);
}), newInterval(function(n3) {
  return n3.setUTCHours(0, 0, 0, 0);
}, function(n3, t3) {
  return n3.setUTCDate(n3.getUTCDate() + t3);
}, function(n3, t3) {
  return (t3.getTime() - n3.getTime()) / 864e5;
}, function(n3) {
  return Math.floor(n3.getTime() / 864e5);
})], week: [sunday, utcSunday], sunday: [sunday, utcSunday], monday: [monday, utcMonday], tuesday: [tuesday, utcTuesday], wednesday: [wednesday, utcWednesday], thursday: [thursday, utcThursday], friday: [friday, utcFriday], saturday: [saturday, utcSaturday], month: [month_default, utcMonth_default], year: [year_default, utcYear_default] };
var gn = Object.keys(hn);
var xn = new RegExp("^every\\s*(\\d+)?\\s*(" + gn.join("|") + ")s?$", "i");
var kn = function(n3, t3) {
  if (Array.isArray(t3)) return t3;
  if ("string" == typeof t3 && "useUTC" in n3) {
    var r3 = t3.match(xn);
    if (r3) {
      var e3 = r3[1], a2 = r3[2], i2 = hn[a2][n3.useUTC ? 1 : 0];
      if ("day" === a2) {
        var o, u, c = n3.domain(), s = c[0], d = c[1], f = new Date(d);
        return f.setDate(f.getDate() + 1), null != (o = null == (u = i2.every(Number(null != e3 ? e3 : 1))) ? void 0 : u.range(s, f)) ? o : [];
      }
      if (void 0 === e3) return n3.ticks(i2);
      var l = i2.every(Number(e3));
      if (l) return n3.ticks(l);
    }
    throw new Error("Invalid tickValues: " + t3);
  }
  if ("ticks" in n3) {
    if (void 0 === t3) return n3.ticks();
    if ("number" == typeof (m = t3) && isFinite(m) && Math.floor(m) === m) return n3.ticks(t3);
  }
  var m;
  return n3.domain();
};

// node_modules/@nivo/axes/dist/nivo-axes.es.js
var t2 = __toESM(require_react());
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function p() {
  return p = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var i2 = arguments[e3];
      for (var n3 in i2) Object.prototype.hasOwnProperty.call(i2, n3) && (t3[n3] = i2[n3]);
    }
    return t3;
  }, p.apply(this, arguments);
}
var b = function(t3) {
  var e3, i2 = t3.axis, n3 = t3.scale, r3 = t3.ticksPosition, o = t3.tickValues, l = t3.tickSize, s = t3.tickPadding, c = t3.tickRotation, f = t3.truncateTickAt, u = t3.engine, d = void 0 === u ? "svg" : u, x = kn(n3, o), m = rn[d], k2 = "bandwidth" in n3 ? pn(n3) : n3, g2 = { lineX: 0, lineY: 0 }, v2 = { textX: 0, textY: 0 }, b2 = "object" == typeof document && "rtl" === document.dir, P2 = m.align.center, T2 = m.baseline.center;
  "x" === i2 ? (e3 = function(t4) {
    var e4;
    return { x: null != (e4 = k2(t4)) ? e4 : 0, y: 0 };
  }, g2.lineY = l * ("after" === r3 ? 1 : -1), v2.textY = (l + s) * ("after" === r3 ? 1 : -1), T2 = "after" === r3 ? m.baseline.top : m.baseline.bottom, 0 === c ? P2 = m.align.center : "after" === r3 && c < 0 || "before" === r3 && c > 0 ? (P2 = m.align[b2 ? "left" : "right"], T2 = m.baseline.center) : ("after" === r3 && c > 0 || "before" === r3 && c < 0) && (P2 = m.align[b2 ? "right" : "left"], T2 = m.baseline.center)) : (e3 = function(t4) {
    var e4;
    return { x: 0, y: null != (e4 = k2(t4)) ? e4 : 0 };
  }, g2.lineX = l * ("after" === r3 ? 1 : -1), v2.textX = (l + s) * ("after" === r3 ? 1 : -1), P2 = "after" === r3 ? m.align.left : m.align.right);
  return { ticks: x.map(function(t4) {
    var i3 = "string" == typeof t4 ? function(t5) {
      var e4 = String(t5).length;
      return f && f > 0 && e4 > f ? "" + String(t5).slice(0, f).concat("...") : "" + t5;
    }(t4) : t4;
    return p({ key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, value: i3 }, e3(t4), g2, v2);
  }), textAlign: P2, textBaseline: T2 };
};
var P = function(t3, e3) {
  if (void 0 === t3 || "function" == typeof t3) return t3;
  if ("time" === e3.type) {
    var i2 = timeFormat(t3);
    return function(t4) {
      return i2(t4 instanceof Date ? t4 : new Date(t4));
    };
  }
  return format(t3);
};
var T = function(t3) {
  var e3, i2 = t3.width, n3 = t3.height, r3 = t3.scale, a2 = t3.axis, o = t3.values, l = (e3 = o, Array.isArray(e3) ? o : void 0) || kn(r3, o), s = "bandwidth" in r3 ? pn(r3) : r3, c = "x" === a2 ? l.map(function(t4) {
    var e4, i3;
    return { key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, x1: null != (e4 = s(t4)) ? e4 : 0, x2: null != (i3 = s(t4)) ? i3 : 0, y1: 0, y2: n3 };
  }) : l.map(function(t4) {
    var e4, n4;
    return { key: t4 instanceof Date ? "" + t4.valueOf() : "" + t4, x1: 0, x2: i2, y1: null != (e4 = s(t4)) ? e4 : 0, y2: null != (n4 = s(t4)) ? n4 : 0 };
  });
  return c;
};
var A = (0, import_react.memo)(function(t3) {
  var e3, n3 = t3.value, r3 = t3.format, a2 = t3.lineX, s = t3.lineY, c = t3.onClick, u = t3.textBaseline, d = t3.textAnchor, x = t3.animatedProps, m = zt(), y = m.axis.ticks.line, h = m.axis.ticks.text, v2 = null != (e3 = null == r3 ? void 0 : r3(n3)) ? e3 : n3, b2 = (0, import_react.useMemo)(function() {
    var t4 = { opacity: x.opacity };
    return c ? { style: p({}, t4, { cursor: "pointer" }), onClick: function(t5) {
      return c(t5, v2);
    } } : { style: t4 };
  }, [x.opacity, c, v2]);
  return (0, import_jsx_runtime.jsxs)(animated.g, p({ transform: x.transform }, b2, { children: [(0, import_jsx_runtime.jsx)("line", { x1: 0, x2: a2, y1: 0, y2: s, style: y }), h.outlineWidth > 0 && (0, import_jsx_runtime.jsx)(animated.text, { dominantBaseline: u, textAnchor: d, transform: x.textTransform, style: h, strokeWidth: 2 * h.outlineWidth, stroke: h.outlineColor, strokeLinejoin: "round", children: "" + v2 }), (0, import_jsx_runtime.jsx)(animated.text, { dominantBaseline: u, textAnchor: d, transform: x.textTransform, style: Mt(h), children: "" + v2 })] }));
});
var S = function(e3) {
  var r3 = e3.axis, a2 = e3.scale, l = e3.x, c = void 0 === l ? 0 : l, x = e3.y, m = void 0 === x ? 0 : x, y = e3.length, h = e3.ticksPosition, T2 = e3.tickValues, S2 = e3.tickSize, W3 = void 0 === S2 ? 5 : S2, w2 = e3.tickPadding, B2 = void 0 === w2 ? 5 : w2, X3 = e3.tickRotation, Y3 = void 0 === X3 ? 0 : X3, C2 = e3.format, O2 = e3.renderTick, j2 = void 0 === O2 ? A : O2, z2 = e3.truncateTickAt, V = e3.legend, D = e3.legendPosition, R = void 0 === D ? "end" : D, E = e3.legendOffset, q = void 0 === E ? 0 : E, F = e3.onClick, L2 = e3.ariaHidden, N = zt(), H = N.axis.legend.text, I = (0, import_react.useMemo)(function() {
    return P(C2, a2);
  }, [C2, a2]), J2 = b({ axis: r3, scale: a2, ticksPosition: h, tickValues: T2, tickSize: W3, tickPadding: B2, tickRotation: Y3, truncateTickAt: z2 }), G = J2.ticks, K2 = J2.textAlign, M = J2.textBaseline, Q2 = null;
  if (void 0 !== V) {
    var U, Z = 0, $2 = 0, _2 = 0;
    "y" === r3 ? (_2 = -90, Z = q, "start" === R ? (U = "start", $2 = y) : "middle" === R ? (U = "middle", $2 = y / 2) : "end" === R && (U = "end")) : ($2 = q, "start" === R ? U = "start" : "middle" === R ? (U = "middle", Z = y / 2) : "end" === R && (U = "end", Z = y)), Q2 = (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [H.outlineWidth > 0 && (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + Z + ", " + $2 + ") rotate(" + _2 + ")", textAnchor: U, style: p({ dominantBaseline: "central" }, H), strokeWidth: 2 * H.outlineWidth, stroke: H.outlineColor, strokeLinejoin: "round", children: V }), (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + Z + ", " + $2 + ") rotate(" + _2 + ")", textAnchor: U, style: p({ dominantBaseline: "central" }, H), children: V })] });
  }
  var tt = Ur(), et = tt.animate, it = tt.config, nt = useSpring({ transform: "translate(" + c + "," + m + ")", lineX2: "x" === r3 ? y : 0, lineY2: "x" === r3 ? 0 : y, config: it, immediate: !et }), rt = (0, import_react.useCallback)(function(t3) {
    return { opacity: 1, transform: "translate(" + t3.x + "," + t3.y + ")", textTransform: "translate(" + t3.textX + "," + t3.textY + ") rotate(" + Y3 + ")" };
  }, [Y3]), at = (0, import_react.useCallback)(function(t3) {
    return { opacity: 0, transform: "translate(" + t3.x + "," + t3.y + ")", textTransform: "translate(" + t3.textX + "," + t3.textY + ") rotate(" + Y3 + ")" };
  }, [Y3]), ot = useTransition(G, { keys: function(t3) {
    return t3.key;
  }, initial: rt, from: at, enter: rt, update: rt, leave: { opacity: 0 }, config: it, immediate: !et });
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: nt.transform, "aria-hidden": L2, children: [ot(function(e4, i2, n3, r4) {
    return t2.createElement(j2, p({ tickIndex: r4, format: I, rotate: Y3, textBaseline: M, textAnchor: K2, truncateTickAt: z2, animatedProps: e4 }, i2, F ? { onClick: F } : {}));
  }), (0, import_jsx_runtime.jsx)(animated.line, { style: N.axis.domain.line, x1: 0, x2: nt.lineX2, y1: 0, y2: nt.lineY2 }), Q2] });
};
var W2 = (0, import_react.memo)(S);
var w = ["top", "right", "bottom", "left"];
var B = (0, import_react.memo)(function(t3) {
  var e3 = t3.xScale, i2 = t3.yScale, n3 = t3.width, r3 = t3.height, a2 = { top: t3.top, right: t3.right, bottom: t3.bottom, left: t3.left };
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: w.map(function(t4) {
    var o = a2[t4];
    if (!o) return null;
    var l = "top" === t4 || "bottom" === t4;
    return (0, import_jsx_runtime.jsx)(W2, p({}, o, { axis: l ? "x" : "y", x: "right" === t4 ? n3 : 0, y: "bottom" === t4 ? r3 : 0, scale: l ? e3 : i2, length: l ? n3 : r3, ticksPosition: "top" === t4 || "left" === t4 ? "before" : "after", truncateTickAt: o.truncateTickAt }), t4);
  }) });
});
var X2 = (0, import_react.memo)(function(t3) {
  var e3 = t3.animatedProps, i2 = zt();
  return (0, import_jsx_runtime.jsx)(animated.line, p({}, e3, i2.grid.line));
});
var Y2 = (0, import_react.memo)(function(t3) {
  var e3 = t3.lines, i2 = Ur(), n3 = i2.animate, a2 = i2.config, o = useTransition(e3, { keys: function(t4) {
    return t4.key;
  }, initial: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, from: function(t4) {
    return { opacity: 0, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, enter: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, update: function(t4) {
    return { opacity: 1, x1: t4.x1, x2: t4.x2, y1: t4.y1, y2: t4.y2 };
  }, leave: { opacity: 0 }, config: a2, immediate: !n3 });
  return (0, import_jsx_runtime.jsx)("g", { children: o(function(t4, e4) {
    return (0, import_react.createElement)(X2, p({}, e4, { key: e4.key, animatedProps: t4 }));
  }) });
});
var C = (0, import_react.memo)(function(t3) {
  var e3 = t3.width, n3 = t3.height, r3 = t3.xScale, a2 = t3.yScale, o = t3.xValues, l = t3.yValues, s = (0, import_react.useMemo)(function() {
    return !!r3 && T({ width: e3, height: n3, scale: r3, axis: "x", values: o });
  }, [r3, o, e3, n3]), c = (0, import_react.useMemo)(function() {
    return !!a2 && T({ width: e3, height: n3, scale: a2, axis: "y", values: l });
  }, [n3, e3, a2, l]);
  return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [s && (0, import_jsx_runtime.jsx)(Y2, { lines: s }), c && (0, import_jsx_runtime.jsx)(Y2, { lines: c })] });
});
var O = function(t3, e3) {
  var i2, n3 = e3.axis, r3 = e3.scale, a2 = e3.x, o = void 0 === a2 ? 0 : a2, l = e3.y, s = void 0 === l ? 0 : l, f = e3.length, u = e3.ticksPosition, d = e3.tickValues, x = e3.tickSize, m = void 0 === x ? 5 : x, y = e3.tickPadding, h = void 0 === y ? 5 : y, k2 = e3.tickRotation, g2 = void 0 === k2 ? 0 : k2, v2 = e3.format, p2 = e3.legend, P2 = e3.legendPosition, T2 = void 0 === P2 ? "end" : P2, A2 = e3.legendOffset, S2 = void 0 === A2 ? 0 : A2, W3 = e3.theme, w2 = b({ axis: n3, scale: r3, ticksPosition: u, tickValues: d, tickSize: m, tickPadding: h, tickRotation: g2, engine: "canvas" }), B2 = w2.ticks, X3 = w2.textAlign, Y3 = w2.textBaseline;
  t3.save(), t3.translate(o, s), t3.textAlign = X3, t3.textBaseline = Y3;
  var C2 = W3.axis.ticks.text;
  t3.font = (C2.fontWeight ? C2.fontWeight + " " : "") + C2.fontSize + "px " + C2.fontFamily, (null != (i2 = W3.axis.domain.line.strokeWidth) ? i2 : 0) > 0 && (t3.lineWidth = Number(W3.axis.domain.line.strokeWidth), t3.lineCap = "square", W3.axis.domain.line.stroke && (t3.strokeStyle = W3.axis.domain.line.stroke), t3.beginPath(), t3.moveTo(0, 0), t3.lineTo("x" === n3 ? f : 0, "x" === n3 ? 0 : f), t3.stroke());
  var O2 = "function" == typeof v2 ? v2 : function(t4) {
    return "" + t4;
  };
  if (B2.forEach(function(e4) {
    var i3;
    (null != (i3 = W3.axis.ticks.line.strokeWidth) ? i3 : 0) > 0 && (t3.lineWidth = Number(W3.axis.ticks.line.strokeWidth), t3.lineCap = "square", W3.axis.ticks.line.stroke && (t3.strokeStyle = W3.axis.ticks.line.stroke), t3.beginPath(), t3.moveTo(e4.x, e4.y), t3.lineTo(e4.x + e4.lineX, e4.y + e4.lineY), t3.stroke());
    var n4 = O2(e4.value);
    t3.save(), t3.translate(e4.x + e4.textX, e4.y + e4.textY), t3.rotate(Ht(g2)), C2.outlineWidth > 0 && (t3.strokeStyle = C2.outlineColor, t3.lineWidth = 2 * C2.outlineWidth, t3.lineJoin = "round", t3.strokeText("" + n4, 0, 0)), W3.axis.ticks.text.fill && (t3.fillStyle = C2.fill), t3.fillText("" + n4, 0, 0), t3.restore();
  }), void 0 !== p2) {
    var j2 = 0, z2 = 0, V = 0, D = "center";
    "y" === n3 ? (V = -90, j2 = S2, "start" === T2 ? (D = "start", z2 = f) : "middle" === T2 ? (D = "center", z2 = f / 2) : "end" === T2 && (D = "end")) : (z2 = S2, "start" === T2 ? D = "start" : "middle" === T2 ? (D = "center", j2 = f / 2) : "end" === T2 && (D = "end", j2 = f)), t3.translate(j2, z2), t3.rotate(Ht(V)), t3.font = (W3.axis.legend.text.fontWeight ? W3.axis.legend.text.fontWeight + " " : "") + W3.axis.legend.text.fontSize + "px " + W3.axis.legend.text.fontFamily, W3.axis.legend.text.fill && (t3.fillStyle = W3.axis.legend.text.fill), t3.textAlign = D, t3.textBaseline = "middle", t3.fillText(p2, 0, 0);
  }
  t3.restore();
};
var j = function(t3, e3) {
  var i2 = e3.xScale, n3 = e3.yScale, r3 = e3.width, a2 = e3.height, o = e3.top, l = e3.right, s = e3.bottom, c = e3.left, f = e3.theme, u = { top: o, right: l, bottom: s, left: c };
  w.forEach(function(e4) {
    var o2 = u[e4];
    if (!o2) return null;
    var l2 = "top" === e4 || "bottom" === e4, s2 = "top" === e4 || "left" === e4 ? "before" : "after", c2 = l2 ? i2 : n3, d = P(o2.format, c2);
    O(t3, p({}, o2, { axis: l2 ? "x" : "y", x: "right" === e4 ? r3 : 0, y: "bottom" === e4 ? a2 : 0, scale: c2, format: d, length: l2 ? r3 : a2, ticksPosition: s2, theme: f }));
  });
};
var z = function(t3, e3) {
  var i2 = e3.width, n3 = e3.height, r3 = e3.scale, a2 = e3.axis, o = e3.values;
  T({ width: i2, height: n3, scale: r3, axis: a2, values: o }).forEach(function(e4) {
    t3.beginPath(), t3.moveTo(e4.x1, e4.y1), t3.lineTo(e4.x2, e4.y2), t3.stroke();
  });
};

export {
  require_baseIteratee,
  require_uniqBy,
  require_baseEach,
  cn,
  dn,
  B,
  C,
  j,
  z
};
//# sourceMappingURL=chunk-5EXQJOLE.js.map
