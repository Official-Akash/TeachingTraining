$(function(){
    // hide
    $("#one").click(function(){
        $(".rowMain").hide();
    });
    // show
    $("#two").click(function(){
        $(".rowMain").show();
    });
    // slide up
    $("#three").click(function(){
        $(".rowMain").slideUp();
    });
    //slide down
    $("#four").click(function(){
        $(".rowMain").slideDown();
    });
    // slide Toggle
    $("#five").click(function(){
        $(".rowMain2").slideToggle();
    });
    // animate
    $("#six").click(function(){
        $(".rowMain2").animate({opacity:0},3000);
    });
    // animate with delay
    $("#seven").click(function(){
        $(".rowMain2").delay(1000).animate({opacity:0},10000);
    });
    //finish
    $("#eight").click(function(){
        $(".rowMain2").finish();
    });
    // re-animate
    $("#nine").click(function(){
        $(".rowMain2").animate({opacity:1},1000);
    });
    // fade in
    $("#ten").click(function(){
        $(".rowMain").fadeIn();
    });
    // fade out
    $("#eleven").click(function(){
        $(".rowMain").fadeOut();
    });
    // fade toggle
    $("#twelve").click(function(){
        $(".rowMain2").fadeToggle();
    });
    // fade to
    $("#thirteen").click(function(){
        $(".rowMain2").fadeTo("slow",0.5)
    });
});