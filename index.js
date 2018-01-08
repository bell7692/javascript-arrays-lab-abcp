const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var newArr = [...kittens, name];
  return newArr;
}
function prependKitten(name) {
  
}
function removeLastKitten() {
  
}
function removeFirstKitten() {
  
}
