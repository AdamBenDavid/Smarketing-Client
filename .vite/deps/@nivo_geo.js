import {
  H,
  Hr,
  In,
  It,
  O,
  On,
  Sn,
  Xe,
  Ye,
  et,
  format,
  gn,
  j,
  k,
  require_get,
  require_isFunction,
  w,
  wt,
  zt
} from "./chunk-AMKCINI5.js";
import "./chunk-UP6LQVYV.js";
import {
  require_prop_types
} from "./chunk-R2LMYVXF.js";
import {
  require_jsx_runtime
} from "./chunk-RZSASJON.js";
import "./chunk-Q6DFBYTI.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@nivo/geo/dist/nivo-geo.es.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_isFunction = __toESM(require_isFunction());
var import_get = __toESM(require_get());

// node_modules/d3-geo/src/adder.js
function adder_default() {
  return new Adder();
}
function Adder() {
  this.reset();
}
Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(y2) {
    add(temp, y2, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var temp = new Adder();
function add(adder, a, b) {
  var x = adder.s = a + b, bv = x - a, av = x - bv;
  adder.t = a - av + (b - bv);
}

// node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var log = Math.log;
var sin = Math.sin;
var sign = Math.sign || function(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

// node_modules/d3-geo/src/noop.js
function noop() {
}

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object2, stream) {
    streamGeometry(object2.geometry, stream);
  },
  FeatureCollection: function(object2, stream) {
    var features = object2.features, i2 = -1, n2 = features.length;
    while (++i2 < n2) streamGeometry(features[i2].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object2, stream) {
    stream.sphere();
  },
  Point: function(object2, stream) {
    object2 = object2.coordinates;
    stream.point(object2[0], object2[1], object2[2]);
  },
  MultiPoint: function(object2, stream) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) object2 = coordinates2[i2], stream.point(object2[0], object2[1], object2[2]);
  },
  LineString: function(object2, stream) {
    streamLine(object2.coordinates, stream, 0);
  },
  MultiLineString: function(object2, stream) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) streamLine(coordinates2[i2], stream, 0);
  },
  Polygon: function(object2, stream) {
    streamPolygon(object2.coordinates, stream);
  },
  MultiPolygon: function(object2, stream) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) streamPolygon(coordinates2[i2], stream);
  },
  GeometryCollection: function(object2, stream) {
    var geometries = object2.geometries, i2 = -1, n2 = geometries.length;
    while (++i2 < n2) streamGeometry(geometries[i2], stream);
  }
};
function streamLine(coordinates2, stream, closed) {
  var i2 = -1, n2 = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i2 < n2) coordinate = coordinates2[i2], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i2 = -1, n2 = coordinates2.length;
  stream.polygonStart();
  while (++i2 < n2) streamLine(coordinates2[i2], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}

