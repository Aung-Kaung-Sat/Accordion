const btn = document.querySelectorAll(".faq-header");
const question = document.querySelectorAll(".question");
const header = document.querySelectorAll(".faq-header");
const arrow = document.querySelectorAll(".arrow");
const responseText = document.querySelectorAll(".faq-response");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    const checkActive = btn[i].classList.contains("active");
    if (checkActive) {
      hide();
    } else {
      hide();
      show(i);
    }
  });
}

const show = (i) => {
  header[i].style.fontWeight = "700";
  arrow[i].style.transform = "rotate(180deg)";
  responseText[i].style.maxHeight = "100px";
  responseText[i].style.opacity = "1";
  responseText[i].style.paddingTop = "10px";
  btn[i].classList.add("active");
};

const hide = () => {
  for (let i = 0; i < btn.length; i++) {
    header[i].style.fontWeight = "400";
    arrow[i].style.transform = "rotate(0deg)";
    responseText[i].style.maxHeight = "0px";
    responseText[i].style.opacity = "0";
    responseText[i].style.paddingTop = "0px";
    btn[i].classList.remove("active");
  }
};
