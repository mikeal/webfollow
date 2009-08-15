// ***** BEGIN LICENSE BLOCK *****// ***** BEGIN LICENSE BLOCK *****
// Version: MPL 1.1/GPL 2.0/LGPL 2.1
// 
// The contents of this file are subject to the Mozilla Public License Version
// 1.1 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
// 
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
// for the specific language governing rights and limitations under the
// License.
// 
// The Original Code is Mozilla Corporation Code.
// 
// The Initial Developer of the Original Code is
// Mikeal Rogers.
// Portions created by the Initial Developer are Copyright (C) 2008
// the Initial Developer. All Rights Reserved.
// 
// Contributor(s):
//  Mikeal Rogers <mikeal.rogers@gmail.com>
// 
// Alternatively, the contents of this file may be used under the terms of
// either the GNU General Public License Version 2 or later (the "GPL"), or
// the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
// in which case the provisions of the GPL or the LGPL are applicable instead
// of those above. If you wish to allow use of your version of this file only
// under the terms of either the GPL or the LGPL, and not to allow others to
// use your version of this file under the terms of the MPL, indicate your
// decision by deleting the provisions above and replace them with the notice
// and other provisions required by the GPL or the LGPL. If you do not delete
// the provisions above, a recipient may use your version of this file under
// the terms of any one of the MPL, the GPL or the LGPL.
// 
// ***** END LICENSE BLOCK *****

var EXPORTED_SYMBOLS = ['trim', 'vslice', 'startsWith', 'endsWith'];

function indexOf (array, v, offset) {
  for (i in array) {
    if (offset == undefined || i >= offset) {
      if ( !isNaN(i) && array[i] == v) {
        return new Number(i);
      }
    }
  }
  return -1;
}

function rindexOf (array, v) {
  var l = array.length;
  for (i in array) {
    if (!isNaN(i)) {
      var i = new Number(i)
    }
    if (!isNaN(i) && array[l - i] == v) {
      return l - i;
    }
  }
  return -1;
}

var trim = function (str) {
  return (str.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, ""));
}

var vslice = function (str, svalue, evalue) {
  var sindex = indexOf(str, svalue);
  var eindex = rindexOf(str, evalue);
  return str.slice(sindex + 1, eindex);
}

function startsWith(str, prefix, start, end) {
    if (arguments.length < 2) {
        throw new TypeError('startsWith() requires at least 2 arguments');
    }
        
    // check if start and end are null/undefined or a 'number'
    if ((start == null) || (isNaN(new Number(start)))) {
        start = 0;
    }
    if ((end == null) || (isNaN(new Number(end)))) {
        end = Number.MAX_VALUE;
    }
    
    // if it's an array
    if (typeof prefix == "object") {
        for (var i = 0, j = prefix.length; i < j; i++) {
            var res = _stringTailMatch(str, prefix[i], start, end, true);
            if (res) {
                return true;
            }
        }
        return false;
    }
    
    return _stringTailMatch(str, prefix, start, end, true);
}

/*
 endsWith(str, suffix[, start[, end]]) -> bool

 Return true if str ends with the specified suffix, false otherwise.
 With optional start, test str beginning at that position.
 With optional end, stop comparing str at that position.
 suffix can also be an array of strings to try.
*/
function endsWith(str, suffix, start, end) {
    if (arguments.length < 2) {
        throw new TypeError('endsWith() requires at least 2 arguments');
    }
    
    // check if start and end are null/undefined or a 'number'
    if ((start == null) || (isNaN(new Number(start)))) {
        start = 0;
    }
    if ((end == null) || (isNaN(new Number(end)))) {
        end = Number.MAX_VALUE;
    }
    
    // if it's an array
    if (typeof suffix == "object") {
        for (var i = 0, j = suffix.length; i < j; i++) {
            var res = _stringTailMatch(str, suffix[i], start, end, false);
            if (res) {
                return true;
            }
        }
        return false;
    }
    
    return _stringTailMatch(str, suffix, start, end, false);
}

/*
 Matches the end (direction == false) or start (direction == true) of str
 against substr, using the start and end arguments. Returns false
 if not found and true if found.
*/
function _stringTailMatch(str, substr, start, end, fromStart) {
    var len = str.length;
    var slen = substr.length;
    
    var indices = _adjustIndices(start, end, len);
    start = indices[0]; end = indices[1]; len = indices[2];
    
    if (fromStart) {
        if (start + slen > len) {
            return false;
        }
    } else {
        if (end - start < slen || start > len) {
            return false;
        }
        if (end - slen > start) {
            start = end - slen;
        }
    }
    
    if (end - start >= slen) {
        return str.substr(start, slen) == substr;
    }
    return false;
}

function _adjustIndices(start, end, len)
{
	if (end > len) {
	    end = len;
	} else if (end < 0) {
	    end += len;
	}
    
    if (end < 0) {
        end = 0;
    }
	if (start < 0) {
	    start += len;
	}
	if (start < 0) {
		start = 0;
	}

	return [start, end, len];
}
