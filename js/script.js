$(function(){
    var typed = new Typed('.typed', {
        strings: ['Developer.',
      'Professional Coder.',
         'Developer.'],
        typeSpeed: 50,
        backSpeed: 50,
        smartBackspace: true, // this is a default
        loop: true,
      });
      $('.progressbar11').rProgressbar({
          percentage: 100,
          height:'10px',
          width:'98%',
          duration:2000,
        });
      $('.progressbar1').rProgressbar({
          percentage: 95,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar2').rProgressbar({
          percentage: 60,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar3').rProgressbar({
          percentage: 70,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar4').rProgressbar({
          percentage: 90,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar5').rProgressbar({
          percentage: 85,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar6').rProgressbar({
          percentage: 80,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar7').rProgressbar({
          percentage: 90,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar8').rProgressbar({
          percentage: 75,
          height:'10px',
          width:'97%',
          duration:2000,
        });
      $('.progressbar9').rProgressbar({
          percentage: 70,
          height:'10px',
          width:'97%',
          duration:2000,
        });
        //slick-slider
$('.test-item-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow:".test-button-l",
  nextArrow:".test-button-r",
  dots:true,
});

 // navbar part
 $(window).scroll(function(){
  var top = $(this).scrollTop()
  if(top > 200){
    $(".navbar").addClass("sticky-menu")
  }
  else{
    $(".navbar").removeClass("sticky-menu")
  }

  if(top > 200){
    $(".back-to-top").fadeIn(300)
  }
  else{
    $(".back-to-top").fadeOut(300)
  }
})

$(".back-to-top").click(function(){
  $("html,body").animate({scrollTop: 0},1000)
})



//scroollink part
var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 10
  }, 1000);
});
$(window).on('scroll', function () {
  var scrollTop = $(this).scrollTop();
  scrollLink.each(function () {
    var sectionhead = $(this.hash).offset().top - 40;
    if (scrollTop >= sectionhead) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});
$(".navbar-toggler").click(function(event) {
  event.stopPropagation();
  $("#hamburger-menu").toggleClass("open");
  $("#menu-container .menu-list").toggleClass("active");
  slideMenu();
});


})

