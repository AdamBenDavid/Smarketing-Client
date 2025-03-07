import {
  require_react_dom
} from "./chunk-UP6LQVYV.js";
import {
  require_prop_types
} from "./chunk-R2LMYVXF.js";
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

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array2, key) {
      var length = array2.length;
      while (length--) {
        if (eq(array2[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol3 = root.Symbol;
    module.exports = Symbol3;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e6) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e6) {
        }
        try {
          return func + "";
        } catch (e6) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map4, key) {
      var data = map4.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs2 = data.__data__;
        if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
          pairs2.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs2);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e6) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignMergeValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array2) {
      var index2 = -1, length = source.length;
      array2 || (array2 = Array(length));
      while (++index2 < length) {
        array2[index2] = source[index2];
      }
      return array2;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
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
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e6) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module) {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module.exports = safeGet;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n3, iteratee) {
      var index2 = -1, result = Array(n3);
      while (++index2 < n3) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity5(value) {
      return value;
    }
    module.exports = identity5;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array2 = Array(length);
        while (++index2 < length) {
          array2[index2] = args[start2 + index2];
        }
        index2 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index2 < start2) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start2] = transform(array2);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant2(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant2;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant2 = require_constant();
    var defineProperty = require_defineProperty();
    var identity5 = require_identity();
    var baseSetToString = !defineProperty ? identity5 : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant2(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count2 = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count2 >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count2 = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity5 = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity5), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object, source, index2, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge2;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number4, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array2, iteratee) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array2[index2], index2, array2);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index2 = 0, length = path2.length;
      while (object != null && index2 < length) {
        object = object[toKey(path2[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path2, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index2 < length) {
        var key = toKey(path2[index2]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index2 != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/set.js
var require_set = __commonJS({
  "node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set(object, path2, value) {
      return object == null ? object : baseSet(object, path2, value);
    }
    module.exports = set;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? array2[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index2 = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array2, value, fromIndex) {
      var index2 = fromIndex - 1, length = array2.length;
      while (++index2 < length) {
        if (array2[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array2, value, fromIndex) {
      return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array2, value) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array2, value, comparator) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (comparator(value, array2[index2])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_baseDifference.js
var require_baseDifference = __commonJS({
  "node_modules/lodash/_baseDifference.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var arrayMap = require_arrayMap();
    var baseUnary = require_baseUnary();
    var cacheHas = require_cacheHas();
    var LARGE_ARRAY_SIZE = 200;
    function baseDifference(array2, values, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, isCommon = true, length = array2.length, result = [], valuesLength = values.length;
      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
        while (++index2 < length) {
          var value = array2[index2], computed = iteratee == null ? value : iteratee(value);
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value);
          } else if (!includes(values, computed, comparator)) {
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseDifference;
  }
});

// node_modules/lodash/without.js
var require_without = __commonJS({
  "node_modules/lodash/without.js"(exports, module) {
    var baseDifference = require_baseDifference();
    var baseRest = require_baseRest();
    var isArrayLikeObject = require_isArrayLikeObject();
    var without = baseRest(function(array2, values) {
      return isArrayLikeObject(array2) ? baseDifference(array2, values) : [];
    });
    module.exports = without;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index2 = -1, length = paths.length, result = {};
      while (++index2 < length) {
        var path2 = paths[index2], value = baseGet(object, path2);
        if (predicate(value, path2)) {
          baseSet(result, castPath(path2, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, result = false;
      while (++index2 < length) {
        var key = toKey(path2[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "node_modules/lodash/_basePick.js"(exports, module) {
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path2) {
        return hasIn(object, path2);
      });
    }
    module.exports = basePick;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array2, values) {
      var index2 = -1, length = values.length, offset = array2.length;
      while (++index2 < length) {
        array2[offset + index2] = values[index2];
      }
      return array2;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array2, depth, predicate, isStrict, result) {
      var index2 = -1, length = array2.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array2[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseFlatten(array2, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/pick.js
var require_pick = __commonJS({
  "node_modules/lodash/pick.js"(exports, module) {
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array2);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array2;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index2 < arrLength) {
        var arrValue = array2[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map4) {
      var index2 = -1, result = Array(map4.size);
      map4.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array2[index2];
        if (predicate(value, index2, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});

// node_modules/@react-spring/rafz/dist/react-spring_rafz.modern.mjs
var updateQueue = makeQueue();
var raf = (fn2) => schedule(fn2, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn2) => schedule(fn2, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn2) => schedule(fn2, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn2) => schedule(fn2, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn2) => schedule(fn2, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time2 = raf.now() + ms;
  const cancel = () => {
    const i3 = timeouts.findIndex((t6) => t6.cancel == cancel);
    if (~i3)
      timeouts.splice(i3, 1);
    pendingCount -= ~i3 ? 1 : 0;
  };
  const timeout = { time: time2, handler, cancel };
  timeouts.splice(findTimeout(time2), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time2) => ~(~timeouts.findIndex((t6) => t6.time > time2) || ~timeouts.length);
raf.cancel = (fn2) => {
  onStartQueue.delete(fn2);
  onFrameQueue.delete(fn2);
  onFinishQueue.delete(fn2);
  updateQueue.delete(fn2);
  writeQueue.delete(fn2);
};
raf.sync = (fn2) => {
  sync = true;
  raf.batchedUpdates(fn2);
  sync = false;
};
raf.throttle = (fn2) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn2(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn2;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn2) => fn2();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn2, queue) {
  if (sync) {
    queue.delete(fn2);
    fn2(0);
  } else {
    queue.add(fn2);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count2 = findTimeout(ts);
  if (count2) {
    eachSafely(timeouts.splice(0, count2), (t6) => t6.handler());
    pendingCount -= count2;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn2) {
      pendingCount += current == next && !next.has(fn2) ? 1 : 0;
      next.add(fn2);
    },
    delete(fn2) {
      pendingCount -= current == next && next.has(fn2) ? 1 : 0;
      return next.delete(fn2);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn2) => fn2(arg) && next.add(fn2));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e6) {
      raf.catch(e6);
    }
  });
}

// node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var globals_exports = {};
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var is = {
  arr: Array.isArray,
  obj: (a3) => !!a3 && a3.constructor.name === "Object",
  fun: (a3) => typeof a3 === "function",
  str: (a3) => typeof a3 === "string",
  num: (a3) => typeof a3 === "number",
  und: (a3) => a3 === void 0
};
function isEqual(a3, b3) {
  if (is.arr(a3)) {
    if (!is.arr(b3) || a3.length !== b3.length)
      return false;
    for (let i3 = 0; i3 < a3.length; i3++) {
      if (a3[i3] !== b3[i3])
        return false;
    }
    return true;
  }
  return a3 === b3;
}
var each = (obj, fn2) => obj.forEach(fn2);
function eachProp(obj, fn2, ctx2) {
  if (is.arr(obj)) {
    for (let i3 = 0; i3 < obj.length; i3++) {
      fn2.call(ctx2, obj[i3], `${i3}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn2.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a3) => is.und(a3) ? [] : is.arr(a3) ? a3 : [a3];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn2) => fn2(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt2) {
  const nextFrame = prevFrame;
  for (let i3 = 0; i3 < currentFrame.length; i3++) {
    const animation = currentFrame[i3];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt2);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index2 = arr.findIndex(test);
  return index2 < 0 ? arr.length : index2;
}
var clamp = (min3, max3, v4) => Math.min(Math.max(v4, min3), max3);
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color2) {
  let match;
  if (typeof color2 === "number") {
    return color2 >>> 0 === color2 && color2 >= 0 && color2 <= 4294967295 ? color2 : null;
  }
  if (match = hex6.exec(color2))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color2] !== void 0) {
    return colors[color2];
  }
  if (match = rgb.exec(color2)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color2)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color2)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color2))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color2)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color2)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color2)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p3, q2, t6) {
  if (t6 < 0)
    t6 += 1;
  if (t6 > 1)
    t6 -= 1;
  if (t6 < 1 / 6)
    return p3 + (q2 - p3) * 6 * t6;
  if (t6 < 1 / 2)
    return q2;
  if (t6 < 2 / 3)
    return p3 + (q2 - p3) * (2 / 3 - t6) * 6;
  return p3;
}
function hslToRgb(h2, s4, l3) {
  const q2 = l3 < 0.5 ? l3 * (1 + s4) : l3 + s4 - l3 * s4;
  const p3 = 2 * l3 - q2;
  const r3 = hue2rgb(p3, q2, h2 + 1 / 3);
  const g3 = hue2rgb(p3, q2, h2);
  const b3 = hue2rgb(p3, q2, h2 - 1 / 3);
  return Math.round(r3 * 255) << 24 | Math.round(g3 * 255) << 16 | Math.round(b3 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r3 = (int32Color & 4278190080) >>> 24;
  const g3 = (int32Color & 16711680) >>> 16;
  const b3 = (int32Color & 65280) >>> 8;
  const a3 = (int32Color & 255) / 255;
  return `rgba(${r3}, ${g3}, ${b3}, ${a3})`;
}
var createInterpolator = (range2, output, extrapolate) => {
  if (is.fun(range2)) {
    return range2;
  }
  if (is.arr(range2)) {
    return createInterpolator({
      range: range2,
      output,
      extrapolate
    });
  }
  if (is.str(range2.output[0])) {
    return createStringInterpolator(range2);
  }
  const config2 = range2;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t6) => t6);
  return (input) => {
    const range22 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range22],
      inputRange[range22 + 1],
      outputRange[range22],
      outputRange[range22 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config2.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map4) {
  let result = map4 ? map4(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i3 = 1; i3 < inputRange.length - 1; ++i3)
    if (inputRange[i3] >= input)
      break;
  return i3 - 1;
}
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x4) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x4 < 1 / d1) {
    return n1 * x4 * x4;
  } else if (x4 < 2 / d1) {
    return n1 * (x4 -= 1.5 / d1) * x4 + 0.75;
  } else if (x4 < 2.5 / d1) {
    return n1 * (x4 -= 2.25 / d1) * x4 + 0.9375;
  } else {
    return n1 * (x4 -= 2.625 / d1) * x4 + 0.984375;
  }
};
var easings = {
  linear: (x4) => x4,
  easeInQuad: (x4) => x4 * x4,
  easeOutQuad: (x4) => 1 - (1 - x4) * (1 - x4),
  easeInOutQuad: (x4) => x4 < 0.5 ? 2 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 2) / 2,
  easeInCubic: (x4) => x4 * x4 * x4,
  easeOutCubic: (x4) => 1 - Math.pow(1 - x4, 3),
  easeInOutCubic: (x4) => x4 < 0.5 ? 4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 3) / 2,
  easeInQuart: (x4) => x4 * x4 * x4 * x4,
  easeOutQuart: (x4) => 1 - Math.pow(1 - x4, 4),
  easeInOutQuart: (x4) => x4 < 0.5 ? 8 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 4) / 2,
  easeInQuint: (x4) => x4 * x4 * x4 * x4 * x4,
  easeOutQuint: (x4) => 1 - Math.pow(1 - x4, 5),
  easeInOutQuint: (x4) => x4 < 0.5 ? 16 * x4 * x4 * x4 * x4 * x4 : 1 - Math.pow(-2 * x4 + 2, 5) / 2,
  easeInSine: (x4) => 1 - Math.cos(x4 * Math.PI / 2),
  easeOutSine: (x4) => Math.sin(x4 * Math.PI / 2),
  easeInOutSine: (x4) => -(Math.cos(Math.PI * x4) - 1) / 2,
  easeInExpo: (x4) => x4 === 0 ? 0 : Math.pow(2, 10 * x4 - 10),
  easeOutExpo: (x4) => x4 === 1 ? 1 : 1 - Math.pow(2, -10 * x4),
  easeInOutExpo: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? Math.pow(2, 20 * x4 - 10) / 2 : (2 - Math.pow(2, -20 * x4 + 10)) / 2,
  easeInCirc: (x4) => 1 - Math.sqrt(1 - Math.pow(x4, 2)),
  easeOutCirc: (x4) => Math.sqrt(1 - Math.pow(x4 - 1, 2)),
  easeInOutCirc: (x4) => x4 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x4, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x4 + 2, 2)) + 1) / 2,
  easeInBack: (x4) => c3 * x4 * x4 * x4 - c1 * x4 * x4,
  easeOutBack: (x4) => 1 + c3 * Math.pow(x4 - 1, 3) + c1 * Math.pow(x4 - 1, 2),
  easeInOutBack: (x4) => x4 < 0.5 ? Math.pow(2 * x4, 2) * ((c2 + 1) * 2 * x4 - c2) / 2 : (Math.pow(2 * x4 - 2, 2) * ((c2 + 1) * (x4 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : -Math.pow(2, 10 * x4 - 10) * Math.sin((x4 * 10 - 10.75) * c4),
  easeOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : Math.pow(2, -10 * x4) * Math.sin((x4 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x4) => x4 === 0 ? 0 : x4 === 1 ? 1 : x4 < 0.5 ? -(Math.pow(2, 20 * x4 - 10) * Math.sin((20 * x4 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x4 + 10) * Math.sin((20 * x4 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x4) => 1 - bounceOut(1 - x4),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x4) => x4 < 0.5 ? (1 - bounceOut(1 - 2 * x4)) / 2 : (1 + bounceOut(2 * x4 - 1)) / 2,
  steps
};
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count2 = observers.size - 1;
    if (count2) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count2, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_, p1, p22, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p22)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator2 = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_, i3) => keyframes.map((values) => {
      if (!(i3 in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i3];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config2, output: output2 })
  );
  return (input) => {
    var _a;
    const missingUnit = !unitRegex.test(output[0]) && ((_a = output.find((value) => unitRegex.test(value))) == null ? void 0 : _a.replace(numberRegex, ""));
    let i3 = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i3++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn2) => {
  const func = fn2;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(
    `${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
var useIsomorphicLayoutEffect = isSSR() ? import_react4.useEffect : import_react4.useLayoutEffect;
var useIsMounted = () => {
  const isMounted = (0, import_react3.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update3 = (0, import_react2.useState)()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update3(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = (0, import_react5.useState)(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = (0, import_react5.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  (0, import_react5.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i3 = 0; i3 < next.length; i3++) {
    if (next[i3] !== prev[i3]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => (0, import_react6.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function usePrev(value) {
  const prevRef = (0, import_react7.useRef)();
  (0, import_react7.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs
var React = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = { dependencies: null };
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i3) => node.setValue(source[i3])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
var withAnimated = (Component, host2) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return (0, import_react9.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react9.useRef)(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, import_react9.useCallback)(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0, import_react9.useRef)();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    (0, import_react9.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host2.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: applyAnimatedValues2 = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: applyAnimatedValues2,
    createAnimatedStyle,
    getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var React2 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count2 = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count2++;
    }
  });
  if (count2) {
    return forward;
  }
}
function inferTo(props) {
  const to22 = getForwardProps(props);
  if (to22) {
    const out = { to: to22 };
    eachProp(props, (val, key) => key in to22 || (out[key] = val));
    return out;
  }
  return { ...props };
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to22) {
  return is.fun(to22) || is.arr(to22) && is.obj(to22[0]);
}
function detachRefs(ctrl, ref) {
  var _a;
  (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  var _a;
  if (ref && ctrl.ref !== ref) {
    (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
};
var defaults = {
  ...config.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = { ...defaultConfig };
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = { ...defaultConfig, ...newConfig };
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let { frequency, damping } = config2;
  const { mass } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? (defaultProps == null ? void 0 : defaultProps.cancel), key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({ ...props, callId, cancel }, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(
  target.get(),
  results.every((result) => result.finished)
);
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to22, props, state, target) {
  const { callId, parentId, onRest } = props;
  const { asyncTo: prevTo, promise: prevPromise } = state;
  if (!parentId && to22 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to22;
    const defaultProps = getDefaultProps(
      props,
      (value, key) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        key === "onRest" ? void 0 : value
      )
    );
    let preventBail;
    let bail;
    const bailPromise = new Promise(
      (resolve, reject) => (preventBail = resolve, bail = reject)
    );
    const bailIfEnded = (bailSignal) => {
      const bailResult = (
        // The `cancel` prop or `stop` method was used.
        callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
        callId !== state.asyncId && getFinishedResult(target, false)
      );
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? { ...arg1 } : { ...arg2, to: arg1 };
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to22)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to22);
      } else {
        animating = Promise.resolve(to22(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t6) => t6.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count2) {
    if (count2 == 1)
      this._attach();
  }
  observerRemoved(count2) {
    if (count2 == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.animation = new Animation();
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? { ...arg1 } : { ...arg2, from: arg1 };
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return hasAnimated(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return isAnimating(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return isPaused(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(dt2) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let { toValues } = anim;
    const { config: config2 } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i3) => {
      if (node2.done)
        return;
      const to22 = (
        // Animated strings always go from 0 to 1.
        node2.constructor == AnimatedString ? 1 : payload ? payload[i3].lastPosition : toValues[i3]
      );
      let finished = anim.immediate;
      let position = to22;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt2;
        const from = anim.fromValues[i3];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i3] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to22 ? 5e-3 : Math.min(1, Math.abs(to22 - from) * 1e-3));
        if (!is.und(config2.duration)) {
          let p3 = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt2;
              }
            }
            p3 = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p3 = p3 > 1 ? 1 : p3 < 0 ? 0 : p3;
            node2.durationProgress = p3;
          }
          position = from + config2.easing(p3) * (to22 - from);
          velocity = (position - node2.lastPosition) / dt2;
          finished = p3 == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e6 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e6);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e6;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to22 ? node2.v0 > 0 : from < to22;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt2 / step);
          for (let n3 = 0; n3 < numSteps; ++n3) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to22 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to22 || position > to22 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to22;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to22);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i3].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  /** Set the current value, while stopping the current animation */
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: true });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: false });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (isAnimating(this)) {
      const { to: to22, config: config2 } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to22, false);
        }
        this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to22, arg2) {
    let queue;
    if (!is.und(to22)) {
      queue = [is.obj(to22) ? to22 : { ...arg2, to: to22 }];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(
      queue.map((props) => {
        const up = this._update(props);
        return up;
      })
    ).then((results) => getCombinedResult(this, results));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(cancel) {
    const { to: to22 } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to22, cancel));
    return this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: true });
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(props) {
    const key = this.key || "";
    let { to: to22, from } = props;
    to22 = is.obj(to22) ? to22[key] : to22;
    if (to22 == null || isAsyncTo(to22)) {
      to22 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range2 = { to: to22, from };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to22, from] = [from, to22];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to22);
      }
    }
    return range2;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...props }, isLoop) {
    const { key, defaultProps } = this;
    if (props.default)
      Object.assign(
        defaultProps,
        getDefaultProps(
          props,
          (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value
        )
      );
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range2 = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(
              this,
              "onPause",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(
              this,
              "onResume",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        start: this._merge.bind(this, range2)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  /** Merge props into the current animation */
  _merge(range2, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range2.to);
    const hasFromProp = !is.und(range2.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const { key, defaultProps, animation: anim } = this;
    const { to: prevTo, from: prevFrom } = anim;
    let { to: to22 = prevTo, from = prevFrom } = range2;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to22))) {
      to22 = from;
    }
    if (props.reverse)
      [to22, from] = [from, to22];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to22, prevTo);
    if (hasToChanged) {
      this._focus(to22);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const { config: config2 } = anim;
    const { decay, velocity } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(
        config2,
        callProp(props.config, key),
        // Avoid calling the same "config" prop twice.
        props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0
      );
    }
    let node = getAnimated(this);
    if (!node || is.und(to22)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key)
    );
    const value = reset ? from : this.get();
    const goal = computeGoal(to22);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to22);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(
            `Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`
          );
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to22);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to22) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const { onRest } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            var _a;
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              (_a = anim.onStart) == null ? void 0 : _a.call(anim, result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      addFluidObserver(to22, this);
      if (isFrameValue(to22)) {
        priority2 = to22.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      removeFluidObserver(to22, this);
    }
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(
        this,
        "onStart",
        getFinishedResult(this, checkFinished(this, anim.to)),
        this
      );
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to22) {
  const goal = computeGoal(to22);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to22 = props.to) {
  const loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse2 = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop: loop2,
      // Avoid updating default props when looping.
      default: false,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !reverse2 || isAsyncTo(to22) ? to22 : void 0,
      // Ignore the "from" prop except on reset.
      from: reset ? props.from : void 0,
      reset,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...overrides
    });
  }
}
function createUpdate(props) {
  const { to: to22, from } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to22))
    findDefined(to22, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update22 = createUpdate(props);
  if (is.und(update22.default)) {
    update22.default = getDefaultProps(update22);
  }
  return update22;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _a, _b, _c, _d;
  (_b = (_a = target.animation)[type]) == null ? void 0 : _b.call(_a, ...args);
  (_d = (_c = target.defaultProps)[type]) == null ? void 0 : _d.call(_c, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    this.springs = {};
    this.queue = [];
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({ default: true, ...props });
    }
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  /** Get the current values of our springs */
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  /** Set the current values without animating. */
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  /** Push an update onto the queue of each value. */
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(props) {
    let { queue } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  /** @internal */
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  /** Freeze the active animation in time */
  pause(keys) {
    if (is.und(keys)) {
      this.start({ pause: true });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(keys) {
    if (is.und(keys)) {
      this.start({ pause: false });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart, onChange, onRest } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then(
    (results) => getCombinedResult(ctrl, results)
  );
}
async function flushUpdate(ctrl, props, isLoop) {
  const { keys, to: to22, from, loop: loop2, onRest, onResolve } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to22 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to22) || is.fun(to22) ? to22 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({ finished, cancelled }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map(
    (key) => ctrl.springs[key].start(props)
  );
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(
      scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(
                runAsync(
                  asyncTo,
                  props2,
                  state,
                  ctrl
                )
              );
            }
          }
        }
      })
    );
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to22);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = { ...ctrl.springs };
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = { ...props2, to: void 0 };
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = (0, import_react11.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return React2.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React2.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i3) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = _getProps(props, ctrl, i3);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i3 = current.indexOf(ctrl);
    if (~i3)
      current.splice(i3, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i3) => {
      const update22 = is.fun(values) ? values(i3, ctrl) : values;
      if (update22) {
        ctrl.set(update22);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i3) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = this._getProps(props, ctrl, i3);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i3) => ctrl.update(this._getProps(props, ctrl, i3)));
    return this;
  };
  const _getProps = function(arg, ctrl, index2) {
    return is.fun(arg) ? arg(index2, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0, import_react10.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const layoutId = (0, import_react10.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0, import_react10.useMemo)(
    () => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }),
    []
  );
  const ctrls = (0, import_react10.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0, import_react10.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, import_react10.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i3 = startIndex; i3 < endIndex; i3++) {
      const ctrl = ctrls.current[i3] || (ctrls.current[i3] = new Controller(null, state.flush));
      const update22 = propsFn ? propsFn(i3, ctrl) : props[i3];
      if (update22) {
        updates[i3] = declareUpdate(update22);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i3) => getSprings(ctrl, updates[i3]));
  const context = (0, import_react10.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const { queue } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i3) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({ default: context });
      }
      const update22 = updates[i3];
      if (update22) {
        replaceRef(ctrl, update22.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update22);
        } else {
          ctrl.start(update22);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x4) => ({ ...x4 }));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(
    1,
    isFn ? props : [props],
    isFn ? deps || [] : deps
  );
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort: sort2,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0, import_react13.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = (0, import_react13.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(transitions, (t6) => {
      ref == null ? void 0 : ref.add(t6.ctrl);
      t6.ctrl.ref = ref;
    });
    return () => {
      each(usedTransitions.current, (t6) => {
        if (t6.expired) {
          clearTimeout(t6.expirationId);
        }
        detachRefs(t6.ctrl, ref);
        t6.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect(
    () => each(expired, ({ ctrl, item, key }) => {
      detachRefs(ctrl, ref);
      callProp(onDestroyed, item, key);
    })
  );
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t6, i3) => {
      if (t6.expired) {
        clearTimeout(t6.expirationId);
        expired.push(t6);
      } else {
        i3 = reused[i3] = keys.indexOf(t6.key);
        if (~i3)
          transitions[i3] = t6;
      }
    });
  each(items, (item, i3) => {
    if (!transitions[i3]) {
      transitions[i3] = {
        key: keys[i3],
        item,
        phase: "mount",
        ctrl: new Controller()
      };
      transitions[i3].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i3 = -1;
    const { leave } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t6 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i3 = transitions.indexOf(t6);
        transitions[i3] = { ...t6, item: items[keyIndex] };
      } else if (leave) {
        transitions.splice(++i3, 0, t6);
      }
    });
  }
  if (is.fun(sort2)) {
    transitions.sort((a3, b3) => sort2(a3.item, b3.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = (0, import_react13.useRef)(/* @__PURE__ */ new Map());
  const forceChange = (0, import_react13.useRef)(false);
  each(transitions, (t6, i3) => {
    const key = t6.key;
    const prevPhase = t6.phase;
    const p3 = propsFn ? propsFn() : props;
    let to22;
    let phase;
    const propsDelay = callProp(p3.delay || 0, key);
    if (prevPhase == "mount") {
      to22 = p3.enter;
      phase = "enter";
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != "leave") {
        if (isLeave) {
          to22 = p3.leave;
          phase = "leave";
        } else if (to22 = p3.update) {
          phase = "update";
        } else
          return;
      } else if (!isLeave) {
        to22 = p3.enter;
        phase = "enter";
      } else
        return;
    }
    to22 = callProp(to22, t6.item, i3);
    to22 = is.obj(to22) ? inferTo(to22) : { to: to22 };
    if (!to22.config) {
      const config2 = propsConfig || defaultProps.config;
      to22.config = callProp(config2, t6.item, i3, phase);
    }
    delay += trail;
    const payload = {
      ...defaultProps,
      // we need to add our props.delay value you here.
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p3.immediate,
      // This prevents implied resets.
      reset: false,
      // Merge any phase-specific props.
      ...to22
    };
    if (phase == "enter" && is.und(payload.from)) {
      const p22 = propsFn ? propsFn() : props;
      const from = is.und(p22.initial) || prevTransitions ? p22.from : p22.initial;
      payload.from = callProp(from, t6.item, i3);
    }
    const { onResolve } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t22 = transitions2.find((t32) => t32.key === key);
      if (!t22)
        return;
      if (result.cancelled && t22.phase != "update") {
        return;
      }
      if (t22.ctrl.idle) {
        const idle = transitions2.every((t32) => t32.ctrl.idle);
        if (t22.phase == "leave") {
          const expiry = callProp(expires, t22.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t22.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t22.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t32) => t32.expired)) {
          exitingTransitions.current.delete(t22);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t6.ctrl, payload);
    if (phase === "leave" && exitBeforeEnter) {
      exitingTransitions.current.set(t6, { phase, springs, payload });
    } else {
      changes.set(t6, { phase, springs, payload });
    }
  });
  const context = (0, import_react13.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    if (hasContext) {
      each(transitions, (t6) => {
        t6.ctrl.start({ default: context });
      });
    }
  }, [context]);
  each(changes, (_, t6) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t6.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect(
    () => {
      each(
        exitingTransitions.current.size ? exitingTransitions.current : changes,
        ({ phase, payload }, t6) => {
          const { ctrl } = t6;
          t6.phase = phase;
          ref == null ? void 0 : ref.add(ctrl);
          if (hasContext && phase == "enter") {
            ctrl.start({ default: context });
          }
          if (payload) {
            replaceRef(ctrl, payload.ref);
            if ((ctrl.ref || ref) && !forceChange.current) {
              ctrl.update(payload);
            } else {
              ctrl.start(payload);
              if (forceChange.current) {
                forceChange.current = false;
              }
            }
          }
        }
      );
    },
    reset ? void 0 : deps
  );
  const renderTransitions = (render) => React22.createElement(React22.Fragment, null, transitions.map((t6, i3) => {
    const { springs } = changes.get(t6) || t6.ctrl;
    const elem = render({ ...springs }, t6.item, t6, i3);
    return elem && elem.type ? React22.createElement(
      elem.type,
      {
        ...elem.props,
        key: is.str(t6.key) || is.num(t6.key) ? t6.key : t6.ctrl.id,
        ref: elem.ref
      }
    ) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t6 = prevTransitions && prevTransitions.find(
        (t22) => t22.item === item && t22.phase !== "leave" && !reused.has(t22)
      );
      if (t6) {
        reused.add(t6);
        return t6.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    this.idle = true;
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self2) {
  if (!self2.idle) {
    self2.idle = true;
    each(getPayload(self2), (node) => {
      node.done = true;
    });
    callFluidObservers(self2, {
      type: "idle",
      parent: self2
    });
  }
}
var to2 = (source, ...args) => new Interpolation(source, args);
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const {
    className,
    style,
    children,
    scrollTop,
    scrollLeft,
    viewBox,
    ...attributes
  } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n3) => "-" + n3.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i3) => {
    instance.setAttribute(name, values[i3]);
  });
  if (className !== void 0) {
    instance.className = className;
  }
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit2) => is.num(value) && value !== 0 ? value + unit2 : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v4) => isValueIdentity(v4, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x: x4, y: y4, z: z3, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x4 || y4 || z3) {
      inputs.push([x4 || 0, y4 || 0, z3 || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v4) => addUnit(v4, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit2 = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x22, y22, z22, deg]) => [
            `rotate3d(${x22},${y22},${z22},${addUnit(deg, unit2)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v4) => addUnit(v4, unit2)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity5 = true;
    each(this.inputs, (input, i3) => {
      const arg1 = getFluidValue(input[0]);
      const [t6, id] = this.transforms[i3](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t6;
      identity5 = identity5 && id;
    });
    return identity5 ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count2) {
    if (count2 == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count2) {
    if (count2 == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = host.animated;

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_react16 = __toESM(require_react());

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_react15 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_merge2 = __toESM(require_merge());
var import_get = __toESM(require_get());
var import_set = __toESM(require_set());

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m4, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m4 = reHex.exec(format2)) ? (l3 = m4[1].length, m4 = parseInt(m4[1], 16), l3 === 6 ? rgbn(m4) : l3 === 3 ? new Rgb(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l3 === 8 ? rgba2(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l3 === 4 ? rgba2(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger.exec(format2)) ? new Rgb(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent.exec(format2)) ? new Rgb(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger.exec(format2)) ? rgba2(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent.exec(format2)) ? rgba2(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent.exec(format2)) ? hsla2(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent.exec(format2)) ? hsla2(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n3) {
  return new Rgb(n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255, 1);
}
function rgba2(r3, g3, b3, a3) {
  if (a3 <= 0) r3 = g3 = b3 = NaN;
  return new Rgb(r3, g3, b3, a3);
}
function rgbConvert(o3) {
  if (!(o3 instanceof Color)) o3 = color(o3);
  if (!o3) return new Rgb();
  o3 = o3.rgb();
  return new Rgb(o3.r, o3.g, o3.b, o3.opacity);
}
function rgb2(r3, g3, b3, opacity) {
  return arguments.length === 1 ? rgbConvert(r3) : new Rgb(r3, g3, b3, opacity == null ? 1 : opacity);
}
function Rgb(r3, g3, b3, opacity) {
  this.r = +r3;
  this.g = +g3;
  this.b = +b3;
  this.opacity = +opacity;
}
define_default(Rgb, rgb2, extend(Color, {
  brighter(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
  },
  darker(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a3 = clampa(this.opacity);
  return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla2(h2, s4, l3, a3) {
  if (a3 <= 0) h2 = s4 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1) h2 = s4 = NaN;
  else if (s4 <= 0) h2 = NaN;
  return new Hsl(h2, s4, l3, a3);
}
function hslConvert(o3) {
  if (o3 instanceof Hsl) return new Hsl(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Color)) o3 = color(o3);
  if (!o3) return new Hsl();
  if (o3 instanceof Hsl) return o3;
  o3 = o3.rgb();
  var r3 = o3.r / 255, g3 = o3.g / 255, b3 = o3.b / 255, min3 = Math.min(r3, g3, b3), max3 = Math.max(r3, g3, b3), h2 = NaN, s4 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s4) {
    if (r3 === max3) h2 = (g3 - b3) / s4 + (g3 < b3) * 6;
    else if (g3 === max3) h2 = (b3 - r3) / s4 + 2;
    else h2 = (r3 - g3) / s4 + 4;
    s4 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h2 *= 60;
  } else {
    s4 = l3 > 0 && l3 < 1 ? 0 : h2;
  }
  return new Hsl(h2, s4, l3, o3.opacity);
}
function hsl2(h2, s4, l3, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s4, l3, opacity == null ? 1 : opacity);
}
function Hsl(h2, s4, l3, opacity) {
  this.h = +h2;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Hsl, hsl2, extend(Color, {
  brighter(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Hsl(this.h, this.s, this.l * k4, this.opacity);
  },
  darker(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Hsl(this.h, this.s, this.l * k4, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s4 = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s4, m1 = 2 * l3 - m22;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m22),
      hsl2rgb(h2, m1, m22),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m22),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m22) {
  return (h2 < 60 ? m1 + (m22 - m1) * h2 / 60 : h2 < 180 ? m22 : h2 < 240 ? m1 + (m22 - m1) * (240 - h2) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o3) {
  if (o3 instanceof Lab) return new Lab(o3.l, o3.a, o3.b, o3.opacity);
  if (o3 instanceof Hcl) return hcl2lab(o3);
  if (!(o3 instanceof Rgb)) o3 = rgbConvert(o3);
  var r3 = rgb2lrgb(o3.r), g3 = rgb2lrgb(o3.g), b3 = rgb2lrgb(o3.b), y4 = xyz2lab((0.2225045 * r3 + 0.7168786 * g3 + 0.0606169 * b3) / Yn), x4, z3;
  if (r3 === g3 && g3 === b3) x4 = z3 = y4;
  else {
    x4 = xyz2lab((0.4360747 * r3 + 0.3850649 * g3 + 0.1430804 * b3) / Xn);
    z3 = xyz2lab((0.0139322 * r3 + 0.0971045 * g3 + 0.7141733 * b3) / Zn);
  }
  return new Lab(116 * y4 - 16, 500 * (x4 - y4), 200 * (y4 - z3), o3.opacity);
}
function lab(l3, a3, b3, opacity) {
  return arguments.length === 1 ? labConvert(l3) : new Lab(l3, a3, b3, opacity == null ? 1 : opacity);
}
function Lab(l3, a3, b3, opacity) {
  this.l = +l3;
  this.a = +a3;
  this.b = +b3;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k4) {
    return new Lab(this.l + K * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
  },
  darker(k4) {
    return new Lab(this.l - K * (k4 == null ? 1 : k4), this.a, this.b, this.opacity);
  },
  rgb() {
    var y4 = (this.l + 16) / 116, x4 = isNaN(this.a) ? y4 : y4 + this.a / 500, z3 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x4 = Xn * lab2xyz(x4);
    y4 = Yn * lab2xyz(y4);
    z3 = Zn * lab2xyz(z3);
    return new Rgb(
      lrgb2rgb(3.1338561 * x4 - 1.6168667 * y4 - 0.4906146 * z3),
      lrgb2rgb(-0.9787684 * x4 + 1.9161415 * y4 + 0.033454 * z3),
      lrgb2rgb(0.0719453 * x4 - 0.2289914 * y4 + 1.4052427 * z3),
      this.opacity
    );
  }
}));
function xyz2lab(t6) {
  return t6 > t3 ? Math.pow(t6, 1 / 3) : t6 / t2 + t0;
}
function lab2xyz(t6) {
  return t6 > t1 ? t6 * t6 * t6 : t2 * (t6 - t0);
}
function lrgb2rgb(x4) {
  return 255 * (x4 <= 31308e-7 ? 12.92 * x4 : 1.055 * Math.pow(x4, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x4) {
  return (x4 /= 255) <= 0.04045 ? x4 / 12.92 : Math.pow((x4 + 0.055) / 1.055, 2.4);
}
function hclConvert(o3) {
  if (o3 instanceof Hcl) return new Hcl(o3.h, o3.c, o3.l, o3.opacity);
  if (!(o3 instanceof Lab)) o3 = labConvert(o3);
  if (o3.a === 0 && o3.b === 0) return new Hcl(NaN, 0 < o3.l && o3.l < 100 ? 0 : NaN, o3.l, o3.opacity);
  var h2 = Math.atan2(o3.b, o3.a) * degrees;
  return new Hcl(h2 < 0 ? h2 + 360 : h2, Math.sqrt(o3.a * o3.a + o3.b * o3.b), o3.l, o3.opacity);
}
function hcl(h2, c9, l3, opacity) {
  return arguments.length === 1 ? hclConvert(h2) : new Hcl(h2, c9, l3, opacity == null ? 1 : opacity);
}
function Hcl(h2, c9, l3, opacity) {
  this.h = +h2;
  this.c = +c9;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab(o3) {
  if (isNaN(o3.h)) return new Lab(o3.l, 0, 0, o3.opacity);
  var h2 = o3.h * radians;
  return new Lab(o3.l, Math.cos(h2) * o3.c, Math.sin(h2) * o3.c, o3.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k4) {
    return new Hcl(this.h, this.c, this.l + K * (k4 == null ? 1 : k4), this.opacity);
  },
  darker(k4) {
    return new Hcl(this.h, this.c, this.l - K * (k4 == null ? 1 : k4), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o3) {
  if (o3 instanceof Cubehelix) return new Cubehelix(o3.h, o3.s, o3.l, o3.opacity);
  if (!(o3 instanceof Rgb)) o3 = rgbConvert(o3);
  var r3 = o3.r / 255, g3 = o3.g / 255, b3 = o3.b / 255, l3 = (BC_DA * b3 + ED * r3 - EB * g3) / (BC_DA + ED - EB), bl = b3 - l3, k4 = (E * (g3 - l3) - C * bl) / D, s4 = Math.sqrt(k4 * k4 + bl * bl) / (E * l3 * (1 - l3)), h2 = s4 ? Math.atan2(k4, bl) * degrees - 120 : NaN;
  return new Cubehelix(h2 < 0 ? h2 + 360 : h2, s4, l3, o3.opacity);
}
function cubehelix(h2, s4, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h2) : new Cubehelix(h2, s4, l3, opacity == null ? 1 : opacity);
}
function Cubehelix(h2, s4, l3, opacity) {
  this.h = +h2;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k4) {
    k4 = k4 == null ? brighter : Math.pow(brighter, k4);
    return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
  },
  darker(k4) {
    k4 = k4 == null ? darker : Math.pow(darker, k4);
    return new Cubehelix(this.h, this.s, this.l * k4, this.opacity);
  },
  rgb() {
    var h2 = isNaN(this.h) ? 0 : (this.h + 120) * radians, l3 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh2 = Math.cos(h2), sinh2 = Math.sin(h2);
    return new Rgb(
      255 * (l3 + a3 * (A * cosh2 + B * sinh2)),
      255 * (l3 + a3 * (C * cosh2 + D * sinh2)),
      255 * (l3 + a3 * (E * cosh2)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t14, v0, v1, v22, v32) {
  var t22 = t14 * t14, t32 = t22 * t14;
  return ((1 - 3 * t14 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t14 + 3 * t22 - 3 * t32) * v22 + t32 * v32) / 6;
}
function basis_default(values) {
  var n3 = values.length - 1;
  return function(t6) {
    var i3 = t6 <= 0 ? t6 = 0 : t6 >= 1 ? (t6 = 1, n3 - 1) : Math.floor(t6 * n3), v1 = values[i3], v22 = values[i3 + 1], v0 = i3 > 0 ? values[i3 - 1] : 2 * v1 - v22, v32 = i3 < n3 - 1 ? values[i3 + 2] : 2 * v22 - v1;
    return basis((t6 - i3 / n3) * n3, v0, v1, v22, v32);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n3 = values.length;
  return function(t6) {
    var i3 = Math.floor(((t6 %= 1) < 0 ? ++t6 : t6) * n3), v0 = values[(i3 + n3 - 1) % n3], v1 = values[i3 % n3], v22 = values[(i3 + 1) % n3], v32 = values[(i3 + 2) % n3];
    return basis((t6 - i3 / n3) * n3, v0, v1, v22, v32);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default = (x4) => () => x4;

// node_modules/d3-interpolate/src/color.js
function linear(a3, d3) {
  return function(t6) {
    return a3 + t6 * d3;
  };
}
function exponential(a3, b3, y4) {
  return a3 = Math.pow(a3, y4), b3 = Math.pow(b3, y4) - a3, y4 = 1 / y4, function(t6) {
    return Math.pow(a3 + t6 * b3, y4);
  };
}
function hue(a3, b3) {
  var d3 = b3 - a3;
  return d3 ? linear(a3, d3 > 180 || d3 < -180 ? d3 - 360 * Math.round(d3 / 360) : d3) : constant_default(isNaN(a3) ? b3 : a3);
}
function gamma(y4) {
  return (y4 = +y4) === 1 ? nogamma : function(a3, b3) {
    return b3 - a3 ? exponential(a3, b3, y4) : constant_default(isNaN(a3) ? b3 : a3);
  };
}
function nogamma(a3, b3) {
  var d3 = b3 - a3;
  return d3 ? linear(a3, d3) : constant_default(isNaN(a3) ? b3 : a3);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y4) {
  var color2 = gamma(y4);
  function rgb3(start2, end) {
    var r3 = color2((start2 = rgb2(start2)).r, (end = rgb2(end)).r), g3 = color2(start2.g, end.g), b3 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t6) {
      start2.r = r3(t6);
      start2.g = g3(t6);
      start2.b = b3(t6);
      start2.opacity = opacity(t6);
      return start2 + "";
    };
  }
  rgb3.gamma = rgbGamma;
  return rgb3;
}(1);
function rgbSpline(spline) {
  return function(colors3) {
    var n3 = colors3.length, r3 = new Array(n3), g3 = new Array(n3), b3 = new Array(n3), i3, color2;
    for (i3 = 0; i3 < n3; ++i3) {
      color2 = rgb2(colors3[i3]);
      r3[i3] = color2.r || 0;
      g3[i3] = color2.g || 0;
      b3[i3] = color2.b || 0;
    }
    r3 = spline(r3);
    g3 = spline(g3);
    b3 = spline(b3);
    color2.opacity = 1;
    return function(t6) {
      color2.r = r3(t6);
      color2.g = g3(t6);
      color2.b = b3(t6);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a3, b3) {
  if (!b3) b3 = [];
  var n3 = a3 ? Math.min(b3.length, a3.length) : 0, c9 = b3.slice(), i3;
  return function(t6) {
    for (i3 = 0; i3 < n3; ++i3) c9[i3] = a3[i3] * (1 - t6) + b3[i3] * t6;
    return c9;
  };
}
function isNumberArray(x4) {
  return ArrayBuffer.isView(x4) && !(x4 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a3, b3) {
  var nb = b3 ? b3.length : 0, na = a3 ? Math.min(nb, a3.length) : 0, x4 = new Array(na), c9 = new Array(nb), i3;
  for (i3 = 0; i3 < na; ++i3) x4[i3] = value_default(a3[i3], b3[i3]);
  for (; i3 < nb; ++i3) c9[i3] = b3[i3];
  return function(t6) {
    for (i3 = 0; i3 < na; ++i3) c9[i3] = x4[i3](t6);
    return c9;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a3, b3) {
  var d3 = /* @__PURE__ */ new Date();
  return a3 = +a3, b3 = +b3, function(t6) {
    return d3.setTime(a3 * (1 - t6) + b3 * t6), d3;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a3, b3) {
  return a3 = +a3, b3 = +b3, function(t6) {
    return a3 * (1 - t6) + b3 * t6;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a3, b3) {
  var i3 = {}, c9 = {}, k4;
  if (a3 === null || typeof a3 !== "object") a3 = {};
  if (b3 === null || typeof b3 !== "object") b3 = {};
  for (k4 in b3) {
    if (k4 in a3) {
      i3[k4] = value_default(a3[k4], b3[k4]);
    } else {
      c9[k4] = b3[k4];
    }
  }
  return function(t6) {
    for (k4 in i3) c9[k4] = i3[k4](t6);
    return c9;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b3) {
  return function() {
    return b3;
  };
}
function one(b3) {
  return function(t6) {
    return b3(t6) + "";
  };
}
function string_default(a3, b3) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i3 = -1, s4 = [], q2 = [];
  a3 = a3 + "", b3 = b3 + "";
  while ((am = reA.exec(a3)) && (bm = reB.exec(b3))) {
    if ((bs = bm.index) > bi) {
      bs = b3.slice(bi, bs);
      if (s4[i3]) s4[i3] += bs;
      else s4[++i3] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s4[i3]) s4[i3] += bm;
      else s4[++i3] = bm;
    } else {
      s4[++i3] = null;
      q2.push({ i: i3, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b3.length) {
    bs = b3.slice(bi);
    if (s4[i3]) s4[i3] += bs;
    else s4[++i3] = bs;
  }
  return s4.length < 2 ? q2[0] ? one(q2[0].x) : zero(b3) : (b3 = q2.length, function(t6) {
    for (var i4 = 0, o3; i4 < b3; ++i4) s4[(o3 = q2[i4]).i] = o3.x(t6);
    return s4.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a3, b3) {
  var t6 = typeof b3, c9;
  return b3 == null || t6 === "boolean" ? constant_default(b3) : (t6 === "number" ? number_default : t6 === "string" ? (c9 = color(b3)) ? (b3 = c9, rgb_default) : string_default : b3 instanceof color ? rgb_default : b3 instanceof Date ? date_default : isNumberArray(b3) ? numberArray_default : Array.isArray(b3) ? genericArray : typeof b3.valueOf !== "function" && typeof b3.toString !== "function" || isNaN(b3) ? object_default : number_default)(a3, b3);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a3, b3) {
  return a3 = +a3, b3 = +b3, function(t6) {
    return Math.round(a3 * (1 - t6) + b3 * t6);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a3, b3, c9, d3, e6, f3) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b3 * b3)) a3 /= scaleX, b3 /= scaleX;
  if (skewX = a3 * c9 + b3 * d3) c9 -= a3 * skewX, d3 -= b3 * skewX;
  if (scaleY = Math.sqrt(c9 * c9 + d3 * d3)) c9 /= scaleY, d3 /= scaleY, skewX /= scaleY;
  if (a3 * d3 < b3 * c9) a3 = -a3, b3 = -b3, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e6,
    translateY: f3,
    rotate: Math.atan2(b3, a3) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity : decompose_default(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s4) {
    return s4.length ? s4.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s4, q2) {
    if (xa !== xb || ya !== yb) {
      var i3 = s4.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i3 - 4, x: number_default(xa, xb) }, { i: i3 - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s4.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b3, s4, q2) {
    if (a3 !== b3) {
      if (a3 - b3 > 180) b3 += 360;
      else if (b3 - a3 > 180) a3 += 360;
      q2.push({ i: s4.push(pop(s4) + "rotate(", null, degParen) - 2, x: number_default(a3, b3) });
    } else if (b3) {
      s4.push(pop(s4) + "rotate(" + b3 + degParen);
    }
  }
  function skewX(a3, b3, s4, q2) {
    if (a3 !== b3) {
      q2.push({ i: s4.push(pop(s4) + "skewX(", null, degParen) - 2, x: number_default(a3, b3) });
    } else if (b3) {
      s4.push(pop(s4) + "skewX(" + b3 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s4, q2) {
    if (xa !== xb || ya !== yb) {
      var i3 = s4.push(pop(s4) + "scale(", null, ",", null, ")");
      q2.push({ i: i3 - 4, x: number_default(xa, xb) }, { i: i3 - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s4.push(pop(s4) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b3) {
    var s4 = [], q2 = [];
    a3 = parse(a3), b3 = parse(b3);
    translate(a3.translateX, a3.translateY, b3.translateX, b3.translateY, s4, q2);
    rotate(a3.rotate, b3.rotate, s4, q2);
    skewX(a3.skewX, b3.skewX, s4, q2);
    scale(a3.scaleX, a3.scaleY, b3.scaleX, b3.scaleY, s4, q2);
    a3 = b3 = null;
    return function(t6) {
      var i3 = -1, n3 = q2.length, o3;
      while (++i3 < n3) s4[(o3 = q2[i3]).i] = o3.x(t6);
      return s4.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x4) {
  return ((x4 = Math.exp(x4)) + 1 / x4) / 2;
}
function sinh(x4) {
  return ((x4 = Math.exp(x4)) - 1 / x4) / 2;
}
function tanh(x4) {
  return ((x4 = Math.exp(2 * x4)) - 1) / (x4 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d22 = dx * dx + dy * dy, i3, S2;
    if (d22 < epsilon2) {
      S2 = Math.log(w1 / w0) / rho;
      i3 = function(t6) {
        return [
          ux0 + t6 * dx,
          uy0 + t6 * dy,
          w0 * Math.exp(rho * t6 * S2)
        ];
      };
    } else {
      var d1 = Math.sqrt(d22), b0 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S2 = (r1 - r0) / rho;
      i3 = function(t6) {
        var s4 = t6 * S2, coshr0 = cosh(r0), u3 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s4 + r0) - sinh(r0));
        return [
          ux0 + u3 * dx,
          uy0 + u3 * dy,
          w0 * coshr0 / cosh(rho * s4 + r0)
        ];
      };
    }
    i3.duration = S2 * 1e3 * rho / Math.SQRT2;
    return i3;
  }
  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl3(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hsl2(start2)).h, (end = hsl2(end)).h), s4 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t6) {
      start2.h = h2(t6);
      start2.s = s4(t6);
      start2.l = l3(t6);
      start2.opacity = opacity(t6);
      return start2 + "";
    };
  };
}
var hsl_default = hsl3(hue);
var hslLong = hsl3(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c9 = nogamma(start2.c, end.c), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t6) {
      start2.h = h2(t6);
      start2.c = c9(t6);
      start2.l = l3(t6);
      start2.opacity = opacity(t6);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix3(start2, end) {
      var h2 = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s4 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t6) {
        start2.h = h2(t6);
        start2.s = s4(t6);
        start2.l = l3(Math.pow(t6, y4));
        start2.opacity = opacity(t6);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isString = __toESM(require_isString());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_last = __toESM(require_last());
var import_isArray = __toESM(require_isArray());

// node_modules/d3-array/src/ascending.js
function ascending(a3, b3) {
  return a3 == null || b3 == null ? NaN : a3 < b3 ? -1 : a3 > b3 ? 1 : a3 >= b3 ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a3, b3) {
  return a3 == null || b3 == null ? NaN : b3 < a3 ? -1 : b3 > a3 ? 1 : b3 >= a3 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f3) {
  let compare1, compare2, delta;
  if (f3.length !== 2) {
    compare1 = ascending;
    compare2 = (d3, x4) => ascending(f3(d3), x4);
    delta = (d3, x4) => f3(d3) - x4;
  } else {
    compare1 = f3 === ascending || f3 === descending ? f3 : zero2;
    compare2 = f3;
    delta = f3;
  }
  function left(a3, x4, lo = 0, hi = a3.length) {
    if (lo < hi) {
      if (compare1(x4, x4) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a3[mid], x4) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a3, x4, lo = 0, hi = a3.length) {
    if (lo < hi) {
      if (compare1(x4, x4) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a3[mid], x4) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a3, x4, lo = 0, hi = a3.length) {
    const i3 = left(a3, x4, lo, hi - 1);
    return i3 > lo && delta(a3[i3 - 1], x4) > -delta(a3[i3], x4) ? i3 - 1 : i3;
  }
  return { left, center, right };
}
function zero2() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x4) {
  return x4 === null ? NaN : +x4;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/blur.js
var blur2 = Blur2(blurf);
var blurImage = Blur2(blurfImage);
function Blur2(blur3) {
  return function(data, rx, ry = rx) {
    if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
    if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
    let { data: values, width, height } = data;
    if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
    if (!((height = Math.floor(height !== void 0 ? height : values.length / width)) >= 0)) throw new RangeError("invalid height");
    if (!width || !height || !rx && !ry) return data;
    const blurx = rx && blur3(rx);
    const blury = ry && blur3(ry);
    const temp = values.slice();
    if (blurx && blury) {
      blurh(blurx, temp, values, width, height);
      blurh(blurx, values, temp, width, height);
      blurh(blurx, temp, values, width, height);
      blurv(blury, values, temp, width, height);
      blurv(blury, temp, values, width, height);
      blurv(blury, values, temp, width, height);
    } else if (blurx) {
      blurh(blurx, values, temp, width, height);
      blurh(blurx, temp, values, width, height);
      blurh(blurx, values, temp, width, height);
    } else if (blury) {
      blurv(blury, values, temp, width, height);
      blurv(blury, temp, values, width, height);
      blurv(blury, values, temp, width, height);
    }
    return data;
  };
}
function blurh(blur3, T2, S2, w3, h2) {
  for (let y4 = 0, n3 = w3 * h2; y4 < n3; ) {
    blur3(T2, S2, y4, y4 += w3, 1);
  }
}
function blurv(blur3, T2, S2, w3, h2) {
  for (let x4 = 0, n3 = w3 * h2; x4 < w3; ++x4) {
    blur3(T2, S2, x4, x4 + n3, w3);
  }
}
function blurfImage(radius) {
  const blur3 = blurf(radius);
  return (T2, S2, start2, stop2, step) => {
    start2 <<= 2, stop2 <<= 2, step <<= 2;
    blur3(T2, S2, start2 + 0, stop2 + 0, step);
    blur3(T2, S2, start2 + 1, stop2 + 1, step);
    blur3(T2, S2, start2 + 2, stop2 + 2, step);
    blur3(T2, S2, start2 + 3, stop2 + 3, step);
  };
}
function blurf(radius) {
  const radius0 = Math.floor(radius);
  if (radius0 === radius) return bluri(radius);
  const t6 = radius - radius0;
  const w3 = 2 * radius + 1;
  return (T2, S2, start2, stop2, step) => {
    if (!((stop2 -= step) >= start2)) return;
    let sum3 = radius0 * S2[start2];
    const s0 = step * radius0;
    const s1 = s0 + step;
    for (let i3 = start2, j3 = start2 + s0; i3 < j3; i3 += step) {
      sum3 += S2[Math.min(stop2, i3)];
    }
    for (let i3 = start2, j3 = stop2; i3 <= j3; i3 += step) {
      sum3 += S2[Math.min(stop2, i3 + s0)];
      T2[i3] = (sum3 + t6 * (S2[Math.max(start2, i3 - s1)] + S2[Math.min(stop2, i3 + s1)])) / w3;
      sum3 -= S2[Math.max(start2, i3 - s0)];
    }
  };
}
function bluri(radius) {
  const w3 = 2 * radius + 1;
  return (T2, S2, start2, stop2, step) => {
    if (!((stop2 -= step) >= start2)) return;
    let sum3 = radius * S2[start2];
    const s4 = step * radius;
    for (let i3 = start2, j3 = start2 + s4; i3 < j3; i3 += step) {
      sum3 += S2[Math.min(stop2, i3)];
    }
    for (let i3 = start2, j3 = stop2; i3 <= j3; i3 += step) {
      sum3 += S2[Math.min(stop2, i3 + s4)];
      T2[i3] = sum3 / w3;
      sum3 -= S2[Math.max(start2, i3 - s4)];
    }
  };
}

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop2, count2) {
  const step = (stop2 - start2) / Math.max(0, count2), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i22, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i22 = Math.round(stop2 * inc);
    if (i1 / inc < start2) ++i1;
    if (i22 / inc > stop2) --i22;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i22 = Math.round(stop2 / inc);
    if (i1 * inc < start2) ++i1;
    if (i22 * inc > stop2) --i22;
  }
  if (i22 < i1 && 0.5 <= count2 && count2 < 2) return tickSpec(start2, stop2, count2 * 2);
  return [i1, i22, inc];
}
function ticks(start2, stop2, count2) {
  stop2 = +stop2, start2 = +start2, count2 = +count2;
  if (!(count2 > 0)) return [];
  if (start2 === stop2) return [start2];
  const reverse2 = stop2 < start2, [i1, i22, inc] = reverse2 ? tickSpec(stop2, start2, count2) : tickSpec(start2, stop2, count2);
  if (!(i22 >= i1)) return [];
  const n3 = i22 - i1 + 1, ticks2 = new Array(n3);
  if (reverse2) {
    if (inc < 0) for (let i3 = 0; i3 < n3; ++i3) ticks2[i3] = (i22 - i3) / -inc;
    else for (let i3 = 0; i3 < n3; ++i3) ticks2[i3] = (i22 - i3) * inc;
  } else {
    if (inc < 0) for (let i3 = 0; i3 < n3; ++i3) ticks2[i3] = (i1 + i3) / -inc;
    else for (let i3 = 0; i3 < n3; ++i3) ticks2[i3] = (i1 + i3) * inc;
  }
  return ticks2;
}
function tickIncrement(start2, stop2, count2) {
  stop2 = +stop2, start2 = +start2, count2 = +count2;
  return tickSpec(start2, stop2, count2)[2];
}
function tickStep(start2, stop2, count2) {
  stop2 = +stop2, start2 = +start2, count2 = +count2;
  const reverse2 = stop2 < start2, inc = reverse2 ? tickIncrement(stop2, start2, count2) : tickIncrement(start2, stop2, count2);
  return (reverse2 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/range.js
function range(start2, stop2, step) {
  start2 = +start2, stop2 = +stop2, step = (n3 = arguments.length) < 2 ? (stop2 = start2, start2 = 0, 1) : n3 < 3 ? 1 : +step;
  var i3 = -1, n3 = Math.max(0, Math.ceil((stop2 - start2) / step)) | 0, range2 = new Array(n3);
  while (++i3 < n3) {
    range2[i3] = start2 + i3 * step;
  }
  return range2;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m4 = i1 - (i0 = +i0);
    while (m4) {
      const i3 = random() * m4-- | 0, t6 = array2[m4 + i0];
      array2[m4 + i0] = array2[i3 + i0];
      array2[i3 + i0] = t6;
    }
    return array2;
  };
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d3) {
    let i3 = index2.get(d3);
    if (i3 === void 0) {
      if (unknown !== implicit) return unknown;
      index2.set(d3, i3 = domain.push(d3) - 1);
    }
    return range2[i3 % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index2 = new InternMap();
    for (const value of _) {
      if (index2.has(value)) continue;
      index2.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n3 = domain().length, reverse2 = r1 < r0, start2 = reverse2 ? r1 : r0, stop2 = reverse2 ? r0 : r1;
    step = (stop2 - start2) / Math.max(1, n3 - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start2 += (stop2 - start2 - step * (n3 - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = range(n3).map(function(i3) {
      return start2 + step * i3;
    });
    return ordinalRange(reverse2 ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/src/constant.js
function constants(x4) {
  return function() {
    return x4;
  };
}

// node_modules/d3-scale/src/number.js
function number2(x4) {
  return +x4;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity3(x4) {
  return x4;
}
function normalize(a3, b3) {
  return (b3 -= a3 = +a3) ? function(x4) {
    return (x4 - a3) / b3;
  } : constants(isNaN(b3) ? NaN : 0.5);
}
function clamper(a3, b3) {
  var t6;
  if (a3 > b3) t6 = a3, a3 = b3, b3 = t6;
  return function(x4) {
    return Math.max(a3, Math.min(b3, x4));
  };
}
function bimap(domain, range2, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x4) {
    return r0(d0(x4));
  };
}
function polymap(domain, range2, interpolate2) {
  var j3 = Math.min(domain.length, range2.length) - 1, d3 = new Array(j3), r3 = new Array(j3), i3 = -1;
  if (domain[j3] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i3 < j3) {
    d3[i3] = normalize(domain[i3], domain[i3 + 1]);
    r3[i3] = interpolate2(range2[i3], range2[i3 + 1]);
  }
  return function(x4) {
    var i4 = bisect_default(domain, x4, 1, j3) - 1;
    return r3[i4](d3[i4](x4));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range2 = unit, interpolate2 = value_default, transform, untransform, unknown, clamp2 = identity3, piecewise2, output, input;
  function rescale() {
    var n3 = Math.min(domain.length, range2.length);
    if (clamp2 !== identity3) clamp2 = clamper(domain[0], domain[n3 - 1]);
    piecewise2 = n3 > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x4) {
    return x4 == null || isNaN(x4 = +x4) ? unknown : (output || (output = piecewise2(domain.map(transform), range2, interpolate2)))(transform(clamp2(x4)));
  }
  scale.invert = function(y4) {
    return clamp2(untransform((input || (input = piecewise2(range2, domain.map(transform), number_default)))(y4)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate2 = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp2 = _ ? true : identity3, rescale()) : clamp2 !== identity3;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate2 = _, rescale()) : interpolate2;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t6, u3) {
    transform = t6, untransform = u3;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity3, identity3);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x4) {
  return Math.abs(x4 = Math.round(x4)) >= 1e21 ? x4.toLocaleString("en").replace(/,/g, "") : x4.toString(10);
}
function formatDecimalParts(x4, p3) {
  if ((i3 = (x4 = p3 ? x4.toExponential(p3 - 1) : x4.toExponential()).indexOf("e")) < 0) return null;
  var i3, coefficient = x4.slice(0, i3);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x4.slice(i3 + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x4) {
  return x4 = formatDecimalParts(Math.abs(x4)), x4 ? x4[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i3 = value.length, t6 = [], j3 = 0, g3 = grouping[0], length = 0;
    while (i3 > 0 && g3 > 0) {
      if (length + g3 + 1 > width) g3 = Math.max(1, width - length);
      t6.push(value.substring(i3 -= g3, i3 + g3));
      if ((length += g3 + 1) > width) break;
      g3 = grouping[j3 = (j3 + 1) % grouping.length];
    }
    return t6.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i3) {
      return numerals[+i3];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s4) {
  out: for (var n3 = s4.length, i3 = 1, i0 = -1, i1; i3 < n3; ++i3) {
    switch (s4[i3]) {
      case ".":
        i0 = i1 = i3;
        break;
      case "0":
        if (i0 === 0) i0 = i3;
        i1 = i3;
        break;
      default:
        if (!+s4[i3]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s4.slice(0, i0) + s4.slice(i1 + 1) : s4;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x4, p3) {
  var d3 = formatDecimalParts(x4, p3);
  if (!d3) return x4 + "";
  var coefficient = d3[0], exponent = d3[1], i3 = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n3 = coefficient.length;
  return i3 === n3 ? coefficient : i3 > n3 ? coefficient + new Array(i3 - n3 + 1).join("0") : i3 > 0 ? coefficient.slice(0, i3) + "." + coefficient.slice(i3) : "0." + new Array(1 - i3).join("0") + formatDecimalParts(x4, Math.max(0, p3 + i3 - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x4, p3) {
  var d3 = formatDecimalParts(x4, p3);
  if (!d3) return x4 + "";
  var coefficient = d3[0], exponent = d3[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": function(x4, p3) {
    return (x4 * 100).toFixed(p3);
  },
  "b": function(x4) {
    return Math.round(x4).toString(2);
  },
  "c": function(x4) {
    return x4 + "";
  },
  "d": formatDecimal_default,
  "e": function(x4, p3) {
    return x4.toExponential(p3);
  },
  "f": function(x4, p3) {
    return x4.toFixed(p3);
  },
  "g": function(x4, p3) {
    return x4.toPrecision(p3);
  },
  "o": function(x4) {
    return Math.round(x4).toString(8);
  },
  "p": function(x4, p3) {
    return formatRounded_default(x4 * 100, p3);
  },
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": function(x4) {
    return Math.round(x4).toString(16).toUpperCase();
  },
  "x": function(x4) {
    return Math.round(x4).toString(16);
  }
};

// node_modules/d3-format/src/identity.js
function identity_default(x4) {
  return x4;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes2 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "-" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i3, n3, c9;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes2[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i3 = -1, n3 = value.length;
          while (++i3 < n3) {
            if (c9 = value.charCodeAt(i3), 48 > c9 || c9 > 57) {
              valueSuffix = (c9 === 46 ? decimal + value.slice(i3 + 1) : value.slice(i3)) + valueSuffix;
              value = value.slice(0, i3);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group2(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3) value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f3 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e6 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k4 = Math.pow(10, -e6), prefix2 = prefixes2[8 + e6 / 3];
    return function(value2) {
      return f3(k4 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start2, stop2, count2, specifier) {
  var step = tickStep(start2, stop2, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop2));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop2))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d3 = domain();
    return ticks(d3[0], d3[d3.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d3 = domain();
    return tickFormat(d3[0], d3[d3.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null) count2 = 10;
    var d3 = domain();
    var i0 = 0;
    var i1 = d3.length - 1;
    var start2 = d3[i0];
    var stop2 = d3[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop2 < start2) {
      step = start2, start2 = stop2, stop2 = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start2, stop2, count2);
      if (step === prestep) {
        d3[i0] = start2;
        d3[i1] = stop2;
        return domain(d3);
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop2 = Math.ceil(stop2 / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop2 = Math.floor(stop2 * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice2(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t6;
  if (x1 < x0) {
    t6 = i0, i0 = i1, i1 = t6;
    t6 = x0, x0 = x1, x1 = t6;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x4) {
  return Math.log(x4);
}
function transformExp(x4) {
  return Math.exp(x4);
}
function transformLogn(x4) {
  return -Math.log(-x4);
}
function transformExpn(x4) {
  return -Math.exp(-x4);
}
function pow10(x4) {
  return isFinite(x4) ? +("1e" + x4) : x4 < 0 ? 0 : x4;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x4) => Math.pow(base, x4);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x4) => Math.log(x4) / base);
}
function reflect(f3) {
  return (x4, k4) => -f3(-x4, k4);
}
function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count2) => {
    const d3 = domain();
    let u3 = d3[0];
    let v4 = d3[d3.length - 1];
    const r3 = v4 < u3;
    if (r3) [u3, v4] = [v4, u3];
    let i3 = logs(u3);
    let j3 = logs(v4);
    let k4;
    let t6;
    const n3 = count2 == null ? 10 : +count2;
    let z3 = [];
    if (!(base % 1) && j3 - i3 < n3) {
      i3 = Math.floor(i3), j3 = Math.ceil(j3);
      if (u3 > 0) for (; i3 <= j3; ++i3) {
        for (k4 = 1; k4 < base; ++k4) {
          t6 = i3 < 0 ? k4 / pows(-i3) : k4 * pows(i3);
          if (t6 < u3) continue;
          if (t6 > v4) break;
          z3.push(t6);
        }
      }
      else for (; i3 <= j3; ++i3) {
        for (k4 = base - 1; k4 >= 1; --k4) {
          t6 = i3 > 0 ? k4 / pows(-i3) : k4 * pows(i3);
          if (t6 < u3) continue;
          if (t6 > v4) break;
          z3.push(t6);
        }
      }
      if (z3.length * 2 < n3) z3 = ticks(u3, v4, n3);
    } else {
      z3 = ticks(i3, j3, Math.min(j3 - i3, n3)).map(pows);
    }
    return r3 ? z3.reverse() : z3;
  };
  scale.tickFormat = (count2, specifier) => {
    if (count2 == null) count2 = 10;
    if (specifier == null) specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null) specifier.trim = true;
      specifier = format(specifier);
    }
    if (count2 === Infinity) return specifier;
    const k4 = Math.max(1, base * count2 / scale.ticks().length);
    return (d3) => {
      let i3 = d3 / pows(Math.round(logs(d3)));
      if (i3 * base < base - 0.5) i3 *= base;
      return i3 <= k4 ? specifier(d3) : "";
    };
  };
  scale.nice = () => {
    return domain(nice2(domain(), {
      floor: (x4) => pows(Math.floor(logs(x4))),
      ceil: (x4) => pows(Math.ceil(logs(x4)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer()).domain([1, 10]);
  scale.copy = () => copy(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c9) {
  return function(x4) {
    return Math.sign(x4) * Math.log1p(Math.abs(x4 / c9));
  };
}
function transformSymexp(c9) {
  return function(x4) {
    return Math.sign(x4) * Math.expm1(Math.abs(x4)) * c9;
  };
}
function symlogish(transform) {
  var c9 = 1, scale = transform(transformSymlog(c9), transformSymexp(c9));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c9 = +_), transformSymexp(c9)) : c9;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x0 = 0, x1 = 1, n3 = 1, domain = [0.5], range2 = [0, 1], unknown;
  function scale(x4) {
    return x4 != null && x4 <= x4 ? range2[bisect_default(domain, x4, 0, n3)] : unknown;
  }
  function rescale() {
    var i3 = -1;
    domain = new Array(n3);
    while (++i3 < n3) domain[i3] = ((i3 + 1) * x1 - (i3 - n3) * x0) / (n3 + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n3 = (range2 = Array.from(_)).length - 1, rescale()) : range2.slice();
  };
  scale.invertExtent = function(y4) {
    var i3 = range2.indexOf(y4);
    return i3 < 0 ? [NaN, NaN] : i3 < 1 ? [x0, domain[0]] : i3 >= n3 ? [domain[n3 - 1], x1] : [domain[i3 - 1], domain[i3]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range2).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}

// node_modules/d3-scale/node_modules/d3-time/src/interval.js
var t02 = /* @__PURE__ */ new Date();
var t12 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start2, stop2, step) => {
    const range2 = [];
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0)) return range2;
    let previous;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range2;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval.count = (start2, end) => {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d3) => field(d3) % step === 0 : (d3) => interval.count(0, d3) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-scale/node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start2, end) => {
  return end - start2;
});
millisecond.every = (k4) => {
  k4 = Math.floor(k4);
  if (!isFinite(k4) || !(k4 > 0)) return null;
  if (!(k4 > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k4) * k4);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k4);
  }, (start2, end) => {
    return (end - start2) / k4;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-scale/node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-scale/node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start2, end) => {
  return (end - start2) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-scale/node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-scale/node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-scale/node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-scale/node_modules/d3-time/src/week.js
function timeWeekday(i3) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i3) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start2, end) => {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i3) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i3) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start2, end) => {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-scale/node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start2, end) => {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start2, end) => {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-scale/node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start2, end) => {
  return end.getFullYear() - start2.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k4) => {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k4) * k4);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k4);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start2, end) => {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k4) => {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k4) * k4);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k4);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-scale/node_modules/d3-time/src/ticks.js
function ticker(year2, month2, week, day2, hour2, minute2) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute2, 1, durationMinute],
    [minute2, 5, 5 * durationMinute],
    [minute2, 15, 15 * durationMinute],
    [minute2, 30, 30 * durationMinute],
    [hour2, 1, durationHour],
    [hour2, 3, 3 * durationHour],
    [hour2, 6, 6 * durationHour],
    [hour2, 12, 12 * durationHour],
    [day2, 1, durationDay],
    [day2, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function ticks2(start2, stop2, count2) {
    const reverse2 = stop2 < start2;
    if (reverse2) [start2, stop2] = [stop2, start2];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop2, count2);
    const ticks3 = interval ? interval.range(start2, +stop2 + 1) : [];
    return reverse2 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop2, count2) {
    const target = Math.abs(stop2 - start2) / count2;
    const i3 = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i3 === tickIntervals.length) return year2.every(tickStep(start2 / durationYear, stop2 / durationYear, count2));
    if (i3 === 0) return millisecond.every(Math.max(tickStep(start2, stop2, count2), 1));
    const [t6, step] = tickIntervals[target / tickIntervals[i3 - 1][2] < tickIntervals[i3][2] / target ? i3 - 1 : i3];
    return t6.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time/src/interval.js
var t03 = /* @__PURE__ */ new Date();
var t13 = /* @__PURE__ */ new Date();
function newInterval(floori, offseti, count2, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = function(date2) {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = function(date2) {
    var d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = function(date2, step) {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = function(start2, stop2, step) {
    var range2 = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0)) return range2;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range2;
  };
  interval.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval.count = function(start2, end) {
      t03.setTime(+start2), t13.setTime(+end);
      floori(t03), floori(t13);
      return Math.floor(count2(t03, t13));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d3) {
        return field(d3) % step === 0;
      } : function(d3) {
        return interval.count(0, d3) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond2 = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond2.every = function(k4) {
  k4 = Math.floor(k4);
  if (!isFinite(k4) || !(k4 > 0)) return null;
  if (!(k4 > 1)) return millisecond2;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k4) * k4);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k4);
  }, function(start2, end) {
    return (end - start2) / k4;
  });
};
var millisecond_default = millisecond2;
var milliseconds2 = millisecond2.range;

// node_modules/d3-time/src/duration.js
var durationSecond2 = 1e3;
var durationMinute2 = 6e4;
var durationHour2 = 36e5;
var durationDay2 = 864e5;
var durationWeek2 = 6048e5;

// node_modules/d3-time/src/second.js
var second2 = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond2);
}, function(start2, end) {
  return (end - start2) / durationSecond2;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second2;
var seconds2 = second2.range;

// node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond2);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond2 - date2.getMinutes() * durationMinute2);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-time/src/day.js
var day = newInterval(function(date2) {
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setDate(date2.getDate() + step);
}, function(start2, end) {
  return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationDay2;
}, function(date2) {
  return date2.getDate() - 1;
});
var day_default = day;
var days = day.range;

// node_modules/d3-time/src/week.js
function weekday(i3) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i3) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationWeek2;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k4) {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k4) * k4);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k4);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute2 = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute2;
var utcMinutes2 = utcMinute2.range;

// node_modules/d3-time/src/utcHour.js
var utcHour2 = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour2;
var utcHours2 = utcHour2.range;

// node_modules/d3-time/src/utcDay.js
var utcDay2 = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay2;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay2;
var utcDays2 = utcDay2.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday2(i3) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i3) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek2;
  });
}
var utcSunday2 = utcWeekday2(0);
var utcMonday2 = utcWeekday2(1);
var utcTuesday2 = utcWeekday2(2);
var utcWednesday2 = utcWeekday2(3);
var utcThursday2 = utcWeekday2(4);
var utcFriday2 = utcWeekday2(5);
var utcSaturday2 = utcWeekday2(6);
var utcSundays2 = utcSunday2.range;
var utcMondays2 = utcMonday2.range;
var utcTuesdays2 = utcTuesday2.range;
var utcWednesdays2 = utcWednesday2.range;
var utcThursdays2 = utcThursday2.range;
var utcFridays2 = utcFriday2.range;
var utcSaturdays2 = utcSaturday2.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth2 = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth2;
var utcMonths2 = utcMonth2.range;

// node_modules/d3-time/src/utcYear.js
var utcYear2 = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear2.every = function(k4) {
  return !isFinite(k4 = Math.floor(k4)) || !(k4 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k4) * k4);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k4);
  });
};
var utcYear_default = utcYear2;
var utcYears2 = utcYear2.range;

// node_modules/d3-time-format/src/locale.js
function localDate(d3) {
  if (0 <= d3.y && d3.y < 100) {
    var date2 = new Date(-1, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L);
    date2.setFullYear(d3.y);
    return date2;
  }
  return new Date(d3.y, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L);
}
function utcDate(d3) {
  if (0 <= d3.y && d3.y < 100) {
    var date2 = new Date(Date.UTC(-1, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L));
    date2.setUTCFullYear(d3.y);
    return date2;
  }
  return new Date(Date.UTC(d3.y, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L));
}
function newDate(y4, m4, d3) {
  return { y: y4, m: m4, d: d3, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i3 = -1, j3 = 0, n3 = specifier.length, c9, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i3 < n3) {
        if (specifier.charCodeAt(i3) === 37) {
          string.push(specifier.slice(j3, i3));
          if ((pad2 = pads[c9 = specifier.charAt(++i3)]) != null) c9 = specifier.charAt(++i3);
          else pad2 = c9 === "e" ? " " : "0";
          if (format2 = formats2[c9]) c9 = format2(date2, pad2);
          string.push(c9);
          j3 = i3 + 1;
        }
      }
      string.push(specifier.slice(j3, i3));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d3 = newDate(1900, void 0, 1), i3 = parseSpecifier(d3, specifier, string += "", 0), week, day2;
      if (i3 != string.length) return null;
      if ("Q" in d3) return new Date(d3.Q);
      if ("s" in d3) return new Date(d3.s * 1e3 + ("L" in d3 ? d3.L : 0));
      if (Z && !("Z" in d3)) d3.Z = 0;
      if ("p" in d3) d3.H = d3.H % 12 + d3.p * 12;
      if (d3.m === void 0) d3.m = "q" in d3 ? d3.q : 0;
      if ("V" in d3) {
        if (d3.V < 1 || d3.V > 53) return null;
        if (!("w" in d3)) d3.w = 1;
        if ("Z" in d3) {
          week = utcDate(newDate(d3.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday2.ceil(week) : utcMonday2(week);
          week = utcDay_default.offset(week, (d3.V - 1) * 7);
          d3.y = week.getUTCFullYear();
          d3.m = week.getUTCMonth();
          d3.d = week.getUTCDate() + (d3.w + 6) % 7;
        } else {
          week = localDate(newDate(d3.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d3.V - 1) * 7);
          d3.y = week.getFullYear();
          d3.m = week.getMonth();
          d3.d = week.getDate() + (d3.w + 6) % 7;
        }
      } else if ("W" in d3 || "U" in d3) {
        if (!("w" in d3)) d3.w = "u" in d3 ? d3.u % 7 : "W" in d3 ? 1 : 0;
        day2 = "Z" in d3 ? utcDate(newDate(d3.y, 0, 1)).getUTCDay() : localDate(newDate(d3.y, 0, 1)).getDay();
        d3.m = 0;
        d3.d = "W" in d3 ? (d3.w + 6) % 7 + d3.W * 7 - (day2 + 5) % 7 : d3.w + d3.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d3) {
        d3.H += d3.Z / 100 | 0;
        d3.M += d3.Z % 100;
        return utcDate(d3);
      }
      return localDate(d3);
    };
  }
  function parseSpecifier(d3, specifier, string, j3) {
    var i3 = 0, n3 = specifier.length, m4 = string.length, c9, parse;
    while (i3 < n3) {
      if (j3 >= m4) return -1;
      c9 = specifier.charCodeAt(i3++);
      if (c9 === 37) {
        c9 = specifier.charAt(i3++);
        parse = parses[c9 in pads ? specifier.charAt(i3++) : c9];
        if (!parse || (j3 = parse(d3, string, j3)) < 0) return -1;
      } else if (c9 != string.charCodeAt(j3++)) {
        return -1;
      }
    }
    return j3;
  }
  function parsePeriod(d3, string, i3) {
    var n3 = periodRe.exec(string.slice(i3));
    return n3 ? (d3.p = periodLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseShortWeekday(d3, string, i3) {
    var n3 = shortWeekdayRe.exec(string.slice(i3));
    return n3 ? (d3.w = shortWeekdayLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseWeekday(d3, string, i3) {
    var n3 = weekdayRe.exec(string.slice(i3));
    return n3 ? (d3.w = weekdayLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseShortMonth(d3, string, i3) {
    var n3 = shortMonthRe.exec(string.slice(i3));
    return n3 ? (d3.m = shortMonthLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseMonth(d3, string, i3) {
    var n3 = monthRe.exec(string.slice(i3));
    return n3 ? (d3.m = monthLookup.get(n3[0].toLowerCase()), i3 + n3[0].length) : -1;
  }
  function parseLocaleDateTime(d3, string, i3) {
    return parseSpecifier(d3, locale_dateTime, string, i3);
  }
  function parseLocaleDate(d3, string, i3) {
    return parseSpecifier(d3, locale_date, string, i3);
  }
  function parseLocaleTime(d3, string, i3) {
    return parseSpecifier(d3, locale_time, string, i3);
  }
  function formatShortWeekday(d3) {
    return locale_shortWeekdays[d3.getDay()];
  }
  function formatWeekday(d3) {
    return locale_weekdays[d3.getDay()];
  }
  function formatShortMonth(d3) {
    return locale_shortMonths[d3.getMonth()];
  }
  function formatMonth(d3) {
    return locale_months[d3.getMonth()];
  }
  function formatPeriod(d3) {
    return locale_periods[+(d3.getHours() >= 12)];
  }
  function formatQuarter(d3) {
    return 1 + ~~(d3.getMonth() / 3);
  }
  function formatUTCShortWeekday(d3) {
    return locale_shortWeekdays[d3.getUTCDay()];
  }
  function formatUTCWeekday(d3) {
    return locale_weekdays[d3.getUTCDay()];
  }
  function formatUTCShortMonth(d3) {
    return locale_shortMonths[d3.getUTCMonth()];
  }
  function formatUTCMonth(d3) {
    return locale_months[d3.getUTCMonth()];
  }
  function formatUTCPeriod(d3) {
    return locale_periods[+(d3.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d3) {
    return 1 + ~~(d3.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f3 = newFormat(specifier += "", formats);
      f3.toString = function() {
        return specifier;
      };
      return f3;
    },
    parse: function(specifier) {
      var p3 = newParse(specifier += "", false);
      p3.toString = function() {
        return specifier;
      };
      return p3;
    },
    utcFormat: function(specifier) {
      var f3 = newFormat(specifier += "", utcFormats);
      f3.toString = function() {
        return specifier;
      };
      return f3;
    },
    utcParse: function(specifier) {
      var p3 = newParse(specifier += "", true);
      p3.toString = function() {
        return specifier;
      };
      return p3;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s4) {
  return s4.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i3) => [name.toLowerCase(), i3]));
}
function parseWeekdayNumberSunday(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d3.w = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekdayNumberMonday(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d3.u = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberSunday(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.U = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberISO(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.V = +n3[0], i3 + n3[0].length) : -1;
}
function parseWeekNumberMonday(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.W = +n3[0], i3 + n3[0].length) : -1;
}
function parseFullYear(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 4));
  return n3 ? (d3.y = +n3[0], i3 + n3[0].length) : -1;
}
function parseYear(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.y = +n3[0] + (+n3[0] > 68 ? 1900 : 2e3), i3 + n3[0].length) : -1;
}
function parseZone(d3, string, i3) {
  var n3 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i3, i3 + 6));
  return n3 ? (d3.Z = n3[1] ? 0 : -(n3[2] + (n3[3] || "00")), i3 + n3[0].length) : -1;
}
function parseQuarter(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 1));
  return n3 ? (d3.q = n3[0] * 3 - 3, i3 + n3[0].length) : -1;
}
function parseMonthNumber(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.m = n3[0] - 1, i3 + n3[0].length) : -1;
}
function parseDayOfMonth(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.d = +n3[0], i3 + n3[0].length) : -1;
}
function parseDayOfYear(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 3));
  return n3 ? (d3.m = 0, d3.d = +n3[0], i3 + n3[0].length) : -1;
}
function parseHour24(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.H = +n3[0], i3 + n3[0].length) : -1;
}
function parseMinutes(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.M = +n3[0], i3 + n3[0].length) : -1;
}
function parseSeconds(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 2));
  return n3 ? (d3.S = +n3[0], i3 + n3[0].length) : -1;
}
function parseMilliseconds(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 3));
  return n3 ? (d3.L = +n3[0], i3 + n3[0].length) : -1;
}
function parseMicroseconds(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3, i3 + 6));
  return n3 ? (d3.L = Math.floor(n3[0] / 1e3), i3 + n3[0].length) : -1;
}
function parseLiteralPercent(d3, string, i3) {
  var n3 = percentRe.exec(string.slice(i3, i3 + 1));
  return n3 ? i3 + n3[0].length : -1;
}
function parseUnixTimestamp(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3));
  return n3 ? (d3.Q = +n3[0], i3 + n3[0].length) : -1;
}
function parseUnixTimestampSeconds(d3, string, i3) {
  var n3 = numberRe.exec(string.slice(i3));
  return n3 ? (d3.s = +n3[0], i3 + n3[0].length) : -1;
}
function formatDayOfMonth(d3, p3) {
  return pad(d3.getDate(), p3, 2);
}
function formatHour24(d3, p3) {
  return pad(d3.getHours(), p3, 2);
}
function formatHour12(d3, p3) {
  return pad(d3.getHours() % 12 || 12, p3, 2);
}
function formatDayOfYear(d3, p3) {
  return pad(1 + day_default.count(year_default(d3), d3), p3, 3);
}
function formatMilliseconds(d3, p3) {
  return pad(d3.getMilliseconds(), p3, 3);
}
function formatMicroseconds(d3, p3) {
  return formatMilliseconds(d3, p3) + "000";
}
function formatMonthNumber(d3, p3) {
  return pad(d3.getMonth() + 1, p3, 2);
}
function formatMinutes(d3, p3) {
  return pad(d3.getMinutes(), p3, 2);
}
function formatSeconds(d3, p3) {
  return pad(d3.getSeconds(), p3, 2);
}
function formatWeekdayNumberMonday(d3) {
  var day2 = d3.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d3, p3) {
  return pad(sunday.count(year_default(d3) - 1, d3), p3, 2);
}
function dISO(d3) {
  var day2 = d3.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d3) : thursday.ceil(d3);
}
function formatWeekNumberISO(d3, p3) {
  d3 = dISO(d3);
  return pad(thursday.count(year_default(d3), d3) + (year_default(d3).getDay() === 4), p3, 2);
}
function formatWeekdayNumberSunday(d3) {
  return d3.getDay();
}
function formatWeekNumberMonday(d3, p3) {
  return pad(monday.count(year_default(d3) - 1, d3), p3, 2);
}
function formatYear(d3, p3) {
  return pad(d3.getFullYear() % 100, p3, 2);
}
function formatYearISO(d3, p3) {
  d3 = dISO(d3);
  return pad(d3.getFullYear() % 100, p3, 2);
}
function formatFullYear(d3, p3) {
  return pad(d3.getFullYear() % 1e4, p3, 4);
}
function formatFullYearISO(d3, p3) {
  var day2 = d3.getDay();
  d3 = day2 >= 4 || day2 === 0 ? thursday(d3) : thursday.ceil(d3);
  return pad(d3.getFullYear() % 1e4, p3, 4);
}
function formatZone(d3) {
  var z3 = d3.getTimezoneOffset();
  return (z3 > 0 ? "-" : (z3 *= -1, "+")) + pad(z3 / 60 | 0, "0", 2) + pad(z3 % 60, "0", 2);
}
function formatUTCDayOfMonth(d3, p3) {
  return pad(d3.getUTCDate(), p3, 2);
}
function formatUTCHour24(d3, p3) {
  return pad(d3.getUTCHours(), p3, 2);
}
function formatUTCHour12(d3, p3) {
  return pad(d3.getUTCHours() % 12 || 12, p3, 2);
}
function formatUTCDayOfYear(d3, p3) {
  return pad(1 + utcDay_default.count(utcYear_default(d3), d3), p3, 3);
}
function formatUTCMilliseconds(d3, p3) {
  return pad(d3.getUTCMilliseconds(), p3, 3);
}
function formatUTCMicroseconds(d3, p3) {
  return formatUTCMilliseconds(d3, p3) + "000";
}
function formatUTCMonthNumber(d3, p3) {
  return pad(d3.getUTCMonth() + 1, p3, 2);
}
function formatUTCMinutes(d3, p3) {
  return pad(d3.getUTCMinutes(), p3, 2);
}
function formatUTCSeconds(d3, p3) {
  return pad(d3.getUTCSeconds(), p3, 2);
}
function formatUTCWeekdayNumberMonday(d3) {
  var dow = d3.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d3, p3) {
  return pad(utcSunday2.count(utcYear_default(d3) - 1, d3), p3, 2);
}
function UTCdISO(d3) {
  var day2 = d3.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday2(d3) : utcThursday2.ceil(d3);
}
function formatUTCWeekNumberISO(d3, p3) {
  d3 = UTCdISO(d3);
  return pad(utcThursday2.count(utcYear_default(d3), d3) + (utcYear_default(d3).getUTCDay() === 4), p3, 2);
}
function formatUTCWeekdayNumberSunday(d3) {
  return d3.getUTCDay();
}
function formatUTCWeekNumberMonday(d3, p3) {
  return pad(utcMonday2.count(utcYear_default(d3) - 1, d3), p3, 2);
}
function formatUTCYear(d3, p3) {
  return pad(d3.getUTCFullYear() % 100, p3, 2);
}
function formatUTCYearISO(d3, p3) {
  d3 = UTCdISO(d3);
  return pad(d3.getUTCFullYear() % 100, p3, 2);
}
function formatUTCFullYear(d3, p3) {
  return pad(d3.getUTCFullYear() % 1e4, p3, 4);
}
function formatUTCFullYearISO(d3, p3) {
  var day2 = d3.getUTCDay();
  d3 = day2 >= 4 || day2 === 0 ? utcThursday2(d3) : utcThursday2.ceil(d3);
  return pad(d3.getUTCFullYear() % 1e4, p3, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d3) {
  return +d3;
}
function formatUnixTimestampSeconds(d3) {
  return Math.floor(+d3 / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/d3-scale/src/time.js
function date(t6) {
  return new Date(t6);
}
function number3(t6) {
  return t6 instanceof Date ? +t6 : +/* @__PURE__ */ new Date(+t6);
}
function calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second3, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second3(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y4) {
    return new Date(invert(y4));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d3 = domain();
    return ticks2(d3[0], d3[d3.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d3 = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d3[0], d3[d3.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice2(d3, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year2, month2, week, day2, hour2, minute2, second3, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n3 = specifier.length / 6 | 0, colors3 = new Array(n3), i3 = 0;
  while (i3 < n3) colors3[i3] = "#" + specifier.slice(i3 * 6, ++i3 * 6);
  return colors3;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t6) {
  t6 = Math.max(0, Math.min(1, t6));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t6 * (35.34 - t6 * (2381.73 - t6 * (6402.7 - t6 * (7024.72 - t6 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t6 * (170.73 + t6 * (52.82 - t6 * (131.46 - t6 * (176.58 - t6 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t6 * (442.36 - t6 * (2482.43 - t6 * (6167.24 - t6 * (6614.94 - t6 * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();
function rainbow_default(t6) {
  if (t6 < 0 || t6 > 1) t6 -= Math.floor(t6);
  var ts2 = Math.abs(t6 - 0.5);
  c.h = 360 * t6 - 100;
  c.s = 1.5 - 1.5 * ts2;
  c.l = 0.8 - 0.9 * ts2;
  return c + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c6 = rgb2();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;
function sinebow_default(t6) {
  var x4;
  t6 = (0.5 - t6) * Math.PI;
  c6.r = 255 * (x4 = Math.sin(t6)) * x4;
  c6.g = 255 * (x4 = Math.sin(t6 + pi_1_3)) * x4;
  c6.b = 255 * (x4 = Math.sin(t6 + pi_2_3)) * x4;
  return c6 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t6) {
  t6 = Math.max(0, Math.min(1, t6));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t6 * (1172.33 - t6 * (10793.56 - t6 * (33300.12 - t6 * (38394.49 - t6 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t6 * (557.33 + t6 * (1225.33 - t6 * (3574.96 - t6 * (1073.77 + t6 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t6 * (3211.1 - t6 * (15327.97 - t6 * (27814 - t6 * (22569.18 - t6 * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range2) {
  var n3 = range2.length;
  return function(t6) {
    return range2[Math.max(0, Math.min(n3 - 1, Math.floor(t6 * n3)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isFunction = __toESM(require_isFunction());
var import_without = __toESM(require_without());

// node_modules/d3-shape/src/constant.js
function constant_default2(x4) {
  return function constant2() {
    return x4;
  };
}

// node_modules/d3-shape/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var sqrt2 = Math.sqrt;
var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

// node_modules/d3-path/src/path.js
var pi2 = Math.PI;
var tau2 = 2 * pi2;
var epsilon3 = 1e-6;
var tauEpsilon = tau2 - epsilon3;
function append(strings) {
  this._ += strings[0];
  for (let i3 = 1, n3 = strings.length; i3 < n3; ++i3) {
    this._ += arguments[i3] + strings[i3];
  }
}
function appendRound(digits) {
  let d3 = Math.floor(digits);
  if (!(d3 >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d3 > 15) return append;
  const k4 = 10 ** d3;
  return function(strings) {
    this._ += strings[0];
    for (let i3 = 1, n3 = strings.length; i3 < n3; ++i3) {
      this._ += Math.round(arguments[i3] * k4) / k4 + strings[i3];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x4, y4) {
    this._append`M${this._x0 = this._x1 = +x4},${this._y0 = this._y1 = +y4}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x4, y4) {
    this._append`L${this._x1 = +x4},${this._y1 = +y4}`;
  }
  quadraticCurveTo(x1, y1, x4, y4) {
    this._append`Q${+x1},${+y1},${this._x1 = +x4},${this._y1 = +y4}`;
  }
  bezierCurveTo(x1, y1, x22, y22, x4, y4) {
    this._append`C${+x1},${+y1},${+x22},${+y22},${this._x1 = +x4},${this._y1 = +y4}`;
  }
  arcTo(x1, y1, x22, y22, r3) {
    x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r3 = +r3;
    if (r3 < 0) throw new Error(`negative radius: ${r3}`);
    let x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon3)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon3) || !r3) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l3 = r3 * Math.tan((pi2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l3 / l01, t21 = l3 / l21;
      if (Math.abs(t01 - 1) > epsilon3) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r3},${r3},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x4, y4, r3, a0, a1, ccw) {
    x4 = +x4, y4 = +y4, r3 = +r3, ccw = !!ccw;
    if (r3 < 0) throw new Error(`negative radius: ${r3}`);
    let dx = r3 * Math.cos(a0), dy = r3 * Math.sin(a0), x0 = x4 + dx, y0 = y4 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon3 || Math.abs(this._y1 - y0) > epsilon3) {
      this._append`L${x0},${y0}`;
    }
    if (!r3) return;
    if (da < 0) da = da % tau2 + tau2;
    if (da > tauEpsilon) {
      this._append`A${r3},${r3},0,1,${cw},${x4 - dx},${y4 - dy}A${r3},${r3},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon3) {
      this._append`A${r3},${r3},0,${+(da >= pi2)},${cw},${this._x1 = x4 + r3 * Math.cos(a1)},${this._y1 = y4 + r3 * Math.sin(a1)}`;
    }
  }
  rect(x4, y4, w3, h2) {
    this._append`M${this._x0 = this._x1 = +x4},${this._y0 = this._y1 = +y4}h${w3 = +w3}v${+h2}h${-w3}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d3 = Math.floor(_);
      if (!(d3 >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d3;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice2 = Array.prototype.slice;
function array_default2(x4) {
  return typeof x4 === "object" && "length" in x4 ? x4 : Array.from(x4);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x4, y4);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p3) {
  return p3[0];
}
function y(p3) {
  return p3[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x4, y4) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x4 = typeof x4 === "function" ? x4 : x4 === void 0 ? x : constant_default2(x4);
  y4 = typeof y4 === "function" ? y4 : y4 === void 0 ? y : constant_default2(y4);
  function line(data) {
    var i3, n3 = (data = array_default2(data)).length, d3, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i3 = 0; i3 <= n3; ++i3) {
      if (!(i3 < n3 && defined(d3 = data[i3], i3, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x4(d3, i3, data), +y4(d3, i3, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x4 = typeof _ === "function" ? _ : constant_default2(+_), line) : x4;
  };
  line.y = function(_) {
    return arguments.length ? (y4 = typeof _ === "function" ? _ : constant_default2(+_), line) : y4;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default2(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default2(0) : constant_default2(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default2(+y1);
  function area(data) {
    var i3, j3, k4, n3 = (data = array_default2(data)).length, d3, defined0 = false, buffer, x0z = new Array(n3), y0z = new Array(n3);
    if (context == null) output = curve(buffer = path2());
    for (i3 = 0; i3 <= n3; ++i3) {
      if (!(i3 < n3 && defined(d3 = data[i3], i3, data)) === defined0) {
        if (defined0 = !defined0) {
          j3 = i3;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k4 = i3 - 1; k4 >= j3; --k4) {
            output.point(x0z[k4], y0z[k4]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i3] = +x0(d3, i3, data), y0z[i3] = +y0(d3, i3, data);
        output.point(x1 ? +x1(d3, i3, data) : x0z[i3], y1 ? +y1(d3, i3, data) : y0z[i3]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a3, r3) {
    this._curve.point(r3 * Math.sin(a3), r3 * -Math.cos(a3));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-shape/src/symbol/asterisk.js
var sqrt3 = sqrt2(3);

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt2(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-shape/src/symbol/star.js
var kr = sin(pi / 10) / sin(7 * pi / 10);
var kx = sin(tau / 10) * kr;
var ky = -cos(tau / 10) * kr;

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = sqrt2(3);

// node_modules/d3-shape/src/symbol/triangle2.js
var sqrt33 = sqrt2(3);

// node_modules/d3-shape/src/symbol/wye.js
var s = sqrt2(3) / 2;
var k = 1 / sqrt2(12);
var a = (k / 2 + 1) * 3;

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x4, y4) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x4) / 6,
    (that._y0 + 4 * that._y1 + y4) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basis_default2(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x4, this._y2 = y4;
        break;
      case 1:
        this._point = 2;
        this._x3 = x4, this._y3 = y4;
        break;
      case 2:
        this._point = 3;
        this._x4 = x4, this._y4 = y4;
        this._context.moveTo((this._x0 + 4 * this._x1 + x4) / 6, (this._y0 + 4 * this._y1 + y4) / 6);
        break;
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisClosed_default2(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x4) / 6, y0 = (this._y0 + 4 * this._y1 + y4) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point2(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x4 = this._x, y4 = this._y, j3 = x4.length - 1;
    if (j3 > 0) {
      var x0 = x4[0], y0 = y4[0], dx = x4[j3] - x0, dy = y4[j3] - y0, i3 = -1, t6;
      while (++i3 <= j3) {
        t6 = i3 / j3;
        this._basis.point(
          this._beta * x4[i3] + (1 - this._beta) * (x0 + t6 * dx),
          this._beta * y4[i3] + (1 - this._beta) * (y0 + t6 * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x4, y4) {
    this._x.push(+x4);
    this._y.push(+y4);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x4, y4) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x4),
    that._y2 + that._k * (that._y1 - y4),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        this._x1 = x4, this._y1 = y4;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x4, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x4, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x4, this._y5 = y4;
        break;
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point3(this, x4, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x4, y4) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon) {
    var a3 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n3 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a3 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n3;
    y1 = (y1 * a3 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n3;
  }
  if (that._l23_a > epsilon) {
    var b3 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m4 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b3 + that._x1 * that._l23_2a - x4 * that._l12_2a) / m4;
    y22 = (y22 * b3 + that._y1 * that._l23_2a - y4 * that._l12_2a) / m4;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x4, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x4, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x4, this._y5 = y4;
        break;
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x4, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point4(this, x4, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    if (this._point) this._context.lineTo(x4, y4);
    else this._point = 1, this._context.moveTo(x4, y4);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x4) {
  return x4 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p3 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p3)) || 0;
}
function slope2(that, t6) {
  var h2 = that._x1 - that._x0;
  return h2 ? (3 * (that._y1 - that._y0) / h2 - t6) / 2 : t6;
}
function point5(that, t04, t14) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t04, x1 - dx, y1 - dx * t14, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    var t14 = NaN;
    x4 = +x4, y4 = +y4;
    if (x4 === this._x1 && y4 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t14 = slope3(this, x4, y4)), t14);
        break;
      default:
        point5(this, this._t0, t14 = slope3(this, x4, y4));
        break;
    }
    this._x0 = this._x1, this._x1 = x4;
    this._y0 = this._y1, this._y1 = y4;
    this._t0 = t14;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x4, y4) {
  MonotoneX.prototype.point.call(this, y4, x4);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x4, y4) {
    this._context.moveTo(y4, x4);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x4, y4) {
    this._context.lineTo(y4, x4);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x4, y4) {
    this._context.bezierCurveTo(y1, x1, y22, x22, y4, x4);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x4 = this._x, y4 = this._y, n3 = x4.length;
    if (n3) {
      this._line ? this._context.lineTo(x4[0], y4[0]) : this._context.moveTo(x4[0], y4[0]);
      if (n3 === 2) {
        this._context.lineTo(x4[1], y4[1]);
      } else {
        var px = controlPoints(x4), py = controlPoints(y4);
        for (var i0 = 0, i1 = 1; i1 < n3; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x4[i1], y4[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n3 === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x4, y4) {
    this._x.push(+x4);
    this._y.push(+y4);
  }
};
function controlPoints(x4) {
  var i3, n3 = x4.length - 1, m4, a3 = new Array(n3), b3 = new Array(n3), r3 = new Array(n3);
  a3[0] = 0, b3[0] = 2, r3[0] = x4[0] + 2 * x4[1];
  for (i3 = 1; i3 < n3 - 1; ++i3) a3[i3] = 1, b3[i3] = 4, r3[i3] = 4 * x4[i3] + 2 * x4[i3 + 1];
  a3[n3 - 1] = 2, b3[n3 - 1] = 7, r3[n3 - 1] = 8 * x4[n3 - 1] + x4[n3];
  for (i3 = 1; i3 < n3; ++i3) m4 = a3[i3] / b3[i3 - 1], b3[i3] -= m4, r3[i3] -= m4 * r3[i3 - 1];
  a3[n3 - 1] = r3[n3 - 1] / b3[n3 - 1];
  for (i3 = n3 - 2; i3 >= 0; --i3) a3[i3] = (r3[i3] - a3[i3 + 1]) / b3[i3];
  b3[n3 - 1] = (x4[n3] + a3[n3 - 1]) / 2;
  for (i3 = 0; i3 < n3 - 1; ++i3) b3[i3] = 2 * x4[i3 + 1] - a3[i3 + 1];
  return [a3, b3];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t6) {
  this._context = context;
  this._t = t6;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x4, y4) {
    x4 = +x4, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y4);
          this._context.lineTo(x4, y4);
        } else {
          var x1 = this._x * (1 - this._t) + x4 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y4);
        }
        break;
      }
    }
    this._x = x4, this._y = y4;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n3 = series.length) > 1)) return;
  for (var i3 = 1, j3, s0, s1 = series[order[0]], n3, m4 = s1.length; i3 < n3; ++i3) {
    s0 = s1, s1 = series[order[i3]];
    for (j3 = 0; j3 < m4; ++j3) {
      s1[j3][1] += s1[j3][0] = isNaN(s0[j3][1]) ? s0[j3][0] : s0[j3][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n3 = series.length, o3 = new Array(n3);
  while (--n3 >= 0) o3[n3] = n3;
  return o3;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d3, key) {
  return d3[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys = constant_default2([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i3, n3 = sz.length, j3 = -1, oz;
    for (const d3 of data) {
      for (i3 = 0, ++j3; i3 < n3; ++i3) {
        (sz[i3][j3] = [0, +value(d3, sz[i3].key, j3, data)]).data = d3;
      }
    }
    for (i3 = 0, oz = array_default2(order(sz)); i3 < n3; ++i3) {
      sz[oz[i3]].index = i3;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default2(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default2(Array.from(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n3 = series.length) > 0)) return;
  for (var i3, n3, j3 = 0, m4 = series[0].length, y4; j3 < m4; ++j3) {
    for (y4 = i3 = 0; i3 < n3; ++i3) y4 += series[i3][j3][1] || 0;
    if (y4) for (i3 = 0; i3 < n3; ++i3) series[i3][j3][1] /= y4;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n3 = series.length) > 0)) return;
  for (var i3, j3 = 0, d3, dy, yp, yn2, n3, m4 = series[order[0]].length; j3 < m4; ++j3) {
    for (yp = yn2 = 0, i3 = 0; i3 < n3; ++i3) {
      if ((dy = (d3 = series[order[i3]][j3])[1] - d3[0]) > 0) {
        d3[0] = yp, d3[1] = yp += dy;
      } else if (dy < 0) {
        d3[1] = yn2, d3[0] = yn2 += dy;
      } else {
        d3[0] = 0, d3[1] = dy;
      }
    }
  }
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n3 = series.length) > 0)) return;
  for (var j3 = 0, s0 = series[order[0]], n3, m4 = s0.length; j3 < m4; ++j3) {
    for (var i3 = 0, y4 = 0; i3 < n3; ++i3) y4 += series[i3][j3][1] || 0;
    s0[j3][1] += s0[j3][0] = -y4 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n3 = series.length) > 0) || !((m4 = (s0 = series[order[0]]).length) > 0)) return;
  for (var y4 = 0, j3 = 1, s0, m4, n3; j3 < m4; ++j3) {
    for (var i3 = 0, s1 = 0, s22 = 0; i3 < n3; ++i3) {
      var si = series[order[i3]], sij0 = si[j3][1] || 0, sij1 = si[j3 - 1][1] || 0, s32 = (sij0 - sij1) / 2;
      for (var k4 = 0; k4 < i3; ++k4) {
        var sk = series[order[k4]], skj0 = sk[j3][1] || 0, skj1 = sk[j3 - 1][1] || 0;
        s32 += skj0 - skj1;
      }
      s1 += sij0, s22 += s32 * sij0;
    }
    s0[j3 - 1][1] += s0[j3 - 1][0] = y4;
    if (s1) y4 -= s22 / s1;
  }
  s0[j3 - 1][1] += s0[j3 - 1][0] = y4;
  none_default(series, order);
}

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a3, b3) {
    return peaks[a3] - peaks[b3];
  });
}
function peak(series) {
  var i3 = -1, j3 = 0, n3 = series.length, vi, vj = -Infinity;
  while (++i3 < n3) if ((vi = +series[i3][1]) > vj) vj = vi, j3 = i3;
  return j3;
}

// node_modules/d3-shape/src/order/ascending.js
function ascending_default(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a3, b3) {
    return sums[a3] - sums[b3];
  });
}
function sum2(series) {
  var s4 = 0, i3 = -1, n3 = series.length, v4;
  while (++i3 < n3) if (v4 = +series[i3][1]) s4 += v4;
  return s4;
}

// node_modules/d3-shape/src/order/descending.js
function descending_default2(series) {
  return ascending_default(series).reverse();
}

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n3 = series.length, i3, j3, sums = series.map(sum2), order = appearance_default(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i3 = 0; i3 < n3; ++i3) {
    j3 = order[i3];
    if (top < bottom) {
      top += sums[j3];
      tops.push(j3);
    } else {
      bottom += sums[j3];
      bottoms.push(j3);
    }
  }
  return bottoms.reverse().concat(tops);
}

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isPlainObject = __toESM(require_isPlainObject());
var import_pick = __toESM(require_pick());
var import_isEqual = __toESM(require_isEqual());
var Pr = { background: "transparent", text: { fontFamily: "sans-serif", fontSize: 11, fill: "#333333", outlineWidth: 0, outlineColor: "transparent", outlineOpacity: 1 }, axis: { domain: { line: { stroke: "transparent", strokeWidth: 1 } }, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} }, legend: { text: { fontSize: 12 } } }, grid: { line: { stroke: "#dddddd", strokeWidth: 1 } }, legends: { hidden: { symbol: { fill: "#333333", opacity: 0.6 }, text: { fill: "#333333", opacity: 0.6 } }, text: {}, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: { fontSize: 10 } }, title: { text: {} } }, labels: { text: {} }, markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} }, dots: { text: {} }, tooltip: { container: { background: "white", color: "inherit", fontSize: "inherit", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", padding: "5px 9px" }, basic: { whiteSpace: "pre", display: "flex", alignItems: "center" }, chip: { marginRight: 7 }, table: {}, tableCell: { padding: "3px 5px" }, tableCellValue: { fontWeight: "bold" } }, crosshair: { line: { stroke: "#000000", strokeWidth: 1, strokeOpacity: 0.75, strokeDasharray: "6 6" } }, annotations: { text: { fontSize: 13, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, link: { stroke: "#000000", strokeWidth: 1, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, outline: { fill: "none", stroke: "#000000", strokeWidth: 2, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, symbol: { fill: "#000000", outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 } } };
function jr() {
  return jr = Object.assign ? Object.assign.bind() : function(e6) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var t6 = arguments[r3];
      for (var n3 in t6) Object.prototype.hasOwnProperty.call(t6, n3) && (e6[n3] = t6[n3]);
    }
    return e6;
  }, jr.apply(this, arguments);
}
function Sr(e6, r3) {
  return Sr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e7, r4) {
    return e7.__proto__ = r4, e7;
  }, Sr(e6, r3);
}
function Br(e6, r3) {
  if (null == e6) return {};
  var t6, n3, i3 = {}, o3 = Object.keys(e6);
  for (n3 = 0; n3 < o3.length; n3++) t6 = o3[n3], r3.indexOf(t6) >= 0 || (i3[t6] = e6[t6]);
  return i3;
}
var Gr = ["axis.ticks.text", "axis.legend.text", "legends.title.text", "legends.text", "legends.ticks.text", "legends.title.text", "labels.text", "dots.text", "markers.text", "annotations.text"];
var Lr = function(e6, r3) {
  return jr({}, r3, e6);
};
var Ir = function(e6, r3) {
  var t6 = (0, import_merge2.default)({}, e6, r3);
  return Gr.forEach(function(e7) {
    (0, import_set.default)(t6, e7, Lr((0, import_get.default)(t6, e7), t6.text));
  }), t6;
};
var Yr = (0, import_react15.createContext)();
var Ar = function(e6) {
  var t6 = e6.children, n3 = e6.animate, i3 = void 0 === n3 || n3, o3 = e6.config, l3 = void 0 === o3 ? "default" : o3, a3 = (0, import_react15.useMemo)(function() {
    var e7 = (0, import_isString.default)(l3) ? config[l3] : l3;
    return { animate: i3, config: e7 };
  }, [i3, l3]);
  return (0, import_jsx_runtime.jsx)(Yr.Provider, { value: a3, children: t6 });
};
var Er = { animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(Object.keys(config)), import_prop_types.default.shape({ mass: import_prop_types.default.number, tension: import_prop_types.default.number, friction: import_prop_types.default.number, clamp: import_prop_types.default.bool, precision: import_prop_types.default.number, velocity: import_prop_types.default.number, duration: import_prop_types.default.number, easing: import_prop_types.default.func })]) };
Ar.propTypes = { children: import_prop_types.default.node.isRequired, animate: Er.animate, config: Er.motionConfig };
var Ur = function() {
  return (0, import_react15.useContext)(Yr);
};
var Fr = function(e6) {
  var t6 = Ur(), o3 = t6.animate, l3 = t6.config, a3 = function(e7) {
    var r3 = (0, import_react15.useRef)();
    return (0, import_react15.useEffect)(function() {
      r3.current = e7;
    }, [e7]), r3.current;
  }(e6), d3 = (0, import_react15.useMemo)(function() {
    return string_default(a3, e6);
  }, [a3, e6]), s4 = useSpring({ from: { value: 0 }, to: { value: 1 }, reset: true, config: l3, immediate: !o3 }).value;
  return to2(s4, d3);
};
var Xr = { nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"], BrBG: (0, import_last.default)(scheme), PRGn: (0, import_last.default)(scheme2), PiYG: (0, import_last.default)(scheme3), PuOr: (0, import_last.default)(scheme4), RdBu: (0, import_last.default)(scheme5), RdGy: (0, import_last.default)(scheme6), RdYlBu: (0, import_last.default)(scheme7), RdYlGn: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), BuGn: (0, import_last.default)(scheme10), BuPu: (0, import_last.default)(scheme11), GnBu: (0, import_last.default)(scheme12), OrRd: (0, import_last.default)(scheme13), PuBuGn: (0, import_last.default)(scheme14), PuBu: (0, import_last.default)(scheme15), PuRd: (0, import_last.default)(scheme16), RdPu: (0, import_last.default)(scheme17), YlGnBu: (0, import_last.default)(scheme18), YlGn: (0, import_last.default)(scheme19), YlOrBr: (0, import_last.default)(scheme20), YlOrRd: (0, import_last.default)(scheme21) };
var Nr = Object.keys(Xr);
var Hr = function(e6) {
  if ((0, import_isFunction.default)(e6)) {
    if (!(0, import_isFunction.default)(e6.domain)) throw new Error("Provided colors should be a valid quantize scale providing a 'domain()' function");
    return e6;
  }
  if (Xr[e6]) return quantize().range(Xr[e6]);
  if ((0, import_isArray.default)(e6)) return quantize().range(e6);
  throw new Error("Unable to guess quantize color scale from '" + e6 + "',\nmust be a function or one of:\n'" + Nr.join("', '") + "'");
};
var Kr = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default, accent: Accent_default, dark2: Dark2_default, paired: Paired_default, pastel1: Pastel1_default, pastel2: Pastel2_default, set1: Set1_default, set2: Set2_default, set3: Set3_default, brown_blueGreen: (0, import_last.default)(scheme), purpleRed_green: (0, import_last.default)(scheme2), pink_yellowGreen: (0, import_last.default)(scheme3), purple_orange: (0, import_last.default)(scheme4), red_blue: (0, import_last.default)(scheme5), red_grey: (0, import_last.default)(scheme6), red_yellow_blue: (0, import_last.default)(scheme7), red_yellow_green: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), blue_green: (0, import_last.default)(scheme10), blue_purple: (0, import_last.default)(scheme11), green_blue: (0, import_last.default)(scheme12), orange_red: (0, import_last.default)(scheme13), purple_blue_green: (0, import_last.default)(scheme14), purple_blue: (0, import_last.default)(scheme15), purple_red: (0, import_last.default)(scheme16), red_purple: (0, import_last.default)(scheme17), yellow_green_blue: (0, import_last.default)(scheme18), yellow_green: (0, import_last.default)(scheme19), yellow_orange_brown: (0, import_last.default)(scheme20), yellow_orange_red: (0, import_last.default)(scheme21) };
var et = import_prop_types.default.oneOfType([import_prop_types.default.oneOf(Nr), import_prop_types.default.func, import_prop_types.default.arrayOf(import_prop_types.default.string)]);
var rt = { basis: basis_default2, basisClosed: basisClosed_default2, basisOpen: basisOpen_default, bundle: bundle_default, cardinal: cardinal_default, cardinalClosed: cardinalClosed_default, cardinalOpen: cardinalOpen_default, catmullRom: catmullRom_default, catmullRomClosed: catmullRomClosed_default, catmullRomOpen: catmullRomOpen_default, linear: linear_default, linearClosed: linearClosed_default, monotoneX, monotoneY, natural: natural_default, step: step_default, stepAfter, stepBefore };
var tt = Object.keys(rt);
var nt = tt.filter(function(e6) {
  return e6.endsWith("Closed");
});
var it = (0, import_without.default)(tt, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var ot = (0, import_without.default)(tt, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var lt = function(e6) {
  if (!rt[e6]) throw new TypeError("'" + e6 + "', is not a valid curve interpolator identifier.");
  return rt[e6];
};
var at = { ascending: ascending_default, descending: descending_default2, insideOut: insideOut_default, none: none_default2, reverse: reverse_default };
var dt = Object.keys(at);
var ut = { expand: expand_default, diverging: diverging_default, none: none_default, silhouette: silhouette_default, wiggle: wiggle_default };
var ct = Object.keys(ut);
var pt = import_prop_types.default.shape({ top: import_prop_types.default.number, right: import_prop_types.default.number, bottom: import_prop_types.default.number, left: import_prop_types.default.number }).isRequired;
var ht = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
var gt = import_prop_types.default.oneOf(ht);
var vt = ordinal(Set3_default);
var _t = { top: 0, right: 0, bottom: 0, left: 0 };
var wt = function(e6, t6, n3) {
  return void 0 === n3 && (n3 = {}), (0, import_react15.useMemo)(function() {
    var r3 = jr({}, _t, n3);
    return { margin: r3, innerWidth: e6 - r3.left - r3.right, innerHeight: t6 - r3.top - r3.bottom, outerWidth: e6, outerHeight: t6 };
  }, [e6, t6, n3.top, n3.right, n3.bottom, n3.left]);
};
var kt = function() {
  var e6 = (0, import_react15.useRef)(null), r3 = (0, import_react15.useState)({ left: 0, top: 0, width: 0, height: 0 }), t6 = r3[0], l3 = r3[1], a3 = (0, import_react15.useState)(function() {
    return "undefined" == typeof ResizeObserver ? null : new ResizeObserver(function(e7) {
      var r4 = e7[0];
      return l3(r4.contentRect);
    });
  })[0];
  return (0, import_react15.useEffect)(function() {
    return e6.current && null !== a3 && a3.observe(e6.current), function() {
      null !== a3 && a3.disconnect();
    };
  }, []), [e6, t6];
};
var Rt = function(e6) {
  return (0, import_react15.useMemo)(function() {
    return Ir(Pr, e6);
  }, [e6]);
};
var xt = function(e6) {
  return "function" == typeof e6 ? e6 : "string" == typeof e6 ? 0 === e6.indexOf("time:") ? timeFormat(e6.slice("5")) : format(e6) : function(e7) {
    return "" + e7;
  };
};
var Ot = function(e6) {
  return (0, import_react15.useMemo)(function() {
    return xt(e6);
  }, [e6]);
};
var qt = (0, import_react15.createContext)();
var Ct = {};
var Wt = function(e6) {
  var r3 = e6.theme, t6 = void 0 === r3 ? Ct : r3, n3 = e6.children, i3 = Rt(t6);
  return (0, import_jsx_runtime.jsx)(qt.Provider, { value: i3, children: n3 });
};
Wt.propTypes = { children: import_prop_types.default.node.isRequired, theme: import_prop_types.default.object };
var zt = function() {
  return (0, import_react15.useContext)(qt);
};
var Tt = ["outlineWidth", "outlineColor", "outlineOpacity"];
var Mt = function(e6) {
  return e6.outlineWidth, e6.outlineColor, e6.outlineOpacity, Br(e6, Tt);
};
var Pt = function(e6) {
  var r3 = e6.children, t6 = e6.condition, n3 = e6.wrapper;
  return t6 ? (0, import_react15.cloneElement)(n3, {}, r3) : r3;
};
Pt.propTypes = { children: import_prop_types.default.node.isRequired, condition: import_prop_types.default.bool.isRequired, wrapper: import_prop_types.default.element.isRequired };
var jt = { position: "relative" };
var St = function(e6) {
  var r3 = e6.children, t6 = e6.theme, i3 = e6.renderWrapper, o3 = void 0 === i3 || i3, l3 = e6.isInteractive, a3 = void 0 === l3 || l3, d3 = e6.animate, s4 = e6.motionConfig, u3 = (0, import_react15.useRef)(null);
  return (0, import_jsx_runtime.jsx)(Wt, { theme: t6, children: (0, import_jsx_runtime.jsx)(Ar, { animate: d3, config: s4, children: (0, import_jsx_runtime.jsx)(M, { container: u3, children: (0, import_jsx_runtime.jsxs)(Pt, { condition: o3, wrapper: (0, import_jsx_runtime.jsx)("div", { style: jt, ref: u3 }), children: [r3, a3 && (0, import_jsx_runtime.jsx)(F, {})] }) }) }) });
};
St.propTypes = { children: import_prop_types.default.element.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object, animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.oneOfType([import_prop_types.default.string, Er.motionConfig]) };
var Bt = function() {
};
var Gt = { position: "relative" };
var Lt = function(e6) {
  var t6 = e6.children, i3 = e6.theme, o3 = e6.isInteractive, l3 = void 0 === o3 || o3, d3 = e6.renderWrapper, s4 = void 0 === d3 || d3, u3 = e6.animate, c9 = e6.motionConfig, f3 = (0, import_react15.useRef)(null), m4 = V(f3), y4 = m4.actions, v4 = m4.state, _ = (0, import_react15.useCallback)(function(e7, r3) {
    return y4.showTooltipFromEvent(e7, r3);
  }, [y4.showTooltipFromEvent]), w3 = (0, import_react15.useMemo)(function() {
    return { showTooltip: l3 ? _ : Bt, hideTooltip: l3 ? y4.hideTooltip : Bt };
  }, [y4.hideTooltip, l3, _]);
  return (0, import_jsx_runtime.jsx)(Wt, { theme: i3, children: (0, import_jsx_runtime.jsx)(Ar, { animate: u3, config: c9, children: (0, import_jsx_runtime.jsx)(j.Provider, { value: y4, children: (0, import_jsx_runtime.jsx)(O.Provider, { value: v4, children: (0, import_jsx_runtime.jsxs)(Pt, { condition: s4, wrapper: (0, import_jsx_runtime.jsx)("div", { style: Gt, ref: f3 }), children: [t6(w3), l3 && (0, import_jsx_runtime.jsx)(F, {})] }) }) }) }) });
};
Lt.propTypes = { children: import_prop_types.default.func.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object.isRequired, animate: import_prop_types.default.bool.isRequired, motionConfig: import_prop_types.default.oneOfType([import_prop_types.default.string, Er.motionConfig]) };
var It = function(e6) {
  var r3 = e6.children, t6 = kt(), n3 = t6[0], i3 = t6[1], o3 = i3.width > 0 && i3.height > 0;
  return (0, import_jsx_runtime.jsx)("div", { ref: n3, style: { width: "100%", height: "100%" }, children: o3 && r3({ width: i3.width, height: i3.height }) });
};
It.propTypes = { children: import_prop_types.default.func.isRequired };
var Yt = ["id", "colors"];
var Dt = function(e6) {
  var r3 = e6.id, t6 = e6.colors, n3 = Br(e6, Yt);
  return (0, import_jsx_runtime.jsx)("linearGradient", jr({ id: r3, x1: 0, x2: 0, y1: 0, y2: 1 }, n3, { children: t6.map(function(e7) {
    var r4 = e7.offset, t7 = e7.color, n4 = e7.opacity;
    return (0, import_jsx_runtime.jsx)("stop", { offset: r4 + "%", stopColor: t7, stopOpacity: void 0 !== n4 ? n4 : 1 }, r4);
  }) }));
};
Dt.propTypes = { id: import_prop_types.default.string.isRequired, colors: import_prop_types.default.arrayOf(import_prop_types.default.shape({ offset: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, opacity: import_prop_types.default.number })).isRequired, gradientTransform: import_prop_types.default.string };
var Et = { linearGradient: Dt };
var Ut = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var Ft = (0, import_react15.memo)(function(e6) {
  var r3 = e6.id, t6 = e6.background, n3 = void 0 === t6 ? Ut.background : t6, i3 = e6.color, o3 = void 0 === i3 ? Ut.color : i3, l3 = e6.size, a3 = void 0 === l3 ? Ut.size : l3, d3 = e6.padding, s4 = void 0 === d3 ? Ut.padding : d3, u3 = e6.stagger, c9 = void 0 === u3 ? Ut.stagger : u3, f3 = a3 + s4, p3 = a3 / 2, h2 = s4 / 2;
  return true === c9 && (f3 = 2 * a3 + 2 * s4), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: f3, height: f3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: f3, height: f3, fill: n3 }), (0, import_jsx_runtime.jsx)("circle", { cx: h2 + p3, cy: h2 + p3, r: p3, fill: o3 }), c9 && (0, import_jsx_runtime.jsx)("circle", { cx: 1.5 * s4 + a3 + p3, cy: 1.5 * s4 + a3 + p3, r: p3, fill: o3 })] });
});
Ft.displayName = "PatternDots", Ft.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired };
var Nt = 2 * Math.PI;
var Ht = function(e6) {
  return e6 * Math.PI / 180;
};
var Kt = function(e6) {
  return 180 * e6 / Math.PI;
};
var Jt = function(e6, r3) {
  return { x: Math.cos(e6) * r3, y: Math.sin(e6) * r3 };
};
var Qt = function(e6) {
  var r3 = e6 % 360;
  return r3 < 0 && (r3 += 360), r3;
};
var rn = { svg: { align: { left: "start", center: "middle", right: "end", start: "start", middle: "middle", end: "end" }, baseline: { top: "text-before-edge", center: "central", bottom: "alphabetic" } }, canvas: { align: { left: "left", center: "center", right: "right", start: "left", middle: "center", end: "right" }, baseline: { top: "top", center: "middle", bottom: "bottom" } } };
var nn = { spacing: 5, rotation: 0, background: "#000000", color: "#ffffff", lineWidth: 2 };
var on = (0, import_react15.memo)(function(e6) {
  var r3 = e6.id, t6 = e6.spacing, n3 = void 0 === t6 ? nn.spacing : t6, i3 = e6.rotation, o3 = void 0 === i3 ? nn.rotation : i3, l3 = e6.background, a3 = void 0 === l3 ? nn.background : l3, d3 = e6.color, s4 = void 0 === d3 ? nn.color : d3, u3 = e6.lineWidth, c9 = void 0 === u3 ? nn.lineWidth : u3, f3 = Math.round(o3) % 360, p3 = Math.abs(n3);
  f3 > 180 ? f3 -= 360 : f3 > 90 ? f3 -= 180 : f3 < -180 ? f3 += 360 : f3 < -90 && (f3 += 180);
  var h2, g3 = p3, b3 = p3;
  return 0 === f3 ? h2 = "\n                M 0 0 L " + g3 + " 0\n                M 0 " + b3 + " L " + g3 + " " + b3 + "\n            " : 90 === f3 ? h2 = "\n                M 0 0 L 0 " + b3 + "\n                M " + g3 + " 0 L " + g3 + " " + b3 + "\n            " : (g3 = Math.abs(p3 / Math.sin(Ht(f3))), b3 = p3 / Math.sin(Ht(90 - f3)), h2 = f3 > 0 ? "\n                    M 0 " + -b3 + " L " + 2 * g3 + " " + b3 + "\n                    M " + -g3 + " " + -b3 + " L " + g3 + " " + b3 + "\n                    M " + -g3 + " 0 L " + g3 + " " + 2 * b3 + "\n                " : "\n                    M " + -g3 + " " + b3 + " L " + g3 + " " + -b3 + "\n                    M " + -g3 + " " + 2 * b3 + " L " + 2 * g3 + " " + -b3 + "\n                    M 0 " + 2 * b3 + " L " + 2 * g3 + " 0\n                "), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: g3, height: b3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: g3, height: b3, fill: a3, stroke: "rgba(255, 0, 0, 0.1)", strokeWidth: 0 }), (0, import_jsx_runtime.jsx)("path", { d: h2, strokeWidth: c9, stroke: s4, strokeLinecap: "square" })] });
});
on.displayName = "PatternLines", on.propTypes = { id: import_prop_types.default.string.isRequired, spacing: import_prop_types.default.number.isRequired, rotation: import_prop_types.default.number.isRequired, background: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, lineWidth: import_prop_types.default.number.isRequired };
var an = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var dn = (0, import_react15.memo)(function(e6) {
  var r3 = e6.id, t6 = e6.color, n3 = void 0 === t6 ? an.color : t6, i3 = e6.background, o3 = void 0 === i3 ? an.background : i3, l3 = e6.size, a3 = void 0 === l3 ? an.size : l3, d3 = e6.padding, s4 = void 0 === d3 ? an.padding : d3, u3 = e6.stagger, c9 = void 0 === u3 ? an.stagger : u3, f3 = a3 + s4, p3 = s4 / 2;
  return true === c9 && (f3 = 2 * a3 + 2 * s4), (0, import_jsx_runtime.jsxs)("pattern", { id: r3, width: f3, height: f3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime.jsx)("rect", { width: f3, height: f3, fill: o3 }), (0, import_jsx_runtime.jsx)("rect", { x: p3, y: p3, width: a3, height: a3, fill: n3 }), c9 && (0, import_jsx_runtime.jsx)("rect", { x: 1.5 * s4 + a3, y: 1.5 * s4 + a3, width: a3, height: a3, fill: n3 })] });
});
dn.displayName = "PatternSquares", dn.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired };
var un = { patternDots: Ft, patternLines: on, patternSquares: dn };
var cn = ["type"];
var fn = jr({}, Et, un);
var pn = function(e6) {
  var r3 = e6.defs;
  return !r3 || r3.length < 1 ? null : (0, import_jsx_runtime.jsx)("defs", { "aria-hidden": true, children: r3.map(function(e7) {
    var r4 = e7.type, t6 = Br(e7, cn);
    return fn[r4] ? (0, import_react15.createElement)(fn[r4], jr({ key: t6.id }, t6)) : null;
  }) });
};
pn.propTypes = { defs: import_prop_types.default.arrayOf(import_prop_types.default.shape({ type: import_prop_types.default.oneOf(Object.keys(fn)).isRequired, id: import_prop_types.default.string.isRequired })) };
var hn = (0, import_react15.memo)(pn);
var gn = function(e6) {
  var r3 = e6.width, t6 = e6.height, n3 = e6.margin, i3 = e6.defs, o3 = e6.children, l3 = e6.role, a3 = e6.ariaLabel, d3 = e6.ariaLabelledBy, s4 = e6.ariaDescribedBy, u3 = e6.isFocusable, c9 = zt();
  return (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: r3, height: t6, role: l3, "aria-label": a3, "aria-labelledby": d3, "aria-describedby": s4, focusable: u3, tabIndex: u3 ? 0 : void 0, children: [(0, import_jsx_runtime.jsx)(hn, { defs: i3 }), (0, import_jsx_runtime.jsx)("rect", { width: r3, height: t6, fill: c9.background }), (0, import_jsx_runtime.jsx)("g", { transform: "translate(" + n3.left + "," + n3.top + ")", children: o3 })] });
};
gn.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, margin: import_prop_types.default.shape({ top: import_prop_types.default.number.isRequired, left: import_prop_types.default.number.isRequired }).isRequired, defs: import_prop_types.default.array, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]).isRequired, role: import_prop_types.default.string, isFocusable: import_prop_types.default.bool, ariaLabel: import_prop_types.default.string, ariaLabelledBy: import_prop_types.default.string, ariaDescribedBy: import_prop_types.default.string };
var bn = function(e6) {
  var r3 = e6.size, t6 = e6.color, n3 = e6.borderWidth, i3 = e6.borderColor;
  return (0, import_jsx_runtime.jsx)("circle", { r: r3 / 2, fill: t6, stroke: i3, strokeWidth: n3, style: { pointerEvents: "none" } });
};
bn.propTypes = { size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired };
var mn = (0, import_react15.memo)(bn);
var yn = function(e6) {
  var r3 = e6.x, t6 = e6.y, n3 = e6.symbol, i3 = void 0 === n3 ? mn : n3, o3 = e6.size, l3 = e6.datum, a3 = e6.color, d3 = e6.borderWidth, u3 = e6.borderColor, c9 = e6.label, f3 = e6.labelTextAnchor, p3 = void 0 === f3 ? "middle" : f3, h2 = e6.labelYOffset, g3 = void 0 === h2 ? -12 : h2, b3 = zt(), m4 = Ur(), y4 = m4.animate, v4 = m4.config, _ = useSpring({ transform: "translate(" + r3 + ", " + t6 + ")", config: v4, immediate: !y4 });
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: _.transform, style: { pointerEvents: "none" }, children: [(0, import_react15.createElement)(i3, { size: o3, color: a3, datum: l3, borderWidth: d3, borderColor: u3 }), c9 && (0, import_jsx_runtime.jsx)("text", { textAnchor: p3, y: g3, style: Mt(b3.dots.text), children: c9 })] });
};
yn.propTypes = { x: import_prop_types.default.number.isRequired, y: import_prop_types.default.number.isRequired, datum: import_prop_types.default.object.isRequired, size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired, symbol: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]), label: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]), labelTextAnchor: import_prop_types.default.oneOf(["start", "middle", "end"]), labelYOffset: import_prop_types.default.number };
var vn = (0, import_react15.memo)(yn);
var _n = function(e6) {
  var r3 = e6.width, t6 = e6.height, n3 = e6.axis, i3 = e6.scale, o3 = e6.value, l3 = e6.lineStyle, a3 = e6.textStyle, d3 = e6.legend, s4 = e6.legendNode, u3 = e6.legendPosition, c9 = void 0 === u3 ? "top-right" : u3, f3 = e6.legendOffsetX, p3 = void 0 === f3 ? 14 : f3, h2 = e6.legendOffsetY, g3 = void 0 === h2 ? 14 : h2, b3 = e6.legendOrientation, m4 = void 0 === b3 ? "horizontal" : b3, y4 = zt(), v4 = 0, _ = 0, w3 = 0, k4 = 0;
  if ("y" === n3 ? (w3 = i3(o3), _ = r3) : (v4 = i3(o3), k4 = t6), d3 && !s4) {
    var R = function(e7) {
      var r4 = e7.axis, t7 = e7.width, n4 = e7.height, i4 = e7.position, o4 = e7.offsetX, l4 = e7.offsetY, a4 = e7.orientation, d4 = 0, s5 = 0, u4 = "vertical" === a4 ? -90 : 0, c10 = "start";
      if ("x" === r4) switch (i4) {
        case "top-left":
          d4 = -o4, s5 = l4, c10 = "end";
          break;
        case "top":
          s5 = -l4, c10 = "horizontal" === a4 ? "middle" : "start";
          break;
        case "top-right":
          d4 = o4, s5 = l4, c10 = "horizontal" === a4 ? "start" : "end";
          break;
        case "right":
          d4 = o4, s5 = n4 / 2, c10 = "horizontal" === a4 ? "start" : "middle";
          break;
        case "bottom-right":
          d4 = o4, s5 = n4 - l4, c10 = "start";
          break;
        case "bottom":
          s5 = n4 + l4, c10 = "horizontal" === a4 ? "middle" : "end";
          break;
        case "bottom-left":
          s5 = n4 - l4, d4 = -o4, c10 = "horizontal" === a4 ? "end" : "start";
          break;
        case "left":
          d4 = -o4, s5 = n4 / 2, c10 = "horizontal" === a4 ? "end" : "middle";
      }
      else switch (i4) {
        case "top-left":
          d4 = o4, s5 = -l4, c10 = "start";
          break;
        case "top":
          d4 = t7 / 2, s5 = -l4, c10 = "horizontal" === a4 ? "middle" : "start";
          break;
        case "top-right":
          d4 = t7 - o4, s5 = -l4, c10 = "horizontal" === a4 ? "end" : "start";
          break;
        case "right":
          d4 = t7 + o4, c10 = "horizontal" === a4 ? "start" : "middle";
          break;
        case "bottom-right":
          d4 = t7 - o4, s5 = l4, c10 = "end";
          break;
        case "bottom":
          d4 = t7 / 2, s5 = l4, c10 = "horizontal" === a4 ? "middle" : "end";
          break;
        case "bottom-left":
          d4 = o4, s5 = l4, c10 = "horizontal" === a4 ? "start" : "end";
          break;
        case "left":
          d4 = -o4, c10 = "horizontal" === a4 ? "end" : "middle";
      }
      return { x: d4, y: s5, rotation: u4, textAnchor: c10 };
    }({ axis: n3, width: r3, height: t6, position: c9, offsetX: p3, offsetY: g3, orientation: m4 });
    s4 = (0, import_jsx_runtime.jsx)("text", { transform: "translate(" + R.x + ", " + R.y + ") rotate(" + R.rotation + ")", textAnchor: R.textAnchor, dominantBaseline: "central", style: a3, children: d3 });
  }
  return (0, import_jsx_runtime.jsxs)("g", { transform: "translate(" + v4 + ", " + w3 + ")", children: [(0, import_jsx_runtime.jsx)("line", { x1: 0, x2: _, y1: 0, y2: k4, stroke: y4.markers.lineColor, strokeWidth: y4.markers.lineStrokeWidth, style: l3 }), s4] });
};
_n.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, scale: import_prop_types.default.func.isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object, legend: import_prop_types.default.string, legendPosition: import_prop_types.default.oneOf(["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]), legendOffsetX: import_prop_types.default.number.isRequired, legendOffsetY: import_prop_types.default.number.isRequired, legendOrientation: import_prop_types.default.oneOf(["horizontal", "vertical"]).isRequired };
var wn = (0, import_react15.memo)(_n);
var kn = function(e6) {
  var r3 = e6.markers, t6 = e6.width, n3 = e6.height, i3 = e6.xScale, o3 = e6.yScale;
  return r3 && 0 !== r3.length ? r3.map(function(e7, r4) {
    return (0, import_jsx_runtime.jsx)(wn, jr({}, e7, { width: t6, height: n3, scale: "y" === e7.axis ? o3 : i3 }), r4);
  }) : null;
};
kn.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, xScale: import_prop_types.default.func.isRequired, yScale: import_prop_types.default.func.isRequired, markers: import_prop_types.default.arrayOf(import_prop_types.default.shape({ axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object })) };
var Rn = (0, import_react15.memo)(kn);
var xn = ["theme", "renderWrapper", "animate", "motionConfig"];
var On = function(e6) {
  return function(r3) {
    var t6, n3;
    function i3() {
      return r3.apply(this, arguments) || this;
    }
    return n3 = r3, (t6 = i3).prototype = Object.create(n3.prototype), t6.prototype.constructor = t6, Sr(t6, n3), i3.prototype.render = function() {
      var r4 = this.props, t7 = r4.theme, n4 = r4.renderWrapper, i4 = r4.animate, o3 = r4.motionConfig, l3 = Br(r4, xn);
      return (0, import_jsx_runtime.jsx)(St, { theme: t7, renderWrapper: n4, isInteractive: l3.isInteractive, animate: i4, motionConfig: o3, children: (0, import_jsx_runtime.jsx)(e6, jr({}, l3)) });
    }, i3;
  }(import_react15.Component);
};
var qn = function(e6, r3) {
  var t6, n3 = (0, import_isFunction.default)(e6) ? e6 : function(r4) {
    return (0, import_get.default)(r4, e6);
  };
  return r3 && (t6 = (0, import_isFunction.default)(r3) ? r3 : format(r3)), t6 ? function(e7) {
    return t6(n3(e7));
  } : n3;
};
var Cn = function(e6) {
  return (0, import_isFunction.default)(e6) ? e6 : function(r3) {
    return (0, import_get.default)(r3, e6);
  };
};
var Wn = function(e6) {
  return (0, import_react15.useMemo)(function() {
    return Cn(e6);
  }, [e6]);
};
var Mn = function(e6, r3, t6, n3) {
  var i3 = t6 - e6, o3 = n3 - r3;
  return i3 *= i3, o3 *= o3, Math.sqrt(i3 + o3);
};
var jn = function(e6, r3, t6, n3, i3, o3) {
  return e6 <= i3 && i3 <= e6 + t6 && r3 <= o3 && o3 <= r3 + n3;
};
var Sn = function(e6, r3) {
  var t6, n3 = "touches" in r3 ? r3.touches[0] : r3, i3 = n3.clientX, o3 = n3.clientY, l3 = e6.getBoundingClientRect(), a3 = (t6 = void 0 !== e6.getBBox ? e6.getBBox() : { width: e6.offsetWidth || 0, height: e6.offsetHeight || 0 }).width === l3.width ? 1 : t6.width / l3.width;
  return [(i3 - l3.left) * a3, (o3 - l3.top) * a3];
};
var Bn = Object.keys(Et);
var Gn = Object.keys(un);
var Ln = function(e6, r3, t6) {
  if ("*" === e6) return true;
  if ((0, import_isFunction.default)(e6)) return e6(r3);
  if ((0, import_isPlainObject.default)(e6)) {
    var n3 = t6 ? (0, import_get.default)(r3, t6) : r3;
    return (0, import_isEqual.default)((0, import_pick.default)(n3, Object.keys(e6)), e6);
  }
  return false;
};
var In = function(e6, r3, t6, n3) {
  var i3 = void 0 === n3 ? {} : n3, o3 = i3.dataKey, l3 = i3.colorKey, a3 = void 0 === l3 ? "color" : l3, d3 = i3.targetKey, s4 = void 0 === d3 ? "fill" : d3, u3 = [], c9 = {};
  return e6.length && r3.length && (u3 = [].concat(e6), r3.forEach(function(r4) {
    for (var n4 = function() {
      var n5 = t6[i4], l4 = n5.id, d4 = n5.match;
      if (Ln(d4, r4, o3)) {
        var f3 = e6.find(function(e7) {
          return e7.id === l4;
        });
        if (f3) {
          if (Gn.includes(f3.type)) if ("inherit" === f3.background || "inherit" === f3.color) {
            var p3 = (0, import_get.default)(r4, a3), h2 = f3.background, g3 = f3.color, b3 = l4;
            "inherit" === f3.background && (b3 = b3 + ".bg." + p3, h2 = p3), "inherit" === f3.color && (b3 = b3 + ".fg." + p3, g3 = p3), (0, import_set.default)(r4, s4, "url(#" + b3 + ")"), c9[b3] || (u3.push(jr({}, f3, { id: b3, background: h2, color: g3 })), c9[b3] = 1);
          } else (0, import_set.default)(r4, s4, "url(#" + l4 + ")");
          else if (Bn.includes(f3.type)) {
            if (f3.colors.map(function(e7) {
              return e7.color;
            }).includes("inherit")) {
              var m4 = (0, import_get.default)(r4, a3), _ = l4, w3 = jr({}, f3, { colors: f3.colors.map(function(e7, r5) {
                return "inherit" !== e7.color ? e7 : (_ = _ + "." + r5 + "." + m4, jr({}, e7, { color: "inherit" === e7.color ? m4 : e7.color }));
              }) });
              w3.id = _, (0, import_set.default)(r4, s4, "url(#" + _ + ")"), c9[_] || (u3.push(w3), c9[_] = 1);
            } else (0, import_set.default)(r4, s4, "url(#" + l4 + ")");
          }
        }
        return "break";
      }
    }, i4 = 0; i4 < t6.length; i4++) {
      if ("break" === n4()) break;
    }
  })), u3;
};

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function v2() {
  return v2 = Object.assign ? Object.assign.bind() : function(t6) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var o3 = arguments[i3];
      for (var n3 in o3) Object.prototype.hasOwnProperty.call(o3, n3) && (t6[n3] = o3[n3]);
    }
    return t6;
  }, v2.apply(this, arguments);
}
var x2 = { pointerEvents: "none", position: "absolute", zIndex: 10, top: 0, left: 0 };
var m2 = function(t6, i3) {
  return "translate(" + t6 + "px, " + i3 + "px)";
};
var b = (0, import_react16.memo)(function(t6) {
  var o3, n3 = t6.position, r3 = t6.anchor, e6 = t6.children, l3 = zt(), d3 = Ur(), y4 = d3.animate, f3 = d3.config, b3 = kt(), g3 = b3[0], w3 = b3[1], T2 = (0, import_react16.useRef)(false), C4 = void 0, E3 = false, P2 = w3.width > 0 && w3.height > 0, j3 = Math.round(n3[0]), N2 = Math.round(n3[1]);
  P2 && ("top" === r3 ? (j3 -= w3.width / 2, N2 -= w3.height + 14) : "right" === r3 ? (j3 += 14, N2 -= w3.height / 2) : "bottom" === r3 ? (j3 -= w3.width / 2, N2 += 14) : "left" === r3 ? (j3 -= w3.width + 14, N2 -= w3.height / 2) : "center" === r3 && (j3 -= w3.width / 2, N2 -= w3.height / 2), C4 = { transform: m2(j3, N2) }, T2.current || (E3 = true), T2.current = [j3, N2]);
  var O4 = useSpring({ to: C4, config: f3, immediate: !y4 || E3 }), V2 = v2({}, x2, l3.tooltip.wrapper, { transform: null != (o3 = O4.transform) ? o3 : m2(j3, N2), opacity: O4.transform ? 1 : 0 });
  return (0, import_jsx_runtime2.jsx)(animated.div, { ref: g3, style: V2, children: e6 });
});
b.displayName = "TooltipWrapper";
var g = (0, import_react16.memo)(function(t6) {
  var i3 = t6.size, o3 = void 0 === i3 ? 12 : i3, n3 = t6.color, r3 = t6.style;
  return (0, import_jsx_runtime2.jsx)("span", { style: v2({ display: "block", width: o3, height: o3, background: n3 }, void 0 === r3 ? {} : r3) });
});
var w = (0, import_react16.memo)(function(t6) {
  var i3, o3 = t6.id, n3 = t6.value, r3 = t6.format, e6 = t6.enableChip, l3 = void 0 !== e6 && e6, a3 = t6.color, c9 = t6.renderContent, h2 = zt(), u3 = Ot(r3);
  if ("function" == typeof c9) i3 = c9();
  else {
    var f3 = n3;
    void 0 !== u3 && void 0 !== f3 && (f3 = u3(f3)), i3 = (0, import_jsx_runtime2.jsxs)("div", { style: h2.tooltip.basic, children: [l3 && (0, import_jsx_runtime2.jsx)(g, { color: a3, style: h2.tooltip.chip }), void 0 !== f3 ? (0, import_jsx_runtime2.jsxs)("span", { children: [o3, ": ", (0, import_jsx_runtime2.jsx)("strong", { children: "" + f3 })] }) : o3] });
  }
  return (0, import_jsx_runtime2.jsx)("div", { style: h2.tooltip.container, children: i3 });
});
var T = { width: "100%", borderCollapse: "collapse" };
var C3 = (0, import_react16.memo)(function(t6) {
  var i3, o3 = t6.title, n3 = t6.rows, r3 = void 0 === n3 ? [] : n3, e6 = t6.renderContent, l3 = zt();
  return r3.length ? (i3 = "function" == typeof e6 ? e6() : (0, import_jsx_runtime2.jsxs)("div", { children: [o3 && o3, (0, import_jsx_runtime2.jsx)("table", { style: v2({}, T, l3.tooltip.table), children: (0, import_jsx_runtime2.jsx)("tbody", { children: r3.map(function(t7, i4) {
    return (0, import_jsx_runtime2.jsx)("tr", { children: t7.map(function(t8, i5) {
      return (0, import_jsx_runtime2.jsx)("td", { style: l3.tooltip.tableCell, children: t8 }, i5);
    }) }, i4);
  }) }) })] }), (0, import_jsx_runtime2.jsx)("div", { style: l3.tooltip.container, children: i3 })) : null;
});
C3.displayName = "TableTooltip";
var E2 = (0, import_react16.memo)(function(t6) {
  var i3 = t6.x0, n3 = t6.x1, r3 = t6.y0, e6 = t6.y1, l3 = zt(), u3 = Ur(), d3 = u3.animate, y4 = u3.config, f3 = (0, import_react16.useMemo)(function() {
    return v2({}, l3.crosshair.line, { pointerEvents: "none" });
  }, [l3.crosshair.line]), x4 = useSpring({ x1: i3, x2: n3, y1: r3, y2: e6, config: y4, immediate: !d3 });
  return (0, import_jsx_runtime2.jsx)(animated.line, v2({}, x4, { fill: "none", style: f3 }));
});
E2.displayName = "CrosshairLine";
var P = (0, import_react16.memo)(function(t6) {
  var i3, o3, n3 = t6.width, r3 = t6.height, e6 = t6.type, l3 = t6.x, a3 = t6.y;
  return "cross" === e6 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: r3 }, o3 = { x0: 0, x1: n3, y0: a3, y1: a3 }) : "top-left" === e6 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: a3 }, o3 = { x0: 0, x1: l3, y0: a3, y1: a3 }) : "top" === e6 ? i3 = { x0: l3, x1: l3, y0: 0, y1: a3 } : "top-right" === e6 ? (i3 = { x0: l3, x1: l3, y0: 0, y1: a3 }, o3 = { x0: l3, x1: n3, y0: a3, y1: a3 }) : "right" === e6 ? o3 = { x0: l3, x1: n3, y0: a3, y1: a3 } : "bottom-right" === e6 ? (i3 = { x0: l3, x1: l3, y0: a3, y1: r3 }, o3 = { x0: l3, x1: n3, y0: a3, y1: a3 }) : "bottom" === e6 ? i3 = { x0: l3, x1: l3, y0: a3, y1: r3 } : "bottom-left" === e6 ? (i3 = { x0: l3, x1: l3, y0: a3, y1: r3 }, o3 = { x0: 0, x1: l3, y0: a3, y1: a3 }) : "left" === e6 ? o3 = { x0: 0, x1: l3, y0: a3, y1: a3 } : "x" === e6 ? i3 = { x0: l3, x1: l3, y0: 0, y1: r3 } : "y" === e6 && (o3 = { x0: 0, x1: n3, y0: a3, y1: a3 }), (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [i3 && (0, import_jsx_runtime2.jsx)(E2, { x0: i3.x0, x1: i3.x1, y0: i3.y0, y1: i3.y1 }), o3 && (0, import_jsx_runtime2.jsx)(E2, { x0: o3.x0, x1: o3.x1, y0: o3.y0, y1: o3.y1 })] });
});
P.displayName = "Crosshair";
var j = (0, import_react16.createContext)({ showTooltipAt: function() {
}, showTooltipFromEvent: function() {
}, hideTooltip: function() {
} });
var N = { isVisible: false, position: [null, null], content: null, anchor: null };
var O = (0, import_react16.createContext)(N);
var V = function(t6) {
  var i3 = (0, import_react16.useState)(N), n3 = i3[0], l3 = i3[1], a3 = (0, import_react16.useCallback)(function(t7, i4, o3) {
    var n4 = i4[0], r3 = i4[1];
    void 0 === o3 && (o3 = "top"), l3({ isVisible: true, position: [n4, r3], anchor: o3, content: t7 });
  }, [l3]), c9 = (0, import_react16.useCallback)(function(i4, o3, n4) {
    void 0 === n4 && (n4 = "top");
    var r3 = t6.current.getBoundingClientRect(), e6 = t6.current.offsetWidth, a4 = e6 === r3.width ? 1 : e6 / r3.width, c10 = "touches" in o3 ? o3.touches[0] : o3, s5 = c10.clientX, h2 = c10.clientY, u3 = (s5 - r3.left) * a4, d3 = (h2 - r3.top) * a4;
    "left" !== n4 && "right" !== n4 || (n4 = u3 < r3.width / 2 ? "right" : "left"), l3({ isVisible: true, position: [u3, d3], anchor: n4, content: i4 });
  }, [t6, l3]), s4 = (0, import_react16.useCallback)(function() {
    l3(N);
  }, [l3]);
  return { actions: (0, import_react16.useMemo)(function() {
    return { showTooltipAt: a3, showTooltipFromEvent: c9, hideTooltip: s4 };
  }, [a3, c9, s4]), state: n3 };
};
var k2 = function() {
  var t6 = (0, import_react16.useContext)(j);
  if (void 0 === t6) throw new Error("useTooltip must be used within a TooltipProvider");
  return t6;
};
var z2 = function() {
  var t6 = (0, import_react16.useContext)(O);
  if (void 0 === t6) throw new Error("useTooltipState must be used within a TooltipProvider");
  return t6;
};
var A2 = function(t6) {
  return t6.isVisible;
};
var F = function() {
  var t6 = z2();
  return A2(t6) ? (0, import_jsx_runtime2.jsx)(b, { position: t6.position, anchor: t6.anchor, children: t6.content }) : null;
};
var M = function(t6) {
  var i3 = t6.container, o3 = t6.children, n3 = V(i3), r3 = n3.actions, e6 = n3.state;
  return (0, import_jsx_runtime2.jsx)(j.Provider, { value: r3, children: (0, import_jsx_runtime2.jsx)(O.Provider, { value: e6, children: o3 }) });
};

