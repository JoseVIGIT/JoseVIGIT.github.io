
	
	var inicioToqueX;

	function desplaza() {
		inicioToqueX = (event.changedTouches[0].clientX);
	}
	function desplaza2() {
		var fin = inicioToqueX - event.changedTouches[0].clientX
		if (fin > 150) // hacia la izquierda
			ejemplosClick();
		if (fin < -150) // hacia la derecha
			presentacionClick ();
	}

	function ejemplosClick() {
		document.getElementById("Presentacion").style.display="none";
		document.getElementById("Ejemplos").style.display="block";
		document.getElementById("btnPresentacion").style.backgroundColor="#ccc";
		document.getElementById("btnEjemplos").style.backgroundColor="#fff";
	}
	
	function presentacionClick() {
		document.getElementById("Presentacion").style.display="block";
		document.getElementById("Ejemplos").style.display="none";
		document.getElementById("btnEjemplos").style.backgroundColor="#ccc";
		document.getElementById("btnPresentacion").style.backgroundColor="#fff";
	}
	
	document.getElementById("btnPresentacion").addEventListener("click", presentacionClick);
	document.getElementById("btnEjemplos").addEventListener("click", ejemplosClick);

	document.getElementById("contenido").addEventListener("touchstart", desplaza);
	document.getElementById("contenido").addEventListener("touchend", desplaza2);
