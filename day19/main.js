const activeDrop = document.querySelectorAll("#activeDrop");

activeDrop.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.parentNode.parentNode.querySelector("#content");
    

    const minusIcon = document.createElement("img");
    minusIcon.src = "./images/icon-minus.svg";
    minusIcon.alt = "Minus Icon";

    const plusIcon = document.createElement("img");
    plusIcon.src = "./images/icon-plus.svg";
    plusIcon.alt = "Plus Icon";

    if (content.className == "contentoff") {
      content.setAttribute("class", "contenton");
      btn.replaceChildren(minusIcon);
      btn.removeChild
      return;
    }
    content.setAttribute("class", "contentoff");
    btn.replaceChildren(plusIcon);
  });
});