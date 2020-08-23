const assertUndefined = require('../assertUndefined');
const testGenerator = require('./testGenerator');

describe('Undefined', () => {
    testGenerator("undefined", assertUndefined);
});