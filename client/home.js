Template.home.helpers({
    testData: function() {
        return Session.get("testData");
    }
});

Template.home.rendered = function(){
    var loginData = {
        user: 'test',
        password: '123'
    };

    var ajaxSettings = {
        type: "POST",
        url: Router.routes.home.url() + "api/login",
        data: loginData
    };

    $.ajax(ajaxSettings)
        .then(function(loginData) {
            var ajaxHeaders = {
                "X-Auth-Token": loginData.authToken,
                "X-User-Id": loginData.userId
            };

            var ajaxSettings = {
                type: "GET",
                url: Router.routes.home.url() + "api/test"
            };

            return $.ajax(ajaxSettings);
        })
        .then(function(testData) {
            Session.set("testData", testData);
        });
};
