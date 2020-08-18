const assert = require('assert');
const assertSymbol = require('../assertSymbol');

describe('Symbol', () => {
    it('should throw error if passed string', () => {
        assert.throws(() => {
            assertSymbol("")
        });
    });

    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertSymbol(null)
        });
    });

    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertSymbol(undefined)
        });
    });

    it('should throw error if passed number', () => {
        assert.throws(() => {
            assertSymbol(165684)
        });
    });

    it('should throw error if passed function', () => {
        assert.throws(() => {
            assertSymbol(() => {})
        });
    });

    it('should not throw error if passed undefined', () => {
        assert.doesNotThrow(() => {
            assertSymbol(Symbol('test'))
        });
    });
});

