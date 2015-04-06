$(document).ready(function (){
    $(window).scroll(function() {                
        if( $(window).scrollTop() > 55 ){
            $('.xnav').addClass('addshadow');
        }else{
            $('.xnav').removeClass('addshadow');
        }
    });
    $('img').click(function(){
        location.assign('http://loka.com');
    });
});
