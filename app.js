const h2 = document.createElement("h2");
h2.innerText = "Hello World from h2";
document.querySelector("main").append(h2);

// funcion q recibe un nombre y lo devuelve en Mayusculas
function saludar(nombre) {
	const h3 = document.createElement("h3");
	h3.innerText = `Hola ${nombre.toUpperCase()}`;
	document.querySelector("main").append(h3);
}
//

// nombres lo va a proporcionar Leito
nombres.forEach((nombre) => {
	saludar(nombre);
});
