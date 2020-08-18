const assertFunction = require('./assert');

module.exports = (val) => {
    assertFunction("function", val);
};