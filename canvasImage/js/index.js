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

/* desenhando paisagem com canvas */
/* chão */
ctxCanvas.fillStyle = '#090';
ctxCanvas.fillRect(0,350,500,150);

/* céu */
ctxCanvas.fillStyle = '#4078e0';
ctxCanvas.fillRect(0,0,500,350);

/* sol */
ctxCanvas.beginPath();
ctxCanvas.arc(250,350,80,3.14,2*Math.PI);
ctxCanvas.fillStyle = '#ffa500';
ctxCanvas.fill();