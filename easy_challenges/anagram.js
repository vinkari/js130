class Anagram {
  constructor(givenWord) {
    this.givenWord = givenWord;
  }

  match(array) {
    let anagrams = [];
    let sortedGivenWord = this.sortedWord(this.givenWord);
    let capitalsInGivenWord = this.capitalCount(this.givenWord);

    array.forEach(word => {
      let sortedWord = this.sortedWord(word);
      let capitalsInWord = this.capitalCount(word);

      if (sortedWord === sortedGivenWord && capitalsInWord === capitalsInGivenWord && word !== this.givenWord) {
        anagrams.push(word);
      }
    });

    return anagrams;
  }

  sortedWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  capitalCount(word) {
    let count = 0;

    for (let i = 0; i < word.length; i += 1) {
      if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(word[i])) {
        count += 1;
      }
    }

    return count;
  }
}

module.exports = Anagram;