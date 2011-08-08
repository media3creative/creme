var whichPic = 1;
var currentPage = "#page2"
var currentSubPage = "#page1-sub1-page"
var bg_1_pic = "bg1.jpg"
var bg_2_pic = "bg1.jpg"
var agent=navigator.userAgent.toLowerCase();
var is_iphone = ((agent.indexOf('iphone') != -1));
var is_ipad = ((agent.indexOf('ipad') != -1));
var is_safari = ((agent.indexOf('safari') != -1));

$(document).ready(function() {
	document.body.style.display = 'block';

	$(".content-type-1").fadeToggle();
	$("#page1-sub1-page").fadeToggle();


	changePage("#page1")
	$(".bg2").css("display", "none");
	$("body").css("overflow-x", "hidden");
	//=======ANIMATION FOR MAIN MENU===========
	//====FIX SAFARI MARGIN PROBLEM============
	if(is_safari){
		$(".menu-hl").css("margin-left","-10px");
	}
	//=====MOUSE ENTER MENU ITEM==============
	$('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').mouseenter(
	  function () {
		//alert($(this).attr("id") != '#main-6-link');
				$(this).next().animate(
					{"margin-top":"-80px","background-color":"#EF6AA1","opacity":"0.9"},
					{duration: 250
					,ease: "swing"
					,queue: false}
				);
		
	  }
	);
	//=====MOUSE LEAVE MENU ITEM==============
	$('#main-1-link,#main-2-link,#main-3-link,#main-4-link,#main-5-link,#main-6-link,#main-7-link,#main-8-link').mouseleave(
	  function () {
				$(this).next().animate(
					{"margin-top":"-200px", "background-color":"black", "opacity":"0"},
					{duration: 650
					,ease: "linear"
					,queue: true}
				);
	  }
	);
	//=====MOUSE ENTER MENU ITEM==============
	$('%ul.submenu li').hover(
	  function () {
		//alert("tutu")
	    	$(this).animate(
							{"width":"300px"},
							{duration: 250
							,ease: "linear"
							,queue: true}
						);
	  },
	  function () {
	    $(this).animate(
							{"width":"150px"},
							{duration: 250
							,ease: "linear"
							,queue: false}
						);
	  }
	);
	$('%ul.submenu li').click(
	  function () {
			toggleSubPage(this)
	  }
	);

	$('#main-1-link').click(function(){
		changePage("#page1");
		switchBg("bg1.jpg");
		$("p").removeClass("black-text");
	});
	
	$('#main-2-link').click(function(){
		changePage("#page2");
		switchBg("bg3.jpg");
		$("p").addClass("black-text");
		// pageComeOut();
	});
	$('#main-3-link').click(function(){
		changePage("#page3");
		switchBg("bg4.jpg");
		$("p").addClass("black-text");
		// pageComeOut();
	});
	$('#main-4-link').click(function(){
		changePage("#page4");
		switchBg("bg5.jpg");
		$("p").addClass("black-text");
		// pageComeOut();
	});
	$('#main-5-link').click(function(){
		changePage("#page5");
		switchBg("bg2.jpg");
		$("p").removeClass("black-text");
		// pageComeOut();
	});
	$('#main-6-link').click(function(){
		changePage("#page6");
		switchBg("bg6.jpg");
		$("p").addClass("black-text");
		// pageComeOut();
	});
	$('#main-7-link').click(function(){
		changePage("#page7");
		switchBg("bg2.jpg");
		$("p").removeClass("black-text");
		// pageComeOut();
	});
	$('#main-8-link').click(function(){
		changePage("#page8");
		switchBg("bg6.jpg");
		$("p").removeClass("black-text");
		// pageComeOut();
	});
	//setInterval(slideShow,9000);

});
function toggleSubPage(input){
	var target = "#"+ $(input).attr("id") + "-page"
	if($(target).css("display") == "none"){
		$(target).slideToggle();
		$(currentSubPage).slideToggle();
		currentSubPage = target
	}
}
function ipadFunc(){
	if(is_ipad
		|| is_iphone){
		//window.location.reload(true);
		//alert(parseInt($("window").css("height")))
		//alert(window.orientation)
		if( parseInt($(".content-container").css("height")) > 600
		&& (window.orientation == 90 ||  window.orientation == -90)
		){
			$(".bg1").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
			$(".bg2").css(
				{"height": parseInt($(".content-container").css("height"))+ 150 +"px"}
				);
		}else{
				$(".bg1").css(
					{"height": "100%"}
					);
				$(".bg2").css(
					{"height": "100%"}
					);
		}
	};
}
$(window).resize(function() {
 	var middlePoint = (parseInt($("body").css("width"))/2) - (parseInt($(currentPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	//alert("tutu")
	$(currentPage).css("left",inPoint)
	$(".content-container").css("height",$(".bod"))
});

//===============

function changePage(targetPage){
	//var inPoint = (parseInt($("body").css("width"))/2) - (parseInt($(targetPage).css("width"))/2) + 30 + "px"
	var inPoint = "0px"
	var outPoint2 =  (0 - parseInt($(targetPage).css("width"))) + "px"
	var outPoint =  (parseInt($("body").css("width")) + parseInt($(targetPage).css("width"))) + "px"
	//alert(inPoint);
	if(currentPage != targetPage){
		$(targetPage).css("left",outPoint2)
		$(targetPage).fadeIn(100).animate(
		{'left':inPoint},"slow","swing"
		);
		//$(currentPage).fadeOut();
		$(currentPage).animate(
		{'left':"2000px"},"slow","linear"
		).fadeOut("fast");
		currentPage = targetPage
	};
}
function slideShow(){
	if(currentPage == "#page1"){
		whichPic += 1;
		if(whichPic == 1){
			switchBg("bg1.jpg");
		}
		if(whichPic == 2){
			switchBg("bg2.jpg");
		}
		if(whichPic == 3){
			switchBg("bg3.jpg");
		}
		if(whichPic == 4){
			switchBg("bg4.jpg");
		}
		if(whichPic == 5){
			switchBg("bg5.jpg");
			whichPic = 0;
		}
	}
	//$(".bg").delay("300").fadeIn();
}
function switchBg(whichBg){

	$(".bg2").css("display","block");
	$(".bg2").css("background-image","url(/images/"+ bg_1_pic + ")");
	$(".bg1").css("display","none");
	$(".bg1").css("background-image","url(/images/"+ whichBg + ")");
	
	$(".bg2").fadeOut(1500);
	$(".bg1").fadeIn(1500);
	bg_2_pic = bg_1_pic;
	bg_1_pic = whichBg;

}
