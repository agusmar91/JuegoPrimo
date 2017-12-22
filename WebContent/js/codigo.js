var contador = 0;

function primo() {
	
	var numero = parseInt(document.getElementById("txt").value);
	var esPrimo= true;
	if (numero == 2) {
		
		contador++;
		window.alert("Es primo! LLevas un total de " + contador+ " aciertos!!");
		
	}
		
		for (var i = 2; i < numero; i++) {
			
			if (numero % i == 0) {
				esPrimo=false;
				
				break;
				
			}
		}
		
		if(esPrimo) {
			contador++;
			window.alert("Es primo! LLevas un total de " + contador+ " aciertos!!");
		} else {
			window.alert("No es primo, conseguiste un total de " + contador+ " aciertos!!");
			document.location.href = "index.html";
			contador = 0;
		}
			
		

		
	}

