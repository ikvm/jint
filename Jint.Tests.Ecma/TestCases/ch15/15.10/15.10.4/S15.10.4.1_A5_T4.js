// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If F contains any character other than 'g', 'i', or 'm', or if it contains the same one more than once, then throw a SyntaxError exception
 *
 * @path ch15/15.10/15.10.4/S15.10.4.1_A5_T4.js
 * @description Checking if using "z" as F leads to throwing the correct exception
 */

//CHECK#1
try {
	$ERROR('#1.1: new RegExp("a|b","z") throw SyntaxError. Actual: ' + (new RegExp("a|b","z")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("a|b","z") throw SyntaxError. Actual: ' + (e));
	}
}


