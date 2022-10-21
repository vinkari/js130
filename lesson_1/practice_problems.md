# filter function
```js
function filter(array, callback) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index]) === true) {
      result.push(array[index]);
    }
  }
  return result;
}

//test
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]
```

# map function
```js
function map(array, callback) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    result.push(callback(array[index]));
  }
  return result;
}

//test
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value))); // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
```

# reduce function
```js
function reduce(array, callback, initialValue) {
  let result = initialValue || array[0];

  if (!initialValue) {
    for (let index = 1; index < array.length; index++) {
      result = callback(result, array[index]);
    }
  } else {
    for (let index = 0; index < array.length; index++) {
      result = callback(result, array[index]);
    }
  }

  return result;
}

//test
let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, [])); // => ["Curly", "Larry", "Mo"]
```

# filter function using `reduce`
```js
function filter(array, callback) {
 return array.reduce((filteredArray, value) => {
  if (callback(value)) {
    filteredArray.push(value);
  }
  return filteredArray;
 }, []);
}

//test
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string")); // => [ 'abc', 'xyz' ]
```

# map function with `reduce`
```js
function map(array, callback) {
  return array.reduce((transformedArray, value) => {
    transformedArray.push(callback(value));
    return transformedArray;
  }, []);
}

//test
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value))); // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
```