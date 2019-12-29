function colorchange( img ) {
    $( img ).each( function () {
        $( '<img/>' )[ 0 ].src = this;
    });
};

colorchange([
    './img/map_blue.png',
    './img/map_yellow.png',
    './img/map_red.png',
    './img/map_green.png',
    './img/map_pink.png'
]);

<<<<<<< HEAD
//jQuery na hover buttnov
=======
//jQuery na hover
>>>>>>> 4cb68d60ce39370648b554385e671a5c99fb3b9b

jQuery(document).ready(function () {
    $('.title-blue').mouseout(function(){
        $("#map").attr('src', 'img/map_original.png');
    }),
    $('.title-blue').mouseover( function(){
        $("#map").attr('src', './img/map_blue.png');
    });
    $('.title-red').mouseout(function(){
        $("#map").attr('src', 'img/map_original.png');
    }),
    $('.title-red').mouseover( function(){
        $("#map").attr('src', 'img/map_red.png');
    });
    $('.title-green').mouseout(function(){
        $("#map").attr('src', 'img/map_original.png');
    }),
    $('.title-green').mouseover( function(){
        $("#map").attr('src', 'img/map_green.png');
    });	
    $('.title-yellow').mouseout(function(){
        $("#map").attr('src', 'img/map_original.png');
    }),
    $('.title-yellow').mouseover( function(){
        $("#map").attr('src', 'img/map_yellow.png');
    });
    $('.title-pink').mouseout(function(){
        $("#map").attr('src', 'img/map_original.png');
    }),
    $('.title-pink').mouseover( function(){
        $("#map").attr('src', 'img/map_pink.png');
    });	
});
