$(document).ready(function () {

    $('.sidenav').sidenav();

    $(document).ready(function () {
        $('.modal').modal();
    });

    $('.goUp').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.goUp').slideDown(300);

        } else {
            $('.goUp').slideUp(300);
        }
    });

    var x = 0;
    var y = 0;
    var z = 0;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        z = 1;
    }
    console.log(x);
    console.log(y);

    $(".navSearchIcon").click(() => {

        if (z == 0) {
            $(".no-word").fadeIn();
            y = 0;

            if (x == 0) {
                $(".navSearch").fadeIn();
                x = 1;
                console.log(x);
                /*removeHighlight();*/
            } else {
                $(".navSearch").fadeOut();
                x = 0;
                console.log(x);
            }
        }

    });

    $(".navsuperpos").click(() => {
        if (z == 0) {
            if (y == 0) {
                $(".no-word").hide();
                y = 1;
            } else {
                $(".no-word").show();
                y = 0;
            }
        }

    });

    


if(z==0){
    $(".slide2").remove();
    $(".slope1").remove();
    $(".slide2").remove();
    z=1;
}else{
    $(".slide1").remove();
    $(".slope").remove();
    $(".slide1").remove();
    z=0;
}


    /*$("#word").click(() => {
        if (z == 0) {
            if (y == 0) {
                $(".no-word").hide();
                y = 1;
            } else {
                $(".no-word").show();
                y = 0;
            }
        }

    });*/




    var w = new Hilitor("content");

    function highlight() {
        var search = document.getElementById("searchwords").value;
        if (search.length > 0) w.apply(search)
        else removeHighlight();
        document.getElementById("searchwords").value = "";
    }

    function removeHighlight() {
        w.remove();
    }

    searchwords.addEventListener("keydown", function (e) {
        var a = e.key;
        if (a == "Enter") {

            console.log("#searchwords");
            console.log("hola");

            highlight();
            $(".navSearch").fadeOut();
            x = 0;

        }
    });

    function highlight1() {
        var search1 = document.getElementById("searchwords1").value;
        if (search1.length > 0) w.apply(search1)
        else removeHighlight();
        document.getElementById("searchwords1").value = "";
    }

    searchwords1.addEventListener("keydown", function (e) {
        var b = e.key;
        if (b == "Enter") {

            highlight1();
            x = 0;
            $('#modal1').modal('close');

        }
    });


});

function changeColor(text) {
    text.style.color = "orange";
    text.style.textDecoration = "underline";
}

function noColor(text) {
    text.style.color = "white";
    text.style.textDecoration = "none";
}



jQuery(document).ready(function ($) {

    var r = 0;

    $(".toggle--btn").click(() => {

        console.log("hola");

        if (r == 1) {
            r = 0;
            console.log("hola2");
            clearInterval(a);

        } else {
            r = 1;
            console.log("hola1");
            a = setInterval(function () {
                moveRight();

                console.log(r);
            }, 3000);

        }


    });




    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});




/*
var elem = document.getElementsByClassName('slide1');

if(n==1){
    var elem = document.getElementsByClassName('slide1');
    console.log("hola12");
    elem.style.width = "300px";
    elem.style.height = "200px";
    

}

if(n==0){
    var elem = document.getElementsByClassName('slide1');
    console.log("hola13");
    elem.style.width = "500px";
    elem.style.height = "300px";
    
}*/