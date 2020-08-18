const assertFunction = require('./assert');
const AssertionError = require('./assertionError');

module.exports = (val) => {
    if (val instanceof Number) {
        return;
    }

    if (isNaN(val)) {
        throw new AssertionError(
            "number",
            "NaN"
        );
    }
    
    assertFunction("number", val);
};