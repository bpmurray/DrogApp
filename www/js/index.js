 var deviceReadyDeferred = $.Deferred();
 var jqmReadyDeferred = $.Deferred();
 var resourcesReady = false;


 var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        $.when(deviceReadyDeferred, jqmReadyDeferred).then(this.doWhenBothFrameworksReady);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        deviceReadyDeferred.resolve();
    },

    doWhenBothFrameworksReady: function()
    {
        resourcesReady = true;
    }
};

$(document).on("mobileinit", function () {
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.phonegapNavigationEnabled = true;
    jqmReadyDeferred.resolve();
 });



function PageShowFunction(e)
{
    // we are sure that both frameworks are ready here
}

function CallPageEvent(funcToCall,e)
{
    if(resourcesReady)
    {
        return funcToCall(e);
    }else
    {
        setTimeout(function() {
            CallPageEvent(funcToCall,e);
        }, 200);
    }
}


$(document).ready(function () {
});

app.initialize();

