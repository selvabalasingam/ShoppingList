$(document).ready(function(){
	$(".add").on("click", function(){
		var item = $("input[name=item]").val();
		$("#shopping-list").append("<li>" + item + "</li>");
		$("input[name=item]").val("");
		event.preventDefault(); //with this when you can also hit "enter" instead of clicking on the button all the time
	})	
}); 



//1st - get text from input box and display it on page
//2nd - delete an item after we've added it
//3rd - check off an item after it has been added