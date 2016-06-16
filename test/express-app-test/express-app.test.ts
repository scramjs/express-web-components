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

            assert.equal(response2000.status, 200);
            assert.equal(response3000.status, 200);
            assert.equal(response4000.status, 200);
            assert.equal(response5000.status, 200);
            assert.equal(response6000.status, 200);

            done();
        });
    });
});
