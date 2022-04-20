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

        $('section#apresentacao div#apresentacao-inf-centro').addClass('animate__animated animate__fadeInUp animate__slow');

        $('section#apresentacao div#apresentacao-inf-direita').addClass('animate__animated animate__fadeInRight animate__slower');

    }else{
        $('section#apresentacao div#apresentacao-inf-esquerda').removeClass('animate__animated animate__fadeInLeft animate__slower');

        $('section#apresentacao div#apresentacao-inf-centro').removeClass('animate__animated animate__fadeInUp animate__slower');

        $('section#apresentacao div#apresentacao-inf-direita').removeClass('animate__animated animate__fadeInRight animate__slower');
    }
}, {
    offset:'600px;'
})


/*--------------------------*/
/*   SECTION MAIS AMADOS    */
/*--------------------------*/

//Deixando os elementos com opacidade 0

$('section#mais-amados p, section#mais-amados h1, section#mais-amados hr').css('opacity', 0)

$('section#mais-amados h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#mais-amados p, section#mais-amados h1, section#mais-amados hr').addClass('animate__animated animate__fadeInUp animate__slower');
        
        $('div#mais-amados-imagem div.mais-amados-menu:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slower');

        $('div#mais-amados-imagem div.mais-amados-menu:eq(3)').addClass('animate__animated animate__fadeInRight animate__slower');

        $('div#mais-amados-imagem div.mais-amados-menu:eq(1), div#mais-amados-imagem div.mais-amados-menu:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');

    }else{
        $('section#mais-amados p, section#mais-amados h1, section#mais-amados hr').removeClass('animate__animated animate__fadeInUp animate__slower');
        
        $('div#mais-amados-imagem div.mais-amados-menu:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slower');

        $('div#mais-amados-imagem div.mais-amados-menu:eq(3)').removeClass('animate__animated animate__fadeInRight animate__slower');

        $('div#mais-amados-imagem div.mais-amados-menu:eq(1), div#mais-amados-imagem div.mais-amados-menu:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'600px;'
})

/*--------------------------*/
/*   SECTION OS MAIS AMADOS */
/*--------------------------*/
//Deixando os elementos com opacidade 0

$('section#sobre div#sobre-esquerda h1, section#sobre div#sobre-esquerda hr').css('opacity', 0);

//---------------------------------

$('section#sobre div#sobre-esquerda h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#sobre div#sobre-esquerda h1, section#sobre div#sobre-esquerda hr').addClass('animate__animated animate__fadeInLeft animate__slow');

        $('section#sobre div#sobre-esquerda p').addClass('animate__animated animate__zoomIn animate__slower');

        $('section#sobre div#sobre-direita img').addClass('animate__animated animate__zoomIn animate__slower');

    }else{
        $('section#sobre div#sobre-esquerda h1, section#sobre div#sobre-esquerda hr').removeClass('animate__animated animate__fadeInLeft animate__slow');

        $('section#sobre div#sobre-esquerda p').removeClass('animate__animated animate__zoomIn animate__slower');

        $('section#sobre div#sobre-direita img').removeClass('animate__animated animate__zoomIn animate__slower');
    }
}, {
    offset:'600px;'
})