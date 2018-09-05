module.exports.intToRoman = function intToRoman(num){
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const objRoman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (var i = 0; i < decimals.length; i++) {
    if(num < 1)
      return "";       

    if(num >= decimals[i]) {
      return objRoman[i] + intToRoman(num - decimals[i]);        
    }
  }
};


module.exports.romanToInt = function romanToInt(num) {
  const objRoman = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
  };
  var romanNumber = 0;
  for (var i = 0; i < num.length; i++) {
    if (objRoman[num[i]] < objRoman[num[i+1]]) {
      romanNumber -= objRoman[num[i]]; 
    } else {
      romanNumber += objRoman[num[i]];
    }
  }
  return romanNumber;
};


 