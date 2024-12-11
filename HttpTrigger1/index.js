// Azure Function
const handler = async function (context, req) {
    context.res = {
        status: 200,
        body: "Hello, World!",
    };
};

// Export for Azure Function
module.exports = handler;

// Export for testing
const testHandler = async (req) => {
    const context = { res: {} };
    await handler(context, req);
    return context.res;
};

module.exports.testHandler = testHandler;
// Test auto trigger