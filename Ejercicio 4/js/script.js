function Calcular() {
    let a, b, c, d;
    a = parseInt(prompt("Inserta un número:"));
    b = parseInt(prompt("Inserta otro número:")); 
    c = a + b;
    d = a - b;
    e = a * b;
    f = a / b;
    g = a % b;
    alert ("El primer número es: " + a + "\nEl segundo número es: " + b + "\nLa suma es: " + c + "\nLa resta es: " + d + "\nEl producto es: " + e + "\nLa división es: " + f + "\nEl resto es: " + g);
    
}