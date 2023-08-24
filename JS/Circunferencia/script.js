var radio =  prompt("Ingresar el radio de la circunferencia: ");

var area =  Math.PI * Math.pow(radio, 2);

var perimetro = Math.PI * 2 * radio;
area = area.toFixed(2)
perimetro = perimetro.toFixed(2)
alert(`El area de la circunferencia es ${area}, y el perímetro es ${perimetro}`);

