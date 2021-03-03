"use strict";

const data = "Saya belajar Javascript";
if (typeof data !== "string") {
    console.log("Data harus bertipe string");
} else {
    let words = "";
    let strNew = [];
    let count = 0;

    // pisahkan data berdasarkan spasi
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== " ") {
            words += data[i];
        } else {
            words = "";
            count++;
        }
        strNew[count] = words;
    }

    // reverse word
    let reverse = "";
    for (let i = strNew.length - 1; i >= 0; i--) {
        reverse += strNew[i] + " ";
    }
    console.log(reverse);
}