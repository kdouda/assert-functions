module.exports = class AssertionError extends Error {
    constructor (expected, actual) {
        super(
            `AssertionError, expected ${expected}, got ${actual}`
        )
    }
}