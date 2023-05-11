function rev(n) {
  return n.split("").reverse().join("");
}
let n = prompt("Enter Number: ");
let r = rev(n);

document.write(r);

