const assert = require('assert');
const assertObject = require('../assertObject');

describe('Object', () => {
    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertObject(undefined)
        });
    });

    it('should throw error if passed number', () => {
        assert.throws(() => {
            assertObject(165684)
        });
    });

    it('should throw error if passed function', () => {
        assert.throws(() => {
            assertObject(() => {})
        });
    });

    it('should throw error if passed symbol', () => {
        assert.throws(() => {
            assertObject(Symbol('test'))
        });
    });

    it('should throw error if passed string', () => {
        assert.throws(() => {
            assertObject("")
        });
    });

    it('should not throw error if passed string object', () => {
        assert.doesNotThrow(() => {
            assertObject(new String("test"))
        });
    });

    it('should not throw error if passed null', () => {
        assert.doesNotThrow(() => {
            assertObject(null)
        });
    });
});