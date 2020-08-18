const assertFunction = require('./assert');

module.exports = (val) => {
    if (val instanceof String) {
        return; // string objects are string!
    }
    
    assertFunction("string", val);
};