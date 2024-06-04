var window_width = jQuery( window ).width();

jQuery(window).on("load", function(){
    //jQuery('body').fadeTo(250, 1);
    jQuery('body').addClass('pageLoaded');
});


jQuery(document).ready(function(){
	if(jQuery(window).width() > 500) {
		setTimeout(function(){ 
			jQuery(".floating-form").addClass("open");
		}, 2000);
	}
	
    jQuery('#mobile-nav-button').click(function() {
        jQuery(this).toggleClass('open');
        jQuery(".nav_secondary").toggleClass('mobile-nav-opened');
        jQuery(".main").toggleClass('animate_main');
        jQuery(".header").toggleClass('animate_header');
    });

    jQuery('.nav ul li.menu-item-has-children a').on('focusin',function(e){
        e.preventDefault();
        var this_el = jQuery(this);
        this_el.parent().addClass('hover');
    });

    jQuery('.prevent_link').click(function(e) {
        e.preventDefault();
    });


    jQuery('body').on('focusout','ul li.menu-item-has-children.hover ul li:last-child a', function(e){
        e.preventDefault();
        var this_el = jQuery(this);
        this_el.parent().parent().parent().removeClass('hover');
    });

    jQuery('li.menu-item-has-children').click(function() {
        jQuery(this).toggleClass('active').find('ul').slideToggle();
    });


    wrap_main_slider();
    home_projects_slider();
    home_testimonial_slider();
    //page_testimonial_slider();
    gallery_slider();
    sing_service_slider();
    page_blog_slider();
    projects_slder();
    //render_sliders();

    if (window_width < 1024) {
        services_slider_mobile();
    }

    jQuery('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            tCounter: '<span class="mfp-counter">%curr% מתוך %total%</span>',
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                // console.log(jQuery(item));
                return '';//item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    jQuery(document).foundation();
});


function wrap_main_slider(){
    main_slider = jQuery(".home_main_slider");
    main_slider.slick({
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      rtl: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      arrows:false,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows:false,
            slidesToShow: 1
          }
        }
      ]
    });
}

function home_projects_slider(){

    project_slider = jQuery(".home_projects_slider");
    project_slider.slick({
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 4000,
      fade: false,
      rtl: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      focusOnSelect: false,
      arrows:false,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows:false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots:false,
            slidesToShow: 1
          }
        }
      ]
    });
}

function home_testimonial_slider(){

    testimonial_slider = jQuery(".home_testimonial_slider");
    testimonial_slider.slick({
      infinite: true,
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 4000,
      fade: false,
      rtl: true,
      prevArrow: '<div class="carousel-prev carousel-arr"></div>',
      nextArrow: '<div class="carousel-next carousel-arr"></div>',
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: false,
      arrows:true,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows:false,
            slidesToShow: 1
          }
        }
      ]
    });
}

function page_testimonial_slider(){
    testimonials = jQuery(".testimonial_slider");
    testimonials.slick({
        infinite: true,
        rows: 3,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows:false,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows:false,
              slidesToShow: 1
            }
          }
        ]
    });
}

function sing_service_slider(){
	
    service_slider = jQuery(".single_service_slider-no");
    service_slider.slick({
        infinite: true,
        rows: 2,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: false,
        arrows:false,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows:false,
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        {
          breakpoint: 480,
          settings: {
            arrows:false,
            rows: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        ]
    });
}

function page_blog_slider(){
    blog_slider = jQuery(".wrap_blog-remove");
    blog_slider.slick({
        infinite: true,
        rows: 3,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: false,
        arrows:false,
        dots: true,
        responsive: [
		
        {
          breakpoint: 1024,
            settings: {
            rows:0,
            slidesToShow: 3,
            slidesToScroll: 2
            },
        },
        {
          breakpoint: 767,
          settings: {
              rows:0,
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
        ]
    });
}

function projects_slder(){
    projects_slder_wrap = jQuery(".projects_slder_wrap");
    projects_slder_wrap.slick({
        infinite: true,
        rows: 4,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: false,
        arrows:false,
        dots: true,
        responsive: [
        {
          breakpoint: 1024,
            settings: {
            rows:0,
            slidesToShow: 2,
            slidesToScroll: 2
            },
        },
        {
          breakpoint: 767,
          settings: {
              rows:0,
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
        ]
    });
}

function gallery_slider(){
    jQuery('.gallery_slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     rtl:true,
     fade: false,
     asNavFor: '.slider-nav'
    });

    jQuery('.slider-nav').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     arrows: true,
     prevArrow: '<div class="carousel-prev carousel-arr"></div>',
     nextArrow: '<div class="carousel-next carousel-arr"></div>',
     asNavFor: '.gallery_slider',
     dots: false,
     centerMode: false,
     rtl: true,
     focusOnSelect: true,
     responsive: [
     {
       breakpoint: 1024,
         settings: {
         // infinite: true,
         // speed: 1000,
         // autoplay: true,
         // autoplaySpeed: 3000,
         // rtl: true,
         slidesToShow: 4,
         // slidesToScroll: 6,
         // focusOnSelect: false,
         // arrows:false,
         // dots: true
       }
     }
     ]
    });

}



// MOBILE SLIDERS

function services_slider_mobile(){
    service_slider_mob = jQuery(".services_slider_mobile");
    service_slider_mob.slick({
        infinite: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        focusOnSelect: false,
        arrows:false,
        dots: true,
        responsive: [
        {
          breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });
}


jQuery(document).ready(function ($) {
	jQuery(".floating-form .button, .floating-form .close").on("click", function(){
		jQuery(".floating-form").toggleClass("open");
	});
});