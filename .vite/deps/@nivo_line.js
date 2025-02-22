import {
  B,
  C as C2,
  dn,
  j,
  z
} from "./chunk-5EXQJOLE.js";
import {
  C,
  Fr,
  H,
  In,
  It,
  Mn,
  O,
  On,
  Ot,
  P,
  Rn,
  Sn,
  Ur,
  Xe,
  _t,
  animated,
  area_default,
  g,
  gn,
  jn,
  k,
  line_default,
  lt,
  pr,
  qn,
  require_toString,
  useSpring,
  vn,
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

// node_modules/lodash/uniqueId.js
var require_uniqueId = __commonJS({
  "node_modules/lodash/uniqueId.js"(exports, module) {
    var toString = require_toString();
    var idCounter = 0;
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }
    module.exports = uniqueId;
  }
});

// node_modules/@nivo/line/dist/nivo-line.es.js
var import_react2 = __toESM(require_react());
var import_uniqueId = __toESM(require_uniqueId());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// node_modules/@nivo/voronoi/dist/nivo-voronoi.es.js
var import_react = __toESM(require_react());

// node_modules/robust-predicates/esm/util.js
var epsilon = 11102230246251565e-32;
var splitter = 134217729;
var resulterrbound = (3 + 8 * epsilon) * epsilon;
function sum(elen, e3, flen, f, h) {
  let Q2, Qnew, hh, bvirt;
  let enow = e3[0];
  let fnow = f[0];
  let eindex = 0;
  let findex = 0;
  if (fnow > enow === fnow > -enow) {
    Q2 = enow;
    enow = e3[++eindex];
  } else {
    Q2 = fnow;
    fnow = f[++findex];
  }
  let hindex = 0;
  if (eindex < elen && findex < flen) {
    if (fnow > enow === fnow > -enow) {
      Qnew = enow + Q2;
      hh = Q2 - (Qnew - enow);
      enow = e3[++eindex];
    } else {
      Qnew = fnow + Q2;
      hh = Q2 - (Qnew - fnow);
      fnow = f[++findex];
    }
    Q2 = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
    while (eindex < elen && findex < flen) {
      if (fnow > enow === fnow > -enow) {
        Qnew = Q2 + enow;
        bvirt = Qnew - Q2;
        hh = Q2 - (Qnew - bvirt) + (enow - bvirt);
        enow = e3[++eindex];
      } else {
        Qnew = Q2 + fnow;
        bvirt = Qnew - Q2;
        hh = Q2 - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
      }
      Q2 = Qnew;
      if (hh !== 0) {
        h[hindex++] = hh;
      }
    }
  }
  while (eindex < elen) {
    Qnew = Q2 + enow;
    bvirt = Qnew - Q2;
    hh = Q2 - (Qnew - bvirt) + (enow - bvirt);
    enow = e3[++eindex];
    Q2 = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  while (findex < flen) {
    Qnew = Q2 + fnow;
    bvirt = Qnew - Q2;
    hh = Q2 - (Qnew - bvirt) + (fnow - bvirt);
    fnow = f[++findex];
    Q2 = Qnew;
    if (hh !== 0) {
      h[hindex++] = hh;
    }
  }
  if (Q2 !== 0 || hindex === 0) {
    h[hindex++] = Q2;
  }
  return hindex;
}
function estimate(elen, e3) {
  let Q2 = e3[0];
  for (let i3 = 1; i3 < elen; i3++) Q2 += e3[i3];
  return Q2;
}
function vec(n3) {
  return new Float64Array(n3);
}

// node_modules/robust-predicates/esm/orient2d.js
var ccwerrboundA = (3 + 16 * epsilon) * epsilon;
var ccwerrboundB = (2 + 12 * epsilon) * epsilon;
var ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;
var B2 = vec(4);
var C1 = vec(8);
var C22 = vec(12);
var D = vec(16);
var u = vec(4);
function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
  let acxtail, acytail, bcxtail, bcytail;
  let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u32;
  const acx = ax - cx;
  const bcx = bx - cx;
  const acy = ay - cy;
  const bcy = by - cy;
  s1 = acx * bcy;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcx;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  B2[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  B2[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  B2[2] = _j - (u32 - bvirt) + (_i - bvirt);
  B2[3] = u32;
  let det = estimate(4, B2);
  let errbound = ccwerrboundB * detsum;
  if (det >= errbound || -det >= errbound) {
    return det;
  }
  bvirt = ax - acx;
  acxtail = ax - (acx + bvirt) + (bvirt - cx);
  bvirt = bx - bcx;
  bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
  bvirt = ay - acy;
  acytail = ay - (acy + bvirt) + (bvirt - cy);
  bvirt = by - bcy;
  bcytail = by - (bcy + bvirt) + (bvirt - cy);
  if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
    return det;
  }
  errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
  det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
  if (det >= errbound || -det >= errbound) return det;
  s1 = acxtail * bcy;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcy;
  bhi = c - (c - bcy);
  blo = bcy - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcx;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcx;
  bhi = c - (c - bcx);
  blo = bcx - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C1len = sum(4, B2, 4, u, C1);
  s1 = acx * bcytail;
  c = splitter * acx;
  ahi = c - (c - acx);
  alo = acx - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acy * bcxtail;
  c = splitter * acy;
  ahi = c - (c - acy);
  alo = acy - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const C2len = sum(C1len, C1, 4, u, C22);
  s1 = acxtail * bcytail;
  c = splitter * acxtail;
  ahi = c - (c - acxtail);
  alo = acxtail - ahi;
  c = splitter * bcytail;
  bhi = c - (c - bcytail);
  blo = bcytail - bhi;
  s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
  t1 = acytail * bcxtail;
  c = splitter * acytail;
  ahi = c - (c - acytail);
  alo = acytail - ahi;
  c = splitter * bcxtail;
  bhi = c - (c - bcxtail);
  blo = bcxtail - bhi;
  t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
  _i = s0 - t0;
  bvirt = s0 - _i;
  u[0] = s0 - (_i + bvirt) + (bvirt - t0);
  _j = s1 + _i;
  bvirt = _j - s1;
  _0 = s1 - (_j - bvirt) + (_i - bvirt);
  _i = _0 - t1;
  bvirt = _0 - _i;
  u[1] = _0 - (_i + bvirt) + (bvirt - t1);
  u32 = _j + _i;
  bvirt = u32 - _j;
  u[2] = _j - (u32 - bvirt) + (_i - bvirt);
  u[3] = u32;
  const Dlen = sum(C2len, C22, 4, u, D);
  return D[Dlen - 1];
}
function orient2d(ax, ay, bx, by, cx, cy) {
  const detleft = (ay - cy) * (bx - cx);
  const detright = (ax - cx) * (by - cy);
  const det = detleft - detright;
  const detsum = Math.abs(detleft + detright);
  if (Math.abs(det) >= ccwerrboundA * detsum) return det;
  return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

// node_modules/robust-predicates/esm/orient3d.js
var o3derrboundA = (7 + 56 * epsilon) * epsilon;
var o3derrboundB = (3 + 28 * epsilon) * epsilon;
var o3derrboundC = (26 + 288 * epsilon) * epsilon * epsilon;
var bc = vec(4);
var ca = vec(4);
var ab = vec(4);
var at_b = vec(4);
var at_c = vec(4);
var bt_c = vec(4);
var bt_a = vec(4);
var ct_a = vec(4);
var ct_b = vec(4);
var bct = vec(8);
var cat = vec(8);
var abt = vec(8);
var u2 = vec(4);
var _8 = vec(8);
var _8b = vec(8);
var _16 = vec(8);
var _12 = vec(12);
var fin = vec(192);
var fin2 = vec(192);

// node_modules/robust-predicates/esm/incircle.js
var iccerrboundA = (10 + 96 * epsilon) * epsilon;
var iccerrboundB = (4 + 48 * epsilon) * epsilon;
var iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;
var bc2 = vec(4);
var ca2 = vec(4);
var ab2 = vec(4);
var aa = vec(4);
var bb = vec(4);
var cc = vec(4);
var u3 = vec(4);
var v = vec(4);
var axtbc = vec(8);
var aytbc = vec(8);
var bxtca = vec(8);
var bytca = vec(8);
var cxtab = vec(8);
var cytab = vec(8);
var abt2 = vec(8);
var bct2 = vec(8);
var cat2 = vec(8);
var abtt = vec(4);
var bctt = vec(4);
var catt = vec(4);
var _82 = vec(8);
var _162 = vec(16);
var _16b = vec(16);
var _16c = vec(16);
var _32 = vec(32);
var _32b = vec(32);
var _48 = vec(48);
var _64 = vec(64);
var fin3 = vec(1152);
var fin22 = vec(1152);

// node_modules/robust-predicates/esm/insphere.js
var isperrboundA = (16 + 224 * epsilon) * epsilon;
var isperrboundB = (5 + 72 * epsilon) * epsilon;
var isperrboundC = (71 + 1408 * epsilon) * epsilon * epsilon;
var ab3 = vec(4);
var bc3 = vec(4);
var cd = vec(4);
var de = vec(4);
var ea = vec(4);
var ac = vec(4);
var bd = vec(4);
var ce = vec(4);
var da = vec(4);
var eb = vec(4);
var abc = vec(24);
var bcd = vec(24);
var cde = vec(24);
var dea = vec(24);
var eab = vec(24);
var abd = vec(24);
var bce = vec(24);
var cda = vec(24);
var deb = vec(24);
var eac = vec(24);
var adet = vec(1152);
var bdet = vec(1152);
var cdet = vec(1152);
var ddet = vec(1152);
var edet = vec(1152);
var abdet = vec(2304);
var cddet = vec(2304);
var cdedet = vec(3456);
var deter = vec(5760);
var _83 = vec(8);
var _8b2 = vec(8);
var _8c = vec(8);
var _163 = vec(16);
var _24 = vec(24);
var _482 = vec(48);
var _48b = vec(48);
var _96 = vec(96);
var _192 = vec(192);
var _384x = vec(384);
var _384y = vec(384);
var _384z = vec(384);
var _768 = vec(768);
var xdet = vec(96);
var ydet = vec(96);
var zdet = vec(96);
var fin4 = vec(1152);

// node_modules/delaunator/index.js
var EPSILON = Math.pow(2, -52);
var EDGE_STACK = new Uint32Array(512);
var Delaunator = class _Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n3 = points.length;
    const coords = new Float64Array(n3 * 2);
    for (let i3 = 0; i3 < n3; i3++) {
      const p = points[i3];
      coords[2 * i3] = getX(p);
      coords[2 * i3 + 1] = getY(p);
    }
    return new _Delaunator(coords);
  }
  constructor(coords) {
    const n3 = coords.length >> 1;
    if (n3 > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
    this.coords = coords;
    const maxTriangles = Math.max(2 * n3 - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);
    this._hashSize = Math.ceil(Math.sqrt(n3));
    this._hullPrev = new Uint32Array(n3);
    this._hullNext = new Uint32Array(n3);
    this._hullTri = new Uint32Array(n3);
    this._hullHash = new Int32Array(this._hashSize);
    this._ids = new Uint32Array(n3);
    this._dists = new Float64Array(n3);
    this.update();
  }
  update() {
    const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
    const n3 = coords.length >> 1;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let i3 = 0; i3 < n3; i3++) {
      const x = coords[2 * i3];
      const y = coords[2 * i3 + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      this._ids[i3] = i3;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    let i0, i1, i22;
    for (let i3 = 0, minDist = Infinity; i3 < n3; i3++) {
      const d = dist(cx, cy, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist) {
        i0 = i3;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];
    for (let i3 = 0, minDist = Infinity; i3 < n3; i3++) {
      if (i3 === i0) continue;
      const d = dist(i0x, i0y, coords[2 * i3], coords[2 * i3 + 1]);
      if (d < minDist && d > 0) {
        i1 = i3;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];
    let minRadius = Infinity;
    for (let i3 = 0; i3 < n3; i3++) {
      if (i3 === i0 || i3 === i1) continue;
      const r3 = circumradius(i0x, i0y, i1x, i1y, coords[2 * i3], coords[2 * i3 + 1]);
      if (r3 < minRadius) {
        i22 = i3;
        minRadius = r3;
      }
    }
    let i2x = coords[2 * i22];
    let i2y = coords[2 * i22 + 1];
    if (minRadius === Infinity) {
      for (let i3 = 0; i3 < n3; i3++) {
        this._dists[i3] = coords[2 * i3] - coords[0] || coords[2 * i3 + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n3 - 1);
      const hull = new Uint32Array(n3);
      let j2 = 0;
      for (let i3 = 0, d0 = -Infinity; i3 < n3; i3++) {
        const id = this._ids[i3];
        const d = this._dists[id];
        if (d > d0) {
          hull[j2++] = id;
          d0 = d;
        }
      }
      this.hull = hull.subarray(0, j2);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }
    if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
      const i3 = i1;
      const x = i1x;
      const y = i1y;
      i1 = i22;
      i1x = i2x;
      i1y = i2y;
      i22 = i3;
      i2x = x;
      i2y = y;
    }
    const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;
    for (let i3 = 0; i3 < n3; i3++) {
      this._dists[i3] = dist(coords[2 * i3], coords[2 * i3 + 1], center.x, center.y);
    }
    quicksort(this._ids, this._dists, 0, n3 - 1);
    this._hullStart = i0;
    let hullSize = 3;
    hullNext[i0] = hullPrev[i22] = i1;
    hullNext[i1] = hullPrev[i0] = i22;
    hullNext[i22] = hullPrev[i1] = i0;
    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i22] = 2;
    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i22;
    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i22, -1, -1, -1);
    for (let k2 = 0, xp, yp; k2 < this._ids.length; k2++) {
      const i3 = this._ids[k2];
      const x = coords[2 * i3];
      const y = coords[2 * i3 + 1];
      if (k2 > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
      xp = x;
      yp = y;
      if (i3 === i0 || i3 === i1 || i3 === i22) continue;
      let start = 0;
      for (let j2 = 0, key = this._hashKey(x, y); j2 < this._hashSize; j2++) {
        start = hullHash[(key + j2) % this._hashSize];
        if (start !== -1 && start !== hullNext[start]) break;
      }
      start = hullPrev[start];
      let e3 = start, q;
      while (q = hullNext[e3], orient2d(x, y, coords[2 * e3], coords[2 * e3 + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
        e3 = q;
        if (e3 === start) {
          e3 = -1;
          break;
        }
      }
      if (e3 === -1) continue;
      let t3 = this._addTriangle(e3, i3, hullNext[e3], -1, -1, hullTri[e3]);
      hullTri[i3] = this._legalize(t3 + 2);
      hullTri[e3] = t3;
      hullSize++;
      let n4 = hullNext[e3];
      while (q = hullNext[n4], orient2d(x, y, coords[2 * n4], coords[2 * n4 + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
        t3 = this._addTriangle(n4, i3, q, hullTri[i3], -1, hullTri[n4]);
        hullTri[i3] = this._legalize(t3 + 2);
        hullNext[n4] = n4;
        hullSize--;
        n4 = q;
      }
      if (e3 === start) {
        while (q = hullPrev[e3], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e3], coords[2 * e3 + 1]) < 0) {
          t3 = this._addTriangle(q, i3, e3, -1, hullTri[e3], hullTri[q]);
          this._legalize(t3 + 2);
          hullTri[q] = t3;
          hullNext[e3] = e3;
          hullSize--;
          e3 = q;
        }
      }
      this._hullStart = hullPrev[i3] = e3;
      hullNext[e3] = hullPrev[n4] = i3;
      hullNext[i3] = n4;
      hullHash[this._hashKey(x, y)] = i3;
      hullHash[this._hashKey(coords[2 * e3], coords[2 * e3 + 1])] = e3;
    }
    this.hull = new Uint32Array(hullSize);
    for (let i3 = 0, e3 = this._hullStart; i3 < hullSize; i3++) {
      this.hull[i3] = e3;
      e3 = hullNext[e3];
    }
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }
  _hashKey(x, y) {
    return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
  }
  _legalize(a2) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;
    let i3 = 0;
    let ar = 0;
    while (true) {
      const b2 = halfedges[a2];
      const a0 = a2 - a2 % 3;
      ar = a0 + (a2 + 2) % 3;
      if (b2 === -1) {
        if (i3 === 0) break;
        a2 = EDGE_STACK[--i3];
        continue;
      }
      const b0 = b2 - b2 % 3;
      const al = a0 + (a2 + 1) % 3;
      const bl = b0 + (b2 + 2) % 3;
      const p0 = triangles[ar];
      const pr2 = triangles[a2];
      const pl = triangles[al];
      const p1 = triangles[bl];
      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr2],
        coords[2 * pr2 + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );
      if (illegal) {
        triangles[a2] = p1;
        triangles[b2] = p0;
        const hbl = halfedges[bl];
        if (hbl === -1) {
          let e3 = this._hullStart;
          do {
            if (this._hullTri[e3] === bl) {
              this._hullTri[e3] = a2;
              break;
            }
            e3 = this._hullPrev[e3];
          } while (e3 !== this._hullStart);
        }
        this._link(a2, hbl);
        this._link(b2, halfedges[ar]);
        this._link(ar, bl);
        const br = b0 + (b2 + 1) % 3;
        if (i3 < EDGE_STACK.length) {
          EDGE_STACK[i3++] = br;
        }
      } else {
        if (i3 === 0) break;
        a2 = EDGE_STACK[--i3];
      }
    }
    return ar;
  }
  _link(a2, b2) {
    this._halfedges[a2] = b2;
    if (b2 !== -1) this._halfedges[b2] = a2;
  }
  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i22, a2, b2, c) {
    const t3 = this.trianglesLen;
    this._triangles[t3] = i0;
    this._triangles[t3 + 1] = i1;
    this._triangles[t3 + 2] = i22;
    this._link(t3, a2);
    this._link(t3 + 1, b2);
    this._link(t3 + 2, c);
    this.trianglesLen += 3;
    return t3;
  }
};
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4;
}
function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;
  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;
  return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
}
function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x = (ey * bl - dy * cl) * d;
  const y = (dx * cl - ex * bl) * d;
  return x * x + y * y;
}
function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;
  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);
  const x = ax + (ey * bl - dy * cl) * d;
  const y = ay + (dx * cl - ex * bl) * d;
  return { x, y };
}
function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i3 = left + 1; i3 <= right; i3++) {
      const temp = ids[i3];
      const tempDist = dists[temp];
      let j2 = i3 - 1;
      while (j2 >= left && dists[ids[j2]] > tempDist) ids[j2 + 1] = ids[j2--];
      ids[j2 + 1] = temp;
    }
  } else {
    const median = left + right >> 1;
    let i3 = left + 1;
    let j2 = right;
    swap(ids, median, i3);
    if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
    if (dists[ids[i3]] > dists[ids[right]]) swap(ids, i3, right);
    if (dists[ids[left]] > dists[ids[i3]]) swap(ids, left, i3);
    const temp = ids[i3];
    const tempDist = dists[temp];
    while (true) {
      do
        i3++;
      while (dists[ids[i3]] < tempDist);
      do
        j2--;
      while (dists[ids[j2]] > tempDist);
      if (j2 < i3) break;
      swap(ids, i3, j2);
    }
    ids[left + 1] = ids[j2];
    ids[j2] = temp;
    if (right - i3 + 1 >= j2 - left) {
      quicksort(ids, dists, i3, right);
      quicksort(ids, dists, left, j2 - 1);
    } else {
      quicksort(ids, dists, left, j2 - 1);
      quicksort(ids, dists, i3, right);
    }
  }
}
function swap(arr, i3, j2) {
  const tmp = arr[i3];
  arr[i3] = arr[j2];
  arr[j2] = tmp;
}
function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}

