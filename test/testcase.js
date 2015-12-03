var ModuleTestExpGolomb = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("ExpGolomb", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    }).add([
        // Generic test
        testExpGolomb_encode,
        testExpGolomb_decode,
        testExpGolomb_encodeSigned,
        testExpGolomb_decodeSigned,
    ]);

if (IN_BROWSER || IN_NW || IN_EL) {
    test.add([
        // Browser, NW.js and Electron test
    ]);
} else if (IN_WORKER) {
    test.add([
        // WebWorkers test
    ]);
} else if (IN_NODE) {
    test.add([
        // Node.js test
    ]);
}

// --- test cases ------------------------------------------
function testExpGolomb_encode(test, pass, miss) {
    var result = {
            "0": ExpGolomb.encode(0)     === "1",
            "1": ExpGolomb.encode(1)     === "010",
            "2": ExpGolomb.encode(2)     === "011",
            "3": ExpGolomb.encode(3)     === "00100",
            "4": ExpGolomb.encode(4)     === "00101",
            "5": ExpGolomb.encode(5)     === "00110",
            "6": ExpGolomb.encode(6)     === "00111",
            "7": ExpGolomb.encode(7)     === "0001000",
            "8": ExpGolomb.encode(8)     === "0001001",
           "14": ExpGolomb.encode(14)    === "0001111",
           "15": ExpGolomb.encode(15)    === "000010000",
           "16": ExpGolomb.encode(16)    === "000010001",
           "30": ExpGolomb.encode(30)    === "000011111",
           "31": ExpGolomb.encode(31)    === "00000100000",
           "32": ExpGolomb.encode(32)    === "00000100001",
           "62": ExpGolomb.encode(62)    === "00000111111",
           "63": ExpGolomb.encode(63)    === "0000001000000",
           "64": ExpGolomb.encode(64)    === "0000001000001",
          "126": ExpGolomb.encode(126)   === "0000001111111",
          "127": ExpGolomb.encode(127)   === "000000010000000",
          "128": ExpGolomb.encode(128)   === "000000010000001",
          "254": ExpGolomb.encode(254)   === "000000011111111",
          "255": ExpGolomb.encode(255)   === "00000000100000000",
          "256": ExpGolomb.encode(256)   === "00000000100000001",
          "510": ExpGolomb.encode(510)   === "00000000111111111",
          "511": ExpGolomb.encode(511)   === "0000000001000000000",
          "512": ExpGolomb.encode(512)   === "0000000001000000001",
         "1022": ExpGolomb.encode(1022)  === "0000000001111111111",
         "1023": ExpGolomb.encode(1023)  === "000000000010000000000",
         "1024": ExpGolomb.encode(1024)  === "000000000010000000001",
         "2046": ExpGolomb.encode(2046)  === "000000000011111111111",
         "2047": ExpGolomb.encode(2047)  === "00000000000100000000000",
         "2048": ExpGolomb.encode(2048)  === "00000000000100000000001",
         "4094": ExpGolomb.encode(4094)  === "00000000000111111111111",
         "4095": ExpGolomb.encode(4095)  === "0000000000001000000000000",
         "4096": ExpGolomb.encode(4096)  === "0000000000001000000000001",
         "8190": ExpGolomb.encode(8190)  === "0000000000001111111111111",
         "8191": ExpGolomb.encode(8191)  === "000000000000010000000000000",
         "8192": ExpGolomb.encode(8192)  === "000000000000010000000000001",
        "16382": ExpGolomb.encode(16382) === "000000000000011111111111111",
        "16383": ExpGolomb.encode(16383) === "00000000000000100000000000000",
        "16384": ExpGolomb.encode(16384) === "00000000000000100000000000001",
        "32766": ExpGolomb.encode(32766) === "00000000000000111111111111111",
        "32767": ExpGolomb.encode(32767) === "0000000000000001000000000000000",
        "32768": ExpGolomb.encode(32768) === "0000000000000001000000000000001",
        "65534": ExpGolomb.encode(65534) === "0000000000000001111111111111111",
        "65535": ExpGolomb.encode(65535) === "000000000000000010000000000000000",
        "65536": ExpGolomb.encode(65536) === "000000000000000010000000000000001",
       "131070": ExpGolomb.encode(131070)=== "000000000000000011111111111111111",
       "131071": ExpGolomb.encode(131071)=== "00000000000000000100000000000000000",
       "131072": ExpGolomb.encode(131072)=== "00000000000000000100000000000000001",
    };
    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testExpGolomb_decode(test, pass, miss) {
    var result = {
            "0": ExpGolomb.decode("1")                                   === 0,
            "1": ExpGolomb.decode("010")                                 === 1,
            "3": ExpGolomb.decode("00100")                               === 3,
            "4": ExpGolomb.decode("00101")                               === 4,
            "5": ExpGolomb.decode("00110")                               === 5,
            "6": ExpGolomb.decode("00111")                               === 6,
            "7": ExpGolomb.decode("0001000")                             === 7,
            "8": ExpGolomb.decode("0001001")                             === 8,
           "14": ExpGolomb.decode("0001111")                             === 14,
           "15": ExpGolomb.decode("000010000")                           === 15,
           "16": ExpGolomb.decode("000010001")                           === 16,
           "30": ExpGolomb.decode("000011111")                           === 30,
           "31": ExpGolomb.decode("00000100000")                         === 31,
           "32": ExpGolomb.decode("00000100001")                         === 32,
           "62": ExpGolomb.decode("00000111111")                         === 62,
           "63": ExpGolomb.decode("0000001000000")                       === 63,
           "64": ExpGolomb.decode("0000001000001")                       === 64,
          "126": ExpGolomb.decode("0000001111111")                       === 126,
          "127": ExpGolomb.decode("000000010000000")                     === 127,
          "128": ExpGolomb.decode("000000010000001")                     === 128,
          "254": ExpGolomb.decode("000000011111111")                     === 254,
          "255": ExpGolomb.decode("00000000100000000")                   === 255,
          "256": ExpGolomb.decode("00000000100000001")                   === 256,
          "510": ExpGolomb.decode("00000000111111111")                   === 510,
          "511": ExpGolomb.decode("0000000001000000000")                 === 511,
          "512": ExpGolomb.decode("0000000001000000001")                 === 512,
         "1022": ExpGolomb.decode("0000000001111111111")                 === 1022,
         "1023": ExpGolomb.decode("000000000010000000000")               === 1023,
         "1024": ExpGolomb.decode("000000000010000000001")               === 1024,
         "2046": ExpGolomb.decode("000000000011111111111")               === 2046,
         "2047": ExpGolomb.decode("00000000000100000000000")             === 2047,
         "2048": ExpGolomb.decode("00000000000100000000001")             === 2048,
         "4094": ExpGolomb.decode("00000000000111111111111")             === 4094,
         "4095": ExpGolomb.decode("0000000000001000000000000")           === 4095,
         "4096": ExpGolomb.decode("0000000000001000000000001")           === 4096,
         "8190": ExpGolomb.decode("0000000000001111111111111")           === 8190,
         "8191": ExpGolomb.decode("000000000000010000000000000")         === 8191,
         "8192": ExpGolomb.decode("000000000000010000000000001")         === 8192,
        "16382": ExpGolomb.decode("000000000000011111111111111")         === 16382,
        "16383": ExpGolomb.decode("00000000000000100000000000000")       === 16383,
        "16384": ExpGolomb.decode("00000000000000100000000000001")       === 16384,
        "32766": ExpGolomb.decode("00000000000000111111111111111")       === 32766,
        "32767": ExpGolomb.decode("0000000000000001000000000000000")     === 32767,
        "32768": ExpGolomb.decode("0000000000000001000000000000001")     === 32768,
        "65534": ExpGolomb.decode("0000000000000001111111111111111")     === 65534,
        "65535": ExpGolomb.decode("000000000000000010000000000000000")   === 65535,
        "65536": ExpGolomb.decode("000000000000000010000000000000001")   === 65536,
       "131070": ExpGolomb.decode("000000000000000011111111111111111")   === 131070,
       "131071": ExpGolomb.decode("00000000000000000100000000000000000") === 131071,
       "131072": ExpGolomb.decode("00000000000000000100000000000000001") === 131072,
    };
    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testExpGolomb_encodeSigned(test, pass, miss) {
    var signed = true;

    var result = {
            "0": ExpGolomb.encode(0, signed)  === "1",
            "1": ExpGolomb.encode( 1, signed) === "010",
           "-1": ExpGolomb.encode(-1, signed) === "011",
            "2": ExpGolomb.encode( 2, signed) === "00100",
           "-2": ExpGolomb.encode(-2, signed) === "00101",
            "3": ExpGolomb.encode( 3, signed) === "00110",
           "-3": ExpGolomb.encode(-3, signed) === "00111",
            "4": ExpGolomb.encode( 4, signed) === "0001000",
           "-4": ExpGolomb.encode(-4, signed) === "0001001",
            "5": ExpGolomb.encode( 5, signed) === "0001010",
           "-5": ExpGolomb.encode(-5, signed) === "0001011",
    };
    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testExpGolomb_decodeSigned(test, pass, miss) {
    var signed = true;

    var result = {
            "0": ExpGolomb.decode("1",   signed)     ===  0,
            "1": ExpGolomb.decode("010", signed)     ===  1,
           "-1": ExpGolomb.decode("011", signed)     === -1,
            "2": ExpGolomb.decode("00100", signed)   ===  2,
           "-2": ExpGolomb.decode("00101", signed)   === -2,
            "3": ExpGolomb.decode("00110", signed)   ===  3,
           "-3": ExpGolomb.decode("00111", signed)   === -3,
            "4": ExpGolomb.decode("0001000", signed) ===  4,
           "-4": ExpGolomb.decode("0001001", signed) === -4,
            "5": ExpGolomb.decode("0001010", signed) ===  5,
           "-5": ExpGolomb.decode("0001011", signed) === -5,
    };
    if ( /false/.test(JSON.stringify(result)) ) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

return test.run();

})(GLOBAL);

