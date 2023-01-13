class Diamond {
  static MAX_WIDTHS = {
    A: 1, B: 3, C: 5, D: 7, E: 9, F: 11, G: 13, H: 15, I: 17, J: 19, K: 21, L: 23, M: 25, N: 27, O: 29, P: 31, Q: 33, R: 35, S: 37, T: 39, U: 41, V: 43, W: 45, X: 47, Y: 49, Z: 51
  }

  static makeDiamond(letter) {
    if (letter === 'A') {
      return 'A\n';
    }

    let maxWidth = this.MAX_WIDTHS[letter];

    let diamond = this.diamondTop(maxWidth);
    diamond += this.middleLine(letter, maxWidth);
    diamond += this.diamondBottom(maxWidth);

    return diamond;
  }

  static diamondTop(maxWidth) {
    let result = this.makeLineA(maxWidth);

    for (let lineWidth = this.MAX_WIDTHS['B']; lineWidth < maxWidth; lineWidth += 2) {
      result += this.makeLine(lineWidth, maxWidth);
    }

    return result
  }

  static middleLine(letter, maxWidth) {
    return `${letter}${' '.repeat(maxWidth - 2)}${letter}\n`;
  }

  static diamondBottom(maxWidth) {
    let result = '';

    for (let lineWidth = maxWidth - 2; lineWidth > 1; lineWidth -= 2) {
      result += this.makeLine(lineWidth, maxWidth);
    }

    result += this.makeLineA(maxWidth);
    return result;
  }

  static makeLine(lineWidth, maxWidth) {
    let char = this.getChar(lineWidth);
    let spaceAroundChars = ' '.repeat((maxWidth - lineWidth) / 2);
    let spaceBetweenChars = ' '.repeat(lineWidth - 2);

    return `${spaceAroundChars}${char}${spaceBetweenChars}${char}${spaceAroundChars}\n`;
  }

  static makeLineA(maxWidth) {
    return `${' '.repeat((maxWidth - 1) / 2)}A${' '.repeat((maxWidth - 1) / 2)}\n`;
  }

  static getChar(lineWidth) {
    return Object.keys(this.MAX_WIDTHS).filter(char => this.MAX_WIDTHS[char] === lineWidth)[0];
  }
}

module.exports = Diamond;