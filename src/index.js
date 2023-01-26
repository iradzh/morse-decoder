const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let index = 0; index < expr.length; index += 10) {
    let strOfTen = expr.slice(index, index + 10);
    result += toCharachter(strOfTen);
  }
  return result;
}

function toCharachter(strOfTen) {
  let newStr = "";
  if (strOfTen == "**********") {
    return " ";
  }
  for (let index = strOfTen.length; index > 0; index -= 2) {
    let strOfTwo = strOfTen.slice(index - 2, index);
    if (strOfTwo == "10") {
      newStr = "." + newStr;
    } else if (strOfTwo == "11") {
      newStr = "-" + newStr;
    }
  }
  return MORSE_TABLE[newStr];
}

module.exports = {
  decode,
};
