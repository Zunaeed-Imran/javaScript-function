function decimalToBinary(decimal) {
  let binaryNumber = " ";

  for (let i = decimalNumber; i > 0; i = Math.floor(i/2)){
    binaryNumber = (i % 2) + binaryNumber;
  }

  return binaryNumber;
}

const decimalNumber = prompt("Enter Desimal Number");
const binaryNumber = decimalToBinary(decimalNumber);

document.write(binaryNumber);

