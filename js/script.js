$(document).ready(function(){
	$(".element").animate({opacity:'0.9'});
	$(".element").toggle(function(){
		$(this).animate({borderTopLeftRadius:'10px', borderTopRightRadius:'10px', width:'15%'});
		
		});

});