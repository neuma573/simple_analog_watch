function createAnalog(){
    obj = document.getElementById("testDiv");
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "analog-clock"); // 새롭게 만들어지는 div 태그에 id 값 저장
    var hour = document.createElement("div");
    hour.setAttribute("id", "hr");
    hour.setAttribute("class", "hand hour");
    newDiv.appendChild(hour);
    var mn = document.createElement("div");
    mn.setAttribute("id", "mn");
    mn.setAttribute("class", "hand minute");
    newDiv.appendChild(mn);
    var sc = document.createElement("div");
    sc.setAttribute("id", "sc");
    sc.setAttribute("class", "hand second");
    newDiv.appendChild(sc);
    var i=1;
    var str = '';
    while(i<13){
      tic = document.createElement("div");
      str = 'time time' + i
      tic.setAttribute("class", str);
      tic.innerHTML = '|'
      newDiv.appendChild(tic);
      i++;
      }


    obj.appendChild(newDiv);
}