describe('running tests', function() {
    it('should run the tests', function(done) {
        System.import('express-app-test/express-app.test.ts').then(() => {
            done();
        });
    });
});
