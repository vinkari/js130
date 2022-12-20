class SumOfMultiples {
  static to(limit) {
    return new SumOfMultiples().to(limit);
  }

  constructor(...numberSet) {
    this.numberSet = numberSet.length === 0 ? [3, 5] : numberSet;
  }

  to(limit) {
    let multiples = [];

    this.numberSet.forEach(number => {
      multiples.push(...this.getMultiples(number, limit));
    });

    return this.removeDuplicates(multiples).reduce((acc, cv) => acc + cv, 0);
  }

  getMultiples(number, limit) {
    let multiples = [];

    for (let possibleMultiple = 1; possibleMultiple < limit; possibleMultiple += 1) {
      if (possibleMultiple % number === 0) {
        multiples.push(possibleMultiple);
      }
    }

    return multiples;
  }

  removeDuplicates(array) {
    let result = [];

    array.forEach((number) => {
      if (!result.includes(number)) {
        result.push(number);
      }
    });
  
    return result;
  }
}

module.exports = SumOfMultiples;