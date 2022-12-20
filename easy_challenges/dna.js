class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let distance = 0;

    let shorterStrand;
    let longerStrand;

    if (this.strand.length <= comparisonStrand.length) {
      [shorterStrand, longerStrand] = [this.strand, comparisonStrand];
    } else {
      [shorterStrand, longerStrand] = [comparisonStrand, this.strand];
    }

    for (let index = 0; index < shorterStrand.length; index += 1) {
      if (shorterStrand[index] !== longerStrand[index]) distance += 1;
    }

    return distance;
  }
}

module.exports = DNA;