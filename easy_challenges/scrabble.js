class Scrabble {
  static letterValues = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  }

  static score(word) {
    let obj = new Scrabble(word);
    return obj.score();
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    let result = 0;

    if (typeof this.word !== 'string') {
      return result;
    };

    let word = this.word.toUpperCase();

    [].forEach.call(word, letter => {
      for (let prop in Scrabble.letterValues) {
        if (Scrabble.letterValues[prop].includes(letter)) {
          result += Number(prop);
        }
      }
    });

    return result;
  }
}

module.exports = Scrabble;