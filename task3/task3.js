'use strict';

const divideAndSort = function(num) {
    if (num && typeof num !== 'number') {
        return 'Data harus bertipe number dan lebih dari 0';
    } else {
        const result = [];

        const divArr = num.toString().split(0); // pisahkan berdasarkan 0
        // console.log(divArr);

        divArr.forEach(val => {
            const sorting = val.split('').sort();
            result.push(...sorting);
        });
        // console.log(result);

        return result.join('');
    }
};

console.log(divideAndSort(5956560159466056));