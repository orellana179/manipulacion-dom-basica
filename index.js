//Obtenemos los elementos HTML que vamos a manipular atraves de su id
const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

//Utilizamos el escuchador de eventos en nuestro id del formulario con 
//su evento "submit" y le pasamos la función que imprime el total de la operación
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) { 
	//utilizamos esta "preventDefault()" función para que deje de refrescar 
	//la pagina al hacer la operación
	event.preventDefault(); 
	//realizamos la suma y la conversión de los String a Int con 
    //la función parseInt
    const input1 = parseInt(value1.value);
	const input2 = parseInt(value2.value);
    const totalCalculo = input1 + input2;
	//Mostramos el resultado en el elemento con el id result con el metodo innerText
    result.innerText = "Resultado: " + totalCalculo;
}

