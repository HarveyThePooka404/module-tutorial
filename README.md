## What is Lodash?

Lodash is "a javascript utility library delivering consistency, modularity, performance & extras". 
What does that mean? Lodash is a group of functions, pre-written, to get your Javascript to be 
more consistent (always use the same) and more performant (it does the thing fast).

It changes : 
```
let arr = [1, 2, 3];
const sum = 0;

for (i = 0, i < arr.length, i++) {
sum += arr[i]}
```

into :

```
let arr = [1, 2, 3];
const sum = _.sum(arr);

```

(spoiler alert: it returns 6)

## Why would you use Lodash?

Lodash became the most depended on npm package, and if you'll take time to think about a npm package, why not go for #1? 

Lodash helps programmers write more concise and easier to maintain JavaScript code. Lodash contains tools to simplify 
programming with strings, numbers, arrays, functions and objects (everything you hated about Javascript before).


## How to actually use Lodash?

First of all, **install** Lodash: 

You can easily add a link to your HTML: [link to the script:src](https://www.jsdelivr.com/package/npm/lodash)
><script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script>

Or you can go through your terminal:

```
$ npm i -g npm
$ npm i --save lodash

```
add in Node.js: 

```
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

Then **learn all of the functions** you can use with Lodash!
*... seriously?* 
Yes! Find a library of the Lodash functions and browse throught it. What you need to remember is that lodash is most useful with arrays. 

*but I don't want to read the documentation!* 
That's ok, the documentation for Lodash has a search function! 

[Lodash documentation](https://lodash.com/docs/4.17.15)

## So why is this a Github rep?

I'll show you the world! Let's try to see a few practical examples!

