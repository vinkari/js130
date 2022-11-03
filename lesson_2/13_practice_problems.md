# 1
```js
function foo(bar, qux, baz) {
  return {
    bar: bar,
    baz: baz,
    qux: qux,
  };
}
```

# 2
```js
function foo() {
  return {
    bar: function bar() {
      console.log('bar');
    },
    qux: function(arg1) {
      console.log('qux');
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log('baz');
      console.log(arg1);
      console.log(arg2);
    },
  };
}
```

# 3
```js
function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(1, 2, 3);
let baz = obj.baz;
let qux = obj.qux;
let bar = obj.bar;
```

# 4
```js
function foo(array) {
  return [array[2], 5, array[0]];
}

let array = [1, 2, 3];
let result = foo(array)

let bar = result[0];
let qux = result[1];
let baz = result[2];
```

# 5
```js
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);
```

# 6
```js
function product() {
  let numbers = Object.values(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
```

# 7
```js
const { foo, ...rest } = {foo: 42, bar: 3.1415, qux: 'abc'};
console.log(foo);
console.log(rest);
```

# 8
```js
const obj = {
  first: 'I am the first',
  second: 'I am the second',
  third: [1, 2, 3],
  rest: {a: 'a', b: 'b'},
}

const first = obj.first;
const second = obj.second;
const rest = {third: obj.third, rest: obj.rest};
```

# 9
```js
function qux() {
  let animalType = 'cat';
  let age = 9;
  let colors = ['black', 'white'];

  return {
    type: animalType,
    age,
    colors
  };
}

let { type, age, colors } = qux();
console.log(type);
console.log(age);
console.log(colors);
```

# 10
```js
function foo(first, second, third, fourth, last) {
  return {
    first,
    middle: [second, third, fourth].sort(),
    last
  };
}

let array = ['string1', 'string2', 'string4', 'string3', 'string5'];
let { first, middle, last } = foo(...array);
```