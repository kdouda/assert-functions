const assertNumber = require('../assertNumber');
const testGenerator = require('./testGenerator');

describe('Number', () => {
    testGenerator("number", assertNumber);
});