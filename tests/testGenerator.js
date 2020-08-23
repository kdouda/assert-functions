const sample = require('./objectSample');
const assert = require('assert');

module.exports = (type, assertFunction) => {

    sample.getOfType(type).forEach(
        (value) => {
            it(`should not throw error if passed ${type}`, () => {
                assert.doesNotThrow(() => {
                    assertFunction(value)
                });
            });
        }
    );

    Object.entries(sample.getAllButType(type)).forEach(([testedType, values]) => {
        values.forEach((value) => {
            it(`should throw error if passed ${testedType}`, () => {
                assert.throws(() => {
                    assertFunction(value)
                });
            });
        });
    });
};