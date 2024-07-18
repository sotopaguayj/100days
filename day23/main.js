const form = document.getElementById("form");
const inputs = document.querySelectorAll(".inp");

const patter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let error = false;
  inputs.forEach((inp) => {
    const labels = inp.parentNode.querySelector(".labels");
    if (inp.value.trim() === "") {
      labels.classList.remove("label");
      labels.classList.add("err");
      inp.classList.add("inperr");
      error = true;
    } else {
      inp.value = "";
      labels.classList.add("label");
      labels.classList.remove("err");
      inp.classList.remove("inperr");
      error: false;
    }
  });
  if (!error) return alert("Complete");
});
inputs.forEach((i) => {
  i.addEventListener("keyup", (e) => {
    const val = e.target.value;
    const labels = i.parentNode.querySelector(".labels");
    const msg = i.parentNode.querySelector(".msg");

    if (e.target.id === "ea") {
      if (val === "") {
        msg.innerHTML = "Password cannot be empty";
      } else if (!val.match(patter)) {
        labels.classList.remove("label");
        labels.classList.add("err");
        i.classList.add("inperr");
        msg.innerHTML = "Looks like this is not an email";
        return;
      }
    }
    if (val !== "") {
      labels.classList.add("label");
      labels.classList.remove("err");
      i.classList.remove("inperr");
    } else {
      labels.classList.remove("label");
      labels.classList.add("err");
      i.classList.add("inperr");
    }
  });
});
