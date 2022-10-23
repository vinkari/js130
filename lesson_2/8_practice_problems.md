# 1
1, 2, 3, 4

# 2
1, 1, 1, 1

# 3
1, 2, 1, 2

# 4
1, 2, 1, 2

# 5
```js
function makeMultipleLister(number) {
  let maxMultiple = 100;
  
  return function() {
    let multiplier = 1;
    let multiple = number * multiplier;
    while(multiple < maxMultiple) {
      console.log(multiple);
      multiplier += 1;
      multiple = number * multiplier;
    }
  }
}

let lister = makeMultipleLister(17);
lister();
```

# 6
```js
let total = 0;

function add(number) {
  console.log(total += number);
}

function subtract(number) {
  console.log(total -= number);
}
```

# 7
The code logs `150`.
The `foo` function is defined with the parameter `start`. In its body, it defines the `prod` variable to which it assigns the value of `start`. It then returns an annonymous function which has the parameter `factor`. The anonymous function reassigns `prod` to the product of `prod` and `factor` and returns `prod`. Closure ensures that the function returned by `foo` is in an "envolope" that has a pointer to `prod`.
On line 9, `bar` is defined and initialized to the return value of `foo(2)`. The value of `prod` is set to `2`. When `bar` is invoked with the argument of `3`, `prod` is reassigned to `6` (`3 * 2`); this gets assigned to `result`. When `bar` is invoked with `4`, it still references the same `prod` variable and reassigns `prod` to `24` (`6 * 4`). This value is added to `result` and reassigned to `result` (24 + 6 = 30). This is repeated in the following line with `bar(5)`, and `result` is reassigned to: `30 + (24 * 5)` = 150.

# 8
```js
const logger = message => console.log(message);

function later(func, arg) {
  return function() {
    func(arg);
  }
}

let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
```

# 9
```js
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

function later2(func, arg) {
  return function(time) {
    return func(arg, time);
  }
}

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!
```

# 10
```js
let obj = {};

function bind(context, func) {
  return function() {
    func.call(context);
  }
}

let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }
```