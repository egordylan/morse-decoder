const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const dot = '10';
    const minus = '11';
    const space = ' ';
    let morseCodeMessage = '';
    let resultMessage = '';
    let words = expr.split('**********');
    words.map(word => {
        for (let i = 0; i < word.length; i += 10) {
            let letter = [];
            letter = word.slice(i, i + 10);
            for (let j = 0; j < letter.length - 1; j += 2) {
                if (letter[j] + letter[j+1] === dot) {
                    morseCodeMessage += '.';
                }
                if (letter[j] + letter[j+1] === minus) {
                    morseCodeMessage += '-';
                }
            }
            resultMessage += MORSE_TABLE[morseCodeMessage];
            morseCodeMessage = '';
            console.log(morseCodeMessage);
        }
        if (resultMessage.length > 1) {
            resultMessage += space;
        }
    });
    return resultMessage.trim();
}


// function encode(expr) {
//     let result = [];
//     let bin = '';
//     for (let i = 0; i < expr.length; i++) {
//         // console.log(expr[i]);
//         if (expr[i] === ' ') {
//             result.push('**********');
//         }
//         for (let key in MORSE_TABLE) {
//             if (expr[i] === MORSE_TABLE[key]) {
//                 // console.log(MORSE_TABLE[key]);
//                 result.push(key);
//             } 
//         }
//     }
//     // console.log(result);
//     for (let i = 0; i < result.length; i++) {
//         let element = '';
//         // console.log(result[i]);
//         for (let j = 0; j < result[i].length; j++) {
//             if (result[i][j] === '-') {
//                 element += '11';
//             } else if (result[i][j] === '.') {
//                 element += '10';
//             }
//             else if (result[i][j] === '*') {
//                 element += '*';
//             }
//         }
        
//         if (element.length < 10) {
//             while (element.length !== 10) {
//                 element = '0' + element;
//             }
//         }
//         bin += element;
//     }
// return bin;
// }
// console.log(decode('b27d0c5c'));
module.exports = {
    decode
}

