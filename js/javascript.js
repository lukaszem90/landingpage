//var arrow = document.getElementById("arrow");

//var $arrow = $("arrow a");
//
//$("#arrow").on("click",function () {
//    $("body").animate({
//        scrollTop :400
//    }, 1000)
//});

$("#arrow").click(function () {
    $('html,body').animate({
      scrollTop: $("main").offset().top
     },
     1000);
   });


  // $("main").offset().top