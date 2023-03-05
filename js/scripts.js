function  ejemplosClick() {
	document.getElementById("Presentacion").style.display="none";
	document.getElementById("Ejemplos").style.display="block";
	document.getElementById("btnPresentacion").style.backgroundColor="#ccc";
	document.getElementById("btnEjemplos").style.backgroundColor="#fff";
}

function  presentacionClick() {
	document.getElementById("Presentacion").style.display="block";
	document.getElementById("Ejemplos").style.display="none";
	document.getElementById("btnEjemplos").style.backgroundColor="#ccc";
	document.getElementById("btnPresentacion").style.backgroundColor="#fff";
}