		// for menu btn
		$('.btn-menu').click(function(){
			$('#menu').css('right','0px');
		});

		$(document).on("click",".menu-content,.btn-close",function(){
			$('#menu').css('right','-2000px');

		});

		// for typing 
		  typed = new Typed('#typed', {
		  strings: ['Web Developer','Full Stack Developer','Freelancer','Competitive Programmer'],
		  typeSpeed: 70,
		  backSpeed: 70,
		  loop:true
		});

		$('.special.cards .image').dimmer({
		  on: 'hover'
		});

		// bottom to top
		$(document).ready(function(){
			$(window).scroll(function(){
				if($(this).scrollTop() > 5)
					$('#back-to-top').css('display','block');
				else
					$('#back-to-top').css('display','none');
			});

			// for animation
			$('.aboutMe-js-wp').waypoint(function(direction) {
			    $('.aboutMe-js-wp').addClass('animate__animated animate__fadeInUp')
			  }, {
			    offset: '50%'
			});

			$('.skills-js-wp').waypoint(function(direction) {
			    $('.skills-js-wp').addClass('animate__animated animate__fadeInLeft');
			    $('.skills-per-view').each(function(){
					thisVal = $(this).text();
					$(this).parent('.skill-row-per').animate({width:thisVal},2000)
				});

			  }, {
			    offset: '50%'
			});

			$('.project-js-wp .p1').waypoint(function(direction) {
			    $('.project-js-wp .p1').addClass('animate__animated animate__rollIn')
			  }, {
			    offset: '50%'
			});

			$('.project-js-wp .p2').waypoint(function(direction) {
			    $('.project-js-wp .p2').addClass('animate__animated animate__rollIn')
			  }, {
			    offset: '50%'
			});

			$('.exper-left-js-wp').waypoint(function(direction) {
			    $('.exper-left-js-wp').addClass('animate__animated animate__fadeInLeft')
			  }, {
			    offset: '50%'
			});

			$('.exper-right-js-wp').waypoint(function(direction) {
			    $('.exper-right-js-wp').addClass('animate__animated animate__fadeInRight')
			  }, {
			    offset: '50%'
			});

			$('.achieve-left-js-wp').waypoint(function(direction) {
			    $('.achieve-left-js-wp').addClass('animate__animated animate__fadeInLeft')
			  }, {
			    offset: '50%'
			});

			$('.achieve-right-js-wp').waypoint(function(direction) {
			    $('.achieve-right-js-wp').addClass('animate__animated animate__fadeInRight')
			  }, {
			    offset: '50%'
			});
		});

		




		// scroll top
		// $(window).scroll(function(){
		//     $('#back-to-top button').toggleClass('d-block', $(this).scrollTop() > 5);
		// });
		// $(document).on('click', '#back-to-top', function(){
		//     window.scrollTo(0, 1);
		// });
