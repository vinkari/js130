class Triangle {
  constructor(side1, side2, side3) {
    if (this.isValidTriangle(side1, side2, side3)) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    } else {
      throw new Error('Invalid measurements');
    }
  }

  isValidTriangle(side1, side2, side3) {
    if (side1 === 0 || side2 === 0 || side3 === 0) return false;

    let sortedSides = [side1, side2, side3].sort((a, b) => (a - b));
    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) return false;

    return true;
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) return 'equilateral';
    
    if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) return 'scalene';

    return 'isosceles';
  }
}

module.exports = Triangle;