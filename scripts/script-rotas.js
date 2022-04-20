// açoes de navegacao hader

$('header nav ul#menu-descktop li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav ul#menu-descktop li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#sobre').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav ul#menu-descktop li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#mais-amados').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

$('header nav ul#menu-descktop li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section#contato').offset().top}, 1000, function(){
       if($(window).width() < 812){
        esconderMenu();
        controle = true;
       }
    })
})

// açoes de navegacao footer

$('footer div#footer-principal ul#footer-menu li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('footer div#footer-principal ul#footer-menu li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section#sobre').offset().top}, 1000)
})

$('footer div#footer-principal ul#footer-menu li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section#mais-amados').offset().top}, 1000)
})


// açoes de menu amburguer

function mostrarMenu(){
    $('nav ul#menu-descktop').css('display', 'flex');
}

function esconderMenu(){
    $('nav ul#menu-descktop').css('display', 'none');
}