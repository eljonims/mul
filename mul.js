document.addEventListener("DOMContentLoaded",iniciar);

var bucle;
var ms = 2000; // tiempo en milisegundos para completar la respuesta

function iniciar(){
	console.log("iniciado");
	bucle = setInterval(bucleFn,ms);
}

function bucleFn () {
	var n1 = Math.floor(10 * Math.random());
	var n2 = Math.floor(10 * Math.random());
	var solucion = Array.from("" + n1 * n2);
	document.getElementById("pregunta").innerHTML=""+n1+"*"+n2;
	document.getElementById("respuesta").innerHTML=['😐','😒','😶'][Math.floor(3* Math.random())];
}
