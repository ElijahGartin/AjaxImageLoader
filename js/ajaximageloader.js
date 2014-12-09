/*
Author: Elijah Gartin
Date: 2014-12-09
Description: Ajax Image Loader.  It creates an image request after a button is clicked.
*/

$( document ).ready(function() {
    console.log( "ready!" );
	
	var self = this;
	var url = "";
	var flag;
	
	
		$( "#largeClick" ).on( "click", function( event ) {
			var flag = 1;
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver.gif";
		});//end .on click, function event
	
		$( "#smallClick" ).on( "click", function( event ) {
			var flag = 0;
			$.ajax({
				type: "GET",
				url: "img/KunTaoRevolver_200h.gif",
				success: showImage()
			});//end of .ajax call
			url = "img/KunTaoRevolver_200h.gif";
		});//end .on click, function event	
	
	//getURL() Function not currently working - needs more thought
/*		function getURL(){
			if (flag < 1){
				url = "img/KunTaoRevolver_200h.gif";
				return "img/KunTaoRevolver_200h.gif";
			}
			else if (flag >= 1){
				url = "img/KunTaoRevolver.gif";
				return "img/KunTaoRevolver.gif";
				
			}//end if
			console.log("getURL ran");	
		}//end of function get URL
*/	
		function showImage() {
			setTimeout(function(){///this function fire after 1ms delay
      				$('<img src="'+ url +'" />').appendTo( "#imageGIF" );
		   			$('#LinkToSite').show();
			}, 1);
			
		   
		}//end function showImage()
	

	});//end document ready
	