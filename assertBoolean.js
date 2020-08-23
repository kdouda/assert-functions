const assertFunction = require('./assert');

module.exports = (val) => {
    if (val instanceof Boolean) {
        return;
    }

    assertFunction("boolean", val);
};