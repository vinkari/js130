# 1
The code will log `Bye`. In the code snippet we have a `var` variable declaration and a function declaration with the same identifier, `foo`. Due to this, in the creation phase, the `var` declaration gets discarded.
So the code in the execution phase functionally looks like:
```js
function foo() {
  console.log('Hello');
}

foo = function() {
  console.log('Bye');
}

foo():
```
Since the assignment of the function (that logs `Bye`) to `foo` is below the `foo` function declaration, that function gets invoked on the last line, logging `Bye` to the screen.

# 2
undefined
Hello
Bye
2

# 3
```js
bar();

function bar() {
  console.log('foo!');
}
```

# 4
NaN

# 5
```js
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}
```

# 6
```js
function Pet(name, image) {
  this.name = name;
  this.image = image;
}

let Image
var catImage
var pudding

Pet.prototype = function() {
  console.log(`${this.name} is walking.`);
}

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image('cat.png');
pudding = new Pet('Pudding', catImage);
```