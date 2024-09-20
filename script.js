const [btn1, btn2, btn3] = document.querySelectorAll("button");

btn2.addEventListener("click", () => {
  new Anime(window, { scroll: 2000 }, { duration: 500 });
});
