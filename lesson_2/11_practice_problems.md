# 1
The code will not execute without throwing an error. Functions defined as a function declaration require a name for the function; they can never be anonymous. Since a name is not provided for the function, Javascript raises an error: `SyntaxError: Function statements require a function name`.
However, even if a name was provided, Javascript will raise the following error: `SyntaxError: Unexpected token ')'`. This is because function declarations cannot be immediately invoked, they must be converted to an expression first.

# 2
```js
(function() {
  console.log('Sometimes, syntax isn\'t intuitive');
})()
```

# 3
This code does not work because the name `sum` is used to declare both a variable and a function. On line 14, Javascript throws an error when we try to invoke `sum` since the name `sum` was already used to declare a variable initialized to a primitve value on line 1. Hence we see the error, `TypeError: sum is not a function`.
The fixed code:
```js
var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0)
})(numbers);
```

# 4
```js
(function() {
  for (let i = 7; i >= 0; i -= 1) {
    console.log(i);
  }
})();
```

# 5
The named function is not accessible in the global scope since it was defined as a function expression. The function name is only accessible within the function itself.

# 6
```js
let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);
```

# 7
```js
(function counter(number) {
  console.log(number);

  if (number !== 0) {
    counter(number - 1);
  }
})(7);
```