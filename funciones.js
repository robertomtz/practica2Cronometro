
var centesimas=0;
var segundos=0;
var minutos=0;
var horas=0;
var timer;

function start(){
  timer = setInterval(function(){ myTimer() }, 10);
}

function stop(){
  window.clearInterval(timer);
}

function reset(){
  stop();
  centesimas= 0;
  segundos= 0;
  minutos= 0;
  horas = 0;
  document.getElementById("centesimas").innerHTML="00";
  document.getElementById("segundos").innerHTML="00";
  document.getElementById("minutos").innerHTML="00";
  document.getElementById("horas").innerHTML="00";
}

function myTimer(){
  centesimas++;
  centesimas>9 ? document.getElementById("centesimas").innerHTML=centesimas :
  document.getElementById("centesimas").innerHTML="0"+centesimas;
  if(centesimas>99){
    segundos++;
    segundos>9 ? document.getElementById("segundos").innerHTML=segundos :
    document.getElementById("segundos").innerHTML="0"+segundos;
    centesimas=0;
    document.getElementById("centesimas").innerHTML="00";
    if (segundos>59){
      minutos++;
      minutos>9 ? document.getElementById("minutos").innerHTML=minutos :
      document.getElementById("minutos").innerHTML="0"+minutos;
      segundos=0;
      document.getElementById("segundos").innerHTML="00";
      if (minutos>59){
        horas++;
        horas>9 ? document.getElementById("horas").innerHTML=horas :
        document.getElementById("horas").innerHTML="0"+horas;
        minutos=0;
        document.getElementById("minutos").innerHTML="00";
      }
    }
  }
}
