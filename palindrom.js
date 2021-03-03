"use strict";
const data = "malam";

if (typeof data !== "string") {
    console.log("Data harus bertipe string");
} else {
    let palindrom = true;
    const len = data.length;

    for (let i = 0; i < len; i++) {
        if (data[i] !== data[len - i - 1]) {
            palindrom = false;
        }
    }

    console.log(
        palindrom ? `${data} merupakan Palindrom` : `${data} bukan Palindrom`
    );
}