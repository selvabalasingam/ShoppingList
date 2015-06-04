$(document).ready(function(){		
	// 1st get text from input box and display it on page
	$(".add").on("click", function(){
		event.preventDefault(); //with this when you can also hit "enter" instead of clicking on the button all the time
		var item = $("input[name=item]").val();
	if (item <= 0) {
		alert ("You did not type your item")
	} else {
		$("#shopping-list").append("<li>" + "<button class=addbutton>+</button>" + " " + "<button class=removebutton>-</button>" + " " + item + "</li>");
		$("input[name=item]").val("");
	}
	})	
	// 2nd delete an item after we've added it
	$("ul").on('click', 'button.removebutton', function() {$(this).closest("li").remove();});
}); 

//3rd - check off an item after it has been added