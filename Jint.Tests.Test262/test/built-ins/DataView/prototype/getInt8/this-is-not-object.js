// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getint8
es6id: 24.2.4.7
description: Throws a TypeError if this is not Object
info: |
  24.2.4.7 DataView.prototype.getInt8 ( byteOffset )

  1. Let v be the this value.
  2. Return ? GetViewValue(v, byteOffset, true, "Int8").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  1. If Type(view) is not Object, throw a TypeError exception.
  ...
features: [Symbol]
---*/

var getInt8 = DataView.prototype.getInt8;

assert.throws(TypeError, function() {
  getInt8.call(undefined);
}, "undefined");

assert.throws(TypeError, function() {
  getInt8.call(null);
}, "null");

assert.throws(TypeError, function() {
  getInt8.call(1);
}, "1");

assert.throws(TypeError, function() {
  getInt8.call("string");
}, "string");

assert.throws(TypeError, function() {
  getInt8.call(true);
}, "true");

assert.throws(TypeError, function() {
  getInt8.call(false);
}, "false");

var s = Symbol("1");
assert.throws(TypeError, function() {
  getInt8.call(s);
}, "symbol");
