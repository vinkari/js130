class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    let number = this.number;
    let decimal = 0;
    let power = number.length - 1;

    if (this.isInvalid()) {
      return decimal;
    }

    for (let i = 0; i < number.length; i += 1) {
      decimal += Number(number[i]) * 8 ** power;
      power -= 1;
    }

    return decimal;
  }

  isInvalid() {
    return this.number.match(/[^0-7]/);
  }
}

module.exports = Octal;