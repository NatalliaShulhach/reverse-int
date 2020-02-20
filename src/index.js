module.exports = function reverse (n) {
var str0 = Math.abs(n);  
var str = String(str0);
var str1 = str.split('').reverse();
var str2 = str1.join('')
  return str2;
}