// node_modules/d3-delaunay/src/path.js
var epsilon2 = 1e-6;
var Path = class {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${this._x1 = +x},${this._y1 = +y}`;
  }
  arc(x, y, r3) {
    x = +x, y = +y, r3 = +r3;
    const x0 = x + r3;
    const y0 = y;
    if (r3 < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) this._ += "L" + x0 + "," + y0;
    if (!r3) return;
    this._ += `A${r3},${r3},0,1,1,${x - r3},${y}A${r3},${r3},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x, y, w3, h) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w3}v${+h}h${-w3}Z`;
  }
  value() {
    return this._ || null;
  }
};

// node_modules/d3-delaunay/src/polygon.js
var Polygon = class {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
};

// node_modules/d3-delaunay/src/voronoi.js
var Voronoi = class {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const { delaunay: { points, hull, triangles }, vectors } = this;
    let bx, by;
    const circumcenters = this.circumcenters = this._circumcenters.subarray(0, triangles.length / 3 * 2);
    for (let i3 = 0, j2 = 0, n3 = triangles.length, x, y; i3 < n3; i3 += 3, j2 += 2) {
      const t1 = triangles[i3] * 2;
      const t22 = triangles[i3 + 1] * 2;
      const t3 = triangles[i3 + 2] * 2;
      const x12 = points[t1];
      const y12 = points[t1 + 1];
      const x2 = points[t22];
      const y2 = points[t22 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];
      const dx = x2 - x12;
      const dy = y2 - y12;
      const ex = x3 - x12;
      const ey = y3 - y12;
      const ab4 = (dx * ey - dy * ex) * 2;
      if (Math.abs(ab4) < 1e-9) {
        if (bx === void 0) {
          bx = by = 0;
          for (const i4 of hull) bx += points[i4 * 2], by += points[i4 * 2 + 1];
          bx /= hull.length, by /= hull.length;
        }
        const a2 = 1e9 * Math.sign((bx - x12) * ey - (by - y12) * ex);
        x = (x12 + x3) / 2 - a2 * ey;
        y = (y12 + y3) / 2 + a2 * ex;
      } else {
        const d = 1 / ab4;
        const bl = dx * dx + dy * dy;
        const cl = ex * ex + ey * ey;
        x = x12 + (ey * bl - dy * cl) * d;
        y = y12 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j2] = x;
      circumcenters[j2 + 1] = y;
    }
    let h = hull[hull.length - 1];
    let p0, p1 = h * 4;
    let x0, x1 = points[2 * h];
    let y0, y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i3 = 0; i3 < hull.length; ++i3) {
      h = hull[i3];
      p0 = p1, x0 = x1, y0 = y1;
      p1 = h * 4, x1 = points[2 * h], y1 = points[2 * h + 1];
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { delaunay: { halfedges, inedges, hull }, circumcenters, vectors } = this;
    if (hull.length <= 1) return null;
    for (let i3 = 0, n3 = halfedges.length; i3 < n3; ++i3) {
      const j2 = halfedges[i3];
      if (j2 < i3) continue;
      const ti = Math.floor(i3 / 3) * 2;
      const tj = Math.floor(j2 / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0, h1 = hull[hull.length - 1];
    for (let i3 = 0; i3 < hull.length; ++i3) {
      h0 = h1, h1 = hull[i3];
      const t3 = Math.floor(inedges[h1] / 3) * 2;
      const x = circumcenters[t3];
      const y = circumcenters[t3 + 1];
      const v2 = h0 * 4;
      const p = this._project(x, y, vectors[v2 + 2], vectors[v2 + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new Path() : void 0;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i3, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const points = this._clip(i3);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n3 = points.length;
    while (points[0] === points[n3 - 2] && points[1] === points[n3 - 1] && n3 > 1) n3 -= 2;
    for (let i4 = 2; i4 < n3; i4 += 2) {
      if (points[i4] !== points[i4 - 2] || points[i4 + 1] !== points[i4 - 1])
        context.lineTo(points[i4], points[i4 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const { delaunay: { points } } = this;
    for (let i3 = 0, n3 = points.length / 2; i3 < n3; ++i3) {
      const cell = this.cellPolygon(i3);
      if (cell) cell.index = i3, yield cell;
    }
  }
  cellPolygon(i3) {
    const polygon = new Polygon();
    this.renderCell(i3, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i3, x, y) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
    return this.delaunay._step(i3, x, y) === i3;
  }
  *neighbors(i3) {
    const ci = this._clip(i3);
    if (ci) for (const j2 of this.delaunay.neighbors(i3)) {
      const cj = this._clip(j2);
      if (cj) loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
        for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
          if (ci[ai] === cj[aj] && ci[ai + 1] === cj[aj + 1] && ci[(ai + 2) % li] === cj[(aj + lj - 2) % lj] && ci[(ai + 3) % li] === cj[(aj + lj - 1) % lj]) {
            yield j2;
            break loop;
          }
        }
      }
    }
  }
  _cell(i3) {
    const { circumcenters, delaunay: { inedges, halfedges, triangles } } = this;
    const e0 = inedges[i3];
    if (e0 === -1) return null;
    const points = [];
    let e3 = e0;
    do {
      const t3 = Math.floor(e3 / 3);
      points.push(circumcenters[t3 * 2], circumcenters[t3 * 2 + 1]);
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) break;
      e3 = halfedges[e3];
    } while (e3 !== e0 && e3 !== -1);
    return points;
  }
  _clip(i3) {
    if (i3 === 0 && this.delaunay.hull.length === 1) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    const points = this._cell(i3);
    if (points === null) return null;
    const { vectors: V } = this;
    const v2 = i3 * 4;
    return this._simplify(V[v2] || V[v2 + 1] ? this._clipInfinite(i3, points, V[v2], V[v2 + 1], V[v2 + 2], V[v2 + 3]) : this._clipFinite(i3, points));
  }
  _clipFinite(i3, points) {
    const n3 = points.length;
    let P3 = null;
    let x0, y0, x1 = points[n3 - 2], y1 = points[n3 - 1];
    let c0, c1 = this._regioncode(x1, y1);
    let e0, e1 = 0;
    for (let j2 = 0; j2 < n3; j2 += 2) {
      x0 = x1, y0 = y1, x1 = points[j2], y1 = points[j2 + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P3) P3.push(x1, y1);
        else P3 = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i3, e0, e1, P3, P3.length);
          if (P3) P3.push(sx0, sy0);
          else P3 = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i3, e0, e1, P3, P3.length);
        if (P3) P3.push(sx1, sy1);
        else P3 = [sx1, sy1];
      }
    }
    if (P3) {
      e0 = e1, e1 = this._edgecode(P3[0], P3[1]);
      if (e0 && e1) this._edge(i3, e0, e1, P3, P3.length);
    } else if (this.contains(i3, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P3;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    const flip = c0 < c1;
    if (flip) [x0, y0, x1, y1, c0, c1] = [x1, y1, x0, y0, c1, c0];
    while (true) {
      if (c0 === 0 && c1 === 0) return flip ? [x1, y1, x0, y0] : [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x, y, c = c0 || c1;
      if (c & 8) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
      else if (c & 4) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
      else if (c & 2) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
      else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
      if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
      else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i3, points, vx0, vy0, vxn, vyn) {
    let P3 = Array.from(points), p;
    if (p = this._project(P3[0], P3[1], vx0, vy0)) P3.unshift(p[0], p[1]);
    if (p = this._project(P3[P3.length - 2], P3[P3.length - 1], vxn, vyn)) P3.push(p[0], p[1]);
    if (P3 = this._clipFinite(i3, P3)) {
      for (let j2 = 0, n3 = P3.length, c0, c1 = this._edgecode(P3[n3 - 2], P3[n3 - 1]); j2 < n3; j2 += 2) {
        c0 = c1, c1 = this._edgecode(P3[j2], P3[j2 + 1]);
        if (c0 && c1) j2 = this._edge(i3, c0, c1, P3, j2), n3 = P3.length;
      }
    } else if (this.contains(i3, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P3 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P3;
  }
  _edge(i3, e0, e1, P3, j2) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 5:
          e0 = 4;
          continue;
        // top-left
        case 4:
          e0 = 6, x = this.xmax, y = this.ymin;
          break;
        // top
        case 6:
          e0 = 2;
          continue;
        // top-right
        case 2:
          e0 = 10, x = this.xmax, y = this.ymax;
          break;
        // right
        case 10:
          e0 = 8;
          continue;
        // bottom-right
        case 8:
          e0 = 9, x = this.xmin, y = this.ymax;
          break;
        // bottom
        case 9:
          e0 = 1;
          continue;
        // bottom-left
        case 1:
          e0 = 5, x = this.xmin, y = this.ymin;
          break;
      }
      if ((P3[j2] !== x || P3[j2 + 1] !== y) && this.contains(i3, x, y)) {
        P3.splice(j2, 0, x, y), j2 += 2;
      }
    }
    return j2;
  }
  _project(x0, y0, vx, vy) {
    let t3 = Infinity, c, x, y;
    if (vy < 0) {
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t3) y = this.ymin, x = x0 + (t3 = c) * vx;
    } else if (vy > 0) {
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t3) y = this.ymax, x = x0 + (t3 = c) * vx;
    }
    if (vx > 0) {
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t3) x = this.xmax, y = y0 + (t3 = c) * vy;
    } else if (vx < 0) {
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t3) x = this.xmin, y = y0 + (t3 = c) * vy;
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (x === this.xmin ? 1 : x === this.xmax ? 2 : 0) | (y === this.ymin ? 4 : y === this.ymax ? 8 : 0);
  }
  _regioncode(x, y) {
    return (x < this.xmin ? 1 : x > this.xmax ? 2 : 0) | (y < this.ymin ? 4 : y > this.ymax ? 8 : 0);
  }
  _simplify(P3) {
    if (P3 && P3.length > 4) {
      for (let i3 = 0; i3 < P3.length; i3 += 2) {
        const j2 = (i3 + 2) % P3.length, k2 = (i3 + 4) % P3.length;
        if (P3[i3] === P3[j2] && P3[j2] === P3[k2] || P3[i3 + 1] === P3[j2 + 1] && P3[j2 + 1] === P3[k2 + 1]) {
          P3.splice(j2, 2), i3 -= 2;
        }
      }
      if (!P3.length) P3 = null;
    }
    return P3;
  }
};

// node_modules/d3-delaunay/src/delaunay.js
var tau = 2 * Math.PI;
var pow = Math.pow;
function pointX(p) {
  return p[0];
}
function pointY(p) {
  return p[1];
}
function collinear(d) {
  const { triangles, coords } = d;
  for (let i3 = 0; i3 < triangles.length; i3 += 3) {
    const a2 = 2 * triangles[i3], b2 = 2 * triangles[i3 + 1], c = 2 * triangles[i3 + 2], cross = (coords[c] - coords[a2]) * (coords[b2 + 1] - coords[a2 + 1]) - (coords[b2] - coords[a2]) * (coords[c + 1] - coords[a2 + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}
function jitter(x, y, r3) {
  return [x + Math.sin(x + y) * r3, y + Math.cos(x - y) * r3];
}
var Delaunay = class _Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new _Delaunay("length" in points ? flatArray(points, fx, fy, that) : Float64Array.from(flatIterable(points, fx, fy, that)));
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator, points = this.points;
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from({ length: points.length / 2 }, (_2, i3) => i3).sort((i3, j2) => points[2 * i3] - points[2 * j2] || points[2 * i3 + 1] - points[2 * j2 + 1]);
      const e3 = this.collinear[0], f = this.collinear[this.collinear.length - 1], bounds = [points[2 * e3], points[2 * e3 + 1], points[2 * f], points[2 * f + 1]], r3 = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i3 = 0, n3 = points.length / 2; i3 < n3; ++i3) {
        const p = jitter(points[2 * i3], points[2 * i3 + 1], r3);
        points[2 * i3] = p[0];
        points[2 * i3 + 1] = p[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }
    const halfedges = this.halfedges = this._delaunator.halfedges;
    const hull = this.hull = this._delaunator.hull;
    const triangles = this.triangles = this._delaunator.triangles;
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);
    for (let e3 = 0, n3 = halfedges.length; e3 < n3; ++e3) {
      const p = triangles[e3 % 3 === 2 ? e3 - 2 : e3 + 1];
      if (halfedges[e3] === -1 || inedges[p] === -1) inedges[p] = e3;
    }
    for (let i3 = 0, n3 = hull.length; i3 < n3; ++i3) {
      hullIndex[hull[i3]] = i3;
    }
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      inedges[hull[0]] = 1;
      if (hull.length === 2) {
        inedges[hull[1]] = 0;
        this.triangles[1] = hull[1];
        this.triangles[2] = hull[1];
      }
    }
  }
  voronoi(bounds) {
    return new Voronoi(this, bounds);
  }
  *neighbors(i3) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear: collinear2 } = this;
    if (collinear2) {
      const l3 = collinear2.indexOf(i3);
      if (l3 > 0) yield collinear2[l3 - 1];
      if (l3 < collinear2.length - 1) yield collinear2[l3 + 1];
      return;
    }
    const e0 = inedges[i3];
    if (e0 === -1) return;
    let e3 = e0, p0 = -1;
    do {
      yield p0 = triangles[e3];
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) return;
      e3 = halfedges[e3];
      if (e3 === -1) {
        const p = hull[(_hullIndex[i3] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e3 !== e0);
  }
  find(x, y, i3 = 0) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
    const i0 = i3;
    let c;
    while ((c = this._step(i3, x, y)) >= 0 && c !== i3 && c !== i0) i3 = c;
    return c;
  }
  _step(i3, x, y) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i3] === -1 || !points.length) return (i3 + 1) % (points.length >> 1);
    let c = i3;
    let dc = pow(x - points[i3 * 2], 2) + pow(y - points[i3 * 2 + 1], 2);
    const e0 = inedges[i3];
    let e3 = e0;
    do {
      let t3 = triangles[e3];
      const dt = pow(x - points[t3 * 2], 2) + pow(y - points[t3 * 2 + 1], 2);
      if (dt < dc) dc = dt, c = t3;
      e3 = e3 % 3 === 2 ? e3 - 2 : e3 + 1;
      if (triangles[e3] !== i3) break;
      e3 = halfedges[e3];
      if (e3 === -1) {
        e3 = hull[(_hullIndex[i3] + 1) % hull.length];
        if (e3 !== t3) {
          if (pow(x - points[e3 * 2], 2) + pow(y - points[e3 * 2 + 1], 2) < dc) return e3;
        }
        break;
      }
    } while (e3 !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, halfedges, triangles } = this;
    for (let i3 = 0, n3 = halfedges.length; i3 < n3; ++i3) {
      const j2 = halfedges[i3];
      if (j2 < i3) continue;
      const ti = triangles[i3] * 2;
      const tj = triangles[j2] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r3) {
    if (r3 === void 0 && (!context || typeof context.moveTo !== "function")) r3 = context, context = null;
    r3 = r3 == void 0 ? 2 : +r3;
    const buffer = context == null ? context = new Path() : void 0;
    const { points } = this;
    for (let i3 = 0, n3 = points.length; i3 < n3; i3 += 2) {
      const x = points[i3], y = points[i3 + 1];
      context.moveTo(x + r3, y);
      context.arc(x, y, r3, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { hull, points } = this;
    const h = hull[0] * 2, n3 = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i3 = 1; i3 < n3; ++i3) {
      const h2 = 2 * hull[i3];
      context.lineTo(points[h2], points[h2 + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i3, context) {
    const buffer = context == null ? context = new Path() : void 0;
    const { points, triangles } = this;
    const t0 = triangles[i3 *= 3] * 2;
    const t1 = triangles[i3 + 1] * 2;
    const t22 = triangles[i3 + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t22], points[t22 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i3 = 0, n3 = triangles.length / 3; i3 < n3; ++i3) {
      yield this.trianglePolygon(i3);
    }
  }
  trianglePolygon(i3) {
    const polygon = new Polygon();
    this.renderTriangle(i3, polygon);
    return polygon.value();
  }
};
function flatArray(points, fx, fy, that) {
  const n3 = points.length;
  const array = new Float64Array(n3 * 2);
  for (let i3 = 0; i3 < n3; ++i3) {
    const p = points[i3];
    array[i3 * 2] = fx.call(that, p, i3, points);
    array[i3 * 2 + 1] = fy.call(that, p, i3, points);
  }
  return array;
}
function* flatIterable(points, fx, fy, that) {
  let i3 = 0;
  for (const p of points) {
    yield fx.call(that, p, i3, points);
    yield fy.call(that, p, i3, points);
    ++i3;
  }
}

// node_modules/@nivo/voronoi/dist/nivo-voronoi.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var C3 = function(n3) {
  return [n3.x, n3.y];
};
var L = _t;
var T = "cursor";
var P2 = "top";
var w2 = function(n3) {
  var o3 = n3.points, e3 = n3.getNodePosition, i3 = void 0 === e3 ? C3 : e3, t3 = n3.margin, r3 = void 0 === t3 ? L : t3;
  return o3.map(function(n4) {
    var o4 = i3(n4), e4 = o4[0], t4 = o4[1];
    return [e4 + r3.left, t4 + r3.top];
  });
};
var E = function(n3) {
  var o3 = n3.points, e3 = n3.width, i3 = n3.height, t3 = n3.margin, r3 = void 0 === t3 ? L : t3, l3 = n3.debug, u4 = Delaunay.from(o3), a2 = l3 ? u4.voronoi([0, 0, r3.left + e3 + r3.right, r3.top + i3 + r3.bottom]) : void 0;
  return { points: o3, delaunay: u4, voronoi: a2 };
};
var W = function(o3) {
  var e3 = o3.points, i3 = o3.getNodePosition, t3 = void 0 === i3 ? C3 : i3, r3 = o3.width, l3 = o3.height, u4 = o3.margin, a2 = void 0 === u4 ? L : u4, d = o3.debug;
  return (0, import_react.useMemo)(function() {
    return E({ points: w2({ points: e3, margin: a2, getNodePosition: t3 }), width: r3, height: l3, margin: a2, debug: d });
  }, [e3, r3, l3, a2, d]);
};
var D2 = function(r3) {
  var l3 = r3.elementRef, u4 = r3.nodes, s2 = r3.getNodePosition, c = void 0 === s2 ? C3 : s2, h = r3.delaunay, v2 = r3.setCurrent, f = r3.margin, p = void 0 === f ? L : f, m2 = r3.detectionRadius, M2 = void 0 === m2 ? 1 / 0 : m2, b2 = r3.isInteractive, k2 = void 0 === b2 || b2, y = r3.onMouseEnter, w3 = r3.onMouseMove, E2 = r3.onMouseLeave, W2 = r3.onClick, x = r3.onTouchStart, S = r3.onTouchMove, D3 = r3.onTouchEnd, R = r3.enableTouchCrosshair, A2 = void 0 !== R && R, N = r3.tooltip, O2 = r3.tooltipPosition, j2 = void 0 === O2 ? T : O2, I2 = r3.tooltipAnchor, z4 = void 0 === I2 ? P2 : I2, F = (0, import_react.useState)(null), H3 = F[0], B3 = F[1], q = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(function() {
    q.current = H3;
  }, [q, H3]);
  var G = (0, import_react.useCallback)(function(n3) {
    if (!l3.current) return null;
    var o3 = Sn(l3.current, n3), e3 = o3[0], i3 = o3[1], t3 = h.find(e3, i3), r4 = void 0 !== t3 ? u4[t3] : null;
    if (r4 && M2 !== 1 / 0) {
      var s3 = c(r4), v3 = s3[0], f2 = s3[1];
      Mn(e3, i3, v3 + p.left, f2 + p.top) > M2 && (t3 = null, r4 = null);
    }
    return null === t3 || null === r4 ? null : [t3, r4];
  }, [l3, h, u4, c, p, M2]), J = k(), K = J.showTooltipAt, Q2 = J.showTooltipFromEvent, U2 = J.hideTooltip, V = (0, import_react.useMemo)(function() {
    if (N) return "cursor" === j2 ? function(n3, o3) {
      Q2(N(n3), o3, z4);
    } : function(n3) {
      var o3 = c(n3), e3 = o3[0], i3 = o3[1];
      K(N(n3), [e3 + p.left, i3 + p.top], z4);
    };
  }, [K, Q2, N, j2, z4, c, p]), X2 = (0, import_react.useCallback)(function(n3) {
    var o3 = G(n3);
    if (B3(o3), null == v2 || v2(o3 ? o3[1] : null), o3) {
      var e3 = o3[1];
      null == V || V(e3, n3), null == y || y(o3[1], n3);
    }
  }, [G, B3, v2, V, y]), Y = (0, import_react.useCallback)(function(n3) {
    var o3 = G(n3);
    if (B3(o3), o3) {
      var e3 = o3[0], i3 = o3[1];
      if (null == v2 || v2(i3), null == V || V(i3, n3), q.current) {
        var t3 = q.current, r4 = t3[0], l4 = t3[1];
        e3 !== r4 ? null == E2 || E2(l4, n3) : null == w3 || w3(i3, n3);
      } else null == y || y(i3, n3);
    } else null == v2 || v2(null), null == U2 || U2(), q.current && (null == E2 || E2(q.current[1], n3));
  }, [G, B3, q, y, w3, E2, V, U2]), Z2 = (0, import_react.useCallback)(function(n3) {
    B3(null), null == v2 || v2(null), U2(), E2 && q.current && E2(q.current[1], n3);
  }, [B3, v2, q, U2, E2]), $2 = (0, import_react.useCallback)(function(n3) {
    var o3 = G(n3);
    B3(o3), o3 && (null == W2 || W2(o3[1], n3));
  }, [G, B3, W2]), _2 = (0, import_react.useCallback)(function(n3) {
    var o3 = G(n3);
    A2 && (B3(o3), null == v2 || v2(o3 ? o3[1] : null)), o3 && (null == x || x(o3[1], n3));
  }, [G, B3, v2, A2, x]), nn = (0, import_react.useCallback)(function(n3) {
    var o3 = G(n3);
    A2 && (B3(o3), null == v2 || v2(o3 ? o3[1] : null)), o3 && (null == S || S(o3[1], n3));
  }, [G, B3, v2, A2, S]), on = (0, import_react.useCallback)(function(n3) {
    A2 && (B3(null), null == v2 || v2(null)), D3 && q.current && D3(q.current[1], n3);
  }, [A2, B3, v2, D3, q]);
  return { current: H3, handleMouseEnter: k2 ? X2 : void 0, handleMouseMove: k2 ? Y : void 0, handleMouseLeave: k2 ? Z2 : void 0, handleClick: k2 ? $2 : void 0, handleTouchStart: k2 ? _2 : void 0, handleTouchMove: k2 ? nn : void 0, handleTouchEnd: k2 ? on : void 0 };
};
var I = function(o3) {
  var i3 = o3.nodes, t3 = o3.width, r3 = o3.height, l3 = o3.margin, u4 = void 0 === l3 ? L : l3, a2 = o3.getNodePosition, d = o3.setCurrent, s2 = o3.onMouseEnter, c = o3.onMouseMove, h = o3.onMouseLeave, v2 = o3.onClick, f = o3.onTouchStart, p = o3.onTouchMove, g2 = o3.onTouchEnd, k2 = o3.enableTouchCrosshair, y = void 0 !== k2 && k2, C4 = o3.detectionRadius, w3 = void 0 === C4 ? 1 / 0 : C4, E2 = o3.tooltip, x = o3.tooltipPosition, S = void 0 === x ? T : x, R = o3.tooltipAnchor, A2 = void 0 === R ? P2 : R, N = o3.debug, O2 = (0, import_react.useRef)(null), j2 = W({ points: i3, getNodePosition: a2, width: t3, height: r3, margin: u4, debug: N }), I2 = j2.delaunay, z4 = j2.voronoi, F = D2({ elementRef: O2, nodes: i3, delaunay: I2, margin: u4, detectionRadius: w3, setCurrent: d, onMouseEnter: s2, onMouseMove: c, onMouseLeave: h, onClick: v2, onTouchStart: f, onTouchMove: p, onTouchEnd: g2, enableTouchCrosshair: y, tooltip: E2, tooltipPosition: S, tooltipAnchor: A2 }), H3 = F.current, B3 = F.handleMouseEnter, q = F.handleMouseMove, G = F.handleMouseLeave, J = F.handleClick, K = F.handleTouchStart, Q2 = F.handleTouchMove, U2 = F.handleTouchEnd, V = (0, import_react.useMemo)(function() {
    if (N && z4) return z4.render();
  }, [N, z4]);
  return (0, import_jsx_runtime.jsxs)("g", { ref: O2, transform: "translate(" + -u4.left + "," + -u4.top + ")", children: [N && z4 && (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [(0, import_jsx_runtime.jsx)("path", { d: V, stroke: "red", strokeWidth: 1, opacity: 0.75 }), w3 < 1 / 0 && (0, import_jsx_runtime.jsx)("path", { stroke: "red", strokeWidth: 0.35, fill: "none", d: I2.renderPoints(void 0, w3) }), H3 && (0, import_jsx_runtime.jsx)("path", { fill: "pink", opacity: 0.35, d: z4.renderCell(H3[0]) })] }), (0, import_jsx_runtime.jsx)("rect", { "data-ref": "mesh-interceptor", width: u4.left + t3 + u4.right, height: u4.top + r3 + u4.bottom, fill: "red", opacity: 0, style: { cursor: "auto" }, onMouseEnter: B3, onMouseMove: q, onMouseLeave: G, onTouchStart: K, onTouchMove: Q2, onTouchEnd: U2, onClick: J })] });
};
var z2 = function(n3, o3) {
  n3.save(), n3.globalAlpha = 0.75, n3.beginPath(), o3.render(n3), n3.strokeStyle = "red", n3.lineWidth = 1, n3.stroke(), n3.restore();
};
var H2 = function(n3, o3, e3) {
  n3.save(), n3.globalAlpha = 0.35, n3.beginPath(), o3.renderCell(e3, n3), n3.fillStyle = "pink", n3.fill(), n3.restore();
};

// node_modules/@nivo/line/dist/nivo-line.es.js
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e3) {
    for (var o3 = 1; o3 < arguments.length; o3++) {
      var i3 = arguments[o3];
      for (var t3 in i3) Object.prototype.hasOwnProperty.call(i3, t3) && (e3[t3] = i3[t3]);
    }
    return e3;
  }, Q.apply(this, arguments);
}
var U = (0, import_react2.memo)(function(e3) {
  var o3 = e3.point;
  return (0, import_jsx_runtime2.jsx)(w, { id: (0, import_jsx_runtime2.jsxs)("span", { children: ["x: ", (0, import_jsx_runtime2.jsx)("strong", { children: o3.data.xFormatted }), ", y:", " ", (0, import_jsx_runtime2.jsx)("strong", { children: o3.data.yFormatted })] }), enableChip: true, color: o3.serieColor });
});
var Z = (0, import_react2.memo)(function(e3) {
  var o3 = e3.slice, i3 = e3.axis, t3 = zt(), n3 = "x" === i3 ? "y" : "x";
  return (0, import_jsx_runtime2.jsx)(C, { rows: o3.points.map(function(e4) {
    return [(0, import_jsx_runtime2.jsx)(g, { color: e4.serieColor, style: t3.tooltip.chip }, "chip"), e4.serieId, (0, import_jsx_runtime2.jsx)("span", { style: t3.tooltip.tableCellValue, children: e4.data[n3 + "Formatted"] }, "value")];
  }) });
});
var $ = { curve: "linear", xScale: { type: "point" }, yScale: { type: "linear", min: 0, max: "auto" }, layers: ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"], axisBottom: {}, axisLeft: {}, enableGridX: true, enableGridY: true, enablePoints: true, pointSize: 6, pointColor: { from: "color" }, pointBorderWidth: 0, pointBorderColor: { theme: "background" }, enablePointLabel: false, pointLabel: "yFormatted", colors: { scheme: "nivo" }, enableArea: false, areaBaselineValue: 0, areaOpacity: 0.2, areaBlendMode: "normal", lineWidth: 2, legends: [], isInteractive: true, tooltip: U, enableSlices: false, debugSlices: false, sliceTooltip: Z, debugMesh: false, enableCrosshair: true, crosshairType: "bottom-left" };
var _ = Q({}, $, { enablePointLabel: false, useMesh: false, enableTouchCrosshair: false, animate: true, motionConfig: "gentle", defs: [], fill: [], role: "img", initialHiddenIds: [] });
var ee = Q({}, $, { pixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1 });
var oe = function(e3) {
  var i3 = e3.curve;
  return (0, import_react2.useMemo)(function() {
    return line_default().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y(function(e4) {
      return e4.y;
    }).curve(lt(i3));
  }, [i3]);
};
var ie = function(e3) {
  var i3 = e3.curve, t3 = e3.yScale, n3 = e3.areaBaselineValue;
  return (0, import_react2.useMemo)(function() {
    return area_default().defined(function(e4) {
      return null !== e4.x && null !== e4.y;
    }).x(function(e4) {
      return e4.x;
    }).y1(function(e4) {
      return e4.y;
    }).curve(lt(i3)).y0(t3(n3));
  }, [i3, t3, n3]);
};
var te = function(e3) {
  var i3 = e3.componentId, t3 = e3.enableSlices, n3 = e3.points, r3 = e3.width, a2 = e3.height;
  return (0, import_react2.useMemo)(function() {
    if (false === t3) return [];
    if ("x" === t3) {
      var e4 = /* @__PURE__ */ new Map();
      return n3.forEach(function(o4) {
        null !== o4.data.x && null !== o4.data.y && (e4.has(o4.x) ? e4.get(o4.x).push(o4) : e4.set(o4.x, [o4]));
      }), Array.from(e4.entries()).sort(function(e5, o4) {
        return e5[0] - o4[0];
      }).map(function(e5, o4, t4) {
        var n4, l3, s2 = e5[0], d = e5[1], c = t4[o4 - 1], u4 = t4[o4 + 1];
        return n4 = c ? s2 - (s2 - c[0]) / 2 : s2, l3 = u4 ? s2 - n4 + (u4[0] - s2) / 2 : r3 - n4, { id: "slice:" + i3 + ":" + s2, x0: n4, x: s2, y0: 0, y: 0, width: l3, height: a2, points: d.reverse() };
      });
    }
    if ("y" === t3) {
      var o3 = /* @__PURE__ */ new Map();
      return n3.forEach(function(e5) {
        null !== e5.data.x && null !== e5.data.y && (o3.has(e5.y) ? o3.get(e5.y).push(e5) : o3.set(e5.y, [e5]));
      }), Array.from(o3.entries()).sort(function(e5, o4) {
        return e5[0] - o4[0];
      }).map(function(e5, o4, i4) {
        var t4, n4, l3 = e5[0], s2 = e5[1], d = i4[o4 - 1], c = i4[o4 + 1];
        return t4 = d ? l3 - (l3 - d[0]) / 2 : l3, n4 = c ? l3 - t4 + (c[0] - l3) / 2 : a2 - t4, { id: l3, x0: 0, x: 0, y0: t4, y: l3, width: r3, height: n4, points: s2.reverse() };
      });
    }
  }, [i3, t3, a2, n3, r3]);
};
var ne = "line";
var re = function(e3) {
  var n3 = e3.data, r3 = e3.xScale, a2 = void 0 === r3 ? _.xScale : r3, l3 = e3.xFormat, s2 = e3.yScale, c = void 0 === s2 ? _.yScale : s2, h = e3.yFormat, f = e3.width, v2 = e3.height, p = e3.colors, m2 = void 0 === p ? _.colors : p, g2 = e3.curve, y = void 0 === g2 ? _.curve : g2, x = e3.areaBaselineValue, b2 = void 0 === x ? _.areaBaselineValue : x, S = e3.pointColor, M2 = void 0 === S ? _.pointColor : S, C4 = e3.pointBorderColor, k2 = void 0 === C4 ? _.pointBorderColor : C4, B3 = e3.enableSlices, W2 = void 0 === B3 ? _.enableSlicesTooltip : B3, E2 = e3.initialHiddenIds, L2 = void 0 === E2 ? _.initialHiddenIds : E2, G = (0, import_react2.useState)((0, import_uniqueId.default)(ne))[0], P3 = Ot(l3), F = Ot(h), O2 = pr(m2, "id"), V = zt(), I2 = Xe(M2, V), H3 = Xe(k2, V), Y = (0, import_react2.useState)(null != L2 ? L2 : []), X2 = Y[0], z4 = Y[1], j2 = (0, import_react2.useMemo)(function() {
    return dn(n3.filter(function(e4) {
      return -1 === X2.indexOf(e4.id);
    }), a2, c, f, v2);
  }, [n3, X2, a2, c, f, v2]), D3 = j2.xScale, q = j2.yScale, J = j2.series, K = (0, import_react2.useMemo)(function() {
    var e4 = n3.map(function(e5) {
      return { id: e5.id, label: e5.id, color: O2(e5) };
    }), o3 = e4.map(function(e5) {
      return Q({}, J.find(function(o4) {
        return o4.id === e5.id;
      }), { color: e5.color });
    }).filter(function(e5) {
      return Boolean(e5.id);
    });
    return { legendData: e4.map(function(e5) {
      return Q({}, e5, { hidden: !o3.find(function(o4) {
        return o4.id === e5.id;
      }) });
    }).reverse(), series: o3 };
  }, [n3, J, O2]), N = K.legendData, U2 = K.series, Z2 = (0, import_react2.useCallback)(function(e4) {
    z4(function(o3) {
      return o3.indexOf(e4) > -1 ? o3.filter(function(o4) {
        return o4 !== e4;
      }) : [].concat(o3, [e4]);
    });
  }, []), $2 = function(e4) {
    var i3 = e4.series, t3 = e4.getPointColor, n4 = e4.getPointBorderColor, r4 = e4.formatX, a3 = e4.formatY;
    return (0, import_react2.useMemo)(function() {
      return i3.reduce(function(e5, o3) {
        return [].concat(e5, o3.data.filter(function(e6) {
          return null !== e6.position.x && null !== e6.position.y;
        }).map(function(i4, l4) {
          var s3 = { id: o3.id + "." + l4, index: e5.length + l4, serieId: o3.id, serieColor: o3.color, x: i4.position.x, y: i4.position.y };
          return s3.color = t3(o3), s3.borderColor = n4(s3), s3.data = Q({}, i4.data, { xFormatted: r4(i4.data.x), yFormatted: a3(i4.data.y) }), s3;
        }));
      }, []);
    }, [i3, t3, n4, r4, a3]);
  }({ series: U2, getPointColor: I2, getPointBorderColor: H3, formatX: P3, formatY: F }), ee2 = te({ componentId: G, enableSlices: W2, points: $2, width: f, height: v2 });
  return { legendData: N, toggleSerie: Z2, lineGenerator: oe({ curve: y }), areaGenerator: ie({ curve: y, yScale: q, areaBaselineValue: b2 }), getColor: O2, series: U2, xScale: D3, yScale: q, slices: ee2, points: $2 };
};
var ae = function(e3) {
  var o3 = e3.areaBlendMode, i3 = e3.areaOpacity, t3 = e3.color, n3 = e3.fill, r3 = e3.path, a2 = Ur(), l3 = a2.animate, s2 = a2.config, d = Fr(r3), c = useSpring({ color: t3, config: s2, immediate: !l3 });
  return (0, import_jsx_runtime2.jsx)(animated.path, { d, fill: n3 || c.color, fillOpacity: i3, strokeWidth: 0, style: { mixBlendMode: o3 } });
};
var le = (0, import_react2.memo)(function(e3) {
  var o3 = e3.areaGenerator, i3 = e3.areaOpacity, t3 = e3.areaBlendMode, n3 = e3.lines.slice(0).reverse();
  return (0, import_jsx_runtime2.jsx)("g", { children: n3.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(ae, Q({ path: o3(e4.data.map(function(e5) {
      return e5.position;
    })) }, Q({ areaOpacity: i3, areaBlendMode: t3 }, e4)), e4.id);
  }) });
});
var se = (0, import_react2.memo)(function(e3) {
  var i3 = e3.lineGenerator, t3 = e3.points, n3 = e3.color, r3 = e3.thickness, a2 = (0, import_react2.useMemo)(function() {
    return i3(t3);
  }, [i3, t3]), l3 = Fr(a2);
  return (0, import_jsx_runtime2.jsx)(animated.path, { d: l3, fill: "none", strokeWidth: r3, stroke: n3 });
});
var de2 = (0, import_react2.memo)(function(e3) {
  var o3 = e3.lines, i3 = e3.lineGenerator, t3 = e3.lineWidth;
  return o3.slice(0).reverse().map(function(e4) {
    var o4 = e4.id, n3 = e4.data, r3 = e4.color;
    return (0, import_jsx_runtime2.jsx)(se, { id: o4, points: n3.map(function(e5) {
      return e5.position;
    }), lineGenerator: i3, color: r3, thickness: t3 }, o4);
  });
});
var ce2 = (0, import_react2.memo)(function(e3) {
  var o3 = e3.slice, i3 = e3.slices, r3 = e3.axis, a2 = e3.debug, l3 = e3.tooltip, s2 = e3.isCurrent, d = e3.setCurrent, c = e3.onMouseEnter, u4 = e3.onMouseMove, h = e3.onMouseLeave, f = e3.onClick, v2 = e3.onTouchStart, p = e3.onTouchMove, m2 = e3.onTouchEnd, g2 = k(), y = g2.showTooltipFromEvent, x = g2.hideTooltip, b2 = (0, import_react2.useCallback)(function(e4) {
    y((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), d(o3), c && c(o3, e4);
  }, [y, l3, o3, r3, d, c]), S = (0, import_react2.useCallback)(function(e4) {
    y((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), u4 && u4(o3, e4);
  }, [y, l3, o3, r3, u4]), M2 = (0, import_react2.useCallback)(function(e4) {
    x(), d(null), h && h(o3, e4);
  }, [x, d, h, o3]), C4 = (0, import_react2.useCallback)(function(e4) {
    f && f(o3, e4);
  }, [o3, f]), w3 = (0, import_react2.useCallback)(function(e4) {
    y((0, import_react2.createElement)(l3, { slice: o3, axis: r3 }), e4, "right"), d(o3), v2 && v2(o3, e4);
  }, [r3, v2, d, y, o3, l3]), T2 = (0, import_react2.useCallback)(function(e4) {
    var t3 = e4.touches[0], a3 = document.elementFromPoint(t3.clientX, t3.clientY), s3 = null == a3 ? void 0 : a3.getAttribute("data-ref");
    if (s3) {
      var c2 = i3.find(function(e5) {
        return e5.id === s3;
      });
      c2 && (y((0, import_react2.createElement)(l3, { slice: c2, axis: r3 }), e4, "right"), d(c2));
    }
    p && p(o3, e4);
  }, [r3, p, d, y, o3, i3, l3]), k2 = (0, import_react2.useCallback)(function(e4) {
    x(), d(null), m2 && m2(o3, e4);
  }, [x, d, m2, o3]);
  return (0, import_jsx_runtime2.jsx)("rect", { x: o3.x0, y: o3.y0, width: o3.width, height: o3.height, stroke: "red", strokeWidth: a2 ? 1 : 0, strokeOpacity: 0.75, fill: "red", fillOpacity: s2 && a2 ? 0.35 : 0, onMouseEnter: b2, onMouseMove: S, onMouseLeave: M2, onClick: C4, onTouchStart: w3, onTouchMove: T2, onTouchEnd: k2, "data-ref": o3.id });
});
var ue = (0, import_react2.memo)(function(e3) {
  var o3 = e3.slices, i3 = e3.axis, t3 = e3.debug, n3 = e3.height, r3 = e3.tooltip, a2 = e3.current, l3 = e3.setCurrent, s2 = e3.onMouseEnter, d = e3.onMouseMove, c = e3.onMouseLeave, u4 = e3.onClick, h = e3.onTouchStart, f = e3.onTouchMove, v2 = e3.onTouchEnd;
  return o3.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(ce2, { slice: e4, slices: o3, axis: i3, debug: t3, height: n3, tooltip: r3, setCurrent: l3, isCurrent: null !== a2 && a2.id === e4.id, onMouseEnter: s2, onMouseMove: d, onMouseLeave: c, onClick: u4, onTouchStart: h, onTouchMove: f, onTouchEnd: v2 }, e4.id);
  });
});
var he = (0, import_react2.memo)(function(e3) {
  var o3 = e3.points, i3 = e3.symbol, t3 = e3.size, n3 = e3.borderWidth, r3 = e3.enableLabel, a2 = e3.label, l3 = e3.labelYOffset, s2 = zt(), c = qn(a2), u4 = o3.slice(0).reverse().map(function(e4) {
    return { id: e4.id, x: e4.x, y: e4.y, datum: e4.data, fill: e4.color, stroke: e4.borderColor, label: r3 ? c(e4) : null };
  });
  return (0, import_jsx_runtime2.jsx)("g", { children: u4.map(function(e4) {
    return (0, import_jsx_runtime2.jsx)(vn, { x: e4.x, y: e4.y, datum: e4.datum, symbol: i3, size: t3, color: e4.fill, borderWidth: n3, borderColor: e4.stroke, label: e4.label, labelYOffset: l3, theme: s2 }, e4.id);
  }) });
});
var fe = (0, import_react2.memo)(function(e3) {
  var o3 = e3.points, i3 = e3.width, r3 = e3.height, a2 = e3.margin, l3 = e3.setCurrent, s2 = e3.onMouseEnter, d = e3.onMouseMove, c = e3.onMouseLeave, u4 = e3.onClick, h = e3.onTouchStart, f = e3.onTouchMove, v2 = e3.onTouchEnd, p = e3.tooltip, m2 = e3.debug, g2 = e3.enableTouchCrosshair, y = k(), x = y.showTooltipAt, b2 = y.hideTooltip, S = (0, import_react2.useCallback)(function(e4, o4) {
    x((0, import_react2.createElement)(p, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), s2 && s2(e4, o4);
  }, [x, p, s2, a2]), M2 = (0, import_react2.useCallback)(function(e4, o4) {
    x((0, import_react2.createElement)(p, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), d && d(e4, o4);
  }, [x, p, a2.left, a2.top, d]), C4 = (0, import_react2.useCallback)(function(e4, o4) {
    b2(), c && c(e4, o4);
  }, [b2, c]), w3 = (0, import_react2.useCallback)(function(e4, o4) {
    u4 && u4(e4, o4);
  }, [u4]), T2 = (0, import_react2.useCallback)(function(e4, o4) {
    x((0, import_react2.createElement)(p, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), h && h(e4, o4);
  }, [a2.left, a2.top, h, x, p]), k2 = (0, import_react2.useCallback)(function(e4, o4) {
    x((0, import_react2.createElement)(p, { point: e4 }), [e4.x + a2.left, e4.y + a2.top], "top"), f && f(e4, o4);
  }, [a2.left, a2.top, f, x, p]), B3 = (0, import_react2.useCallback)(function(e4, o4) {
    b2(), v2 && v2(e4, o4);
  }, [v2, b2]);
  return (0, import_jsx_runtime2.jsx)(I, { nodes: o3, width: i3, height: r3, setCurrent: l3, onMouseEnter: S, onMouseMove: M2, onMouseLeave: C4, onClick: w3, onTouchStart: T2, onTouchMove: k2, onTouchEnd: B3, enableTouchCrosshair: g2, debug: m2 });
});
var ve = On(function(e3) {
  var o3 = e3.data, t3 = e3.xScale, n3 = void 0 === t3 ? { type: "point" } : t3, a2 = e3.xFormat, l3 = e3.yScale, s2 = void 0 === l3 ? { type: "linear", min: 0, max: "auto" } : l3, c = e3.yFormat, u4 = e3.layers, h = void 0 === u4 ? ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"] : u4, f = e3.curve, v2 = void 0 === f ? "linear" : f, p = e3.areaBaselineValue, m2 = void 0 === p ? 0 : p, S = e3.colors, M2 = void 0 === S ? { scheme: "nivo" } : S, C4 = e3.margin, w3 = e3.width, W2 = e3.height, E2 = e3.axisTop, G = e3.axisRight, P3 = e3.axisBottom, F = void 0 === P3 ? {} : P3, O2 = e3.axisLeft, V = void 0 === O2 ? {} : O2, H3 = e3.enableGridX, Y = void 0 === H3 || H3, R = e3.enableGridY, A2 = void 0 === R || R, z4 = e3.gridXValues, j2 = e3.gridYValues, D3 = e3.lineWidth, q = void 0 === D3 ? 2 : D3, J = e3.enableArea, K = void 0 !== J && J, N = e3.areaOpacity, $2 = void 0 === N ? 0.2 : N, _2 = e3.areaBlendMode, ee2 = void 0 === _2 ? "normal" : _2, oe2 = e3.enablePoints, ie2 = void 0 === oe2 || oe2, te2 = e3.pointSymbol, ne2 = e3.pointSize, ae2 = void 0 === ne2 ? 6 : ne2, se2 = e3.pointColor, ce3 = void 0 === se2 ? { from: "color" } : se2, ve2 = e3.pointBorderWidth, pe2 = void 0 === ve2 ? 0 : ve2, me2 = e3.pointBorderColor, ge2 = void 0 === me2 ? { theme: "background" } : me2, ye2 = e3.enablePointLabel, xe = void 0 !== ye2 && ye2, be = e3.pointLabel, Se = void 0 === be ? "data.yFormatted" : be, Me = e3.pointLabelYOffset, Ce = e3.defs, we = void 0 === Ce ? [] : Ce, Te = e3.fill, ke = void 0 === Te ? [] : Te, Be = e3.markers, We = e3.legends, Ee = void 0 === We ? [] : We, Le = e3.isInteractive, Ge = void 0 === Le || Le, Pe = e3.useMesh, Fe = void 0 !== Pe && Pe, Oe = e3.debugMesh, Ve = void 0 !== Oe && Oe, Ie = e3.onMouseEnter, He = e3.onMouseMove, Ye = e3.onMouseLeave, Re = e3.onClick, Ae = e3.onTouchStart, Xe2 = e3.onTouchMove, ze = e3.onTouchEnd, je = e3.tooltip, De = void 0 === je ? U : je, qe = e3.enableSlices, Je = void 0 !== qe && qe, Ke = e3.debugSlices, Ne = void 0 !== Ke && Ke, Qe = e3.sliceTooltip, Ue = void 0 === Qe ? Z : Qe, Ze = e3.enableCrosshair, $e = void 0 === Ze || Ze, _e = e3.crosshairType, eo = void 0 === _e ? "bottom-left" : _e, oo = e3.enableTouchCrosshair, io = void 0 !== oo && oo, to = e3.role, no = void 0 === to ? "img" : to, ro = e3.initialHiddenIds, ao = void 0 === ro ? [] : ro, lo = wt(w3, W2, C4), so = lo.margin, co = lo.innerWidth, uo = lo.innerHeight, ho = lo.outerWidth, fo = lo.outerHeight, vo = re({ data: o3, xScale: n3, xFormat: a2, yScale: s2, yFormat: c, width: co, height: uo, colors: M2, curve: v2, areaBaselineValue: m2, pointColor: ce3, pointBorderColor: ge2, enableSlices: Je, initialHiddenIds: ao }), po = vo.legendData, mo = vo.toggleSerie, go = vo.lineGenerator, yo = vo.areaGenerator, xo = vo.series, bo = vo.xScale, So = vo.yScale, Mo = vo.slices, Co = vo.points, wo = zt(), To = Xe(ce3, wo), ko = Xe(ge2, wo), Bo = (0, import_react2.useState)(null), Wo = Bo[0], Eo = Bo[1], Lo = (0, import_react2.useState)(null), Go = Lo[0], Po = Lo[1], Fo = { grid: (0, import_jsx_runtime2.jsx)(C2, { theme: wo, width: co, height: uo, xScale: Y ? bo : null, yScale: A2 ? So : null, xValues: z4, yValues: j2 }, "grid"), markers: (0, import_jsx_runtime2.jsx)(Rn, { markers: Be, width: co, height: uo, xScale: bo, yScale: So, theme: wo }, "markers"), axes: (0, import_jsx_runtime2.jsx)(B, { xScale: bo, yScale: So, width: co, height: uo, theme: wo, top: E2, right: G, bottom: F, left: V }, "axes"), areas: null, lines: (0, import_jsx_runtime2.jsx)(de2, { lines: xo, lineGenerator: go, lineWidth: q }, "lines"), slices: null, points: null, crosshair: null, mesh: null, legends: Ee.map(function(e4, o4) {
    return (0, import_jsx_runtime2.jsx)(O, Q({}, e4, { containerWidth: co, containerHeight: uo, data: e4.data || po, theme: wo, toggleSerie: e4.toggleSerie ? mo : void 0 }), "legend." + o4);
  }) }, Oo = In(we, xo, ke);
  return K && (Fo.areas = (0, import_jsx_runtime2.jsx)(le, { areaGenerator: yo, areaOpacity: $2, areaBlendMode: ee2, lines: xo }, "areas")), Ge && false !== Je && (Fo.slices = (0, import_jsx_runtime2.jsx)(ue, { slices: Mo, axis: Je, debug: Ne, height: uo, tooltip: Ue, current: Go, setCurrent: Po, onMouseEnter: Ie, onMouseMove: He, onMouseLeave: Ye, onClick: Re, onTouchStart: Ae, onTouchMove: Xe2, onTouchEnd: ze }, "slices")), ie2 && (Fo.points = (0, import_jsx_runtime2.jsx)(he, { points: Co, symbol: te2, size: ae2, color: To, borderWidth: pe2, borderColor: ko, enableLabel: xe, label: Se, labelYOffset: Me }, "points")), Ge && $e && (null !== Wo && (Fo.crosshair = (0, import_jsx_runtime2.jsx)(P, { width: co, height: uo, x: Wo.x, y: Wo.y, type: eo }, "crosshair")), null !== Go && (Fo.crosshair = (0, import_jsx_runtime2.jsx)(P, { width: co, height: uo, x: Go.x, y: Go.y, type: Je }, "crosshair"))), Ge && Fe && false === Je && (Fo.mesh = (0, import_jsx_runtime2.jsx)(fe, { points: Co, width: co, height: uo, margin: so, current: Wo, setCurrent: Eo, onMouseEnter: Ie, onMouseMove: He, onMouseLeave: Ye, onClick: Re, onTouchStart: Ae, onTouchMove: Xe2, onTouchEnd: ze, tooltip: De, enableTouchCrosshair: io, debug: Ve }, "mesh")), (0, import_jsx_runtime2.jsx)(gn, { defs: Oo, width: ho, height: fo, margin: so, role: no, children: h.map(function(o4, i3) {
    return "function" == typeof o4 ? (0, import_jsx_runtime2.jsx)(import_react2.Fragment, { children: o4(Q({}, e3, { innerWidth: co, innerHeight: uo, series: xo, slices: Mo, points: Co, xScale: bo, yScale: So, lineGenerator: go, areaGenerator: yo, currentPoint: Wo, setCurrentPoint: Eo, currentSlice: Go, setCurrentSlice: Po })) }, i3) : Fo[o4];
  }) });
});
var pe = function(e3) {
  return (0, import_jsx_runtime2.jsx)(It, { children: function(o3) {
    var i3 = o3.width, t3 = o3.height;
    return (0, import_jsx_runtime2.jsx)(ve, Q({ width: i3, height: t3 }, e3));
  } });
};
var me = On(function(e3) {
  var o3 = (0, import_react2.useRef)(null), r3 = e3.width, a2 = e3.height, c = e3.margin, u4 = e3.pixelRatio, h = void 0 === u4 ? "undefined" != typeof window && window.devicePixelRatio || 1 : u4, f = e3.data, v2 = e3.xScale, p = void 0 === v2 ? { type: "point" } : v2, m2 = e3.xFormat, y = e3.yScale, x = void 0 === y ? { type: "linear", min: 0, max: "auto" } : y, b2 = e3.yFormat, S = e3.curve, w3 = void 0 === S ? "linear" : S, T2 = e3.layers, k2 = void 0 === T2 ? ["grid", "markers", "axes", "areas", "crosshair", "lines", "points", "slices", "mesh", "legends"] : T2, B3 = e3.colors, L2 = void 0 === B3 ? { scheme: "nivo" } : B3, P3 = e3.lineWidth, F = void 0 === P3 ? 2 : P3, O2 = e3.enableArea, I2 = void 0 !== O2 && O2, H3 = e3.areaBaselineValue, Y = void 0 === H3 ? 0 : H3, R = e3.areaOpacity, A2 = void 0 === R ? 0.2 : R, z4 = e3.enablePoints, j2 = void 0 === z4 || z4, D3 = e3.pointSize, q = void 0 === D3 ? 6 : D3, Z2 = e3.pointColor, $2 = void 0 === Z2 ? { from: "color" } : Z2, _2 = e3.pointBorderWidth, ee2 = void 0 === _2 ? 0 : _2, oe2 = e3.pointBorderColor, ie2 = void 0 === oe2 ? { theme: "background" } : oe2, te2 = e3.enableGridX, ne2 = void 0 === te2 || te2, ae2 = e3.gridXValues, le2 = e3.enableGridY, se2 = void 0 === le2 || le2, de3 = e3.gridYValues, ce3 = e3.axisTop, ue2 = e3.axisRight, he2 = e3.axisBottom, fe2 = void 0 === he2 ? {} : he2, ve2 = e3.axisLeft, pe2 = void 0 === ve2 ? {} : ve2, me2 = e3.legends, ge2 = void 0 === me2 ? [] : me2, ye2 = e3.isInteractive, xe = void 0 === ye2 || ye2, be = e3.debugMesh, Se = void 0 !== be && be, Me = e3.onMouseLeave, Ce = e3.onClick, we = e3.tooltip, Te = void 0 === we ? U : we, ke = e3.canvasRef, Be = wt(r3, a2, c), We = Be.margin, Ee = Be.innerWidth, Le = Be.innerHeight, Ge = Be.outerWidth, Pe = Be.outerHeight, Fe = zt(), Oe = (0, import_react2.useState)(null), Ve = Oe[0], Ie = Oe[1], He = re({ data: f, xScale: p, xFormat: m2, yScale: x, yFormat: b2, width: Ee, height: Le, colors: L2, curve: w3, areaBaselineValue: Y, pointColor: $2, pointBorderColor: ie2 }), Ye = He.lineGenerator, Re = He.areaGenerator, Ae = He.series, Xe2 = He.xScale, ze = He.yScale, je = He.points, De = W({ points: je, width: Ee, height: Le, debug: Se }), qe = De.delaunay, Je = De.voronoi;
  (0, import_react2.useEffect)(function() {
    ke && (ke.current = o3.current), o3.current.width = Ge * h, o3.current.height = Pe * h;
    var e4 = o3.current.getContext("2d");
    e4.scale(h, h), e4.fillStyle = Fe.background, e4.fillRect(0, 0, Ge, Pe), e4.translate(We.left, We.top), k2.forEach(function(o4) {
      if ("function" == typeof o4 && o4({ ctx: e4, innerWidth: Ee, innerHeight: Le, series: Ae, points: je, xScale: Xe2, yScale: ze, lineWidth: F, lineGenerator: Ye, areaGenerator: Re, currentPoint: Ve, setCurrentPoint: Ie }), "grid" === o4 && Fe.grid.line.strokeWidth > 0 && (e4.lineWidth = Fe.grid.line.strokeWidth, e4.strokeStyle = Fe.grid.line.stroke, ne2 && z(e4, { width: Ee, height: Le, scale: Xe2, axis: "x", values: ae2 }), se2 && z(e4, { width: Ee, height: Le, scale: ze, axis: "y", values: de3 })), "axes" === o4 && j(e4, { xScale: Xe2, yScale: ze, width: Ee, height: Le, top: ce3, right: ue2, bottom: fe2, left: pe2, theme: Fe }), "areas" === o4 && true === I2) {
        e4.save(), e4.globalAlpha = A2, Re.context(e4);
        for (var i3 = Ae.length - 1; i3 >= 0; i3--) e4.fillStyle = Ae[i3].color, e4.beginPath(), Re(Ae[i3].data.map(function(e5) {
          return e5.position;
        })), e4.fill();
        e4.restore();
      }
      if ("lines" === o4 && (Ye.context(e4), Ae.forEach(function(o5) {
        e4.strokeStyle = o5.color, e4.lineWidth = F, e4.beginPath(), Ye(o5.data.map(function(e5) {
          return e5.position;
        })), e4.stroke();
      })), "points" === o4 && true === j2 && q > 0 && je.forEach(function(o5) {
        e4.fillStyle = o5.color, e4.beginPath(), e4.arc(o5.x, o5.y, q / 2, 0, 2 * Math.PI), e4.fill(), ee2 > 0 && (e4.strokeStyle = o5.borderColor, e4.lineWidth = ee2, e4.stroke());
      }), "mesh" === o4 && true === Se && (z2(e4, Je), Ve && H2(e4, Je, Ve.index)), "legends" === o4) {
        var t3 = Ae.map(function(e5) {
          return { id: e5.id, label: e5.id, color: e5.color };
        }).reverse();
        ge2.forEach(function(o5) {
          H(e4, Q({}, o5, { data: o5.data || t3, containerWidth: Ee, containerHeight: Le, theme: Fe }));
        });
      }
    });
  }, [o3, Ge, Pe, k2, Fe, Ye, Ae, Xe2, ze, ne2, ae2, se2, de3, ce3, ue2, fe2, pe2, ge2, je, j2, q, Ve]);
  var Ke = (0, import_react2.useCallback)(function(e4) {
    var i3 = Sn(o3.current, e4), t3 = i3[0], n3 = i3[1];
    if (!jn(We.left, We.top, Ee, Le, t3, n3)) return null;
    var r4 = qe.find(t3 - We.left, n3 - We.top);
    return je[r4];
  }, [o3, We, Ee, Le, qe]), Ne = k(), Qe = Ne.showTooltipFromEvent, Ue = Ne.hideTooltip, Ze = (0, import_react2.useCallback)(function(e4) {
    var o4 = Ke(e4);
    Ie(o4), o4 ? Qe((0, import_react2.createElement)(Te, { point: o4 }), e4) : Ue();
  }, [Ke, Ie, Qe, Ue, Te]), $e = (0, import_react2.useCallback)(function(e4) {
    Ue(), Ie(null), Ve && Me && Me(Ve, e4);
  }, [Ue, Ie, Me]), _e = (0, import_react2.useCallback)(function(e4) {
    if (Ce) {
      var o4 = Ke(e4);
      o4 && Ce(o4, e4);
    }
  }, [Ke, Ce]);
  return (0, import_jsx_runtime2.jsx)("canvas", { ref: o3, width: Ge * h, height: Pe * h, style: { width: Ge, height: Pe, cursor: xe ? "auto" : "normal" }, onMouseEnter: xe ? Ze : void 0, onMouseMove: xe ? Ze : void 0, onMouseLeave: xe ? $e : void 0, onClick: xe ? _e : void 0 });
});
var ge = (0, import_react2.forwardRef)(function(e3, o3) {
  return (0, import_jsx_runtime2.jsx)(me, Q({}, e3, { canvasRef: o3 }));
});
var ye = (0, import_react2.forwardRef)(function(e3, o3) {
  return (0, import_jsx_runtime2.jsx)(It, { children: function(i3) {
    var t3 = i3.width, n3 = i3.height;
    return (0, import_jsx_runtime2.jsx)(ge, Q({ width: t3, height: n3 }, e3, { ref: o3 }));
  } });
});
export {
  ne as LINE_UNIQUE_ID_PREFIX,
  ve as Line,
  ge as LineCanvas,
  ee as LineCanvasDefaultProps,
  _ as LineDefaultProps,
  pe as ResponsiveLine,
  ye as ResponsiveLineCanvas,
  ie as useAreaGenerator,
  re as useLine,
  oe as useLineGenerator,
  te as useSlices
};
//# sourceMappingURL=@nivo_line.js.map
