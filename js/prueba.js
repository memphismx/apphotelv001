/*
nombre = prompt("Cual es tu nombre");
console.log(nombre)
*/
/*numero1 = prompt("dame el primer numero1");
numero2 = prompt("dame el numero2");

console.log(numero1);
console.log(numero2);

console.log(suma(numero1,numero2))

function suma(numero1,numero2){
	return parseFloat(numero1) + parseFloat(numero2);
}
*/

var coches = ["mustang","Jetta","Mazda"];

console.log(coches[0]);

function recorrearreglo(arr) {
	for (var i=0; i < arr.length; i++)
		{console.log(arr[i]);
		}
	// body...
}

recorrearreglo(coches);

var camionetas = ["tiguan","Explorer","CRX5"]

recorrearreglo(camionetas)

var coche = {
	nombre:"Mazda",
	modelo: 2008,
	Color: "Plata",
	arrancar:function(){
		console.log("run run...");
	}
}

coche.arrancar();

var cochesnuevos= [
	{
		nombre: "Mustang",
		modelo: 2008,
		costo: 32000,
		Color: "Rojo"
	},
	{
		nombre: "Jetta",
		modelo: 2012,
		costo: 220000,
		Color: "Negro"
	},

	{
		nombre: "Mazda",
		modelo: 2012,
		costo: 50000,
		Color: "Plata"
	}

];


function recorrearregloNuevo(arr) {
	for (var i=0; i < arr.length; i++)
		{console.log(arr[i].nombre + " $" + Intl.NumberFormat("en").format(arr[i].costo));
		}
	// body...
}

recorrearregloNuevo(cochesnuevos);

/*
function MayorPrecio(arr)
{
	
	var mayor = arr[0].costo; //le asigno el valor a una variable
	console.log(mayor);

	for (var i=0; i < arr.length; i++)
		if (arr[i].costo >= mayor) //se usa if para comoparar cada uno de los precios de los coches, 
		 { mayor=arr[i].costo;} //si es mayor ahora ese será el mayor
		
	console.log(mayor); //lo muestro cuando sale del arreglo
}

MayorPrecio(cochesnuevos);*/

// Funcion que sume el total de los coches y lo muestre
function SumaPrecio(arr)
{
	
	var total = 0; //le asigno el valor a una variable
	

	for (var i=0; i < arr.length; i++)
		{total+=arr[i].costo;} //si es mayor ahora ese será el mayor
		
	return total; //lo muestro cuando sale del arreglo
}


//DOM - DOCUMENT OBJECT MODEL

//Sintaxis JAVASCRIPT PURO
//document.getElementById("email-inicio").value = SumaPrecio(cochesnuevos);

// Sintaxis Con jquery
$("#email-inicio").val(SumaPrecio(cochesnuevos));