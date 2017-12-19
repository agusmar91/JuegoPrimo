let contador = 0;

function primo() {
	
	var numero = parseInt(document.getElementById("txt").value);
	var limite = Math.round(Math.sqrt(numero));
	
	if (numero == 1) {
		
		window.alert("HAS FALLADO!!\nTu puntuacion es de "+contador+" aciertos.");
		document.location.href = "index.html";
		
	} else if (numero == 2) {
		
		contador++;
		window.alert("Es primo! LLevas un total de " + contador+ " aciertos!!");
		
	} else {
		
		for (var i = 2; i <= limite; i++) {
			
			if (numero % i === 0 || numero == 1) {
				window.alert("No es primo, conseguiste un total de " + contador+ " aciertos!!");
				document.location.href = "index.html";
				break;
				
			} else {
				
				contador++;
				window.alert("Es primo! LLevas un total de " + contador+ " aciertos!!");
				break;
				
			}
		}
	}
}
