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
  <strong>${inpJob.value}</strong>
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
//  1. 만약에 input값이 안써있으면 alert 창 띄워줘
  if(inpJob.value===''|| inpHour.value===''){
    alert('입력되지 않았습니다');
    return //return 을 써줘야 함수 종료
  }
  const imgTag = document.createElement('img');
  resultTxt.appendChild(imgTag)
  document.querySelector('.result-text img').src="img/loading.png";
  document.querySelector('.result-text img').classList.add("loading");

  setTimeout(()=>{
    초기화();
    글자불러오기();
  },1500)
})


//모달창 띄우기

