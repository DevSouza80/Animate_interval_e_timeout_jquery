📚 Estudos de jQuery: Animate, Timeout e Interval

Este repositório contém exemplos práticos utilizando jQuery para manipulação de animações e controle de tempo com setTimeout e setInterval.

🚀 Tecnologias utilizadas
JavaScript
jQuery
📌 Conteúdos abordados
.animate() → criação de animações
setTimeout() → execução com atraso
setInterval() → execução contínua em intervalos
clearTimeout() e clearInterval() → cancelamento de eventos
🎬 1. Animação com .animate() + setTimeout()
📖 Descrição
Um elemento .box1 é animado.
Após a animação, um setTimeout agenda outra animação (.box2).
Clique na tela cancela o timeout.
💻 Código
$(function(){

    var timer;

    var timeOut = function(){
        $('.box2').animate({
            'width': '40%',
            'height': '500px',
            'marginLeft': '100px',
            'paddingTop': '200px'
        }, 2000);
    }

    $('body').click(function(){
        alert("Animação com timeout foi cancelada!");
        clearTimeout(timer);
    });

    $('.box1').animate({
        'width': '40%',
        'height': '500px',
        'marginLeft': '100px',
        'paddingTop': '200px'
    }, 2000, function(){
        timer = setTimeout(timeOut, 3000);
    });

});
🧠 Conceitos importantes
animate() recebe propriedades CSS e duração.
Callback executa após a animação.
setTimeout() executa apenas uma vez.
clearTimeout() cancela o agendamento.
⏱️ 2. Uso de setInterval()
📖 Descrição
Um alerta é exibido a cada 3 segundos.
Clique na tela cancela o intervalo.
💻 Código
var timer;

$('body').click(function(){
    console.log("Intervalo cancelado");
    clearInterval(timer);
});

timer = setInterval(function(){
    alert('olá mundo');
}, 3000);
🧠 Conceitos importantes
setInterval() executa repetidamente.
clearInterval() interrompe a execução.
Ideal para loops temporizados.
🔥 Diferença entre setTimeout e setInterval
Função	Execução
setTimeout	Executa uma única vez
setInterval	Executa continuamente
🎯 Possíveis melhorias
Substituir alert() por elementos visuais
Adicionar botões para controle (iniciar/parar)
Usar fadeIn, slideToggle, etc.
