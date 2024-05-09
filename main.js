let value,dec,res,inc;
    value = 0;

document.getElementById("dec").onclick = function() {
    value--;
    console.log(value);
    document.getElementById("val").textContent = value;
} 


document.getElementById("reset").onclick = function() {
    value = 0;
    console.log(value);
    document.getElementById("val").textContent = value;
} 


document.getElementById("inc").onclick = function() {
    value++;
    console.log(value);
    document.getElementById("val").textContent = value;
} 

