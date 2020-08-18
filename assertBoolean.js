const assertFunction = require('./assert');

module.exports = (val) => {
    assertFunction("boolean", val);
};