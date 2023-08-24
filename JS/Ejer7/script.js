var lim = prompt("Ingrese un número positivo para establecer un límite")

let i = 0;
alert(typeof(i))

while(i < lim){
    let num = prompt("Ingrese un número");
    
    i = i + num;
    alert(i);
    alert(typeof(i))
    alert(typeof(num))
}

alert("Se alcanzó el límte" + i);