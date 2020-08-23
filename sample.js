const { assertNumber, AssertionError } = require('./index');

assertNumber(5);

try {
    assertNumber("6");
} catch (e) {
    if (e instanceof AssertionError) {
        console.log('assertion error!');
    }
}