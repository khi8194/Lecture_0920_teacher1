/*
  forEach
  : 배열, 유사배열을 반복처리하기 위한 내장 함수

  Array.forEach((data, idx)=>{
    중괄호 안쪽의 코드블록은 배열의 갯수만큼 반복 처리됨
    해당 코드블록 안쪽에서는 data, idx라는 파라미터로 전달되는 값 활용 가능
    data: 현재 반복도는 배열의 데이터
    idx: 현재 반복도는 순서값
  })
*/
const btns = document.querySelectorAll("button");

btns.forEach((btn, idx) => {
  console.log(btn);
  console.log(idx);
});
