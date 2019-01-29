$('.owl-carousel').owlCarousel({
	autoplay:true,
	autoHeight:true,
	center: true,
	autoplayTimeout:3000,
	dots: true,
	loop:true,
	margin:10,
	nav:false,
	autoplay:true,
	smartSpeed:1000,
	responsiveClass:true,
	responsive:{
			0:{
					items:1,
					loop:false,
					dots:false
					
			},
			600:{
					items:2
			},
			1000:{
					items:3
			}
	}
})


$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});




$.validate({
    modules : 'location, date, security, file',
    onModulesLoaded : function() {
      $('#country').suggestCountry();
    }
  });

  // Restrict presentation length
  $('#presentation').restrictLength( $('#pres-max-length') );

