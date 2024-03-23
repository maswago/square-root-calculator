let squareRoot;
let number;
document.getElementById("myButton").onclick = function(){
number = document.getElementById("myText").value;
number = Number(number);
squareRoot = Math.sqrt(number);
document.getElementById("myH3").textContent = squareRoot
}
console.log(Math.sqrt(25));
