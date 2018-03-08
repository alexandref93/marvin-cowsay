var cowsay = require('cowsay').say;

module.exports = function (opts, ...args) {
  console.log(cowsay({text: args.join(' ')}));
};