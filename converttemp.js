'use strict';

let celsius = process.argv[2];

let farenheit = celsius * 5/9 +32;

console.log(celsius, "in celsius is", farenheit, "farenheit");