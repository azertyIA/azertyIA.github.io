let localScroll = 0;
let skip = true;
const elementVisible = 500;

const onScroll = () => {
  localScroll = window.scrollY;
  updateHeader();

  skip = !skip;
  if (skip) { return; }
  revealElements();
};

const updateHeader = () => {
  if (localScroll === 0) {
    document.getElementById("header").classList.add("top");
    return;
  }
  document.getElementById("header").classList.remove("top");
};

const revealElements = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop > elementVisible) {
      reveals[i].classList.remove("active");
    } else {
      reveals[i].classList.add("active");
    }
  }
};

window.addEventListener("scroll", onScroll);
onScroll();

