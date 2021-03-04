const data = 'Saya belajar Javascript';

const words = [];
let count = 0;
words[count] = '';

for (let i = 0; i < data.length; i++) {
    if (data[i] !== ' ') {
        words[count] += data[i];
    } else {
        count++;
        words[count] = '';
    }
}

// reverse word
let reverse = '';
for (let i = words.length - 1; i >= 0; i--) {
    reverse += words[i] + ' ';
}
console.log(reverse);