// node_modules/d3-geo/src/area.js
var areaRingSum = adder_default();
var areaSum = adder_default();

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi = spherical2[1], cosPhi = cos(phi);
  return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
}
function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function cartesianScale(vector, k2) {
  return [vector[0] * k2, vector[1] * k2, vector[2] * k2];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// node_modules/d3-geo/src/bounds.js
var deltaSum = adder_default();

// node_modules/d3-geo/src/compose.js
function compose_default(a, b) {
  function compose(x, y2) {
    return x = a(x, y2), b(x[0], x[1]);
  }
  if (a.invert && b.invert) compose.invert = function(x, y2) {
    return x = b.invert(x, y2), x && a.invert(x[0], x[1]);
  };
  return compose;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi) {
  return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos(deltaPhi), sinDeltaPhi = sin(deltaPhi), cosDeltaGamma = cos(deltaGamma), sinDeltaGamma = sin(deltaGamma);
  function rotation(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z2 = sin(phi), k2 = z2 * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y2 * cosDeltaGamma - k2 * sinDeltaGamma, x * cosDeltaPhi - z2 * sinDeltaPhi),
      asin(k2 * cosDeltaGamma + y2 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi) {
    var cosPhi = cos(phi), x = cos(lambda) * cosPhi, y2 = sin(lambda) * cosPhi, z2 = sin(phi), k2 = z2 * cosDeltaGamma - y2 * sinDeltaGamma;
    return [
      atan2(y2 * cosDeltaGamma + z2 * sinDeltaGamma, x * cosDeltaPhi + k2 * sinDeltaPhi),
      asin(k2 * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees, coordinates2[1] *= degrees, coordinates2;
  };
  return forward;
}

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos(radius), sinRadius = sin(radius), step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }
  for (var point, t2 = t0; direction > 0 ? t2 > t1 : t2 < t1; t2 -= step) {
    point = spherical([cosRadius, -sinRadius * cos(t2), -sinRadius * sin(t2)]);
    stream.point(point[0], point[1]);
  }
}
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default() {
  var lines = [], line;
  return {
    point: function(x, y2, m2) {
      line.push([x, y2, m2]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a, b) {
  return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i2, n2;
  segments.forEach(function(segment) {
    if ((n3 = segment.length - 1) <= 0) return;
    var n3, p0 = segment[0], p1 = segment[n3], x;
    if (pointEqual_default(p0, p1)) {
      if (!p0[2] && !p1[2]) {
        stream.lineStart();
        for (i2 = 0; i2 < n3; ++i2) stream.point((p0 = segment[i2])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon;
    }
    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });
  if (!subject.length) return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i2 = 0, n2 = clip.length; i2 < n2; ++i2) {
    clip[i2].e = startInside = !startInside;
  }
  var start = subject[0], points, point;
  while (1) {
    var current = start, isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i2 = 0, n2 = points.length; i2 < n2; ++i2) stream.point((point = points[i2])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i2 = points.length - 1; i2 >= 0; --i2) stream.point((point = points[i2])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array2) {
  if (!(n2 = array2.length)) return;
  var n2, i2 = 0, a = array2[0], b;
  while (++i2 < n2) {
    a.n = b = array2[i2];
    b.p = a;
    a = b;
  }
  a.n = b = array2[0];
  b.p = a;
}

// node_modules/d3-geo/src/polygonContains.js
var sum = adder_default();
function longitude(point) {
  if (abs(point[0]) <= pi)
    return point[0];
  else
    return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
}
function polygonContains_default(polygon, point) {
  var lambda = longitude(point), phi = point[1], sinPhi = sin(phi), normal = [sin(lambda), -cos(lambda), 0], angle = 0, winding = 0;
  sum.reset();
  if (sinPhi === 1) phi = halfPi + epsilon;
  else if (sinPhi === -1) phi = -halfPi - epsilon;
  for (var i2 = 0, n2 = polygon.length; i2 < n2; ++i2) {
    if (!(m2 = (ring = polygon[i2]).length)) continue;
    var ring, m2, point0 = ring[m2 - 1], lambda02 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi02 = sin(phi0), cosPhi02 = cos(phi0);
    for (var j2 = 0; j2 < m2; ++j2, lambda02 = lambda1, sinPhi02 = sinPhi1, cosPhi02 = cosPhi1, point0 = point1) {
      var point1 = ring[j2], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi1), cosPhi1 = cos(phi1), delta = lambda1 - lambda02, sign2 = delta >= 0 ? 1 : -1, absDelta = sign2 * delta, antimeridian = absDelta > pi, k2 = sinPhi02 * sinPhi1;
      sum.add(atan2(k2 * sign2 * sin(absDelta), cosPhi02 * cosPhi1 + k2 * cos(absDelta)));
      angle += antimeridian ? delta + sign2 * tau : delta;
      if (antimeridian ^ lambda02 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle < -epsilon || angle < epsilon && sum < -epsilon) ^ winding & 1;
}

// node_modules/d3-geo/node_modules/d3-array/src/ascending.js
function ascending_default(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-geo/node_modules/d3-array/src/bisector.js
function bisector_default(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x) {
    return ascending_default(f(d), x);
  };
}

// node_modules/d3-geo/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;

// node_modules/d3-geo/node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-geo/node_modules/d3-array/src/range.js
function range_default(start, stop, step) {
  start = +start, stop = +stop, step = (n2 = arguments.length) < 2 ? (stop = start, start = 0, 1) : n2 < 3 ? 1 : +step;
  var i2 = -1, n2 = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n2);
  while (++i2 < n2) {
    range[i2] = start + i2 * step;
  }
  return range;
}

// node_modules/d3-geo/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

// node_modules/d3-geo/node_modules/d3-array/src/merge.js
function merge_default(arrays) {
  var n2 = arrays.length, m2, i2 = -1, j2 = 0, merged, array2;
  while (++i2 < n2) j2 += arrays[i2].length;
  merged = new Array(j2);
  while (--n2 >= 0) {
    array2 = arrays[n2];
    m2 = array2.length;
    while (--m2 >= 0) {
      merged[--j2] = array2[m2];
    }
  }
  return merged;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge_default(segments);
        var startInside = polygonContains_default(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }
    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }
    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i2, n2 = ringSegments.length, m2, segment, point2;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n2) return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m2 = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i2 = 0; i2 < m2; ++i2) sink.point((point2 = segment[i2])[0], point2[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n2 > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(
  function() {
    return true;
  },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi, -halfPi]
);
function clipAntimeridianLine(stream) {
  var lambda02 = NaN, phi0 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi : -pi, delta = abs(lambda1 - lambda02);
      if (abs(delta - pi) < epsilon) {
        stream.point(lambda02, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi) {
        if (abs(lambda02 - sign0) < epsilon) lambda02 -= sign0 * epsilon;
        if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
        phi0 = clipAntimeridianIntersect(lambda02, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda02 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda02 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda02, phi0, lambda1, phi1) {
  var cosPhi02, cosPhi1, sinLambda0Lambda1 = sin(lambda02 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1) - sin(phi1) * (cosPhi02 = cos(phi0)) * sin(lambda02)) / (cosPhi02 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi;
    stream.point(-pi, phi);
    stream.point(0, phi);
    stream.point(pi, phi);
    stream.point(pi, 0);
    stream.point(pi, -phi);
    stream.point(0, -phi);
    stream.point(-pi, -phi);
    stream.point(-pi, 0);
    stream.point(-pi, phi);
  } else if (abs(from[0] - to[0]) > epsilon) {
    var lambda = from[0] < to[0] ? pi : -pi;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/circle.js
function circle_default(radius) {
  var cr = cos(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi) {
    return cos(lambda) * cos(phi) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual_default(point0, point2) || pointEqual_default(point1, point2))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1], 2);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t2;
          if (!(c & c0) && (t2 = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t2[0][0], t2[0][1]);
              stream.point(t2[1][0], t2[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t2[1][0], t2[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t2[0][0], t2[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect(a, b, two) {
    var pa = cartesian(a), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant) return !two && a;
    var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B = cartesianScale(n2, c2);
    cartesianAddInPlace(A5, B);
    var u = n1xn2, w2 = cartesianDot(A5, u), uu = cartesianDot(u, u), t2 = w2 * w2 - uu * (cartesianDot(A5, A5) - 1);
    if (t2 < 0) return;
    var t3 = sqrt(t2), q = cartesianScale(u, (-w2 - t3) / uu);
    cartesianAddInPlace(q, A5);
    q = spherical(q);
    if (!two) return q;
    var lambda02 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z2;
    if (lambda1 < lambda02) z2 = lambda02, lambda02 = lambda1, lambda1 = z2;
    var delta2 = lambda1 - lambda02, polar = abs(delta2 - pi) < epsilon, meridian = polar || delta2 < epsilon;
    if (!polar && phi1 < phi0) z2 = phi0, phi0 = phi1, phi1 = z2;
    if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda02) < epsilon ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta2 > pi ^ (lambda02 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w2 + t3) / uu);
      cartesianAddInPlace(q1, A5);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi) {
    var r2 = smallRadius ? radius : pi - radius, code2 = 0;
    if (lambda < -r2) code2 |= 1;
    else if (lambda > r2) code2 |= 2;
    if (phi < -r2) code2 |= 4;
    else if (phi > r2) code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
}

// node_modules/d3-geo/src/clip/line.js
function line_default(a, b, x05, y05, x12, y12) {
  var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r2;
  r2 = x05 - ax;
  if (!dx && r2 > 0) return;
  r2 /= dx;
  if (dx < 0) {
    if (r2 < t0) return;
    if (r2 < t1) t1 = r2;
  } else if (dx > 0) {
    if (r2 > t1) return;
    if (r2 > t0) t0 = r2;
  }
  r2 = x12 - ax;
  if (!dx && r2 < 0) return;
  r2 /= dx;
  if (dx < 0) {
    if (r2 > t1) return;
    if (r2 > t0) t0 = r2;
  } else if (dx > 0) {
    if (r2 < t0) return;
    if (r2 < t1) t1 = r2;
  }
  r2 = y05 - ay;
  if (!dy && r2 > 0) return;
  r2 /= dy;
  if (dy < 0) {
    if (r2 < t0) return;
    if (r2 < t1) t1 = r2;
  } else if (dy > 0) {
    if (r2 > t1) return;
    if (r2 > t0) t0 = r2;
  }
  r2 = y12 - ay;
  if (!dy && r2 < 0) return;
  r2 /= dy;
  if (dy < 0) {
    if (r2 > t1) return;
    if (r2 > t0) t0 = r2;
  } else if (dy > 0) {
    if (r2 < t0) return;
    if (r2 < t1) t1 = r2;
  }
  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipRectangle(x05, y05, x12, y12) {
  function visible(x, y2) {
    return x05 <= x && x <= x12 && y05 <= y2 && y2 <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a === 0 || a === 3 ? x05 : x12, a > 1 ? y12 : y05);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x05) < epsilon ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon ? direction > 0 ? 2 : 1 : abs(p[1] - y05) < epsilon ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a, b) {
    return comparePoint(a.x, b.x);
  }
  function comparePoint(a, b) {
    var ca = corner(a, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point(x, y2) {
      if (visible(x, y2)) activeStream.point(x, y2);
    }
    function polygonInside() {
      var winding = 0;
      for (var i2 = 0, n2 = polygon.length; i2 < n2; ++i2) {
        for (var ring2 = polygon[i2], j2 = 1, m2 = ring2.length, point2 = ring2[0], a0, a1, b0 = point2[0], b1 = point2[1]; j2 < m2; ++j2) {
          a0 = b0, a1 = b1, point2 = ring2[j2], b0 = point2[0], b1 = point2[1];
          if (a1 <= y12) {
            if (b1 > y12 && (b0 - a0) * (y12 - a1) > (b1 - a1) * (x05 - a0)) ++winding;
          } else {
            if (b1 <= y12 && (b0 - a0) * (y12 - a1) < (b1 - a1) * (x05 - a0)) --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge_default(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }
    function linePoint(x, y2) {
      var v = visible(x, y2);
      if (polygon) ring.push([x, y2]);
      if (first) {
        x__ = x, y__ = y2, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y2);
        }
      } else {
        if (v && v_) activeStream.point(x, y2);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x = Math.max(clipMin, Math.min(clipMax, x)), y2 = Math.max(clipMin, Math.min(clipMax, y2))];
          if (line_default(a, b, x05, y05, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y2);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y2, v_ = v;
    }
    return clipStream;
  };
}

// node_modules/d3-geo/src/length.js
var lengthSum = adder_default();
var lambda0;
var sinPhi0;
var cosPhi0;
var lengthStream = {
  sphere: noop,
  point: noop,
  lineStart: lengthLineStart,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop
};
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop;
}
function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin(phi), cosPhi = cos(phi), delta = abs(lambda - lambda0), cosDelta = cos(delta), sinDelta = sin(delta), x = cosPhi * sinDelta, y2 = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta, z2 = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y2 * y2), z2));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
function length_default(object2) {
  lengthSum.reset();
  stream_default(object2, lengthStream);
  return +lengthSum;
}

// node_modules/d3-geo/src/distance.js
var coordinates = [null, null];
var object = { type: "LineString", coordinates };
function distance_default(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length_default(object);
}

// node_modules/d3-geo/src/contains.js
var containsObjectType = {
  Feature: function(object2, point) {
    return containsGeometry(object2.geometry, point);
  },
  FeatureCollection: function(object2, point) {
    var features = object2.features, i2 = -1, n2 = features.length;
    while (++i2 < n2) if (containsGeometry(features[i2].geometry, point)) return true;
    return false;
  }
};
var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object2, point) {
    return containsPoint(object2.coordinates, point);
  },
  MultiPoint: function(object2, point) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) if (containsPoint(coordinates2[i2], point)) return true;
    return false;
  },
  LineString: function(object2, point) {
    return containsLine(object2.coordinates, point);
  },
  MultiLineString: function(object2, point) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) if (containsLine(coordinates2[i2], point)) return true;
    return false;
  },
  Polygon: function(object2, point) {
    return containsPolygon(object2.coordinates, point);
  },
  MultiPolygon: function(object2, point) {
    var coordinates2 = object2.coordinates, i2 = -1, n2 = coordinates2.length;
    while (++i2 < n2) if (containsPolygon(coordinates2[i2], point)) return true;
    return false;
  },
  GeometryCollection: function(object2, point) {
    var geometries = object2.geometries, i2 = -1, n2 = geometries.length;
    while (++i2 < n2) if (containsGeometry(geometries[i2], point)) return true;
    return false;
  }
};
function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates2, point) {
  return distance_default(coordinates2, point) === 0;
}
function containsLine(coordinates2, point) {
  var ao, bo, ab;
  for (var i2 = 0, n2 = coordinates2.length; i2 < n2; i2++) {
    bo = distance_default(coordinates2[i2], point);
    if (bo === 0) return true;
    if (i2 > 0) {
      ab = distance_default(coordinates2[i2], coordinates2[i2 - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}
function contains_default(object2, point) {
  return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point);
}

// node_modules/d3-geo/src/graticule.js
function graticuleX(y05, y12, dy) {
  var y2 = range_default(y05, y12 - epsilon, dy).concat(y12);
  return function(x) {
    return y2.map(function(y3) {
      return [x, y3];
    });
  };
}
function graticuleY(x05, x12, dx) {
  var x = range_default(x05, x12 - epsilon, dx).concat(x12);
  return function(y2) {
    return x.map(function(x2) {
      return [x2, y2];
    });
  };
}
function graticule() {
  var x12, x05, X12, X02, y12, y05, Y12, Y02, dx = 10, dy = dx, DX = 90, DY = 360, x, y2, X3, Y3, precision = 2.5;
  function graticule2() {
    return { type: "MultiLineString", coordinates: lines() };
  }
  function lines() {
    return range_default(ceil(X02 / DX) * DX, X12, DX).map(X3).concat(range_default(ceil(Y02 / DY) * DY, Y12, DY).map(Y3)).concat(range_default(ceil(x05 / dx) * dx, x12, dx).filter(function(x2) {
      return abs(x2 % DX) > epsilon;
    }).map(x)).concat(range_default(ceil(y05 / dy) * dy, y12, dy).filter(function(y3) {
      return abs(y3 % DY) > epsilon;
    }).map(y2));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return { type: "LineString", coordinates: coordinates2 };
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X3(X02).concat(
          Y3(Y12).slice(1),
          X3(X12).reverse().slice(1),
          Y3(Y02).reverse().slice(1)
        )
      ]
    };
  };
  graticule2.extent = function(_2) {
    if (!arguments.length) return graticule2.extentMinor();
    return graticule2.extentMajor(_2).extentMinor(_2);
  };
  graticule2.extentMajor = function(_2) {
    if (!arguments.length) return [[X02, Y02], [X12, Y12]];
    X02 = +_2[0][0], X12 = +_2[1][0];
    Y02 = +_2[0][1], Y12 = +_2[1][1];
    if (X02 > X12) _2 = X02, X02 = X12, X12 = _2;
    if (Y02 > Y12) _2 = Y02, Y02 = Y12, Y12 = _2;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_2) {
    if (!arguments.length) return [[x05, y05], [x12, y12]];
    x05 = +_2[0][0], x12 = +_2[1][0];
    y05 = +_2[0][1], y12 = +_2[1][1];
    if (x05 > x12) _2 = x05, x05 = x12, x12 = _2;
    if (y05 > y12) _2 = y05, y05 = y12, y12 = _2;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_2) {
    if (!arguments.length) return graticule2.stepMinor();
    return graticule2.stepMajor(_2).stepMinor(_2);
  };
  graticule2.stepMajor = function(_2) {
    if (!arguments.length) return [DX, DY];
    DX = +_2[0], DY = +_2[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_2) {
    if (!arguments.length) return [dx, dy];
    dx = +_2[0], dy = +_2[1];
    return graticule2;
  };
  graticule2.precision = function(_2) {
    if (!arguments.length) return precision;
    precision = +_2;
    x = graticuleX(y05, y12, 90);
    y2 = graticuleY(x05, x12, precision);
    X3 = graticuleX(Y02, Y12, 90);
    Y3 = graticuleY(X02, X12, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]]).extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
}

// node_modules/d3-geo/src/identity.js
function identity_default2(x) {
  return x;
}

// node_modules/d3-geo/src/path/area.js
var areaSum2 = adder_default();
var areaRingSum2 = adder_default();
var x00;
var y00;
var x0;
var y0;
var areaStream2 = {
  point: noop,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: function() {
    areaStream2.lineStart = areaRingStart;
    areaStream2.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop;
    areaSum2.add(abs(areaRingSum2));
    areaRingSum2.reset();
  },
  result: function() {
    var area = areaSum2 / 2;
    areaSum2.reset();
    return area;
  }
};
function areaRingStart() {
  areaStream2.point = areaPointFirst;
}
function areaPointFirst(x, y2) {
  areaStream2.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y2;
}
function areaPoint(x, y2) {
  areaRingSum2.add(y0 * x - x0 * y2);
  x0 = x, y0 = y2;
}
function areaRingEnd() {
  areaPoint(x00, y00);
}
var area_default = areaStream2;

// node_modules/d3-geo/src/path/bounds.js
var x02 = Infinity;
var y02 = x02;
var x1 = -x02;
var y1 = x1;
var boundsStream = {
  point: boundsPoint,
  lineStart: noop,
  lineEnd: noop,
  polygonStart: noop,
  polygonEnd: noop,
  result: function() {
    var bounds = [[x02, y02], [x1, y1]];
    x1 = y1 = -(y02 = x02 = Infinity);
    return bounds;
  }
};
function boundsPoint(x, y2) {
  if (x < x02) x02 = x;
  if (x > x1) x1 = x;
  if (y2 < y02) y02 = y2;
  if (y2 > y1) y1 = y2;
}
var bounds_default = boundsStream;

// node_modules/d3-geo/src/path/centroid.js
var X0 = 0;
var Y0 = 0;
var Z0 = 0;
var X1 = 0;
var Y1 = 0;
var Z1 = 0;
var X2 = 0;
var Y2 = 0;
var Z2 = 0;
var x002;
var y002;
var x03;
var y03;
var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2] : Z1 ? [X1 / Z1, Y1 / Z1] : Z0 ? [X0 / Z0, Y0 / Z0] : [NaN, NaN];
    X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    return centroid;
  }
};
function centroidPoint(x, y2) {
  X0 += x;
  Y0 += y2;
  ++Z0;
}
function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x, y2) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x03 = x, y03 = y2);
}
function centroidPointLine(x, y2) {
  var dx = x - x03, dy = y2 - y03, z2 = sqrt(dx * dx + dy * dy);
  X1 += z2 * (x03 + x) / 2;
  Y1 += z2 * (y03 + y2) / 2;
  Z1 += z2;
  centroidPoint(x03 = x, y03 = y2);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}
