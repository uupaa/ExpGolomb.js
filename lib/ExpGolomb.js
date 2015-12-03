(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("ExpGolomb", function moduleClosure(/* global */) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var ExpGolomb = {
    "encode":       ExpGolomb_encode, // ExpGolomb.encode(value:UINT32|INT32, signed:Boolean = false):BinaryString
    "decode":       ExpGolomb_decode, // ExpGolomb.decode(value:BinaryString, signed:Boolean = false):UINT32|INT32
    "repository":   "https://github.com/uupaa/ExpGolomb.js",
};

// --- implements ------------------------------------------
function ExpGolomb_encode(value,    // @arg UINT32|INT32
                          signed) { // @arg Boolean = false
                                    // @ret BinaryString
    if (value === 0) { return "1"; }

    // | Bits          | unsigned | signed |
    // |---------------|----------|--------|
    // |             1 |        0 |      0 |
    // |           010 |        1 |      1 |
    // |           011 |        2 |     -1 |
    // |         00100 |        3 |      2 |
    // |         00101 |        4 |     -2 |
    // |         00110 |        5 |      3 |
    // |         00111 |        6 |     -3 |
    // |       0001000 |        7 |      4 |
    // |       0001001 |        8 |     -4 |
    // |       0001010 |        9 |      5 |
    // |       0001011 |       10 |     -5 |
    // |       0001100 |       11 |      6 |

    if (signed) {
        if (value < 0) {
            value = -(value * 2); // negative
        } else {
            value = value * 2 - 1; // positive
        }
    }
    var bits = (value + 1).toString(2);

    return "0".repeat(bits.length - 1) + bits;
}

function ExpGolomb_decode(value,    // @arg BinaryString
                          signed) { // @arg Boolean = false
                                    // @ret UINT32|INT32
    if (value === "1") { return 0; }

    var result = parseInt(value, 2) - 1;

    if (signed) {
        var hasSignedBit = value[value.length - 1] === "1";

        if (hasSignedBit) {
            result = -(result / 2);
        } else {
            result = (result + 1) / 2;
        }
        return result;
    }
    return result;
}

return ExpGolomb; // return entity

});

