var fire_color1 = "#FF3000"; 
var fire_color2 = "#ff5500";
var smokeTime = 45;
var flickerTime = 1.5;


function isCherry() {
	//this function is currently unused
	//checks if the #cherry div still exists
	return $("#cherry").css('display') != 'none';
}

function isCig() {
	//checks if the #cig div still exists
	//return $("#cig").length > 0;
	return $("#cig").css('display') != 'none';
}

function killCig() {
	//fades out the cherry and throws away the butt
	//$("#cherry").fadeOut(1000, "linear", killButt);

	setTimeout(killButt, 2000);
}

function hideButt() {
	//fades out the butt and calls replace and smoke
	//$("#butt").fadeOut(100, "linear", replaceAndSmoke);
	$("#cherry").hide();
	$("#butt").hide(replaceAndSmoke);
}

function killButt() {
	//throws the butt away and then calls hideButt to fade it out
	$("#cigdiv").animate({left: "-=150", top: "+=1500"}, 2500, hideButt);
}

function flicker() {
	//animates to a color and then back again, t is the animation speed in seconds
	//check this if again
	if (isCig() && isCherry()) {
		$("#cherry,#footer").animate({backgroundColor: fire_color2}, 
			flickerTime*1000, function() {
				$("#cherry,#footer").animate({backgroundColor: fire_color1}, 
					flickerTime*1000, function() {
						if (isCig() && isCherry()) {
							flicker();
						}
					});	
		});
	} 
}

function smoke() {
	//t is equal to 1 second
	if(isCig()) {
		$("#cig").slideUp(smokeTime*1000, "linear", killCig);
		//starts the flicker animation, which doesn't stop until the cigarette body is gone, due to a recursive callback
		flicker();	
	}		
}

function replaceAndSmoke() {
	//fixes the position after throwing away and fades in a new cigarette
	$("#cigdiv").css({"left":"+=150", "top":"-=1500"});
	$("#butt").fadeIn(1000);
	$("#cig").fadeIn(1000, function() {
		$("#cherry").show();
	});
	setTimeout(function() {
		smoke();
	}, 200);
}

$(document).ready(function() {
	//calling smoke once causes it to endlessly call it self again
	smoke();
});

