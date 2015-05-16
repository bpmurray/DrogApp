var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
        var elem = $("#logmsg");

        if (elem) {
           var html ="<ul data-role='listview' data-inset='true'";

           // Create connection
           var db = window.sqlitePlugin.openDatabase({name: "MeathGoldCoast.db",
                                                     location: 2,
                                                     createFromLocation: 1});

           elem.html("opened");
           // Select Data
           var sql="SELECT course.name AS cName, student.name AS sName \
                    from course, student \
                    WHERE student.course = course.id \
                    ORDER BY course.id, student.id";


           elem.html("before: " + html);
           db.transaction(function(tx) {
                     tx.executeSql(sql, [], function(tx, res) {
                        for (var iX=0; iX<res.rows.length; iX++) {
                           html += "<li>"
                                + res.rows.item(iX).cName
                                + "-"
                                + res.rows.item(iX).sName
                                + "</li>";
                        }
                     });
            });
            html += "</ul">
            $("#list").html(html);
            elem.html("after: " + html);
         }
      }
};
