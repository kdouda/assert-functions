const assertArray = require('../assertArray');
const testGenerator = require('./testGenerator');

describe('Array', () => {
    testGenerator("array", assertArray);
});