function centroidRingEnd() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x, y2) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x002 = x03 = x, y002 = y03 = y2);
}
function centroidPointRing(x, y2) {
  var dx = x - x03, dy = y2 - y03, z2 = sqrt(dx * dx + dy * dy);
  X1 += z2 * (x03 + x) / 2;
  Y1 += z2 * (y03 + y2) / 2;
  Z1 += z2;
  z2 = y03 * x - x03 * y2;
  X2 += z2 * (x03 + x);
  Y2 += z2 * (y03 + y2);
  Z2 += z2 * 3;
  centroidPoint(x03 = x, y03 = y2);
}
var centroid_default = centroidStream;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_2) {
    return this._radius = _2, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y2) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y2);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y2);
        this._context.arc(x, y2, this._radius, 0, tau);
        break;
      }
    }
  },
  result: noop
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum2 = adder_default();
var lengthRing;
var x003;
var y003;
var x04;
var y04;
var lengthStream2 = {
  point: noop,
  lineStart: function() {
    lengthStream2.point = lengthPointFirst2;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint2(x003, y003);
    lengthStream2.point = noop;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum2;
    lengthSum2.reset();
    return length;
  }
};
function lengthPointFirst2(x, y2) {
  lengthStream2.point = lengthPoint2;
  x003 = x04 = x, y003 = y04 = y2;
}
function lengthPoint2(x, y2) {
  x04 -= x, y04 -= y2;
  lengthSum2.add(sqrt(x04 * x04 + y04 * y04));
  x04 = x, y04 = y2;
}
var measure_default = lengthStream2;

