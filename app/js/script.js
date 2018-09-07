$(document).ready(function(){

	var widthWindow = $('window').width();

	//fancybox
	$('.fancybox').fancybox({
		/*thumbs : {
			autoStart : true
		},*/
		buttons : [
			'zoom',
			'close'
		]
	});
	//fancybox===end

	//fix header
	var shrinkHeader = 250;
	var heightHeader=$('.header').height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				//$('body').css('paddingTop',heightHeader);
				$('.header').addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					$('.header').removeClass('shrink');
			}
	});

	$(window).resize(function(){
		heightHeader=$('.header').height();
	});
	//fix header===end

	//animate hover
	$('.header-nav__el--menu').hover(function() {
        $('.content-filter').animate({
            opacity : '1',
        }, 500).css('left',0);
    },function() {
        $('.content-filter').animate({
            opacity : '0',
        }, 500).css('left',-9999);
    });


		$('.cat__el-content').click(function(){
			var current = $(this).closest('.cat__el');
			$('.cat__el').not(current).find('.cat__el-sub').hide();
			$('.cat__el').removeClass('cat__el--active');
			current.addClass('cat__el--active').find('.cat__el-sub').slideToggle();
		});
		$('.cat__el').on("click", function (event) {
			event.stopPropagation();
		});

	$(document).on("click", function () {
			$('.cat__el').find('.cat__el-sub').slideUp();
	});
	//animate hover===end

	// Style select
	$('.select-beauty').niceSelect();
	// Style select === end

	var initTab = function(el){
		$(el+' .tab__el').click(function(){
		var currentTab = $(this).index();
			console.log(currentTab);
			$(el+' .tab__el').removeClass('tab__el--active');
			$(this).addClass('tab__el--active');
			$(el+' .tab-content').each(function(){
				if($(this).index()==currentTab+1){
					$(this).addClass('tab-content--active')
				}else{
					$(this).removeClass('tab-content--active')
				}
			})
		});
	};
	initTab(".tab-wrap");
	
	//modals
	$('.modal-content').click(function(event){
		event.stopPropagation();
	});
	var scrollPos = 0;

	var openModal = function () {
	if(!$('.modal-layer').hasClass('modal-layer-show')){
		$('.modal-layer').addClass('modal-layer-show');
	}
	 scrollPos = $(window).scrollTop();
		$('body').css({
			overflow: 'hidden',
			position: 'fixed',
			overflowY: 'scroll',
			top : -scrollPos,
			width:'100%'
		});
		return scrollPos;
	};

	var closeModal = function () {
		console.log("scrollPos",scrollPos);
  	$('.modal-layer').removeClass('modal-layer-show');
  	$("body").removeClass("modal-fix");
  	$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
    $(window).scrollTop(scrollPos);
    $('.modal').removeClass('modal__show');
		$('.enter').removeClass('enter--open');
		$('.basket').removeClass('basket--open');
	};

	var initModal = function(el){
		openModal();
		$('.modal').each(function () {
			if ($(this).data('modal')===el){
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);
		$('.modal-wrap').css('height',modalHeightCont );
		$('.modal-wrap').css('minHeight',modalHeightCont );
	}

	$('.modal-get').click(function (){
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-layer , .modal-close').click(function (){
		closeModal();
	});
	//modals === end

	//validate
	$('.validate-form').each(function() {
		var curentForm = $(this);
    $(this).validate({
    			highlight: function(element) { //даем родителю класс если есть ошибка
							$(element).parent().addClass("field-error");
					},
					unhighlight: function(element) {
							$(element).parent().removeClass("field-error");
					},
		    	rules:{ //правила для полей
						name:{
							required:true,
						},
						phone:{
							required:true,
							minlength:5,
							number:true
						},
						comment:{
							required:true,
							minlength:5,
						},
						agree: {
							required: true
						}
					},
					messages:{
						name:{
							required: 'Обязательное поле',
						},
						phone:{
							required: 'Обязательное поле',
							number:'Введите правильный номер',
							minlength:'Номер должен быть длиннее',
						},
						comment:{
							required: 'Обязательное поле',
							minlength:'Сообщение должно быть длиннее',
						},
						agree:{
							required: false,
						}
					},
					submitHandler : function(form){
						$.ajax({ //отправка ajax
						            type: "POST",
						            url: "sender.php",
						            data: $(form).serialize(),
						            timeout: 3000,
						          });
							closeModal();
							initModal("truemessage");
							setTimeout(function(){
										closeModal();
										$(':input','.validate-form') //очитска формы от данных
										  .not(':button, :submit, :reset, :hidden')
										  .val('')
										  .removeAttr('checked')
										  .removeAttr('selected')
							},2500)

				}
		    });
		});
 	//validate ===end

	//slider staff
	$('.footer-slider').slick({
		slidesToShow: 1,
		autoplay: false,
		speed: 500,
		vertical:false,
		arrows:false,
	});
	$('.toolbar-article__slider').slick({
		slidesToShow: 1,
		autoplay: true,
		speed: 5500,
		vertical:false,
		arrows:false,
	});

	$('.news-slider').slick({
		slidesToShow: 2,
		autoplay: true,
		speed: 5500,
		vertical:false,
		arrows:false,
		dots:true,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
	  ]
	});

	$('.customer').slick({
		slidesToShow: 6,
		autoplay: true,
		speed: 1500,
		vertical:false,
		arrows:false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}
	  ]
	});

	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
	$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});

		//mobile init
		//init only in mobile
		var sliderMobile = function(el){
			if( currentSize < 641){
					$(el).not('.slick-initialized').slick({
						responsive: [
							{
								breakpoint: 9999,
								settings: "unslick"
							},
							{
								breakpoint: 640,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
									infinite: true,
									prevArrow: false,
									nextArrow: false,
									centerMode: true,
									centerPadding: '20px',
									dots: true
								}
							}
						]
					});
			}
			};
		var currentSize = $(window).width();

		sliderMobile('.command-list, .popular,.review__wrap,.b-wrap,.course-treners');
		$(window).resize(function(){
				currentSize = $(window).width();
				sliderMobile('.command-list, .review__wrap,.b-wrap,.course-treners');
				return currentSize;
		});
		//mobile init===end

	//slick===end

	//slider staff===end

	//show mobile menu
	$('.header-nav--mobile__toggle').click(function(){
		$('.header-nav--mobile').slideToggle();
		$(this).toggleClass('header-nav--mobile__toggle--open')
	});
	//show mobile menu===end
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

	console.log(detectIE());
	if (detectIE() <= 14 && detectIE()) {
		$('body').empty();
		$('body').prepend('' +
		 '<div class="old-browser">' +
			'<div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br>' +
			'<div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br>' +
		'</div>');
	}

	//for init SVG 
	//svg4everybody();
	// ==== clear storage =====
	 localStorage.clear();
	 sessionStorage.clear();
	 $(window).unload(function(){
		 localStorage.clear();
	 });
	// ==== clear storage end =====

