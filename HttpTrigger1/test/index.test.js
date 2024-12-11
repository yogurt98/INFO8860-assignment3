const { testHandler } = require('../index.js');

describe('Azure Function Tests', () => {
    it('should return 200 status code and "Hello, World!"', async () => {
        // Mock request object
        const req = { method: 'GET' };

        // Invoke the test handler
        const response = await testHandler(req);

        // Validate response
        expect(response.status).toBe(200);
        expect(response.body).toBe('Hello, World!');
    });
});
