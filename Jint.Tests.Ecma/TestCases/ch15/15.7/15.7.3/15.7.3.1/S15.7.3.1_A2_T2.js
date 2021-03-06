// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * Number.prototype is itself Number object
 *
 * @path ch15/15.7/15.7.3/15.7.3.1/S15.7.3.1_A2_T2.js
 * @description Checking type of Number.prototype property - test based on
 * overwriting of Number.prototype.toString
 */

//CHECK#1
if (typeof Number.prototype !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

Number.prototype.toString = Object.prototype.toString;

if (Number.prototype.toString() !== "[object Number]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Number"');
}

