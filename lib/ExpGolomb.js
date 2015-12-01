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
    "encode":       ExpGolomb_encode, // ExpGolomb.encode(value:UINT32):BinaryString
    "decode":       ExpGolomb_decode, // ExpGolomb.decode(value:BinaryString):UINT32
    "repository":   "https://github.com/uupaa/ExpGolomb.js",
};

// --- implements ------------------------------------------
function ExpGolomb_encode(value) { // @arg UINT32
                                   // @ret BinaryString
    if (value === 0) { return "1"; }

    var bits = (value + 1).toString(2);

    return "0".repeat(bits.length - 1) + bits;
}

function ExpGolomb_decode(value) { // @arg BinaryString
                                   // @ret UINT32
    return parseInt(value, 2) - 1;
}

return ExpGolomb; // return entity

});

