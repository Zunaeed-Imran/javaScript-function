(function mini() {
  let arr = [99, 56, 99, 54, 51, 2154, 55, 6968, 15];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.write(min);
})();
