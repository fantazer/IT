$(document).ready(function(){function e(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var a=e.indexOf("Trident/");if(a>0){var o=e.indexOf("rv:");return parseInt(e.substring(o+3,e.indexOf(".",o)),10)}var n=e.indexOf("Edge/");return n>0&&parseInt(e.substring(n+5,e.indexOf(".",n)),10)}var t=250,a=$(".header-nav-wrap").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=t?$(".header-nav-wrap").addClass("shrink"):($("body").css("paddingTop",0),$(".header-nav-wrap").removeClass("shrink"))}),$(window).resize(function(){a=$(".header-nav-wrap").height()}),$(".header-nav__el--menu").hover(function(){$(".content-filter").animate({opacity:"1"},500).css("left",0)},function(){$(".content-filter").animate({opacity:"0"},500).css("left",-9999)}),$(".cat__el").hover(function(){$(".cat__el--first").removeClass("cat__el--active"),$(this).find(".cat__el-sub").slideDown(300)},function(){$(".cat__el--first").addClass("cat__el--active"),$(this).find(".cat__el-sub").slideUp(300)}),$(".select-beauty").niceSelect();var o=function(e){$(e+" .tab__el").click(function(){var t=$(this).index();console.log(t),$(e+" .tab__el").removeClass("tab__el--active"),$(this).addClass("tab__el--active"),$(e+" .tab-content").each(function(){$(this).index()==t+1?$(this).addClass("tab-content--active"):$(this).removeClass("tab-content--active")})})};o(".tab-wrap"),$(".modal-content").click(function(e){e.stopPropagation()});var n=0,r=function(){return $(".modal-layer").hasClass("modal-layer-show")||$(".modal-layer").addClass("modal-layer-show"),n=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"scroll",top:-n,width:"100%"}),n},i=function(){console.log("scrollPos",n),$(".modal-layer").removeClass("modal-layer-show"),$("body").removeClass("modal-fix"),$("body").css({overflow:"",position:"",top:""}),$(window).scrollTop(n),$(".modal").removeClass("modal__show"),$(".enter").removeClass("enter--open"),$(".basket").removeClass("basket--open")},s=function(e){r(),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var t=$(window).height();$(".modal-filter").height(t),$(".modal-wrap").css("height",t),$(".modal-wrap").css("minHeight",t)};$(".modal-get").click(function(){var e=$(this).data("modal");s(e)}),$(".modal-layer , .modal-close").click(function(){i()}),$(".validate-form").each(function(){$(this);$(this).validate({highlight:function(e){$(e).parent().addClass("field-error")},unhighlight:function(e){$(e).parent().removeClass("field-error")},rules:{name:{required:!0},phone:{required:!0,minlength:5,number:!0},comment:{required:!0,minlength:5},agree:{required:!0}},messages:{name:{required:"Обязательное поле"},phone:{required:"Обязательное поле",number:"Введите правильный номер",minlength:"Номер должен быть длиннее"},comment:{required:"Обязательное поле",minlength:"Сообщение должно быть длиннее"},agree:{required:!1}},submitHandler:function(e){$.ajax({type:"POST",url:"sender.php",data:$(e).serialize(),timeout:3e3}),i(),s("truemessage"),setTimeout(function(){i(),$(":input",".validate-form").not(":button, :submit, :reset, :hidden").val("").removeAttr("checked").removeAttr("selected")},2500)}})}),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var a="img/pack.html",o=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var n,r,i="localStorage"in e&&null!==e.localStorage,s=function(){t.body.insertAdjacentHTML("afterbegin",r)},l=function(){t.body?s():t.addEventListener("DOMContentLoaded",s)};if(i&&localStorage.getItem("inlineSVGrev")==o&&(r=localStorage.getItem("inlineSVGdata")))return l(),!0;try{n=new XMLHttpRequest,n.open("GET",a,!0),n.onload=function(){n.status>=200&&n.status<400&&(r=n.responseText,l(),i&&(localStorage.setItem("inlineSVGdata",r),localStorage.setItem("inlineSVGrev",o)))},n.send()}catch(d){}}(window,document);