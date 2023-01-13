class CustomSet {
  constructor(array = []) {
    this.array = array;
  }

  isEmpty() {
    return this.array.length === 0;
  }

  contains(element) {
    return this.array.includes(element);
  }

  isSubset(set) {
    for (let index = 0; index < this.array.length; index += 1) {
      if (!set.contains(this.array[index])) return false;
    }

    return true;
  }

  isDisjoint(set) {
    for (let index = 0; index < this.array.length; index += 1) {
      if (set.contains(this.array[index])) return false;
    }

    return true;
  }

  isSame(set) {
    for (let index = 0; index < this.array.length; index += 1) {
      if (!set.contains(this.array[index])) return false;
    }

    return this.array.length === set.array.length;
  }

  add(element) {
    if (!this.contains(element)) this.array.push(element);
    return this;
  }

  intersection(set) {
    let array = [];

    this.array.forEach(element => {
      if (set.contains(element)) array.push(element);
    })

    return new CustomSet(array);
  }

  difference(set) {
    let array = [];

    this.array.forEach(element => {
      if (!set.contains(element)) array.push(element);
    })

    return new CustomSet(array);
  }

  union(set) {
    let array = [];

    this.array.forEach(element => {
      if (!array.includes(element)) array.push(element);
    });

    set.array.forEach(element => {
      if (!array.includes(element)) array.push(element);
    });

    return new CustomSet(array);
  }
}

module.exports = CustomSet;