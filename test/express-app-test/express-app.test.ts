const assert = require('chai').assert;
const axios = require('axios');

describe('express-app tests', function() {
    describe('Developer can set the port directly in the HTML to any available port.', function() {
        it('should receive correct responses for each request', async function(done) {
            const response2000 = await axios.create({
                baseURL: 'http://localhost:2000'
            }).get('/');

            const response3000 = await axios.create({
                baseURL: 'http://localhost:2000'
            }).get('/');

            const response4000 = await axios.create({
                baseURL: 'http://localhost:2000'
            }).get('/');

            const response5000 = await axios.create({
                baseURL: 'http://localhost:2000'
            }).get('/');

            const response6000 = await axios.create({
                baseURL: 'http://localhost:2000'
            }).get('/');

            const response7000 = await axios.create({
                baseURL: 'http://localhost:7000'
            }).get('/');

            const response8000 = await axios.create({
                baseURL: 'http://localhost:8000'
            }).get('/');

            const response9000 = await axios.create({
                baseURL: 'http://localhost:9000'
            }).get('/');

            const response10000 = await axios.create({
                baseURL: 'http://localhost:10000'
            }).get('/');

            assert.equal(response2000.status, 200);
            assert.equal(response3000.status, 200);
            assert.equal(response4000.status, 200);
            assert.equal(response5000.status, 200);
            assert.equal(response6000.status, 200);
            assert.equal(response7000.status, 200);
            assert.equal(response8000.status, 200);
            assert.equal(response9000.status, 200);
            assert.equal(response10000.status, 200);

            done();
        });
    });

    describe('The hostname is set', function() {
        it('should not throw an error when the hostname is passed in as a string literal to the HTML attribute', function() {});
        it('should not throw an error when the hostname is passed in through data binding', function() {});
    });

    describe('Bind a function to <express-app>`s callback property and the function runs after the app is initialized', function() {
        it('should set callbackTestWorked to true', function() {
            assert.equal(window.callbackTestWorked, true);
        });
    });
});
