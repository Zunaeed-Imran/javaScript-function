function octall() {
  for (let i = decimal; i > 0; i = Math.floor(i / 8)){
    octal = (i % 8) + octal;
  } 
  return octal;
}
let decimal = prompt("Enter a Decimal number: ");
let octal = "";

document.write(octall());