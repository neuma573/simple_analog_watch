
/* 시간을 구합니다 */
  const deg = 6;
  let hr = document.querySelectorAll("#hr, #hr .div")
  let mn = document.querySelectorAll("#mn, #mn .div")
  let sc = document.querySelectorAll("#sc, #sc .div")

  

  function run () {
     hr = document.querySelectorAll("#hr, #hr .div")
     mn = document.querySelectorAll("#mn, #mn .div")
     sc = document.querySelectorAll("#sc, #sc .div")
     let amt = document.querySelectorAll("#analog-clock")
     return hr.length;
  }


  let size = run();
  setInterval (()=> {
      // size 초기화
      size = run();
      
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      var i=0;
      // size의 갯수 == 시계 모듈 수이므로 그 횟수만큼 node에 style 전달
      while(i<size){
      hr[i].style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
      mn[i].style.transform = `rotateZ(${mm}deg)`;
      sc[i].style.transform = `rotateZ(${ss}deg)`;
      i++;
      }
  })

//로컬 서버에서 작업하지 않을 때는 이 항목 삭제
export default AnalogClock;
