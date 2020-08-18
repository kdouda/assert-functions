const assert = require('assert');
const assertNumber = require('../assertNumber');

describe('Number', () => {
    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertNumber(undefined)
        });
    });

    it('should throw error if passed function', () => {
        assert.throws(() => {
            assertNumber(() => {})
        });
    });

    it('should throw error if passed symbol', () => {
        assert.throws(() => {
            assertNumber(Symbol('test'))
        });
    });

    it('should throw error if passed string', () => {
        assert.throws(() => {
            assertNumber("")
        });
    });

    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertNumber(null)
        });
    });

    it('should not throw error if passed NaN', () => {
        assert.doesNotThrow(() => {
            assertNumber(NaN)
        });
    });

    it('should not throw error if passed number object', () => {
        assert.doesNotThrow(() => {
            assertNumber(new Number(1234))
        });
    });
    
    it('should not throw error if passed number', () => {
        assert.doesNotThrow(() => {
            assertNumber(165684)
        });
    });

    it('should not throw error if passed infinity', () => {
        assert.doesNotThrow(() => {
            assertNumber(Infinity)
        });
    });
});