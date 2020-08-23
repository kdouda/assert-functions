const assertBigInt = require('../assertBigInt');
const testGenerator = require('./testGenerator');

describe('BigInt', () => {
    testGenerator("bigint", assertBigInt);
});