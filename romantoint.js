const objRoman = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
};
function romanToInt(num) {

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


module.exports = romanToInt;