$(document).ready(function(){
	$(".add").on("click", function(){
		var item = $("input[name=item]").val();
		$("#shopping-list").append("<li>" + item + "</li>");
		$("input[name=item]").val(""); 
	})

	
}); 



//1st - get text from input box and display it on page
//2nd - delete an item after we've added it
//3rd - check off an item after it has been added