// find min and max number using function. 



let arr = [10, 20, 30, 40, 500, 60, 70];

function findNumber(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] > min) {
      min = arr[i];
    }
  }
  return max + '<br>' + min;
}
document.write(findNumber(arr));
