$(document).ready(function(){function e(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var n=e.indexOf("Trident/");if(n>0){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var r=e.indexOf("Edge/");return r>0&&parseInt(e.substring(r+5,e.indexOf(".",r)),10)}var t=250,n=$(".header-nav-wrap").height();$(window).scroll(function(){var e=$(this).scrollTop();e>=t?$(".header-nav-wrap").addClass("shrink"):($("body").css("paddingTop",0),$(".header-nav-wrap").removeClass("shrink"))}),$(window).resize(function(){n=$(".header-nav-wrap").height()}),$(".header-nav__el--menu").hover(function(){$(".content-filter").animate({opacity:"1"},500).css("left",0)},function(){$(".content-filter").animate({opacity:"0"},500).css("left",-9999)}),$(".cat__el").hover(function(){$(".cat__el--first").removeClass("cat__el--active"),$(this).find(".cat__el-sub").slideDown(300)},function(){$(".cat__el--first").addClass("cat__el--active"),$(this).find(".cat__el-sub").slideUp(300)}),$(".select-beauty").niceSelect();var a=function(e){$(e+" .tab__el").click(function(){var t=$(this).index();console.log(t),$(e+" .tab__el").removeClass("tab__el--active"),$(this).addClass("tab__el--active"),$(e+" .tab-content").each(function(){$(this).index()==t+1?$(this).addClass("tab-content--active"):$(this).removeClass("tab-content--active")})})};a(".tab-wrap"),console.log(e()),e()<=14&&e()&&($("body").empty(),$("body").prepend('<div class="old-browser"><div class="old-browser-text"> Сайт не поддерживае Браузер Internet Explorer</div><br><div class="old-browser-text"> Установите <br><br> Chrome Firefox Opera </div><br></div>')),svg4everybody(),localStorage.clear(),sessionStorage.clear(),$(window).unload(function(){localStorage.clear()})}),function(e,t){"use strict";var n="img/pack.html",a=1;if(!t.createElementNS||!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var r,i,o="localStorage"in e&&null!==e.localStorage,s=function(){t.body.insertAdjacentHTML("afterbegin",i)},c=function(){t.body?s():t.addEventListener("DOMContentLoaded",s)};if(o&&localStorage.getItem("inlineSVGrev")==a&&(i=localStorage.getItem("inlineSVGdata")))return c(),!0;try{r=new XMLHttpRequest,r.open("GET",n,!0),r.onload=function(){r.status>=200&&r.status<400&&(i=r.responseText,c(),o&&(localStorage.setItem("inlineSVGdata",i),localStorage.setItem("inlineSVGrev",a)))},r.send()}catch(l){}}(window,document);