// node_modules/@nivo/colors/dist/nivo-colors.es.js
var import_react17 = __toESM(require_react());
var import_get2 = __toESM(require_get());
var import_isPlainObject2 = __toESM(require_isPlainObject());
var import_prop_types2 = __toESM(require_prop_types());
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e6) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var n3 = arguments[r3];
      for (var t6 in n3) Object.prototype.hasOwnProperty.call(n3, t6) && (e6[t6] = n3[t6]);
    }
    return e6;
  }, qe.apply(this, arguments);
}
function Ce(e6, r3) {
  (null == r3 || r3 > e6.length) && (r3 = e6.length);
  for (var n3 = 0, t6 = new Array(r3); n3 < r3; n3++) t6[n3] = e6[n3];
  return t6;
}
function Ge(e6, r3) {
  var n3 = "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
  if (n3) return (n3 = n3.call(e6)).next.bind(n3);
  if (Array.isArray(e6) || (n3 = function(e7, r4) {
    if (e7) {
      if ("string" == typeof e7) return Ce(e7, r4);
      var n4 = Object.prototype.toString.call(e7).slice(8, -1);
      return "Object" === n4 && e7.constructor && (n4 = e7.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e7) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Ce(e7, r4) : void 0;
    }
  }(e6)) || r3 && e6 && "number" == typeof e6.length) {
    n3 && (e6 = n3);
    var t6 = 0;
    return function() {
      return t6 >= e6.length ? { done: true } : { done: false, value: e6[t6++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var Re = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default, accent: Accent_default, dark2: Dark2_default, paired: Paired_default, pastel1: Pastel1_default, pastel2: Pastel2_default, set1: Set1_default, set2: Set2_default, set3: Set3_default, tableau10: Tableau10_default };
var Ve = Object.keys(Re);
var Pe = { brown_blueGreen: scheme, purpleRed_green: scheme2, pink_yellowGreen: scheme3, purple_orange: scheme4, red_blue: scheme5, red_grey: scheme6, red_yellow_blue: scheme7, red_yellow_green: scheme8, spectral: scheme9 };
var Te = Object.keys(Pe);
var Ue = { brown_blueGreen: BrBG_default, purpleRed_green: PRGn_default, pink_yellowGreen: PiYG_default, purple_orange: PuOr_default, red_blue: RdBu_default, red_grey: RdGy_default, red_yellow_blue: RdYlBu_default, red_yellow_green: RdYlGn_default, spectral: Spectral_default };
var De = { blues: scheme22, greens: scheme23, greys: scheme24, oranges: scheme27, purples: scheme25, reds: scheme26, blue_green: scheme10, blue_purple: scheme11, green_blue: scheme12, orange_red: scheme13, purple_blue_green: scheme14, purple_blue: scheme15, purple_red: scheme16, red_purple: scheme17, yellow_green_blue: scheme18, yellow_green: scheme19, yellow_orange_brown: scheme20, yellow_orange_red: scheme21 };
var Me = Object.keys(De);
var $e = { blues: Blues_default, greens: Greens_default, greys: Greys_default, oranges: Oranges_default, purples: Purples_default, reds: Reds_default, turbo: turbo_default, viridis: viridis_default, inferno, magma, plasma, cividis: cividis_default, warm, cool, cubehelixDefault: cubehelix_default2, blue_green: BuGn_default, blue_purple: BuPu_default, green_blue: GnBu_default, orange_red: OrRd_default, purple_blue_green: PuBuGn_default, purple_blue: PuBu_default, purple_red: PuRd_default, red_purple: RdPu_default, yellow_green_blue: YlGnBu_default, yellow_green: YlGn_default, yellow_orange_brown: YlOrBr_default, yellow_orange_red: YlOrRd_default };
var Be = qe({}, Re, Pe, De);
var Fe = Object.keys(Be);
var He = function(e6) {
  return Ve.includes(e6);
};
var Je = function(e6) {
  return Te.includes(e6);
};
var Ke = function(e6) {
  return Me.includes(e6);
};
var Le = { rainbow: rainbow_default, sinebow: sinebow_default };
var Ne = qe({}, Ue, $e, Le);
var Qe2 = Object.keys(Ne);
var We = function(e6, r3) {
  if ("function" == typeof e6) return e6;
  if ((0, import_isPlainObject2.default)(e6)) {
    if (function(e7) {
      return void 0 !== e7.theme;
    }(e6)) {
      if (void 0 === r3) throw new Error("Unable to use color from theme as no theme was provided");
      var n3 = (0, import_get2.default)(r3, e6.theme);
      if (void 0 === n3) throw new Error("Color from theme is undefined at path: '" + e6.theme + "'");
      return function() {
        return n3;
      };
    }
    if (function(e7) {
      return void 0 !== e7.from;
    }(e6)) {
      var t6 = function(r4) {
        return (0, import_get2.default)(r4, e6.from);
      };
      if (Array.isArray(e6.modifiers)) {
        for (var o3, i3 = [], u3 = function() {
          var e7 = o3.value, r4 = e7[0], n4 = e7[1];
          if ("brighter" === r4) i3.push(function(e8) {
            return e8.brighter(n4);
          });
          else if ("darker" === r4) i3.push(function(e8) {
            return e8.darker(n4);
          });
          else {
            if ("opacity" !== r4) throw new Error("Invalid color modifier: '" + r4 + "', must be one of: 'brighter', 'darker', 'opacity'");
            i3.push(function(e8) {
              return e8.opacity = n4, e8;
            });
          }
        }, a3 = Ge(e6.modifiers); !(o3 = a3()).done; ) u3();
        return 0 === i3.length ? t6 : function(e7) {
          return i3.reduce(function(e8, r4) {
            return r4(e8);
          }, rgb2(t6(e7))).toString();
        };
      }
      return t6;
    }
    throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object");
  }
  return function() {
    return e6;
  };
};
var Xe = function(e6, r3) {
  return (0, import_react17.useMemo)(function() {
    return We(e6, r3);
  }, [e6, r3]);
};
var Ye = import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.func, import_prop_types2.default.shape({ theme: import_prop_types2.default.string.isRequired }), import_prop_types2.default.shape({ from: import_prop_types2.default.string.isRequired, modifiers: import_prop_types2.default.arrayOf(import_prop_types2.default.array) })]);
var fr = function(e6, r3) {
  if ("function" == typeof e6) return e6;
  var n3 = "function" == typeof r3 ? r3 : function(e7) {
    return (0, import_get2.default)(e7, r3);
  };
  if (Array.isArray(e6)) {
    var t6 = ordinal(e6), o3 = function(e7) {
      return t6(n3(e7));
    };
    return o3.scale = t6, o3;
  }
  if ((0, import_isPlainObject2.default)(e6)) {
    if (function(e7) {
      return void 0 !== e7.datum;
    }(e6)) return function(r4) {
      return (0, import_get2.default)(r4, e6.datum);
    };
    if (function(e7) {
      return void 0 !== e7.scheme;
    }(e6)) {
      if (He(e6.scheme)) {
        var i3 = ordinal(Be[e6.scheme]), u3 = function(e7) {
          return i3(n3(e7));
        };
        return u3.scale = i3, u3;
      }
      if (Je(e6.scheme)) {
        if (void 0 !== e6.size && (e6.size < 3 || e6.size > 11)) throw new Error("Invalid size '" + e6.size + "' for diverging color scheme '" + e6.scheme + "', must be between 3~11");
        var a3 = ordinal(Be[e6.scheme][e6.size || 11]), l3 = function(e7) {
          return a3(n3(e7));
        };
        return l3.scale = a3, l3;
      }
      if (Ke(e6.scheme)) {
        if (void 0 !== e6.size && (e6.size < 3 || e6.size > 9)) throw new Error("Invalid size '" + e6.size + "' for sequential color scheme '" + e6.scheme + "', must be between 3~9");
        var c9 = ordinal(Be[e6.scheme][e6.size || 9]), s4 = function(e7) {
          return c9(n3(e7));
        };
        return s4.scale = c9, s4;
      }
    }
    throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property");
  }
  return function() {
    return e6;
  };
};
var pr = function(e6, r3) {
  return (0, import_react17.useMemo)(function() {
    return fr(e6, r3);
  }, [e6, r3]);
};

// node_modules/@nivo/legends/dist/nivo-legends.es.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var c8 = __toESM(require_react());
var import_react18 = __toESM(require_react());
var f2 = function(e6) {
  var i3 = e6.x, n3 = e6.y, o3 = e6.size, r3 = e6.fill, l3 = e6.opacity, a3 = void 0 === l3 ? 1 : l3, c9 = e6.borderWidth, d3 = void 0 === c9 ? 0 : c9, s4 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("circle", { r: o3 / 2, cx: i3 + o3 / 2, cy: n3 + o3 / 2, fill: r3, opacity: a3, strokeWidth: d3, stroke: void 0 === s4 ? "transparent" : s4, style: { pointerEvents: "none" } });
};
var m3 = function(e6) {
  var i3 = e6.x, n3 = e6.y, o3 = e6.size, r3 = e6.fill, l3 = e6.opacity, a3 = void 0 === l3 ? 1 : l3, c9 = e6.borderWidth, d3 = void 0 === c9 ? 0 : c9, s4 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + i3 + "," + n3 + ")", children: (0, import_jsx_runtime3.jsx)("path", { d: "\n                    M" + o3 / 2 + " 0\n                    L" + 0.8 * o3 + " " + o3 / 2 + "\n                    L" + o3 / 2 + " " + o3 + "\n                    L" + 0.2 * o3 + " " + o3 / 2 + "\n                    L" + o3 / 2 + " 0\n                ", fill: r3, opacity: a3, strokeWidth: d3, stroke: void 0 === s4 ? "transparent" : s4, style: { pointerEvents: "none" } }) });
};
var v3 = function(e6) {
  var i3 = e6.x, n3 = e6.y, o3 = e6.size, r3 = e6.fill, l3 = e6.opacity, a3 = void 0 === l3 ? 1 : l3, c9 = e6.borderWidth, d3 = void 0 === c9 ? 0 : c9, s4 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("rect", { x: i3, y: n3, fill: r3, opacity: a3, strokeWidth: d3, stroke: void 0 === s4 ? "transparent" : s4, width: o3, height: o3, style: { pointerEvents: "none" } });
};
var u2 = function(e6) {
  var i3 = e6.x, n3 = e6.y, o3 = e6.size, r3 = e6.fill, l3 = e6.opacity, a3 = void 0 === l3 ? 1 : l3, c9 = e6.borderWidth, d3 = void 0 === c9 ? 0 : c9, s4 = e6.borderColor;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + i3 + "," + n3 + ")", children: (0, import_jsx_runtime3.jsx)("path", { d: "\n                M" + o3 / 2 + " 0\n                L" + o3 + " " + o3 + "\n                L0 " + o3 + "\n                L" + o3 / 2 + " 0\n            ", fill: r3, opacity: a3, strokeWidth: d3, stroke: void 0 === s4 ? "transparent" : s4, style: { pointerEvents: "none" } }) });
};
function p2() {
  return p2 = Object.assign ? Object.assign.bind() : function(t6) {
    for (var e6 = 1; e6 < arguments.length; e6++) {
      var i3 = arguments[e6];
      for (var n3 in i3) Object.prototype.hasOwnProperty.call(i3, n3) && (t6[n3] = i3[n3]);
    }
    return t6;
  }, p2.apply(this, arguments);
}
var k3 = { top: 0, right: 0, bottom: 0, left: 0 };
var x3 = function(t6) {
  var e6, i3 = t6.direction, n3 = t6.itemsSpacing, o3 = t6.padding, r3 = t6.itemCount, l3 = t6.itemWidth, a3 = t6.itemHeight;
  if ("number" != typeof o3 && ("object" != typeof (e6 = o3) || Array.isArray(e6) || null === e6)) throw new Error("Invalid property padding, must be one of: number, object");
  var c9 = "number" == typeof o3 ? { top: o3, right: o3, bottom: o3, left: o3 } : p2({}, k3, o3), d3 = c9.left + c9.right, s4 = c9.top + c9.bottom, h2 = l3 + d3, g3 = a3 + s4, f3 = (r3 - 1) * n3;
  return "row" === i3 ? h2 = l3 * r3 + f3 + d3 : "column" === i3 && (g3 = a3 * r3 + f3 + s4), { width: h2, height: g3, padding: c9 };
};
var b2 = function(t6) {
  var e6 = t6.anchor, i3 = t6.translateX, n3 = t6.translateY, o3 = t6.containerWidth, r3 = t6.containerHeight, l3 = t6.width, a3 = t6.height, c9 = i3, d3 = n3;
  switch (e6) {
    case "top":
      c9 += (o3 - l3) / 2;
      break;
    case "top-right":
      c9 += o3 - l3;
      break;
    case "right":
      c9 += o3 - l3, d3 += (r3 - a3) / 2;
      break;
    case "bottom-right":
      c9 += o3 - l3, d3 += r3 - a3;
      break;
    case "bottom":
      c9 += (o3 - l3) / 2, d3 += r3 - a3;
      break;
    case "bottom-left":
      d3 += r3 - a3;
      break;
    case "left":
      d3 += (r3 - a3) / 2;
      break;
    case "center":
      c9 += (o3 - l3) / 2, d3 += (r3 - a3) / 2;
  }
  return { x: c9, y: d3 };
};
var S = function(t6) {
  var e6, i3, n3, o3, r3, l3, a3 = t6.direction, c9 = t6.justify, d3 = t6.symbolSize, s4 = t6.symbolSpacing, h2 = t6.width, g3 = t6.height;
  switch (a3) {
    case "left-to-right":
      e6 = 0, i3 = (g3 - d3) / 2, o3 = g3 / 2, l3 = "central", c9 ? (n3 = h2, r3 = "end") : (n3 = d3 + s4, r3 = "start");
      break;
    case "right-to-left":
      e6 = h2 - d3, i3 = (g3 - d3) / 2, o3 = g3 / 2, l3 = "central", c9 ? (n3 = 0, r3 = "start") : (n3 = h2 - d3 - s4, r3 = "end");
      break;
    case "top-to-bottom":
      e6 = (h2 - d3) / 2, i3 = 0, n3 = h2 / 2, r3 = "middle", c9 ? (o3 = g3, l3 = "alphabetic") : (o3 = d3 + s4, l3 = "text-before-edge");
      break;
    case "bottom-to-top":
      e6 = (h2 - d3) / 2, i3 = g3 - d3, n3 = h2 / 2, r3 = "middle", c9 ? (o3 = 0, l3 = "text-before-edge") : (o3 = g3 - d3 - s4, l3 = "alphabetic");
  }
  return { symbolX: e6, symbolY: i3, labelX: n3, labelY: o3, labelAnchor: r3, labelAlignment: l3 };
};
var w2 = { circle: f2, diamond: m3, square: v3, triangle: u2 };
var X = function(i3) {
  var n3, l3, a3, d3, g3, f3, m4, v4, u3, y4, k4, x4 = i3.x, b3 = i3.y, A3 = i3.width, W2 = i3.height, z3 = i3.data, C4 = i3.direction, X2 = void 0 === C4 ? "left-to-right" : C4, Y2 = i3.justify, O4 = void 0 !== Y2 && Y2, B3 = i3.textColor, H2 = i3.background, E3 = void 0 === H2 ? "transparent" : H2, j3 = i3.opacity, L = void 0 === j3 ? 1 : j3, M2 = i3.symbolShape, F2 = void 0 === M2 ? "square" : M2, T2 = i3.symbolSize, P2 = void 0 === T2 ? 16 : T2, V2 = i3.symbolSpacing, R = void 0 === V2 ? 8 : V2, D2 = i3.symbolBorderWidth, q2 = void 0 === D2 ? 0 : D2, G = i3.symbolBorderColor, I = void 0 === G ? "transparent" : G, N2 = i3.onClick, _ = i3.onMouseEnter, J = i3.onMouseLeave, K2 = i3.toggleSerie, Q = i3.effects, U = (0, import_react18.useState)({}), Z = U[0], $ = U[1], tt2 = zt(), et2 = (0, import_react18.useCallback)(function(t6) {
    if (Q) {
      var e6 = Q.filter(function(t7) {
        return "hover" === t7.on;
      }).reduce(function(t7, e7) {
        return p2({}, t7, e7.style);
      }, {});
      $(e6);
    }
    null == _ || _(z3, t6);
  }, [_, z3, Q]), it2 = (0, import_react18.useCallback)(function(t6) {
    if (Q) {
      var e6 = Q.filter(function(t7) {
        return "hover" !== t7.on;
      }).reduce(function(t7, e7) {
        return p2({}, t7, e7.style);
      }, {});
      $(e6);
    }
    null == J || J(z3, t6);
  }, [J, z3, Q]), nt2 = S({ direction: X2, justify: O4, symbolSize: null != (n3 = Z.symbolSize) ? n3 : P2, symbolSpacing: R, width: A3, height: W2 }), ot2 = nt2.symbolX, rt2 = nt2.symbolY, lt2 = nt2.labelX, at2 = nt2.labelY, ct2 = nt2.labelAnchor, dt2 = nt2.labelAlignment, st = [N2, _, J, K2].some(function(t6) {
    return void 0 !== t6;
  }), ht2 = "function" == typeof F2 ? F2 : w2[F2];
  return (0, import_jsx_runtime3.jsxs)("g", { transform: "translate(" + x4 + "," + b3 + ")", style: { opacity: null != (l3 = Z.itemOpacity) ? l3 : L }, children: [(0, import_jsx_runtime3.jsx)("rect", { width: A3, height: W2, fill: null != (a3 = Z.itemBackground) ? a3 : E3, style: { cursor: st ? "pointer" : "auto" }, onClick: function(t6) {
    null == N2 || N2(z3, t6), null == K2 || K2(z3.id);
  }, onMouseEnter: et2, onMouseLeave: it2 }), c8.createElement(ht2, p2({ id: z3.id, x: ot2, y: rt2, size: null != (d3 = Z.symbolSize) ? d3 : P2, fill: null != (g3 = null != (f3 = z3.fill) ? f3 : z3.color) ? g3 : "black", borderWidth: null != (m4 = Z.symbolBorderWidth) ? m4 : q2, borderColor: null != (v4 = Z.symbolBorderColor) ? v4 : I }, z3.hidden ? tt2.legends.hidden.symbol : void 0)), (0, import_jsx_runtime3.jsx)("text", { textAnchor: ct2, style: p2({}, Mt(tt2.legends.text), { fill: null != (u3 = null != (y4 = null != (k4 = Z.itemTextColor) ? k4 : B3) ? y4 : tt2.legends.text.fill) ? u3 : "black", dominantBaseline: dt2, pointerEvents: "none", userSelect: "none" }, z3.hidden ? tt2.legends.hidden.text : void 0), x: lt2, y: at2, children: z3.label })] });
};
var Y = function(e6) {
  var i3 = e6.data, n3 = e6.x, o3 = e6.y, r3 = e6.direction, l3 = e6.padding, a3 = void 0 === l3 ? 0 : l3, c9 = e6.justify, d3 = e6.effects, s4 = e6.itemWidth, h2 = e6.itemHeight, g3 = e6.itemDirection, f3 = void 0 === g3 ? "left-to-right" : g3, m4 = e6.itemsSpacing, v4 = void 0 === m4 ? 0 : m4, u3 = e6.itemTextColor, p3 = e6.itemBackground, y4 = void 0 === p3 ? "transparent" : p3, k4 = e6.itemOpacity, b3 = void 0 === k4 ? 1 : k4, S2 = e6.symbolShape, A3 = e6.symbolSize, W2 = e6.symbolSpacing, z3 = e6.symbolBorderWidth, C4 = e6.symbolBorderColor, w3 = e6.onClick, Y2 = e6.onMouseEnter, O4 = e6.onMouseLeave, B3 = e6.toggleSerie, H2 = x3({ itemCount: i3.length, itemWidth: s4, itemHeight: h2, itemsSpacing: v4, direction: r3, padding: a3 }).padding, E3 = "row" === r3 ? s4 + v4 : 0, j3 = "column" === r3 ? h2 + v4 : 0;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + n3 + "," + o3 + ")", children: i3.map(function(e7, i4) {
    return (0, import_jsx_runtime3.jsx)(X, { data: e7, x: i4 * E3 + H2.left, y: i4 * j3 + H2.top, width: s4, height: h2, direction: f3, justify: c9, effects: d3, textColor: u3, background: y4, opacity: b3, symbolShape: S2, symbolSize: A3, symbolSpacing: W2, symbolBorderWidth: z3, symbolBorderColor: C4, onClick: w3, onMouseEnter: Y2, onMouseLeave: O4, toggleSerie: B3 }, i4);
  }) });
};
var O3 = function(e6) {
  var i3 = e6.data, n3 = e6.containerWidth, o3 = e6.containerHeight, r3 = e6.translateX, l3 = void 0 === r3 ? 0 : r3, a3 = e6.translateY, c9 = void 0 === a3 ? 0 : a3, d3 = e6.anchor, s4 = e6.direction, h2 = e6.padding, g3 = void 0 === h2 ? 0 : h2, f3 = e6.justify, m4 = e6.itemsSpacing, v4 = void 0 === m4 ? 0 : m4, u3 = e6.itemWidth, p3 = e6.itemHeight, y4 = e6.itemDirection, k4 = e6.itemTextColor, S2 = e6.itemBackground, A3 = e6.itemOpacity, W2 = e6.symbolShape, z3 = e6.symbolSize, C4 = e6.symbolSpacing, w3 = e6.symbolBorderWidth, X2 = e6.symbolBorderColor, O4 = e6.onClick, B3 = e6.onMouseEnter, H2 = e6.onMouseLeave, E3 = e6.toggleSerie, j3 = e6.effects, L = x3({ itemCount: i3.length, itemsSpacing: v4, itemWidth: u3, itemHeight: p3, direction: s4, padding: g3 }), M2 = L.width, F2 = L.height, T2 = b2({ anchor: d3, translateX: l3, translateY: c9, containerWidth: n3, containerHeight: o3, width: M2, height: F2 }), P2 = T2.x, V2 = T2.y;
  return (0, import_jsx_runtime3.jsx)(Y, { data: i3, x: P2, y: V2, direction: s4, padding: g3, justify: f3, effects: j3, itemsSpacing: v4, itemWidth: u3, itemHeight: p3, itemDirection: y4, itemTextColor: k4, itemBackground: S2, itemOpacity: A3, symbolShape: W2, symbolSize: z3, symbolSpacing: C4, symbolBorderWidth: w3, symbolBorderColor: X2, onClick: O4, onMouseEnter: B3, onMouseLeave: H2, toggleSerie: "boolean" == typeof E3 ? void 0 : E3 });
};
var B2 = { start: "left", middle: "center", end: "right" };
var H = function(t6, e6) {
  var i3 = e6.data, n3 = e6.containerWidth, o3 = e6.containerHeight, r3 = e6.translateX, l3 = void 0 === r3 ? 0 : r3, a3 = e6.translateY, c9 = void 0 === a3 ? 0 : a3, d3 = e6.anchor, s4 = e6.direction, h2 = e6.padding, g3 = void 0 === h2 ? 0 : h2, f3 = e6.justify, m4 = void 0 !== f3 && f3, v4 = e6.itemsSpacing, u3 = void 0 === v4 ? 0 : v4, p3 = e6.itemWidth, y4 = e6.itemHeight, k4 = e6.itemDirection, A3 = void 0 === k4 ? "left-to-right" : k4, W2 = e6.itemTextColor, z3 = e6.symbolSize, C4 = void 0 === z3 ? 16 : z3, w3 = e6.symbolSpacing, X2 = void 0 === w3 ? 8 : w3, Y2 = e6.theme, O4 = x3({ itemCount: i3.length, itemWidth: p3, itemHeight: y4, itemsSpacing: u3, direction: s4, padding: g3 }), H2 = O4.width, E3 = O4.height, j3 = O4.padding, L = b2({ anchor: d3, translateX: l3, translateY: c9, containerWidth: n3, containerHeight: o3, width: H2, height: E3 }), M2 = L.x, F2 = L.y, T2 = "row" === s4 ? p3 + u3 : 0, P2 = "column" === s4 ? y4 + u3 : 0;
  t6.save(), t6.translate(M2, F2), t6.font = Y2.legends.text.fontSize + "px " + (Y2.legends.text.fontFamily || "sans-serif"), i3.forEach(function(e7, i4) {
    var n4, o4, r4 = i4 * T2 + j3.left, l4 = i4 * P2 + j3.top, a4 = S({ direction: A3, justify: m4, symbolSize: C4, symbolSpacing: X2, width: p3, height: y4 }), c10 = a4.symbolX, d4 = a4.symbolY, s5 = a4.labelX, h3 = a4.labelY, g4 = a4.labelAnchor, f4 = a4.labelAlignment;
    t6.fillStyle = null != (n4 = e7.color) ? n4 : "black", t6.fillRect(r4 + c10, l4 + d4, C4, C4), t6.textAlign = B2[g4], "central" === f4 && (t6.textBaseline = "middle"), t6.fillStyle = null != (o4 = null != W2 ? W2 : Y2.legends.text.fill) ? o4 : "black", t6.fillText(String(e7.label), r4 + s5, l4 + h3);
  }), t6.restore();
};
var j2 = function(t6) {
  var e6 = t6.scale, i3 = t6.domain, n3 = t6.reverse, o3 = void 0 !== n3 && n3, r3 = t6.valueFormat, l3 = void 0 === r3 ? function(t7) {
    return t7;
  } : r3, a3 = t6.separator, c9 = void 0 === a3 ? " - " : a3;
  return (0, import_react18.useMemo)(function() {
    var t7 = (null != i3 ? i3 : e6.range()).map(function(t8, i4) {
      var n4 = e6.invertExtent(t8), o4 = n4[0], r4 = n4[1];
      return { id: t8, index: i4, extent: [o4, r4], label: "" + l3(o4) + c9 + l3(r4), value: e6(o4), color: t8 };
    });
    return o3 && t7.reverse(), t7;
  }, [i3, e6, o3, c9, l3]);
};

