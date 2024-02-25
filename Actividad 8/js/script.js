function MensajeIf() {
    let hora;
    hora = parseInt(document.getElementById("hora").value, 10);
    if (hora < 24 && hora >= 0) {
        if (hora >= 7 && hora <= 11) {
            document.getElementById("mensaje").innerHTML = "Buenos días";
        }
        if (hora > 11 && hora < 22) {
            document.getElementById("mensaje").innerHTML = "Buenas tardes";
        }
        if (hora >= 22 || hora < 7) {
            document.getElementById("mensaje").innerHTML = "Buenas noches";
        }
    }
    else {
        document.getElementById("mensaje").innerHTML = "Esta hora no es válida";
    }
}

function MensajeSwitch() {
    let hora = parseInt(document.getElementById("hora").value, 10);
    switch (hora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("mensaje").innerHTML = "Buenos días";
            break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("mensaje").innerHTML = "Buenas tardes";
            break;

        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("mensaje").innerHTML = "Buenas noches";
            break;

        default:
            document.getElementById("mensaje").innerHTML = "Esta hora no es válida";
    }
}

