let BeerSong = {
  bottleCount: 0,

  lyrics() {
    return this.verses(99, 0);
  },

  verse(number) {
    return this.getVerse(number);
  },

  verses(start, end) {
    let verse = '';

    for (let number = start; number >= end; number -= 1) {
      verse += this.getVerse(number) + ((number === end) ? '' : '\n');
    }

    return verse;
  },

  getVerse(number) {
    if (number === 0) {
      return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"
    };

    if (number === 1) {
      return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
    };

    if (number === 2) {
      return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
    };

    this.bottleCount = number;
    let verse = `${this.bottleCount} bottles of beer on the wall, ${this.bottleCount} bottles of beer.\n`;

    this.bottleCount -=1;
    verse += `Take one down and pass it around, ${this.bottleCount} bottles of beer on the wall.\n`;

    return verse;
  }
}

module.exports = BeerSong;