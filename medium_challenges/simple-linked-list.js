class SimpleLinkedList {
  static fromArray(array) {
    let list = new SimpleLinkedList();

    if (!array) return list;

    array.slice().reverse().forEach(element => list.push(element));
    return list;
  }

  constructor() {
    this.listHead = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    this.listHead = new Element(datum, this.head());
    this.listSize += 1;
  }

  peek() {
    return (this.head()) ? this.head().datum() : null;
  }

  head() {
    return this.listHead;
  }

  pop() {
    let head = this.head();
    let datum = head.datum();

    this.listHead = head.next();
    this.listSize -= 1;

    return datum;
  }

  toArray() {
    let array = [];
    let currentElement = this.head();

    if (!currentElement) return array;

    while(true) {
      array.push(currentElement.datum());

      if (!currentElement.next()) {
        break;
      } else {
        currentElement = currentElement.next();
      }
    }

    return array;
  }

  reverse() {
    let reversedArray = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reversedArray);
  }
}

class Element {
  constructor(datum, nextElement = null) {
    this.data = datum;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }
}

module.exports = { SimpleLinkedList, Element };