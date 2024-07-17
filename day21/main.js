const btn = document.getElementById("btn");
const footer = document.querySelector("footer");
const links = document.querySelector(".links");
const data = document.querySelector(".data");

btn.addEventListener("click", () => {
  const clinet = document.querySelector("body").clientWidth;
  if (clinet < 850) {
    links.classList.add("move");
    footer.classList.add("bg");
    data.classList.add("opzero");
    btn.style.backgroundColor = "#9ea8c2";
    setTimeout(() => {
      links.classList.remove("move");
      footer.classList.remove("bg");
      data.classList.remove("opzero");
      btn.style.backgroundColor = "#ecf2f8";
    }, 5000);
  } else {
    links.classList.add("tooltip");
    setTimeout(() => {
      links.classList.remove("tooltip");
    }, 5000);
  }
});
