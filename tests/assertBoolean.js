const assertBoolean = require('../assertBoolean');
const testGenerator = require('./testGenerator');

describe('Boolean', () => {
    testGenerator("boolean", assertBoolean);
});