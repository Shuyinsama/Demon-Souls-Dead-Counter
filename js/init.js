/*
Global Variables
*/

var count = 0;

/*
Init function
This gets a possible cookie
*/

$(document).ready(function() {
	var theCookie = $.cookie("deaths");
	$('#themes').ColorPicker({flat: true,
		onChange: function(hsb, hex, rgb, el) {
			console.log(hex);
			$("#count").css('color', '#'+hex);
		}
	});
	
	$("#count").html(count);

	if(theCookie) {
		count = theCookie;
		$("#count").html(count);
	} else {
		count = 0;
	}
	

	$(document).keypress(function(e) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			count++;
			$('#count').html(count);
			$.cookie("deaths", count, {expires: 356} );
			$.fn.checkValue();
			//document.cookie = "deaths=" + encodeURIComponent(count) + "; max-age=" + 60*60*24*30 + "; path=/; domain=content.redactiepartner.nl" ;
		}
	});


	$("#cookiereset").click(function() {
		$.removeCookie("deaths");
	});
});

/*
Some extended functions to give the user more control over the counter
*/

jQuery.fn.extend({
	setCookie: function(cookiename) {
		cookiename = $("#saveCookieProfile").val();
		$.cookie(cookiename, count, {expires: 356});
		console.log('save profile: ' + cookiename);
	},

	getCookie: function(cookiename) {
		cookiename = $("#loadCookieProfile").val();
		var profile = $.cookie(cookiename);
		console.log('load profile: ' + cookiename);
		count = profile;

		$("#count").html(count);

	},

	increaseCounter: function() {
		count++;
		$("#count").html(count);
	},

	decreaseCounter: function() {
 		count--;
 		$("#count").html(count);
	},

	updateCounter: function(count) {
		$("#count").html(count);
	},

	updateCounterFromTextInput: function(input) {
		input = $("#counterValue").val();
		count = input;

		this.checkValue();

		$("#count").html(input);
	},

	checkValue: function() {
		if (count == 20 && count <= 30) {
			console.log("great start!");
		} else if (count == 31 && count <= 40) {
			console.log("don't die to much!");
		}
	}
});