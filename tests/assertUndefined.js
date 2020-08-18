const assert = require('assert');
const assertUndefined = require('../assertUndefined');

describe('Undefined', () => {
    it('should throw error if passed string', () => {
        assert.throws(() => {
            assertUndefined("")
        });
    });

    it('should throw error if passed null', () => {
        assert.throws(() => {
            assertUndefined(null)
        });
    });

    it('should throw error if passed number', () => {
        assert.throws(() => {
            assertUndefined(165684)
        });
    });

    it('should throw error if passed function', () => {
        assert.throws(() => {
            assertUndefined(() => {})
        });
    });

    it('should not throw error if passed undefined', () => {
        assert.doesNotThrow(() => {
            assertUndefined(undefined)
        });
    });
});