// node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_2) {
    if ((_2 = +_2) !== this._radius) this._radius = _2, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y2) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y2);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y2);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y2, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// node_modules/d3-geo/src/path/index.js
function path_default(projection2, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path(object2) {
    if (object2) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path.area = function(object2) {
    stream_default(object2, projectionStream(area_default));
    return area_default.result();
  };
  path.measure = function(object2) {
    stream_default(object2, projectionStream(measure_default));
    return measure_default.result();
  };
  path.bounds = function(object2) {
    stream_default(object2, projectionStream(bounds_default));
    return bounds_default.result();
  };
  path.centroid = function(object2) {
    stream_default(object2, projectionStream(centroid_default));
    return centroid_default.result();
  };
  path.projection = function(_2) {
    return arguments.length ? (projectionStream = _2 == null ? (projection2 = null, identity_default2) : (projection2 = _2).stream, path) : projection2;
  };
  path.context = function(_2) {
    if (!arguments.length) return context;
    contextStream = _2 == null ? (context = null, new PathString()) : new PathContext(context = _2);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };
  path.pointRadius = function(_2) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _2 === "function" ? _2 : (contextStream.pointRadius(+_2), +_2);
    return path;
  };
  return path.projection(projection2).context(context);
}

// node_modules/d3-geo/src/transform.js
function transformer(methods) {
  return function(stream) {
    var s = new TransformStream();
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y2) {
    this.stream.point(x, y2);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object2) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null) projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default));
  fitBounds(bounds_default.result());
  if (clip != null) projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent, object2) {
  return fit(projection2, function(b) {
    var w2 = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k2 = Math.min(w2 / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w2 - k2 * (b[1][0] + b[0][0])) / 2, y2 = +extent[0][1] + (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k2).translate([x, y2]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b) {
    var w2 = +width, k2 = w2 / (b[1][0] - b[0][0]), x = (w2 - k2 * (b[1][0] + b[0][0])) / 2, y2 = -k2 * b[0][1];
    projection2.scale(150 * k2).translate([x, y2]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b) {
    var h = +height, k2 = h / (b[1][1] - b[0][1]), x = -k2 * b[0][0], y2 = (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k2).translate([x, y2]);
  }, object2);
}

// node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos(30 * radians);
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x, y2) {
      x = project(x, y2);
      this.stream.point(x[0], x[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x05, y05, lambda02, a0, b0, c0, x12, y12, lambda1, a1, b1, c1, depth, stream) {
    var dx = x12 - x05, dy = y12 - y05, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1, b = b0 + b1, c = c0 + c1, m2 = sqrt(a * a + b * b + c * c), phi2 = asin(c /= m2), lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda02 - lambda1) < epsilon ? (lambda02 + lambda1) / 2 : atan2(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x05, dy2 = y2 - y05, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x05, y05, lambda02, a0, b0, c0, x2, y2, lambda2, a /= m2, b /= m2, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x12, y12, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x004, y004, a00, b00, c00, lambda02, x05, y05, a0, b0, c0;
    var resampleStream = {
      point,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point(x, y2) {
      x = project(x, y2);
      stream.point(x[0], x[1]);
    }
    function lineStart() {
      x05 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }
    function linePoint(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x05, y05, lambda02, a0, b0, c0, x05 = p[0], y05 = p[1], lambda02 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x05, y05);
    }
    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x004 = x05, y004 = y05, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }
    function ringEnd() {
      resampleLineTo(x05, y05, lambda02, a0, b0, c0, x004, y004, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x, y2) {
    this.stream.point(x * radians, y2 * radians);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x, y2) {
      var r2 = rotate(x, y2);
      return this.stream.point(r2[0], r2[1]);
    }
  });
}
function scaleTranslate(k2, dx, dy, sx, sy) {
  function transform(x, y2) {
    x *= sx;
    y2 *= sy;
    return [dx + k2 * x, dy - k2 * y2];
  }
  transform.invert = function(x, y2) {
    return [(x - dx) / k2 * sx, (dy - y2) / k2 * sy];
  };
  return transform;
}
function scaleTranslateRotate(k2, dx, dy, sx, sy, alpha) {
  var cosAlpha = cos(alpha), sinAlpha = sin(alpha), a = cosAlpha * k2, b = sinAlpha * k2, ai = cosAlpha / k2, bi = sinAlpha / k2, ci = (sinAlpha * dy - cosAlpha * dx) / k2, fi = (sinAlpha * dx + cosAlpha * dy) / k2;
  function transform(x, y2) {
    x *= sx;
    y2 *= sy;
    return [a * x - b * y2 + dx, dy - b * x - a * y2];
  }
  transform.invert = function(x, y2) {
    return [sx * (ai * x - bi * y2 + ci), sy * (fi - bi * x - ai * y2)];
  };
  return transform;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k2 = 150, x = 480, y2 = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x05 = null, y05, x12, y12, postclip = identity_default2, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point) {
    return projectRotateTransform(point[0] * radians, point[1] * radians);
  }
  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * degrees, point[1] * degrees];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_2) {
    return arguments.length ? (preclip = _2, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_2) {
    return arguments.length ? (postclip = _2, x05 = y05 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_2) {
    return arguments.length ? (preclip = +_2 ? circle_default(theta = _2 * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees;
  };
  projection2.clipExtent = function(_2) {
    return arguments.length ? (postclip = _2 == null ? (x05 = y05 = x12 = y12 = null, identity_default2) : clipRectangle(x05 = +_2[0][0], y05 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1]), reset()) : x05 == null ? null : [[x05, y05], [x12, y12]];
  };
  projection2.scale = function(_2) {
    return arguments.length ? (k2 = +_2, recenter()) : k2;
  };
  projection2.translate = function(_2) {
    return arguments.length ? (x = +_2[0], y2 = +_2[1], recenter()) : [x, y2];
  };
  projection2.center = function(_2) {
    return arguments.length ? (lambda = _2[0] % 360 * radians, phi = _2[1] % 360 * radians, recenter()) : [lambda * degrees, phi * degrees];
  };
  projection2.rotate = function(_2) {
    return arguments.length ? (deltaLambda = _2[0] % 360 * radians, deltaPhi = _2[1] % 360 * radians, deltaGamma = _2.length > 2 ? _2[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees, deltaPhi * degrees, deltaGamma * degrees];
  };
  projection2.angle = function(_2) {
    return arguments.length ? (alpha = _2 % 360 * radians, recenter()) : alpha * degrees;
  };
  projection2.reflectX = function(_2) {
    return arguments.length ? (sx = _2 ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_2) {
    return arguments.length ? (sy = _2 ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_2) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _2 * _2), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center = scaleTranslateRotate(k2, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k2, x - center[0], y2 - center[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x, y2) {
    var cx = cos(x), cy = cos(y2), k2 = scale(cx * cy);
    return [
      k2 * cy * sin(x),
      k2 * sin(y2)
    ];
  };
}
function azimuthalInvert(angle) {
  return function(x, y2) {
    var z2 = sqrt(x * x + y2 * y2), c = angle(z2), sc = sin(c), cc = cos(c);
    return [
      atan2(x * sc, z2 * cc),
      asin(z2 && y2 * sc / z2)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z2) {
  return 2 * asin(z2 / 2);
});
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin(c);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z2) {
  return z2;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi + phi) / 2))];
}
mercatorRaw.invert = function(x, y2) {
  return [x, 2 * atan(exp(y2)) - halfPi];
};
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau);
}
function mercatorProjection(project) {
  var m2 = projection(project), center = m2.center, scale = m2.scale, translate = m2.translate, clipExtent = m2.clipExtent, x05 = null, y05, x12, y12;
  m2.scale = function(_2) {
    return arguments.length ? (scale(_2), reclip()) : scale();
  };
  m2.translate = function(_2) {
    return arguments.length ? (translate(_2), reclip()) : translate();
  };
  m2.center = function(_2) {
    return arguments.length ? (center(_2), reclip()) : center();
  };
  m2.clipExtent = function(_2) {
    return arguments.length ? (_2 == null ? x05 = y05 = x12 = y12 = null : (x05 = +_2[0][0], y05 = +_2[0][1], x12 = +_2[1][0], y12 = +_2[1][1]), reclip()) : x05 == null ? null : [[x05, y05], [x12, y12]];
  };
  function reclip() {
    var k2 = pi * scale(), t2 = m2(rotation_default(m2.rotate()).invert([0, 0]));
    return clipExtent(x05 == null ? [[t2[0] - k2, t2[1] - k2], [t2[0] + k2, t2[1] + k2]] : project === mercatorRaw ? [[Math.max(t2[0] - k2, x05), y05], [Math.min(t2[0] + k2, x12), y12]] : [[x05, Math.max(t2[1] - k2, y05)], [x12, Math.min(t2[1] + k2, y12)]]);
  }
  return reclip();
}

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}
equirectangularRaw.invert = equirectangularRaw;
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A2 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi) {
  var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
equalEarthRaw.invert = function(x, y2) {
  var l = y2, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i2 = 0, delta, fy, fpy; i2 < iterations; ++i2) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y2;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs(delta) < epsilon2) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l),
    asin(sin(l) / M)
  ];
};
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x, y2) {
  var cy = cos(y2), k2 = cos(x) * cy;
  return [cy * sin(x) / k2, sin(y2) / k2];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi2 - 1529e-6 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x, y2) {
  var phi = y2, i2 = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 5916e-6 * phi4))) - y2) / (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 5916e-6 * 11 * phi4)));
  } while (abs(delta) > epsilon && --i2 > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (3971e-6 - 1529e-6 * phi2)))),
    phi
  ];
};
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x, y2) {
  return [cos(y2) * sin(x), sin(y2)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon);
}

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x, y2) {
  var cy = cos(y2), k2 = 1 + cos(x) * cy;
  return [cy * sin(x) / k2, sin(y2) / k2];
}
stereographicRaw.invert = azimuthalInvert(function(z2) {
  return 2 * atan(z2);
});
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi + phi) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x, y2) {
  return [-y2, 2 * atan(exp(x)) - halfPi];
};
function transverseMercator_default() {
  var m2 = mercatorProjection(transverseMercatorRaw), center = m2.center, rotate = m2.rotate;
  m2.center = function(_2) {
    return arguments.length ? center([-_2[1], _2[0]]) : (_2 = center(), [_2[1], -_2[0]]);
  };
  m2.rotate = function(_2) {
    return arguments.length ? rotate([_2[0], _2[1], _2.length > 2 ? _2[2] + 90 : 90]) : (_2 = rotate(), [_2[0], _2[1], _2[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}

// node_modules/@nivo/geo/dist/nivo-geo.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e3) {
    for (var o2 = 1; o2 < arguments.length; o2++) {
      var r2 = arguments[o2];
      for (var i2 in r2) Object.prototype.hasOwnProperty.call(r2, i2) && (e3[i2] = r2[i2]);
    }
    return e3;
  }, I.apply(this, arguments);
}
var D = { azimuthalEqualArea: azimuthalEqualArea_default, azimuthalEquidistant: azimuthalEquidistant_default, gnomonic: gnomonic_default, orthographic: orthographic_default, stereographic: stereographic_default, equalEarth: equalEarth_default, equirectangular: equirectangular_default, mercator: mercator_default, transverseMercator: transverseMercator_default, naturalEarth1: naturalEarth1_default };
var z = function(o2) {
  var r2 = o2.width, i2 = o2.height, t2 = o2.projectionType, n2 = o2.projectionScale, u = o2.projectionTranslation, l = o2.projectionRotation, d = o2.fillColor, c = o2.borderWidth, f = o2.borderColor, s = (0, import_react.useMemo)(function() {
    return D[t2]().scale(n2).translate([r2 * u[0], i2 * u[1]]).rotate(l);
  }, [r2, i2, t2, n2, u[0], u[1], l[0], l[1], l[2]]), h = (0, import_react.useMemo)(function() {
    return path_default(s);
  }, [s]), p = (0, import_react.useMemo)(function() {
    return graticule();
  }), v = zt(), g = (0, import_react.useMemo)(function() {
    return "function" == typeof c ? c : function() {
      return c;
    };
  }, [c]), m2 = Xe(f, v), b = (0, import_react.useMemo)(function() {
    return "function" == typeof d ? d : function() {
      return d;
    };
  }, [d]);
  return { projection: s, path: h, graticule: p, getBorderWidth: g, getBorderColor: m2, getFillColor: b };
};
var K = function(o2) {
  var r2 = o2.features, i2 = o2.data, t2 = o2.match, n2 = o2.label, a = o2.value, l = o2.valueFormat, d = o2.colors, c = o2.unknownColor, f = o2.domain, s = (0, import_react.useMemo)(function() {
    return (0, import_isFunction.default)(t2) ? t2 : function(e3, o3) {
      var r3 = (0, import_get.default)(e3, t2), i3 = (0, import_get.default)(o3, t2);
      return r3 && r3 === i3;
    };
  }, [t2]), h = (0, import_react.useMemo)(function() {
    return (0, import_isFunction.default)(n2) ? n2 : function(e3) {
      return (0, import_get.default)(e3, n2);
    };
  }, [n2]), p = (0, import_react.useMemo)(function() {
    return (0, import_isFunction.default)(a) ? a : function(e3) {
      return (0, import_get.default)(e3, a);
    };
  }, [a]), v = (0, import_react.useMemo)(function() {
    return void 0 === l ? function(e3) {
      return e3;
    } : (0, import_isFunction.default)(l) ? l : format(l);
  }, [l]), g = (0, import_react.useMemo)(function() {
    return Hr(d).domain(f);
  }, [d, f]), m2 = (0, import_react.useMemo)(function() {
    return function(e3) {
      return void 0 === e3.value ? c : g(e3.value);
    };
  }, [g, c]), C = (0, import_react.useMemo)(function() {
    return r2.map(function(e3) {
      var o3 = i2.find(function(o4) {
        return s(e3, o4);
      }), r3 = p(o3);
      if (o3) {
        var t3 = I({}, e3, { data: o3, value: r3, formattedValue: v(r3) });
        return t3.color = m2(t3), t3.label = h(t3), t3;
      }
      return e3;
    });
  }, [r2, i2, s, p, v, m2]), b = j({ scale: g, valueFormat: v });
  return { colorScale: g, getFillColor: m2, boundFeatures: C, valueFormatter: v, legendData: b };
};
var V = (0, import_react.memo)(function(e3) {
  var o2 = e3.feature;
  return void 0 === o2.data ? null : (0, import_jsx_runtime.jsx)(w, { id: o2.label, color: o2.color, enableChip: true, value: o2.formattedValue });
});
V.propTypes = { feature: import_prop_types.default.object.isRequired }, V.displayName = "ChoroplethTooltip";
var A = { features: import_prop_types.default.arrayOf(import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired, type: import_prop_types.default.oneOf(["Feature"]).isRequired, properties: import_prop_types.default.object, geometry: import_prop_types.default.object.isRequired })).isRequired, projectionType: import_prop_types.default.oneOf(Object.keys(D)).isRequired, projectionScale: import_prop_types.default.number.isRequired, projectionTranslation: import_prop_types.default.arrayOf(import_prop_types.default.number).isRequired, projectionRotation: import_prop_types.default.arrayOf(import_prop_types.default.number).isRequired, fillColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]).isRequired, borderWidth: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.func]).isRequired, borderColor: Ye.isRequired, enableGraticule: import_prop_types.default.bool.isRequired, graticuleLineWidth: import_prop_types.default.number.isRequired, graticuleLineColor: import_prop_types.default.string.isRequired, isInteractive: import_prop_types.default.bool.isRequired, onMouseEnter: import_prop_types.default.func.isRequired, onMouseMove: import_prop_types.default.func.isRequired, onMouseLeave: import_prop_types.default.func.isRequired, onClick: import_prop_types.default.func.isRequired, tooltip: import_prop_types.default.any, layers: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["graticule", "features"]), import_prop_types.default.func])).isRequired };
var J = I({}, A, { role: import_prop_types.default.string.isRequired });
var Q = I({ pixelRatio: import_prop_types.default.number.isRequired }, A);
var U = { data: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired, match: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]).isRequired, label: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]).isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]).isRequired, valueFormat: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]), colors: et.isRequired, domain: import_prop_types.default.arrayOf(import_prop_types.default.number).isRequired, unknownColor: import_prop_types.default.string.isRequired, layers: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["graticule", "features", "legends"]), import_prop_types.default.func])).isRequired };
var X = I({}, J, U, { role: import_prop_types.default.string.isRequired });
var Y = I({}, Q, U);
var Z = { projectionType: "mercator", projectionScale: 100, projectionTranslation: [0.5, 0.5], projectionRotation: [0, 0, 0], enableGraticule: false, graticuleLineWidth: 0.5, graticuleLineColor: "#999999", fillColor: "#dddddd", borderWidth: 0, borderColor: "#000000", isInteractive: true, onMouseEnter: function() {
}, onMouseLeave: function() {
}, onMouseMove: function() {
}, onClick: function() {
}, layers: ["graticule", "features"], legends: [], fill: [], defs: [] };
var $ = I({}, Z, { role: "img" });
var _ = I({}, Z, { pixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1 });
var ee = { match: "id", label: "id", value: "value", colors: "PuBuGn", unknownColor: "#999", tooltip: V, layers: ["graticule", "features", "legends"] };
var oe = I({}, $, ee, { role: "img" });
var re = I({}, _, ee);
var ie = (0, import_react.memo)(function(e3) {
  var o2 = e3.path, r2 = e3.graticule, i2 = e3.lineWidth, t2 = e3.lineColor;
  return (0, import_jsx_runtime.jsx)("path", { fill: "none", strokeWidth: i2, stroke: t2, d: o2(r2()) });
});
ie.propTypes = { path: import_prop_types.default.func.isRequired, graticule: import_prop_types.default.func.isRequired, lineWidth: import_prop_types.default.number.isRequired, lineColor: import_prop_types.default.string.isRequired }, ie.displayName = "GeoGraticule";
var te = (0, import_react.memo)(function(e3) {
  var o2, r2 = e3.feature, i2 = e3.path, t2 = e3.fillColor, n2 = e3.borderWidth, a = e3.borderColor, u = e3.onClick, l = e3.onMouseEnter, d = e3.onMouseMove, c = e3.onMouseLeave;
  return (0, import_jsx_runtime.jsx)("path", { fill: null != (o2 = null == r2 ? void 0 : r2.fill) ? o2 : t2, strokeWidth: n2, stroke: a, strokeLinejoin: "bevel", d: i2(r2), onMouseEnter: function(e4) {
    return l(r2, e4);
  }, onMouseMove: function(e4) {
    return d(r2, e4);
  }, onMouseLeave: function(e4) {
    return c(r2, e4);
  }, onClick: function(e4) {
    return u(r2, e4);
  } }, r2.id);
});
te.propTypes = { feature: import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired, type: import_prop_types.default.oneOf(["Feature"]).isRequired, properties: import_prop_types.default.object, geometry: import_prop_types.default.object.isRequired }).isRequired, path: import_prop_types.default.func.isRequired, fillColor: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired, onMouseEnter: import_prop_types.default.func.isRequired, onMouseMove: import_prop_types.default.func.isRequired, onMouseLeave: import_prop_types.default.func.isRequired, onClick: import_prop_types.default.func.isRequired }, te.displayName = "GeoMapFeature";
var ne = (0, import_react.memo)(function(e3) {
  var o2 = e3.width, t2 = e3.height, n2 = e3.margin, u = e3.features, l = e3.layers, f = void 0 === l ? ["graticule", "features"] : l, s = e3.projectionType, h = void 0 === s ? "mercator" : s, p = e3.projectionScale, v = void 0 === p ? 100 : p, m2 = e3.projectionTranslation, C = void 0 === m2 ? [0.5, 0.5] : m2, b = e3.projectionRotation, y2 = void 0 === b ? [0, 0, 0] : b, R2 = e3.fillColor, j2 = void 0 === R2 ? "#dddddd" : R2, q = e3.borderWidth, w2 = void 0 === q ? 0 : q, T = e3.borderColor, M2 = void 0 === T ? "#000000" : T, W = e3.enableGraticule, k2 = void 0 !== W && W, F = e3.graticuleLineWidth, O2 = void 0 === F ? 0.5 : F, L = e3.graticuleLineColor, E = void 0 === L ? "#999999" : L, S = e3.isInteractive, G = void 0 === S || S, x = e3.onClick, B = void 0 === x ? function() {
  } : x, P = e3.tooltip, N = e3.role, I2 = void 0 === N ? "img" : N, D2 = wt(o2, t2, n2), K2 = D2.margin, V2 = D2.outerWidth, A5 = D2.outerHeight, J2 = z({ width: o2, height: t2, projectionType: h, projectionScale: v, projectionTranslation: C, projectionRotation: y2, fillColor: j2, borderWidth: w2, borderColor: M2 }), Q2 = J2.graticule, U2 = J2.path, X3 = J2.getFillColor, Y3 = J2.getBorderWidth, Z3 = J2.getBorderColor, $2 = zt(), _2 = k(), ee2 = _2.showTooltipFromEvent, oe2 = _2.hideTooltip, re2 = (0, import_react.useCallback)(function(e4, o3) {
    return G && B && B(e4, o3);
  }, [G, B]), ne2 = (0, import_react.useCallback)(function(e4, o3) {
    return G && P && ee2((0, import_jsx_runtime.jsx)(P, { feature: e4 }), o3);
  }, [G, ee2, P]), ae2 = (0, import_react.useCallback)(function(e4, o3) {
    return G && P && ee2((0, import_jsx_runtime.jsx)(P, { feature: e4 }), o3);
  }, [G, ee2, P]), ue2 = (0, import_react.useCallback)(function() {
    return G && oe2();
  }, [G, oe2]);
  return (0, import_jsx_runtime.jsx)(gn, { width: V2, height: A5, margin: K2, theme: $2, role: I2, children: f.map(function(o3, r2) {
    return "graticule" === o3 ? true !== k2 ? null : (0, import_jsx_runtime.jsx)(ie, { path: U2, graticule: Q2, lineWidth: O2, lineColor: E }, "graticule") : "features" === o3 ? (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: u.map(function(e4) {
      return (0, import_jsx_runtime.jsx)(te, { feature: e4, path: U2, fillColor: X3(e4), borderWidth: Y3(e4), borderColor: Z3(e4), onMouseEnter: ne2, onMouseMove: ae2, onMouseLeave: ue2, onClick: re2 }, e4.id);
    }) }, "features") : (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: o3(e3) }, r2);
  }) });
});
ne.displayName = "GeoMap", ne.propTypes = J;
var ae = On(ne);
var ue = function(e3) {
  return (0, import_jsx_runtime.jsx)(It, { children: function(o2) {
    var r2 = o2.width, i2 = o2.height;
    return (0, import_jsx_runtime.jsx)(ae, I({ width: r2, height: i2 }, e3));
  } });
};
var le = function(e3, o2, r2, i2) {
  var t2 = Sn(o2, e3), n2 = t2[0], a = t2[1];
  return r2.find(function(e4) {
    return contains_default(e4, i2.invert([n2, a]));
  });
};
var de = (0, import_react.memo)(function(e3) {
  var o2 = e3.width, i2 = e3.height, u = e3.margin, l = e3.pixelRatio, c = void 0 === l ? "undefined" != typeof window && window.devicePixelRatio || 1 : l, f = e3.features, s = e3.layers, h = e3.projectionType, p = void 0 === h ? "mercator" : h, v = e3.projectionScale, m2 = void 0 === v ? 100 : v, C = e3.projectionTranslation, b = void 0 === C ? [0.5, 0.5] : C, y2 = e3.projectionRotation, R2 = void 0 === y2 ? [0, 0, 0] : y2, j2 = e3.fillColor, q = void 0 === j2 ? "#dddddd" : j2, w2 = e3.borderWidth, T = void 0 === w2 ? 0 : w2, M2 = e3.borderColor, W = void 0 === M2 ? "#000000" : M2, k2 = e3.enableGraticule, F = void 0 !== k2 && k2, O2 = e3.graticuleLineWidth, L = void 0 === O2 ? 0.5 : O2, E = e3.graticuleLineColor, S = void 0 === E ? "#999999" : E, G = e3.isInteractive, x = void 0 === G || G, B = e3.onClick, P = void 0 === B ? function() {
  } : B, N = e3.onMouseMove, I2 = void 0 === N ? function() {
  } : N, D2 = e3.tooltip, K2 = (0, import_react.useRef)(null), V2 = zt(), A5 = wt(o2, i2, u), J2 = A5.margin, Q2 = A5.outerWidth, U2 = A5.outerHeight, X3 = z({ width: o2, height: i2, projectionType: p, projectionScale: m2, projectionTranslation: b, projectionRotation: R2, fillColor: q, borderWidth: T, borderColor: W }), Y3 = X3.projection, Z3 = X3.graticule, $2 = X3.path, _2 = X3.getFillColor, ee2 = X3.getBorderWidth, oe2 = X3.getBorderColor;
  (0, import_react.useEffect)(function() {
    if (K2) {
      K2.current.width = Q2 * c, K2.current.height = U2 * c;
      var o3 = K2.current.getContext("2d");
      o3.scale(c, c), o3.fillStyle = V2.background, o3.fillRect(0, 0, Q2, U2), o3.translate(J2.left, J2.top), $2.context(o3), s.forEach(function(r2) {
        "graticule" === r2 ? true === F && (o3.lineWidth = L, o3.strokeStyle = S, o3.beginPath(), $2(Z3()), o3.stroke()) : "features" === r2 ? f.forEach(function(e4) {
          o3.beginPath(), $2(e4), o3.fillStyle = _2(e4), o3.fill();
          var r3 = ee2(e4);
          r3 > 0 && (o3.strokeStyle = oe2(e4), o3.lineWidth = r3, o3.stroke());
        }) : r2(o3, e3);
      });
    }
  }, [K2, Q2, U2, J2, c, V2, $2, Z3, _2, ee2, oe2, f, s]);
  var re2 = k(), ie2 = re2.showTooltipFromEvent, te2 = re2.hideTooltip, ne2 = (0, import_react.useCallback)(function(e4) {
    if (x && D2) {
      var o3 = le(e4, K2.current, f, Y3);
      o3 ? ie2((0, import_jsx_runtime.jsx)(D2, { feature: o3 }), e4) : te2(), I2 && I2(o3 || null, e4);
    }
  }, [ie2, te2, x, D2, K2, f, Y3]), ae2 = (0, import_react.useCallback)(function() {
    return x && te2();
  }, [x, te2]), ue2 = (0, import_react.useCallback)(function(e4) {
    if (x && P) {
      var o3 = le(e4, K2.current, f, Y3);
      o3 && P(o3, e4);
    }
  }, [x, K2, f, Y3, P]);
  return (0, import_jsx_runtime.jsx)("canvas", { ref: K2, width: Q2 * c, height: U2 * c, style: { width: Q2, height: U2, cursor: x ? "auto" : "normal" }, onMouseMove: ne2, onMouseLeave: ae2, onClick: ue2 });
});
de.displatName = "GeoMapCanvas", de.propTypes = Q;
var ce = On(de);
var fe = function(e3) {
  return (0, import_jsx_runtime.jsx)(It, { children: function(o2) {
    var r2 = o2.width, i2 = o2.height;
    return (0, import_jsx_runtime.jsx)(ce, I({ width: r2, height: i2 }, e3));
  } });
};
var se = (0, import_react.memo)(function(e3) {
  var o2 = e3.width, t2 = e3.height, n2 = e3.margin, u = e3.features, l = e3.data, f = e3.match, s = void 0 === f ? "id" : f, h = e3.label, v = void 0 === h ? "id" : h, m2 = e3.value, C = void 0 === m2 ? "value" : m2, b = e3.valueFormat, y2 = e3.projectionType, R2 = void 0 === y2 ? "mercator" : y2, j2 = e3.projectionScale, q = void 0 === j2 ? 100 : j2, w2 = e3.projectionTranslation, T = void 0 === w2 ? [0.5, 0.5] : w2, M2 = e3.projectionRotation, W = void 0 === M2 ? [0, 0, 0] : M2, k2 = e3.colors, F = void 0 === k2 ? "PuBuGn" : k2, O2 = e3.domain, L = e3.unknownColor, E = void 0 === L ? "#999" : L, S = e3.borderWidth, G = void 0 === S ? 0 : S, x = e3.borderColor, B = void 0 === x ? "#000000" : x, N = e3.enableGraticule, D2 = void 0 !== N && N, A5 = e3.graticuleLineWidth, J2 = void 0 === A5 ? 0.5 : A5, Q2 = e3.graticuleLineColor, U2 = void 0 === Q2 ? "#999999" : Q2, X3 = e3.layers, Y3 = void 0 === X3 ? ["graticule", "features", "legends"] : X3, Z3 = e3.legends, $2 = void 0 === Z3 ? [] : Z3, _2 = e3.isInteractive, ee2 = void 0 === _2 || _2, oe2 = e3.onClick, re2 = void 0 === oe2 ? function() {
  } : oe2, ne2 = e3.tooltip, ae2 = void 0 === ne2 ? V : ne2, ue2 = e3.role, le2 = void 0 === ue2 ? "img" : ue2, de2 = e3.defs, ce2 = void 0 === de2 ? [] : de2, fe2 = e3.fill, se2 = void 0 === fe2 ? [] : fe2, he2 = wt(o2, t2, n2), pe2 = he2.margin, ve2 = he2.outerWidth, ge2 = he2.outerHeight, me2 = z({ width: o2, height: t2, projectionType: R2, projectionScale: q, projectionTranslation: T, projectionRotation: W, fillColor: function() {
  }, borderWidth: G, borderColor: B }), Ce2 = me2.graticule, be = me2.path, ye = me2.getBorderWidth, Re = me2.getBorderColor, je = K({ features: u, data: l, match: s, label: v, value: C, valueFormat: b, colors: F, unknownColor: E, domain: O2 }), qe = je.getFillColor, we = je.boundFeatures, Te = je.legendData, Me = zt(), We = In(ce2, we, se2, { dataKey: "data", targetKey: "fill" }), ke = k(), Fe = ke.showTooltipFromEvent, Oe = ke.hideTooltip, Le = (0, import_react.useCallback)(function(e4, o3) {
    return ee2 && re2 && re2(e4, o3);
  }, [ee2, re2]), Ee = (0, import_react.useCallback)(function(e4, o3) {
    return ee2 && ae2 && Fe((0, import_jsx_runtime.jsx)(ae2, { feature: e4 }), o3);
  }, [ee2, Fe, ae2]), Se = (0, import_react.useCallback)(function(e4, o3) {
    return ee2 && ae2 && Fe((0, import_jsx_runtime.jsx)(ae2, { feature: e4 }), o3);
  }, [ee2, Fe, ae2]), Ge = (0, import_react.useCallback)(function() {
    return ee2 && Oe();
  }, [ee2, Oe]);
  return (0, import_jsx_runtime.jsx)(gn, { width: ve2, height: ge2, margin: pe2, theme: Me, defs: We, role: le2, children: Y3.map(function(e4, r2) {
    return "graticule" === e4 ? true !== D2 ? null : (0, import_jsx_runtime.jsx)(ie, { path: be, graticule: Ce2, lineWidth: J2, lineColor: U2 }, "graticule") : "features" === e4 ? (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: we.map(function(e6) {
      return (0, import_jsx_runtime.jsx)(te, { feature: e6, path: be, fillColor: qe(e6), borderWidth: ye(e6), borderColor: Re(e6), onMouseEnter: Ee, onMouseMove: Se, onMouseLeave: Ge, onClick: Le }, e6.id);
    }) }, "features") : "legends" === e4 ? $2.map(function(e6, r3) {
      return (0, import_jsx_runtime.jsx)(O, I({ containerWidth: o2, containerHeight: t2, data: Te }, e6), r3);
    }) : (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: e4({}) }, r2);
  }) });
});
se.displayName = "Choropleth", se.propTypes = X;
var he = On(se);
var pe = function(e3) {
  return (0, import_jsx_runtime.jsx)(It, { children: function(o2) {
    var r2 = o2.width, i2 = o2.height;
    return (0, import_jsx_runtime.jsx)(he, I({ width: r2, height: i2 }, e3));
  } });
};
var ve = function(e3, o2, r2, i2) {
  var t2 = Sn(o2, e3), n2 = t2[0], a = t2[1];
  return r2.find(function(e4) {
    return contains_default(e4, i2.invert([n2, a]));
  });
};
var ge = (0, import_react.memo)(function(e3) {
  var o2 = e3.width, i2 = e3.height, u = e3.margin, l = e3.pixelRatio, c = void 0 === l ? "undefined" != typeof window && window.devicePixelRatio || 1 : l, f = e3.features, s = e3.data, h = e3.match, p = void 0 === h ? "id" : h, v = e3.label, m2 = void 0 === v ? "id" : v, C = e3.value, b = void 0 === C ? "value" : C, y2 = e3.valueFormat, R2 = e3.projectionType, j2 = void 0 === R2 ? "mercator" : R2, q = e3.projectionScale, w2 = void 0 === q ? 100 : q, T = e3.projectionTranslation, M2 = void 0 === T ? [0.5, 0.5] : T, W = e3.projectionRotation, k2 = void 0 === W ? [0, 0, 0] : W, F = e3.colors, O2 = void 0 === F ? "PuBuGn" : F, L = e3.domain, E = e3.unknownColor, S = void 0 === E ? "#999" : E, G = e3.borderWidth, x = void 0 === G ? 0 : G, B = e3.borderColor, P = void 0 === B ? "#000000" : B, D2 = e3.enableGraticule, A5 = void 0 !== D2 && D2, J2 = e3.graticuleLineWidth, Q2 = void 0 === J2 ? 0.5 : J2, U2 = e3.graticuleLineColor, X3 = void 0 === U2 ? "#999999" : U2, Y3 = e3.layers, Z3 = void 0 === Y3 ? ["graticule", "features", "legends"] : Y3, $2 = e3.legends, _2 = void 0 === $2 ? [] : $2, ee2 = e3.isInteractive, oe2 = void 0 === ee2 || ee2, re2 = e3.onClick, ie2 = void 0 === re2 ? function() {
  } : re2, te2 = e3.onMouseMove, ne2 = void 0 === te2 ? function() {
  } : te2, ae2 = e3.tooltip, ue2 = void 0 === ae2 ? V : ae2, le2 = (0, import_react.useRef)(null), de2 = zt(), ce2 = wt(o2, i2, u), fe2 = ce2.margin, se2 = ce2.outerWidth, he2 = ce2.outerHeight, pe2 = z({ width: o2, height: i2, projectionType: j2, projectionScale: w2, projectionTranslation: M2, projectionRotation: k2, fillColor: function() {
  }, borderWidth: x, borderColor: P }), ge2 = pe2.projection, me2 = pe2.graticule, Ce2 = pe2.path, be = pe2.getBorderWidth, ye = pe2.getBorderColor, Re = K({ features: f, data: s, match: p, label: m2, value: b, valueFormat: y2, colors: O2, unknownColor: S, domain: L }), je = Re.getFillColor, qe = Re.boundFeatures, we = Re.legendData;
  (0, import_react.useEffect)(function() {
    if (le2) {
      le2.current.width = se2 * c, le2.current.height = he2 * c;
      var e4 = le2.current.getContext("2d");
      e4.scale(c, c), e4.fillStyle = de2.background, e4.fillRect(0, 0, se2, he2), e4.translate(fe2.left, fe2.top), Ce2.context(e4), Z3.forEach(function(r2) {
        "graticule" === r2 ? true === A5 && (e4.lineWidth = Q2, e4.strokeStyle = X3, e4.beginPath(), Ce2(me2()), e4.stroke()) : "features" === r2 ? qe.forEach(function(o3) {
          e4.beginPath(), Ce2(o3), e4.fillStyle = je(o3), e4.fill();
          var r3 = be(o3);
          r3 > 0 && (e4.strokeStyle = ye(o3), e4.lineWidth = r3, e4.stroke());
        }) : "legends" === r2 && _2.forEach(function(r3) {
          H(e4, I({}, r3, { data: we, containerWidth: o2, containerHeight: i2, theme: de2 }));
        });
      });
    }
  }, [le2, se2, he2, fe2, c, de2, Ce2, me2, je, be, ye, qe, _2, Z3]);
  var Te = k(), Me = Te.showTooltipFromEvent, We = Te.hideTooltip, ke = (0, import_react.useCallback)(function(e4) {
    if (oe2 && ue2) {
      var o3 = ve(e4, le2.current, qe, ge2);
      o3 ? Me((0, import_jsx_runtime.jsx)(ue2, { feature: o3 }), e4) : We(), ne2 && ne2(o3 || null, e4);
    }
  }, [Me, We, oe2, ue2, le2, qe, ge2]), Fe = (0, import_react.useCallback)(function() {
    return oe2 && We();
  }, [oe2, We]), Oe = (0, import_react.useCallback)(function(e4) {
    if (oe2 && ie2) {
      var o3 = ve(e4, le2.current, qe, ge2);
      o3 && ie2(o3, e4);
    }
  }, [oe2, le2, qe, ge2, ie2]);
  return (0, import_jsx_runtime.jsx)("canvas", { ref: le2, width: se2 * c, height: he2 * c, style: { width: se2, height: he2, cursor: oe2 ? "auto" : "normal" }, onMouseMove: ke, onMouseLeave: Fe, onClick: Oe });
});
ge.displayName = "ChoroplethCanvas", ge.propTypes = Y;
var me = On(ge);
var Ce = function(e3) {
  return (0, import_jsx_runtime.jsx)(It, { children: function(o2) {
    var r2 = o2.width, i2 = o2.height;
    return (0, import_jsx_runtime.jsx)(me, I({ width: r2, height: i2 }, e3));
  } });
};
export {
  he as Choropleth,
  me as ChoroplethCanvas,
  re as ChoroplethCanvasDefaultProps,
  Y as ChoroplethCanvasPropTypes,
  oe as ChoroplethDefaultProps,
  X as ChoroplethPropTypes,
  ae as GeoMap,
  ce as GeoMapCanvas,
  _ as GeoMapCanvasDefaultProps,
  Q as GeoMapCanvasPropTypes,
  $ as GeoMapDefaultProps,
  J as GeoMapPropTypes,
  pe as ResponsiveChoropleth,
  Ce as ResponsiveChoroplethCanvas,
  ue as ResponsiveGeoMap,
  fe as ResponsiveGeoMapCanvas,
  D as projectionById,
  K as useChoropleth,
  z as useGeoMap
};
//# sourceMappingURL=@nivo_geo.js.map
