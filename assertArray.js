const AssertionError = require('./assertionError');

module.exports = (val) => {
    if (!Array.isArray(val)) {
        throw new AssertionError("array", typeof(val));
    }
};