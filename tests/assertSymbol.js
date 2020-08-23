const assertSymbol = require('../assertSymbol');
const testGenerator = require('./testGenerator');

describe('Symbol', () => {
    testGenerator("symbol", assertSymbol);
});