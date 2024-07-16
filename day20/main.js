const inp = document.getElementsByName("rate");
const btn = document.querySelector(".btn");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const ratex = document.getElementById("rate");

btn.addEventListener("click", () => {
  let rate = 0;
  inp.forEach((el) => {
    if (el.checked) {
      rate = Number(el.value);
    }
  });
  if (rate == 0) return alert("Rate Please");
  ratex.innerHTML = rate;
  card1.classList.add("move");
  card2.classList.add("move");
});
