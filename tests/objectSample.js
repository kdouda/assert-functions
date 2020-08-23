const fnGenerateSymbol = () => {
    const vals = [];
    return vals.map((x) => new Symbol(x));
};

const definitions = {
    "symbol": fnGenerateSymbol(),
    "object": [
        null,
        {},
        {"a": "b"}
    ],
    "array": [
        [],
        ["a", "b"],
        new Array(2)
    ],
    "undefined": [
        undefined
    ],
    "bigint": [
        BigInt(1234),
        1234n
    ],
    "boolean": [
        true,
        false,
        new Boolean(true),
        new Boolean()
    ],
    "function": [
        () => {},
        function () {},
        new Function()
    ],
    "number": [
        1,
        NaN,
        Infinity,
        Math.PI,
        new Number(123),
        -1,
        0,
        new Number()        
    ],
    "string": [
        "",
        "a",
        new String(),
        new String("")
    ],
    "null": [
        null
    ]
};

module.exports = {
    getOfType: (type) => {
        if (definitions[type]) {
            return definitions[type];
        }

        throw new Error(`Unable to get samples of type ${type}`);
    },
    getAllButType: (type) => {
        return Object.keys(definitions)
            .filter(key => type !== key)
            .reduce((obj, key) => {
                obj[key] = definitions[key];
                return obj;
        }, {});
    }
};