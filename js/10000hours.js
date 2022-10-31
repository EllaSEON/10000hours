const inpJob = document.querySelector('.inp-job');
const inpHour = document.querySelector('.inp-hour');
const resultBtn = document.querySelector('.form-button');
const resultTxt = document.querySelector('.result-text');

function 초기화(){
  resultTxt.innerHTML="";
}
function 글자불러오기(){
  const inpHourName = 10000/inpHour.value;
  const expertAndHour = `<p class="text-wannabe">
  당신은
  <strong>${inpJobVal}</strong>
  전문가가 되기 위해서
  <p class="text-time">
  대략
  <strong>${Math.floor(inpHourName)}</strong>
  일 이상 훈련하셔야 합니다! :)
  </p>`
  ;
  document.querySelector('.result-text').insertAdjacentHTML('afterbegin',expertAndHour);
}

resultBtn.addEventListener('click',()=>{
  초기화();
  const inpJobVal = inpJob.value;
  const inpHourVal = inpHour.value;
//  1. 만약에 input값이 안써있으면 alert 창 띄워줘
  if(inpJobVal===''|| inpHourVal===''){
    alert('입력되지 않았습니다');
    return //return 을 써줘야 함수 종료
  }
  const imgTag = document.createElement('img');
  resultTxt.appendChild(imgTag)
  document.querySelector('.result-text img').src="img/loading.png";
  document.querySelector('.result-text img').classList.add("loading");

  setimeout(()=>{
  글자불러오기();
  },2000)

  // 2. css추가 (애니메이션). 시계가 끝나면 초기화해주고 글씨나오게함.

  //settimeout(시간,callback함수)
  //css animation 특정클래스가 돌아가는거.

})

//1. input 전문가 입력하고
// 2. input 시간 입력하고
// 3. 입력 안되어있으면 alert 창 띄워줘
// 4. result 버튼 클릭하면
// 5. 밑에 보여줘

//모달창 띄우기

