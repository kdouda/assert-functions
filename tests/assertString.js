const assertString = require('../assertString');
const testGenerator = require('./testGenerator');

describe('String', () => {
    testGenerator("string", assertString);
});