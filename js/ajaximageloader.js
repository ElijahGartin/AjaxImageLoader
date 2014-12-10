/*
Author: Elijah Gartin
Date: 2014-12-09
Description: Ajax Image Loader.  It creates an image request after a button is clicked.
*/

$( document ).ready(function() {
    console.log( "ready!" );
	
	var self = this;
	var url = "";
	
		$( "#largeClick" ).on( "click", function( event ) {
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver.gif";
		});//end .on click, function event
	
		$( "#smallClick" ).on( "click", function( event ) {
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver_200h.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver_200h.gif";
			
		});//end .on click, function event	

		function showImage() {
			setTimeout(function(){///this function fire after 1ms delay
      				$('#imageGIF').attr('src',url);
		   			$('#LinkToSite').show();
			}, 1);
			
		   
		}//end function showImage()
	

	});//end document ready
	