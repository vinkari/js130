# 1
```js
function delayLog() {
  for (let num = 1; num <= 10; num++) {
    setTimeout(function() {
      console.log(num);
    }, num * 1000);
  }
}

delayLog();
```

# 3
```js
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);
```

# 4
g, f, d, z, n, s, q.

# 5
```js
function afterNSeconds(callback, duration) {
  setTimeout(callback, duration * 1000);
}
```