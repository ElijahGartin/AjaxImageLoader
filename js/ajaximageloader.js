/*
Author: Elijah Gartin
Date: 2014-12-09
Description: Ajax Image Loader.  It creates an image request after a button is clicked.
*/

$( document ).ready(function() {
    console.log( "ready!" );
	
	var self = this;
	var url = "";
	
	/*EXAMPLE DEBOUNCE METHOD
	$('input.text').keyup( $.debounce( 250, text_2 ) );
	*/
	
	//Most likely will need to fix this function to narrow it down to one ajax call and it firing off the debounce method
	function ajax_call( event ) {
		//Large GIF AJAX Call
		$( "#largeClick" ).on( "click", function( event ) {
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver.gif";
		});//end .on click, function event
		
		//Small GIF AJAX Call
		$( "#smallClick" ).on( "click", function( event ) {
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver_200h.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver_200h.gif";
				
			});//end .on click, function event			
	};


	function showImage() {
		setTimeout(function(){///this function fire after 1ms delay
				$('#imageGIF').attr('src',url);
				$('#LinkToSite').show();
		}, 1); 
	}//end function showImage()
	

});//end document ready
	