
var centesimas=0;
var segundos=0;
var minutos=0;

function start(){
  myVar = setInterval(function(){ myTimer() }, 10);
}

function myTimer(){
  centesimas++;
    document.getElementById("centesimas").innerHTML=centesimas;
    if(centesimas>99){
      segundos++;
      segundos>9 ? document.getElementById("segundos").innerHTML=segundos :
      document.getElementById("segundos").innerHTML="0"+segundos;
    centesimas=0;
    if (segundos>59){
      document.getElementById("minutos").innerHTML=minutos;
      segundos=0;
      if (minutos>59){
        document.getElementById("horas").innerHTML=horas;
        minutos=0;
      }
    }
  }
}
