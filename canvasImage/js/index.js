console.log('veio no index.js');

/* obtendo o canvas na variável pegaIdCanvas */
var pegaIdCanvas = document.getElementById('canvasImage');

/* pega o contexto 2d do Canvas */
var ctxCanvas = pegaIdCanvas.getContext('2d');

/*
 * Desenhando linhas no canvas
 * uma linha/reta é a junção de dois pontos
 * o moveTo e o lineTo são esses dois pontos, o stroke é o desenho que os liga
 * o primeiro parâmetro é a coordenada do eixo X e o segundo é a coordenada
 * do eixo Y
 */

/* desenhando um círculo */
/*ctxCanvas.beginPath();
ctxCanvas.arc(250,250,80,0,2*Math.PI);
ctxCanvas.stroke();*/

/*ctxCanvas.font = '30px Courier New';
ctxCanvas.fillText('This is Canvas', 125, 250);*/

/* manipulando imagens no canvas */
var image = new Image();
image.src = "../img/teste.jpg";
window.onload = function() {
    ctxCanvas.drawImage(image,0,0);
}