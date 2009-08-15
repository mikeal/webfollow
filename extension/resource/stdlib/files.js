var EXPORTED_SYMBOLS = ['File'];

Components.utils.import('resource://webfollow/stdlib/builtins.js');

var strings = importResource('strings');

var nsILocalFile = Components.classes["@mozilla.org/file/local;1"]
                             .createInstance(Components.interfaces.nsILocalFile);

var File = function (obj) {
  if (typeof(obj) == 'string') {
    if ( strings.startsWith(obj, 'file://') ) {
      // Do File URL
    } else if ( strings.startsWith('/') ) {
      // Do slash
    } 
  } else if ( typeof(obj) == 'object' ) {
      if (obj instanceof Components.interfaces.nsILocalFile ) {
        // do file
      }
  }
}


