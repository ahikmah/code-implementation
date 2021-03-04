'use strict';

const reverseWord = function(data) {
    if (typeof data !== 'string') {
        console.log('Data harus bertipe string');
    } else {
        let words = '';
        let strNew = [];
        let count = 0;

        // pisahkan data berdasarkan spasi
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== ' ') {
                words += data[i];
                if (i === data.length - 1) {
                    strNew[count] = words;
                }
            } else {
                strNew[count] = words;
                words = '';
                count++;
            }
        }

        // reverse word
        let reverse = '';
        for (let i = strNew.length - 1; i >= 0; i--) {
            reverse += strNew[i] + ' ';
        }
        console.log(reverse);
    }
};

reverseWord('Saya belajar Javascript');