export {
  useSpring,
  useTransition,
  to2 as to,
  animated,
  g,
  w,
  C3 as C,
  P,
  k2 as k,
  require_Symbol,
  require_baseGetTag,
  require_isObject,
  require_isFunction,
  require_Stack,
  require_baseFor,
  require_cloneBuffer,
  require_cloneArrayBuffer,
  require_cloneTypedArray,
  require_copyArray,
  require_getPrototype,
  require_initCloneObject,
  require_isObjectLike,
  require_isArray,
  require_isArrayLike,
  require_isBuffer,
  require_isPlainObject,
  require_baseUnary,
  require_nodeUtil,
  require_assignValue,
  require_copyObject,
  require_keysIn,
  require_identity,
  require_baseRest,
  require_isIterateeCall,
  require_isSymbol,
  require_isKey,
  require_arrayMap,
  require_toString,
  require_castPath,
  require_toKey,
  require_baseGet,
  require_get,
  require_last,
  band,
  point,
  format,
  linear2 as linear,
  log,
  symlog,
  newInterval,
  millisecond_default,
  second_default,
  minute_default,
  hour_default,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  month_default,
  year_default,
  utcMinute_default,
  utcHour_default,
  utcSunday2 as utcSunday,
  utcMonday2 as utcMonday,
  utcTuesday2 as utcTuesday,
  utcWednesday2 as utcWednesday,
  utcThursday2 as utcThursday,
  utcFriday2 as utcFriday,
  utcSaturday2 as utcSaturday,
  utcMonth_default,
  utcYear_default,
  timeFormat,
  timeParse,
  utcParse,
  time,
  utcTime,
  require_SetCache,
  require_arrayIncludes,
  require_arrayIncludesWith,
  require_cacheHas,
  line_default,
  area_default,
  stack_default,
  diverging_default,
  require_hasIn,
  require_arrayPush,
  require_baseFlatten,
  require_flatRest,
  require_setToArray,
  require_baseGetAllKeys,
  require_arrayFilter,
  require_stubArray,
  require_getSymbols,
  require_keys,
  require_getAllKeys,
  require_Set,
  require_getTag,
  require_baseIsEqual,
  Ur,
  Fr,
  Hr,
  et,
  lt,
  _t,
  wt,
  Ot,
  zt,
  Mt,
  St,
  It,
  Ht,
  Kt,
  Jt,
  Qt,
  rn,
  gn,
  vn,
  Rn,
  On,
  qn,
  Cn,
  Wn,
  Mn,
  jn,
  Sn,
  In,
  Xe,
  Ye,
  pr,
  O3 as O,
  H,
  j2 as j
};
//# sourceMappingURL=chunk-AMKCINI5.js.map
