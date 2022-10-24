# 1
```js
function makeCounterLogger(number) {
  return function(secondNumber) {
    let firstNumber = number;
    if (firstNumber > secondNumber) {
      while (firstNumber >= secondNumber) {
        console.log(firstNumber);
        firstNumber -= 1;
      }
    } else {
      while (firstNumber <= secondNumber) {
        console.log(firstNumber);
        firstNumber += 1;
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
```

# 2
```js
function makeList() {
  let listArray = [];

  return function(item) {
    if (!item) {
      if (listArray.length === 0) {
        console.log('The list is empty.')
      }
      listArray.forEach(item => console.log(item));
    }

    if (listArray.includes(item)) {
      listArray.splice(listArray.indexOf(item), 1);
      console.log(`${item} removed!`);
    } else if (item) {
      listArray.push(item);
      console.log(`${item} added!`)
    }
  }
}

let list = makeList();
list();

list("make breakfast");
list("read book");
list();
list("make breakfast");
list();
```

# 3
```js
function makeList() {
  let listArray = [];

  return {
    list() {
      if (listArray.length === 0) {
        console.log('The list is empty.')
      }
      listArray.forEach(item => console.log(item));
    },

    add(item) {
      listArray.push(item);
      console.log(`${item} added!`)
    },

    remove(item) {
      listArray.splice(listArray.indexOf(item), 1);
      console.log(`${item} removed!`)
    }
  }
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
```