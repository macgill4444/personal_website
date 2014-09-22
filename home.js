$(document).ready(function(){ 

	$(".my_name").mouseover(function(){
		$(this).css("color","royalblue");
		$(this).css("text-shadow","-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red")
	});

	$(".my_name").mouseleave(function(){
		$(this).css("color","#333");
		$(this).css("text-shadow","none")

	});

	function skrollr_init() 
	{
		var x = skrollr.init({
			render: function(data) {
				//Debugging - Log the current scroll position.
            	console.log(data.curTop);
			}
		})
	}
	skrollr_init();

	function tester() 
	{
		console.log("in tester");
		//console.log($(".tester").attr("background-color"));
	}

	tester();


})