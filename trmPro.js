function option() {
  let input = document.getElementById("input");
  let option = document.getElementById("options");
  let result = document.getElementById("result");

  if (option.value == "bintodec") {
    if (isBinary(input.value)) {
      result.innerText = binaryToDecimal(input.value);
    } else {
      result.innerText = "Enter a binary value please.";
    }
  } else if (option.value == "bintooct") {
    if (isBinary(input.value)) {
      result.innerText = binaryToOcta(input.value);
    } else {
      result.innerText = "Enter a binary value please.";
    }
  } else if (option.value == "bintohex") {
    if (isBinary(input.value)) {
      result.innerText = binaryToHexa(input.value);
    } else {
      result.innerText = "Enter a binary value please.";
    } /* =================================== */
  } else if (option.value == "dectobin") {
    if (!isNaN(input.value)) {
      result.innerText = decimalToBinary(input.value);
    } else {
      result.innerText = "Enter a decimal value please.";
    }
  } else if (option.value == "dectooct") {
    if (!isNaN(input.value)) {
      result.innerText = decimalToOcta(input.value);
    } else {
      result.innerText = "Enter a decimal value please.";
    }
  } else if (option.value == "dectohex") {
    if (!isNaN(input.value)) {
      result.innerText = decimalToHexa(input.value);
    } else {
      result.innerText = "Enter a decimal value please.";
    } /* =================================== */
  } else if (option.value == "octtobin") {
    if (isOctal(input.value)) {
      result.innerText = octalToBinary(input.value);
    } else {
      result.innerText = "Enter an octal value please.";
    }
  } else if (option.value == "octtodec") {
    if (isOctal(input.value)) {
      result.innerText = octalToDecimal(input.value);
    } else {
      result.innerText = "Enter an octal value please.";
    }
  } else if (option.value == "octtohex") {
    if (isOctal(input.value)) {
      result.innerText = octalToHexa(input.value);
    } else {
      result.innerText = "Enter a hexadecimal value please.";
    } /* =================================== */
  } else if (option.value == "hextobin") {
    if (isHexa(input.value)) {
      result.innerText = hexaToBinary(input.value);
    } else {
      result.innerText = "Enter a hexadecimal  value please.";
    }
  } else if (option.value == "hextodec") {
    if (isHexa(input.value)) {
      result.innerText = hexaToDecimal(input.value);
    } else {
      result.innerText = "Enter a hexadecimal  value please.";
    }
  } else if (option.value == "hextooct") {
    if (isHexa(input.value)) {
      result.innerText = hexaToOcta(input.value);
    } else {
      result.innerText = "Enter an octal value please.";
    } /* =================================== */
  }
}
//////      BINARY TO #######     //////
// /////////////////////////////////////
let binaryToDecimal = (numIn) => {
  let numOut = parseInt(numIn, 2);
  return numOut;
};

let binaryToOcta = (numIn) => {
  let numOut = parseInt(numIn, 2).toString(8);
  return numOut;
};

let binaryToHexa = (numIn) => {
  let numOut = parseInt(numIn, 2).toString(16).toUpperCase();
  return numOut;
};
// /////////////////////////////////////

//////      DECIMAL TO #######     //////
// /////////////////////////////////////
let decimalToBinary = (numIn) => {
  let numOut = parseInt(numIn, 10).toString(2);
  return numOut;
  //   let result = "";

  //   while (numIn > 0) {
  //     result += numIn % 2;
  //     numIn = Math.floor(numIn / 2);
  //   }

  //   // return result.split("").reverse().join("");
  //   return result;
};

let decimalToOcta = (numIn) => {
  let number = decimalToBinary(numIn);
  let numOut = binaryToOcta(number);
  return numOut;
};

let decimalToHexa = (numIn) => {
  let number = decimalToBinary(numIn);
  let numOut = binaryToHexa(number);
  return numOut;
};
// /////////////////////////////////////

//////      OCTA TO #######     //////
// /////////////////////////////////////
let octalToBinary = (numIn) => {
  let numOut = parseInt(numIn, 8).toString(2);
  return numOut;
  //   let numOut = "";
  //   for (let i = 0; i < numIn.length; i++) {
  //     if (numIn[i] == "0") {
  //       numOut += "000";
  //     } else if (numIn[i] == "1") {
  //       numOut += "001";
  //     } else if (numIn[i] == "2") {
  //       numOut += "010";
  //     } else if (numIn[i] == "3") {
  //       numOut += "011";
  //     } else if (numIn[i] == "4") {
  //       numOut += "100";
  //     } else if (numIn[i] == "5") {
  //       numOut += "101";
  //     } else if (numIn[i] == "6") {
  //       numOut += "110";
  //     } else if (numIn[i] == "7") {
  //       numOut += "111";
  //     }
  //   }
  //   return numOut;
};
let octalToDecimal = (numIn) => {
  let number = octalToBinary(numIn);
  let numOut = binaryToDecimal(number);
  return numOut;
};

let octalToHexa = (numIn) => {
  let number = octalToBinary(numIn);
  let numOut = binaryToHexa(number);
  return numOut;
};
// /////////////////////////////////////

//////      HEXEDECIMAL TO #######     //////
// /////////////////////////////////////
let hexaToBinary = (numIn) => {
  let numOut = parseInt(numIn, 16).toString(2);
  return numOut;
};

let hexaToDecimal = (numIn) => {
  let number = hexaToBinary(numIn);
  let numOut = binaryToDecimal(number);
  return numOut;
};

let hexaToOcta = (numIn) => {
  let number = hexaToBinary(numIn);
  let numOut = binaryToOcta(number);
  return numOut;
};
// /////////////////////////////////////

////    Function to check if the input is binary      ////
let isBinary = (stringNumber) => {
  let is_binary;
  for (let i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] == "1" || stringNumber[i] == "0") {
      is_binary = true;
    } else {
      is_binary = false;
      break;
    }
  }
  return is_binary;
};
// /////////////////////////////////////

////    Function to check if the input is octa      ////
let isOctal = (stringNumber) => {
  let is_octa;
  for (let i = 0; i < stringNumber.length; i++) {
    if (
      stringNumber[i] == "1" ||
      stringNumber[i] == "0" ||
      stringNumber[i] == "2" ||
      stringNumber[i] == "3" ||
      stringNumber[i] == "4" ||
      stringNumber[i] == "5" ||
      stringNumber[i] == "6" ||
      stringNumber[i] == "7"
    ) {
      is_octa = true;
    } else {
      is_octa = false;
      break;
    }
  }
  return is_octa;
};
// /////////////////////////////////////

////    Function to check if the input is octa      ////
let isHexa = (stringNumber) => {
  stringNumber = stringNumber.toUpperCase();
  let is_hexa;
  for (let i = 0; i < stringNumber.length; i++) {
    if (
      stringNumber[i] == "0" ||
      stringNumber[i] == "1" ||
      stringNumber[i] == "2" ||
      stringNumber[i] == "3" ||
      stringNumber[i] == "4" ||
      stringNumber[i] == "5" ||
      stringNumber[i] == "6" ||
      stringNumber[i] == "7" ||
      stringNumber[i] == "8" ||
      stringNumber[i] == "9" ||
      stringNumber[i] == "A" ||
      stringNumber[i] == "B" ||
      stringNumber[i] == "C" ||
      stringNumber[i] == "D" ||
      stringNumber[i] == "E" ||
      stringNumber[i] == "F"
    ) {
      is_hexa = true;
    } else {
      is_hexa = false;
      break;
    }
  }
  return is_hexa;
};

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
registerSW();
