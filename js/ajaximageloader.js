/*
Author: Elijah Gartin
Date: 2014-12-09
Updated: 2014-12-17
Description: Ajax Image Loader.  It creates an image request after a button is clicked.  It controls the allowed amount of requests by utilizing a debounce method.
*/

$( document ).ready(function() {
    console.log( "ready!" );
	
	var self = this;
	var url = "";
	
	//Large GIF Action ******/
	$( "#largeClick" ).on( "click", function( event ) {
		$.debounce(large_ajax_call(), 5000 )
	});//end .on click, function event
	
	//Small GIF Action ******/
	$( "#smallClick" ).on( "click", function( event ) {
		$.debounce(small_ajax_call(), 5000 )
	});//end .on click, function event
	
	//Large GIF AJAX Call
	function large_ajax_call() {
		$.ajax({
			type: "GET",
			url: "img/KunTaoRevolver.gif",
			success: showImage()
		});//end of .ajax call
		url = "img/KunTaoRevolver.gif";
	};//end large_ajax_call function event
	
	//Small GIF AJAX Call
	function small_ajax_call() {
		$.ajax({
			type: "GET",
			url: "img/KunTaoRevolver_200h.gif",
			success: showImage()
		});//end of .ajax call
		url = "img/KunTaoRevolver_200h.gif";
			
	};//end small_ajax_call function event			

	//This Function will change the source in the img tag and change it's status from hide() to show().
	function showImage() {
		setTimeout(function(){///this function fire after 1ms delay
				$('#imageGIF').attr('src',url);
				$('#LinkToSite').show();
		}, 1); 
	}//end function showImage()
	
});//end document ready
	