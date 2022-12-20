class RomanNumeral {
  static numberKey = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  constructor(number) {
    this.number = number;
  }

  digitSplitter() {
    let resultArray = [];
    let numberString = String(this.number);
  
    for (let index = 0; index < numberString.length; index += 1) {
      if (numberString[index] !== '0') {
        resultArray.push(Number(numberString[index]) * 10 ** (numberString.length - index - 1));
      }
    }
  
    return resultArray;
  }

  converter(number) {
    for (let prop in RomanNumeral.numberKey) {
      if (prop === String(number)) {
        return RomanNumeral.numberKey[prop];
      }
    }

    let result;
    let givenNumbers = Object.keys(RomanNumeral.numberKey).map(number => Number(number));
    let closestNumber;
    
    givenNumbers.forEach(value => {
      if (value < number) {
        closestNumber = value;
      }
    });

    result = RomanNumeral.numberKey[closestNumber];

    let remainder = number - closestNumber;
    let tenthPower = 10 ** (String(number).length - 1);
    let multiplier = remainder / tenthPower;

    result += RomanNumeral.numberKey[tenthPower].repeat(multiplier);

    return result;
  }

  toRoman() {
    let result = '';
    let numberArray = this.digitSplitter();

    numberArray.forEach(number => result += this.converter(number));
    
    return result;
  }
}

module.exports = RomanNumeral;