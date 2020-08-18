const assert = require('assert');
const assertString = require('../assertString');

describe('String', () => {
    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertString(null)
        });
    });

    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertString(undefined)
        });
    });

    it('should throw error if passed number', () => {
        assert.throws(() => {
            assertString(165684)
        });
    });

    it('should throw error if passed function', () => {
        assert.throws(() => {
            assertString(() => {})
        });
    });

    it('should throw error if passed symbol', () => {
        assert.throws(() => {
            assertString(Symbol('test'))
        });
    });

    it('should not throw error if passed string', () => {
        assert.doesNotThrow(() => {
            assertString("")
        });
    });

    it('should not throw error if passed string object', () => {
        assert.doesNotThrow(() => {
            assertString(new String("test"))
        });
    });
});