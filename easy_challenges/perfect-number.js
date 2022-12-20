let PerfectNumber = {
  classify(number) {
    if (number < 1) {
      throw new Error('Numbers less than one are not allowed.')
    }

    let divisors = this.getDivisors(number);
    let sum = divisors.reduce((acc, cv) => acc + cv);

    if (sum < number) {
      return 'deficient';
    }

    if (sum > number) {
      return 'abundant';
    }

    return 'perfect';
  },

  getDivisors(number) {
    let divisors = [];

    for (let i = 1; i < number; i += 1) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }

    return divisors;
  }
}

module.exports = PerfectNumber;