function botonIngresar(){
	
	document.getElementsByClassName("AgregarDatos")[0].style.display = "table";
	document.getElementsByClassName("BorrarDatos")[0].style.display = "none";
	document.getElementsByClassName("ActualizarDatos")[0].style.display = "none";
}


function botonActualizar(){
	
	document.getElementsByClassName("AgregarDatos")[0].style.display = "none";
	document.getElementsByClassName("BorrarDatos")[0].style.display = "none";
	document.getElementsByClassName("ActualizarDatos")[0].style.display = "table";
	
	
}


function botonBorrar(){
	
	document.getElementsByClassName("AgregarDatos")[0].style.display = "none";
	document.getElementsByClassName("BorrarDatos")[0].style.display = "table";
	document.getElementsByClassName("ActualizarDatos")[0].style.display = "none";
	
}