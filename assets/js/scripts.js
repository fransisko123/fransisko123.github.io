
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

function initAnggota(){
	$('#data-nia').removeClass('d-none');
	$('#data-profile').addClass('d-none');
	$('#data-password').addClass('d-none');
	$('#data-confirm-password').addClass('d-none');
	$('.signIn-createBtn').addClass('d-none');
	$('#data-agree').addClass('d-none');

	$('#data-diri').addClass('d-none');
	$('#data-phone').addClass('d-none');
	$('#data-alamat').addClass('d-none');
	$('#data-email').addClass('d-none');

}

function initBukanAnggota(){
	$('#data-nia').addClass('d-none');
	$('#data-password').removeClass('d-none');
	$('#data-confirm-password').removeClass('d-none');
	$('.signIn-createBtn').removeClass('d-none');
	$('#data-agree').removeClass('d-none');
	$('#data-diri').removeClass('d-none');
	$('#data-phone').removeClass('d-none');
	$('#data-alamat').removeClass('d-none');
	$('#data-email').removeClass('d-none');
	$('#nia').val('');
}
function initNotChoice(){
	$('#data-nia').addClass('d-none');
	$('#data-profile').addClass('d-none');
	$('#data-password').addClass('d-none');
	$('#data-confirm-password').addClass('d-none');
	$('.signIn-createBtn').addClass('d-none');
	$('#data-agree').addClass('d-none');
	$('#data-diri').addClass('d-none');
	$('#data-phone').addClass('d-none');
	$('#data-alamat').addClass('d-none');
	$('#data-email').addClass('d-none');
	$('#nia').val('');
}

function search(){
	let values = $('#nia').val();
	if(values === '0419451025'){
		$('#data-profile').removeClass('d-none');
		$('#data-password').removeClass('d-none');
		$('#data-confirm-password').removeClass('d-none');
		$('.signIn-createBtn').removeClass('d-none');
		$('#data-agree').removeClass('d-none');	
	}
}


jQuery(document).ready(function() {
	$(".owl-carousel").owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
		// autoWidth:true,
		// autoHeight:true
	});
	
	
	// datatables
	$("#example").DataTable({
    aaSorting: [],
    responsive: true,

    columnDefs: [
      {
        responsivePriority: 1,
        targets: 0
      },
      {
        responsivePriority: 2,
        targets: -1
      }
    ]
  });

	//$('.dataTables_length').css({text-align: "left"});
	$('.dataTables_filter').hide();
	$('[data-toggle="tooltip"]').tooltip();  

	//show hide form
	$('#keanggotaan').on('change', function(){
		let values = $(this).val();
		console.log(values);
		if(values === 'ya'){
			initAnggota();
		}else if(values === 'tidak'){
			initBukanAnggota();
		}else{
			initNotChoice();
		}
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
		//$('nav').toggleClass('navbar-no-bg');	

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
