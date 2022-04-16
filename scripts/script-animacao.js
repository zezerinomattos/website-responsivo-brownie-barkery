/*--------------------------*/
/*   SECTION APRESENTAÇÃO   */
/*--------------------------*/

//Deixando os elementos com opacidade 0
$('section#apresentacao h1, section#apresentacao p, section#apresentacao hr').css('opacity', 0);

$('section#apresentacao div#apresentacao-principal').css('opacity', 0);

$('section#apresentacao div#apresentacao-inf-esquerda').css('opacity', 0);

$('section#apresentacao div#apresentacao-inf-centro').css('opacity', 0);

$('section#apresentacao div#apresentacao-inf-direita').css('opacity', 0);

$('section#apresentacao h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#apresentacao h1, section#apresentacao p, section#apresentacao hr').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $('section#apresentacao h1, section#apresentacao p, section#apresentacao hr').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
}, {
    offset:'500px;'
})

$('section#apresentacao h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#apresentacao div#apresentacao-principal').addClass('animate__animated animate__fadeInUp animate__slower');
    }else{
        $('section#apresentacao div#apresentacao-principal').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'500px;'
})

$('section#apresentacao div#apresentacao-principal').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#apresentacao div#apresentacao-inf-esquerda').addClass('animate__animated animate__fadeInLeft animate__slower');

        $('section#apresentacao div#apresentacao-inf-centro').addClass('animate__animated animate__fadeInUpBig animate__slow');

        $('section#apresentacao div#apresentacao-inf-direita').addClass('animate__animated animate__fadeInRight animate__slower');

    }else{
        $('section#apresentacao div#apresentacao-inf-esquerda').removeClass('animate__animated animate__fadeInLeft animate__slower');

        $('section#apresentacao div#apresentacao-inf-centro').removeClass('animate__animated animate__fadeInUpBig animate__slower');

        $('section#apresentacao div#apresentacao-inf-direita').removeClass('animate__animated animate__fadeInRight animate__slower');
    }
}, {
    offset:'600px;'
})

