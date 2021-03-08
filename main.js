function isEvenlyDivisible(num1, num2) {
  if(num1 % num2 === 0){
    return true;
  } else return false;
  
  }


function halfSquare(num) {
  let value = 0;
  value = num ** 2 / 1/2;
  return value;
}

function isLong(str) {
  if(str.length >= 15) {
    return true;
  } else (str.length <15)
  return false;
}

function exclaim(str) {
  if (str.indexOf('!') === -1){
      return str += '!'
  }
  if (str.indexOf('!') === str.length -1){
      return str
  } else {
      return str.slice(0 ,str.indexOf('!')+1);
  }
}  
  


function countWords(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == " ") {
          count ++;
      }
  }
  return count + 1;
}


function containsDigit(str) {
  return /\d/.test(str);
}

function containsLowerCase(str) {
  return /[a-z]/.test(str);
 }

function containsUpperCase(str) {
  return /[A-Z]/.test(str);
}

function containsNonAlphanumeric(str) {
  return /[\W_]+/.test(str);
}

function containsSpace(str) {
  return /\s/.test(str);
}

function digits(num) {
  arr = []
  if (num < 0){
      num *= -1
  }
  str = num.toString()
  for (i = 0; i < str.length; i++){
      if (str[i] !== '.'){
          arr.push(str[i] * 1)
      }
  }
  return arr
}

function truncate(str) {
  newStr = "";
  if (str.length >= 15) {
      for (i = 0; i <= 7; i++) {
          newStr += str[i];
      }
      newStr;
      newStr += "...";
      return newStr;
  } else {
      return str;
  }
}


function isValidPassword(str) {
  if (
      containsUpperCase(str) === true &&
      containsLowerCase(str) === true &&
      containsDigit(str) === true &&
      containsNonAlphanumeric(str) === true &&
      containsSpace(str) === false
  ) {
      return true;
  } else {
      return false;
  }
}

function onlyPunchy(arr) {
  newArr = []
  for (title of arr){
      if (exclaim(title).length < 15){
          newArr.push(exclaim(title))
      }
  }
  return newArr
}



module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}