//  Find the maximum number of an array.


let score = [15, 96, 55, 8714, 52, 6, 9];

function highScore(score) {
  let max = score[0];

  for (let x = 1; x < score.length; x++){
    if (max < score[x]) {
      max = score[x];
    }
  }
  return max;
}

let high = highScore(score);
document.write(high);