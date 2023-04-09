
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	$(".owl-carousel").owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true		
	});
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .carousel-caption h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');	

	});
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		var $subMenu = $(this).next(".dropdown-menu");
		$subMenu.toggleClass('show');
	
	
		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
			$('.dropdown-submenu .show').removeClass("show");
		});
	
	
		return false;
	});

	/*

	*/
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay,listMonth'
		},
		defaultDate: moment(new Date(), 'yyyy-MM-dd').format(),
		navLinks: true, // can click day/week names to navigate views
		businessHours: true, // display business hours
		editable: true,
		events: [
			{
				title: 'Business Lunch',
				start: '2023-04-03T13:00:00',
				constraint: 'businessHours',
				color: '#a10f2b'
			},
			{
				title: 'Meeting',
				start: '2023-04-13T11:00:00',
				constraint: 'availableForMeeting', // defined below
				color: '#a10f2b'
			},
			{
				title: 'Conference',
				start: '2023-04-18',
				end: '2023-04-20',
				color: '#a10f2b'
			},
			{
				title: 'Party',
				start: '2023-04-29T20:00:00',
				color: '#a10f2b'
			},

			// areas where "Meeting" must be dropped
			{
				id: 'availableForMeeting',
				start: '2023-04-11T10:00:00',
				end: '2023-04-11T16:00:00',
				rendering: 'background'
			},
			{
				id: 'availableForMeeting',
				start: '2021-11-13T10:00:00',
				end: '2021-11-13T16:00:00',
				rendering: 'background'
			},

			// red areas where no events can be dropped
			{
				start: '2021-11-24',
				end: '2021-11-28',
				overlap: false,
				rendering: 'background',
				color: '#ff9f89'
			},
			{
				start: '2021-11-06',
				end: '2021-11-08',
				overlap: false,
				rendering: 'background',
				color: '#ff9f89'
			}
		]
	});

    /*
        Background slideshow
    */
    // $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");
    
    /*
	    Wow
	*/
	
	new WOW().init();
	
});
