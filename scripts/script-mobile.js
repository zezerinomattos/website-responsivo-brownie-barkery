// Ativando o menu mobile

function mostrarMenu(){

    $('nav#principal-menu ul#menu-descktop').css('display', 'flex');

    $('nav#principal-menu ul#icone-menu ion-icon#menu-humburguer').css('display', 'none');

    $('nav#principal-menu ul#icone-menu ion-icon#menu-X').css('display', 'flex');

    $('nav ul#menu-descktop').addClass('animate__animated animate__fadeInRight animate__slow');
}

function esconderMenu(){  
    
    $('nav#principal-menu ul#menu-descktop').css('display', 'none'); 

    $('nav#principal-menu ul#icone-menu ion-icon#menu-X').css('display', 'none');

    $('nav#principal-menu ul#icone-menu ion-icon#menu-humburguer').css('display', 'flex');

}

var controle = true;

$('nav#principal-menu ul#icone-menu').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})
