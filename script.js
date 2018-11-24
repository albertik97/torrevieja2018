function siguiente(){
  window.location.href="./reto.html";
}

function juego(){
  window.location.href="./juego.html";
}
function start(){
  var n = 0;
  var minutos=0;
  var l = document.getElementById("number");

  window.setInterval(function(){
    if(minutos<10){
      if(n<10)
        l.innerHTML = "Tiempo: 0"+minutos+":0"+n;
      else
          l.innerHTML = "Tiempo: 0"+minutos+":"+n;
    }
    else{
      if(n<10)
        l.innerHTML = "Tiempo: "+minutos+":0"+n;
        else
          l.innerHTML = "Tiempo: " +minutos+":"+n;

    }
    n++;
    if(n>59){
      n=0;
      minutos++;

    }
  },1000);

}
var cont=0;
var historia={
  "0":"Hola, bienvenidos a Torrevieja, una ciudad que esconde mucho más de lo que crees. ¿Estas preparado para la historia de la bella lola?",
  "1":"suuuh",
}

function startStory(){
  var l = document.getElementById("texto");
   l.innerHTML = historia[cont];
}

function next(){
  var l = document.getElementById("texto");
  cont++;
   l.innerHTML = historia[cont];
}
