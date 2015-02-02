Restivus.add('test', {
    get: {
        authRequired: true,
        action: function() {
            return {userID: this.userId, five: 5};
        }
    }
});