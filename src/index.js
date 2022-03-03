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
      let arr2 = [];
      let arr3 = [];
      let arr = expr
      .replace(/\*{10}/g, ' ,') // звёздочки заменяет их на пробел, после него ставится запятая
      .replace(/(\d{10})/g, '$1,') // строка раздляется запятыми на блоки по 10 цифр
      .split(',') // преобразование в массив
    
      for (let i = 0; i < arr.length; i++) {
        arr2[i] = (arr[i].replace(/^0+/, ''))
        
        arr3[i] = arr2[i].replace(/(\d{2})/g, (subchar) => {
          switch (subchar) {
            case '00': return '';
            case '10' : return '.';
            case '11' : return '-';
            default: return;
          }
        });
      }
      char = arr3.join(''); // перевод массива в строку
      result =  (arr3.map(char => MORSE_TABLE[char] || ' '). join(''));
      return result.trimEnd();
      }

module.exports = {
    decode
    
}