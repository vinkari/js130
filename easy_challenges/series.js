class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(length) {
    if (length > this.numString.length) {
      throw new Error('Length cannot be greater than the length of the digit string.')
    }

    return this.allSlices().filter(slice => slice.length === length).map(slice => {
      let array = [];
      for (let i = 0; i < slice.length; i += 1) {
        array.push(Number(slice[i]))
      }
      return array;
    });
  }

  allSlices() {
    let numString = this.numString;
    let slices = [];

    for (let length = 1; length <= numString.length; length += 1) {
      for (let index = 0; index < numString.length; index += 1) {
        let slice = numString.slice(index, index + length);
        if (slice.length === length) {
          slices.push(slice);
        }
      }
    }

    return slices;
  }
}

module.exports = Series;