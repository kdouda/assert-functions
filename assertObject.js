const assertFunction = require('./assert');

module.exports = (val) => {
    assertFunction("object", val);
};