/*--------------------------*/
/*   SECTION APRESENTAÇÃO   */
/*--------------------------*/

//Deixando os elementos com opacidade 0
$('section#apresentacao h1, section#apresentacao p, section#apresentacao hr').css('opacity', 0);
$('section#apresentacao div#apresentacao-principal').css('opacity', 0);

$('section#apresentacao h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#apresentacao h1, section#apresentacao p, section#apresentacao hr').addClass('animate__animated animate__fadeInUp animate__slow');
    }else{
        $('section#apresentacao h1, p, hr').removeClass('animate__animated animate__fadeInUp animate__slow');
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

$('section#apresentacao h1').waypoint(function(direcao){
    if(direcao == 'down'){
        $('section#apresentacao div#apresentacao-inf, section#apresentacao hr').addClass('animate__animated animate__fadeInUpBig animate__slower');
    }else{
        $('section#apresentacao div#apresentacao-inf, section#apresentacao hr').removeClass('animate__animated animate__fadeInUpBig animate__slower');
    }
}, {
    offset:'500px;'
})

