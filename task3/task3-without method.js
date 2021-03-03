'use strict';

const num = 5956560159466056;
const divideAndSort = function(num) {
    if (num && typeof num !== 'number') {
        return 'Data harus bertipe number dan lebih dari 0';
    } else {
        const numStr = num.toString();

        let count = 0;
        const splitArr = [];
        splitArr[count] = '';

        let temp;
        let charArr = [];
        let finalResult = '';

        // separate num by 0
        for (let i = 0; i < numStr.length; i++) {
            if (numStr[i] !== '0') {
                splitArr[count] += numStr[i];
            } else {
                count++;
                splitArr[count] = '';
            }
        }

        for (let i = 0; i < splitArr.length; i++) {
            temp = splitArr[i];

            // split char
            for (let j = 0; j < temp.length; j++) {
                charArr[j] = temp[j];
            }

            // sorting
            for (let j = 0; j < charArr.length; j++) {
                for (let k = j + 1; k < charArr.length; k++) {
                    if (charArr[j] > charArr[k]) {
                        let temp2 = charArr[j];
                        charArr[j] = charArr[k];
                        charArr[k] = temp2;
                    }
                }
            }

            // concate
            for (let j = 0; j < charArr.length; j++) {
                finalResult += charArr[j];
            }
            charArr = [];
        }
        return finalResult;
    }
};
console.log(divideAndSort(5956560159466056));