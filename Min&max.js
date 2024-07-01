//  find the min and max Number using loop and condation.


let arr = [10, 2, 30, 1, 5, 600, 70];

let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } else if (min > arr[i]) {
    min = arr[i];
  }
}
document.write(max + '<br>');
document.write(min);