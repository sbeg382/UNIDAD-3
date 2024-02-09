function Comprobar() {
        let nota;
        nota = parseInt(document.getElementById("nota").value, 10);
        if(nota>0 && nota<10) {
          if (nota>=5) { //Ha obtenido una nota mayor o igual a 5
          document.getElementById("mensaje").innerHTML="Estás aprobado";
          }
          if (nota<5) { // Ha obtenido una nota inferior a 5
          document.getElementById("mensaje").innerHTML="Estás suspenso";
          }
        }
        else{
          document.getElementById("mensaje").innerHTML="La nota no es válida";
        }
  }