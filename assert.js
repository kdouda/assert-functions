const AssertionError = require('./assertionError');

module.exports = (expectedType, actualValue) => {
    const actualType = typeof(actualValue);
    if (actualType !== expectedType) {
        throw new AssertionError(
            expectedType,
            actualType
        );
    }
};