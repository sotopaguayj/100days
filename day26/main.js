const left = document.getElementById("left");

let l = 5;
let i = 0;

function logValue() {
  if (i <= 17) {
    l += 10;
    left.innerHTML = l;
    i++;
    setTimeout(logValue, 30);
  }
}

logValue();
