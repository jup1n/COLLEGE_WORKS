const sinais = ['+', '-', '/', '*'];
var sinalOperacao = '';
var ultimoSinal = '';
var valor1 = 0; 
var valor2 = 0;
var n = 0;

function load() {
	validInputResp(false);
}

function validInputResp(enable) {
	document.getElementById("valid").disabled = true;
	document.getElementById("inputResp").value = '';
	document.getElementById('inputResp').disabled = !enable;
}

window.onload = load;

function gameSortear() {

	valor1 = Math.floor(Math.random() * 100);
	valor2 = Math.floor(Math.random() * 100);

	while ( sinalOperacao == ultimoSinal ) {
		sinalOperacao = sinais[Math.floor(Math.random() * 4)];		
	}

	document.getElementById('nbm1').textContent = valor1;
	document.getElementById('nbm2').textContent = valor2;
	document.getElementById('sinal').textContent = sinalOperacao;

	ultimoSinal = sinalOperacao;


	validInputResp(true);
}

function gameValidar() {

	if (validarOperacao()) {
		updateText();
		clearScr();
		Swal.fire({
		  position: 'top-end',
		  icon: 'success',
		  title: 'Voce acertou!',
		  showConfirmButton: false,
		  timer: 2000
		});
		;
	} else {
		clearScr();
		Swal.fire({
		  position: 'top-end',
		  icon: 'error',
		  title: 'Voce errou!',
		  showConfirmButton: false,
		  timer: 2000
		});
	}
	
}

function validarOperacao() {
	
	let resposta = parseFloat(document.getElementById('inputResp').value);

	if (sinalOperacao == '+' && resposta == (valor1 + valor2)) {
		return true;
	} else if (sinalOperacao == '-' && resposta == Math.abs((valor1 - valor2))) {
		return true;
	} else if (sinalOperacao == '/' && resposta == (valor1 / valor2)) {
		return true;
	} else if (sinalOperacao == '*' && resposta == (valor1 * valor2)) {
		return true;
	}

	return false;
}

function updateText() {
	n = n + 10;
	pontos.textContent = 'Voce tem ' + n + ' pontos'

}

function verifyButtonValid() {

	var conteudo = document.getElementById("inputResp").value;
	if (conteudo !== null && conteudo !== '') {
  		document.getElementById("valid").disabled = false;
	} else {
  		document.getElementById("valid").disabled = true;
	}
}

function clearScr() {

	document.getElementById('nbm1').textContent = '';
	document.getElementById('nbm2').textContent = '';
	document.getElementById('sinal').textContent = '';
	document.getElementById('inputResp').value = '';


}

function gameNovoJogo() {

	clearScr()
	document.getElementById('pontos').textContent = 'Voce tem 0 pontos';
	
}