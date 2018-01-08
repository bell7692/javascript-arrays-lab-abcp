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
  var newArr = [name, ...kittens];
  return newArr;
}
function removeLastKitten() {
  var newArr = kittens.slice(0);
  newArr.pop();
  return newArr;
}
function removeFirstKitten() {
  var newArr = kittens.slice(0);
  newArr.shift();
  return newArr;
}
