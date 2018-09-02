function intToRoman (num) {
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        if(num < 1)
            return "";       

        if(num >= decimals[i]) {
            return roman[i] + intToRoman(num - decimals[i]);        
        }
    }
}

 module.exports = intToRoman;