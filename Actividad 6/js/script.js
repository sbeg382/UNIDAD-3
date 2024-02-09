function Comprobar() {

    	let number;
        number = parseInt(document.getElementById("number").value, 10);
        if ((number % 2) == 0) {
        //Mensaje si el número es par
            document.getElementById("mensaje").innerHTML="Es par";
    }
        else {
       //Mensaje si el número es impar
            document.getElementById("mensaje").innerHTML="Es impar";
    }
  }