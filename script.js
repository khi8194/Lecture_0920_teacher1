const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //event객체 안쪽의 target property에는 이벤트가 발생한 대상 (DOM)정보가 담겨 있음
    console.dir(event.target.dataset.pos);
    //console.log(event.target.getAttribute("data-pos"));
    //parsetInt(문자화된 숫자값) : 정수로 반환
    //parseFloat(문자화된 숫자값) : 실수로 반환 (소숫점 아래까지 포함된 숫자)
    new Anime(window, { scroll: parseInt(event.target.dataset.pos) });
  });
});
