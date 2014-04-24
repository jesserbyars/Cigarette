var fire_color1 = "#FF3000"; 
var fire_color2 = "#ff5500";
var smokeTime = 45;


function isCherry() {
	//checks if the #cherry div still exists
	return $("#cherry").length > 0;
}

function isCig() {
	//checks if the #cig div still exists
	return $("#cig").length > 0;
}

function killCig() {
	//fades out the cherry and throws away the butt
	$("#cherry").fadeOut(2000, killButt);
}

function hideButt() {
	//fades out the butt and calls replace and smoke
	//$("#butt").fadeOut(100, "linear", replaceAndSmoke);
	$("#butt").hide(replaceAndSmoke);
}

function killButt() {
	//throws the butt away and then calls hideButt to fade it out
	$("#cigdiv").animate({left: "-=150", top: "+=1500"}, 2500, hideButt);
}

function flicker(t) {
	//animates to a color and then back again, t is the animation speed in seconds
	$("#cherry,#footer").animate({
		backgroundColor: fire_color2
	}, t*1000, function() {
		$("#cherry,#footer").animate({
			backgroundColor: fire_color1
		}, t*1000, flicker(t));	
	});
	
}

function smoke(t) {
	//t is equal to 1 second
	if(isCig()) {
		$("#cig").slideUp(t*1000, "linear", killCig);	
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
		smoke(smokeTime);
	}, 1000);
}

$(document).ready(function() {
	//calling smoke once causes it to endlessly call it self again
	smoke(smokeTime);
	//starts the flicker animation, which never stops, due to a recursive callback
	flicker(2.5);
});

