function randomItem(max, min) {
  return Math.random() * (max - min) - 1;
}
console.log(randomItem(20, 1));
