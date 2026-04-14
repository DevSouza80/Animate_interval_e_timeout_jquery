$(function(){

    // =============================
    // 🔹 ANIMAÇÃO + TIMEOUT
    // =============================

    var timerTimeout;

    var executarAnimacaoBox2 = function(){
        $('.box2').animate({
            width: '40%',
            height: '200px',
            marginLeft: '100px',
            paddingTop: '50px'
        }, 2000);
    };

    $('body').click(function(){
        alert("Timeout cancelado!");
        clearTimeout(timerTimeout);

        console.log("Timeout cancelado");
    });

    $('.box1').animate({
        width: '40%',
        height: '200px',
        marginLeft: '100px',
        paddingTop: '50px'
    }, 2000, function(){
        timerTimeout = setTimeout(executarAnimacaoBox2, 3000);
    });


    // =============================
    // 🔹 INTERVAL
    // =============================

    var timerInterval = setInterval(function(){
        console.log("Executando a cada 3 segundos...");
    }, 3000);

    $('body').click(function(){
        clearInterval(timerInterval);
        console.log("Intervalo cancelado");
    });

});
