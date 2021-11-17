alert("Bienvenidos a mi sitio")

function generarNuevoColor(){
	let codigo, color;
    let numeros="0123456789"
    let letras="ABCDEF"
	codigo = numeros+letras
	color = "#"

	for(let i = 0; i < 6; i++){
        console.log(color)
        console.log(codigo[Math.floor(Math.random() * 16)])
		color = color + codigo[Math.floor(Math.random() * 16)];
	}

    let contenido = document.getElementById("contenido")
  
    contenido.style.background=color
	

}