var file = Components.classes["@mozilla.org/file/directory_service;1"]
                     .getService(Components.interfaces.nsIProperties)
                     .get("ProfD", Components.interfaces.nsIFile);
file.append("my_db_file_name.sqlite");

var storageService = Components.classes["@mozilla.org/storage/service;1"]
                        .getService(Components.interfaces.mozIStorageService);
var mDBConn = storageService.openDatabase(file);


mDBConn.executeSimpleSQL("CREATE TABLE foo (a INTEGER)");

var statement = mDBConn.createStatement("SELECT * FROM foo WHERE a = ?1");


var statement = mDBConn.createStatement("SELECT * FROM foo WHERE a = ?1 AND b > ?2");
statement.bindUTF8StringParameter(0, "hello");
statement.bindInt32Parameter(1, 1234);


var statement = mDBConn.createStatement("SELECT * FROM foo WHERE a = ?1 AND b > :mysecondparam");

statement.bindUTF8StringParameter(0, "hello");
// you can also use
// var firstidx = statement.getParameterIndex("?1");
// statement.bindUTF8StringParameter(firstidx, "hello");

var secondidx = statement.getParameterIndex(":mysecondparam");
statement.bindInt32Parameter(secondidx, 1234);