//mobile menu
	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$('.header').toggleClass('head--up');
		$(this).toggleClass('head-toggle--open');
		$('.header-nav-wrap').toggleClass('header-nav-wrap--open');
		if($('.modal-layer').hasClass('modal-layer-show')){
			closeModal();
		}else{
			openModal();
		}
		shrinkHeader = 0
	});
	$('.header-nav-wrap').on("click", function (event) {
		event.stopPropagation();
	});

	$(document).on("click", function () {
			$('.header').removeClass('head--up');
			$(this).removeClass('head-toggle--open');
			$('.header-nav-wrap').removeClass('header-nav-wrap--open');
			shrinkHeader = 250
	});
	//mobile menu===end


	//toggle schedule menu
	$('.schedule__toggle').click(function(){
		$(this).toggleClass('schedule__toggle--open');
		$(this).closest('.schedule__row').find('.schedule__el--price').toggle();
		$(this).closest('.schedule__row').find('.schedule__row-content-wrap').slideToggle();
	});
	//toggle schedule menu===end

	//toggle filter schedule
	$('.schedule-main-title__icon').click(function(){
		$('.schedule-filter__wrap').slideToggle();
		$(this).toggleClass('schedule-main-title__icon--active');
	});
	//toggle filter schedule===end

	//smooth scroll to id
	var scrollToID = function(from,to){
		$(from).click(function() {
			$([document.documentElement, document.body]).animate({
					scrollTop: $(to).offset().top - 60
			}, 1000);
	});
	}

	scrollToID('.intro__get-el--more','.section--category')
	//smooth scroll to id===end

	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/

})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );