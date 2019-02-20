
(function ($) {
  "use strict";
  /*------------------------------------------------------------------
  [Table of contents]

  -------------------------------------------------------------------*/


     /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });

   }




      /* ----------------------------------------------------------- */
   /*  Site search
   /* ----------------------------------------------------------- */
        if ($('.xs-modal-popup').length > 0) {
         $('.xs-modal-popup').magnificPopup({
             type: 'inline',
             fixedContentPos: false,
             fixedBgPos: true,
             overflowY: 'auto',
             closeBtnInside: false,
             callbacks: {
                 beforeOpen: function beforeOpen() {
                     this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                 }
             }
         });
     }


/*==========================================================
     banner slider
============================================================*/

$(".features-slider").owlCarousel({
   items: 1,
   loop: true,
   smartSpeed: 2000,
   dots: false,
   nav: true,
   navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
   autoplay: true,
   mouseDrag: true,
   responsive: {
      0: {
         nav: false,
         mouseDrag: false,
      },
      600: {
         nav: false,
         mouseDrag: false,
      },
      1000: {
         nav: true,
         mouseDrag: true,
      }
   }
});


 /*==========================================================
     recent work
     ======================================================================*/
     $('#mixcontent').mixItUp({
      animation: {
          effects: 'fade translateX(50%)',
          reverseOut: true,
          duration: 1000
      },
      load: {
          filter: 'all'
      }
  });


	  $(".testimonial-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-arrow-left'></i>", "<i class='icon icon-arrow-right'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1,
         }
      }

   });
	//testimonial slide
	

	
   //Partners slide

   $("#partners-carousel").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: false,
      margin: -50,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      slideSpeed: 500,
      navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
      items: 5,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         },
         1000: {
            items: 5,
         }
      }

   });

/*==========================================================
     funfact 
     ======================================================================*/
     var skl = true;
     $('.single-funfact').appear();
  
     $('.single-funfact').on('appear', function () {
        if (skl) {
           $('.funfact-title').each(function () {
              var $this = $(this);
              jQuery({
                 Counter: 0
              }).animate({
                 Counter: $this.attr('data-counter')
              }, {
                 duration: 8000,
                 easing: 'swing',
                 step: function () {
                    var num = Math.ceil(this.Counter).toString();
                    if (Number(num) > 99999) {
                       while (/(\d+)(\d{3})/.test(num)) {
                          num = num.replace(/(\d+)(\d{3})/, '');
                       }
                    }
                    $this.html(num);
                 }
              });
           });
           skl = false;
        }
     });

          /*======================== 
         navigation 
    ==========================*/
    if ($('.header-nav').length > 0) {
      $(".header-nav").navigation({
          effect: "fade",
          mobileBreakpoint: 992,
      });
  }
 
})

(jQuery);









