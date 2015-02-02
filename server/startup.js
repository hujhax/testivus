Meteor.startup(function () {
    Restivus.configure({
        useAuth: true,
        apiPath: 'api',
        prettyJson: true
    });

    var TEST_USER_NAME = "test";
    var TEST_USER_PASSWORD = "123";

    if (Meteor.users.findOne({username: TEST_USER_NAME})) {
        return;
    }

    var testUserID = Accounts.createUser({username: TEST_USER_NAME, password: TEST_USER_PASSWORD});

});
