const assertFunction = require('./assert');

module.exports = (val) => {
    if (val instanceof Number) {
        return;
    }
    
    assertFunction("number", val);
};