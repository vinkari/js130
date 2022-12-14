# 1
```js
function startCounting() {
  let number = 1;
  
  setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);
}

startCounting();
```

# 2
```js
function startCounting() {
  let number = 1;

  return setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000);
}

function stopCounting() {
  clearInterval(id);
}

let id = startCounting();

stopCounting();
```