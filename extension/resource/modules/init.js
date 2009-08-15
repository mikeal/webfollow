var EXPORTED_SYMBOLS = [];

Components.utils.import('resource://webfollow/stdlib/builtins.js');


var prefd = Components.classes["@mozilla.org/file/directory_service;1"]
                      .getService(Components.interfaces.nsIProperties);
prefd = prefd.get('PrefD', Components.interfaces.nsILocalFile);

prefd.append('extension');
prefd.append('wefollow-data')




// function showNotification(plugin, targetDoc, commandsUrl, mimetype) {
//   var Cc = Components.classes;
//   var Ci = Components.interfaces;
// 
//   // Find the <browser> which contains notifyWindow, by looking
//   // through all the open windows and all the <browsers> in each.
//   var wm = Cc["@mozilla.org/appshell/window-mediator;1"].
//            getService(Ci.nsIWindowMediator);
//   var enumerator = wm.getEnumerator(Utils.appWindowType);
//   var tabbrowser = null;
//   var foundBrowser = null;
// 
//   while (!foundBrowser && enumerator.hasMoreElements()) {
//     var win = enumerator.getNext();
//     tabbrowser = win.getBrowser();
//     foundBrowser = tabbrowser.getBrowserForDocument(targetDoc);
//   }
// 
//   // Return the notificationBox associated with the browser.
//   if (foundBrowser) {
//     var box = tabbrowser.getNotificationBox(foundBrowser);
//     var BOX_NAME = "ubiquity_notify_commands_available";
//     var oldNotification = box.getNotificationWithValue(BOX_NAME);
//     if (oldNotification)
//       box.removeNotification(oldNotification);
// 
//     function onSubscribeClick(notification, button) {
//       plugin.onSubscribeClick(targetDoc, commandsUrl, mimetype);
//     }
// 
//     var buttons = [
//       {accessKey: null,
//        callback: onSubscribeClick,
//        label: "Subscribe...",
//        popup: null}
//     ];
//     box.appendNotification(
//       ("This page contains Ubiquity commands.  " +
//        "If you'd like to subscribe to them, please " +
//        "click the button to the right."),
//       BOX_NAME,
//       "http://www.mozilla.com/favicon.ico",
//       box.PRIORITY_INFO_MEDIUM,
//       buttons
//     );
//   } else {
//     Components.utils.reportError("Couldn't find tab for document");
//   }
// }
// 
// 
// 
// function onLinkAdded(event) {
//   if (!(event.target.rel in self._plugins))
//     return;
// 
//   var pageUrl = event.target.baseURI;
//   var hashIndex = pageUrl.indexOf("#");
//   if (hashIndex != -1)
//     pageUrl = pageUrl.slice(0, hashIndex);
// 
//   onPageWithCommands(self._plugins[event.target.rel],
//                      pageUrl,
//                      event.target.href,
//                      event.target.ownerDocument,
//                      event.target.type);
// }
// 
// window.addEventListener("DOMLinkAdded", onLinkAdded, false);