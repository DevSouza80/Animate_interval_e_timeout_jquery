// Função principal usada nos eventos
var func = function(){
    // Muda a cor de fundo do input
    $(this).css('background','green');

    // Mostra o índice do input
    console.log($(this).index());
};

// Evento keyup
$('input[name=nome_pessoa]').keyup(func);

// Evento keyup para todos inputs de texto
$('input[type=text]').keyup(func);

// Evento keydown
$('input[type=text]').keydown(func);

// Evento de clique direto
$('a').click(function(){
    alert('Olá mundo!');
});

// Delegação de evento (funciona com elementos criados depois)
$('body').on('click','a',function(){
    alert('Olá mundo');
    return false;
});

// Criando elemento dinamicamente após 3 segundos
setTimeout(function(){
    $('body').html('<a href="#">Meu link!</a>');
},3000);