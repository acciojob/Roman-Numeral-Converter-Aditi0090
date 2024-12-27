function convertToRoman(num) {
    if (num === 0) return ''; // Special case for 0 as Roman numerals don't represent it

    const obj = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];

    let romanNumerals = '';

    for (let i = 0; i < obj.length; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            romanNumerals += symbol;
            num -= value;
        }
    }

    return romanNumerals;
}

// Test the function with multiple cases
console.log(convertToRoman(14));      // Output: XIV
console.log(convertToRoman(798));     // Output: DCCXCVIII
console.log(convertToRoman(36));      // Output: XXXVI
console.log(convertToRoman(0));       // Output: ''
console.log(convertToRoman(3999));    // Output: MMMCMXCIX
console.log(convertToRoman(100000));  // Output: (Not valid for traditional Roman numerals)

// do not edit below this line
module.exports = convertToRoman;
