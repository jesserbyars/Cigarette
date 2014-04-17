$.easing.crazy = function(t, m, s, e, t2) {
	if(t<0.5) {
		return t*4;
	} else {
		return -2*t + 3;
	}
};

function isCherry() {
	return $("#cherry").length > 0;
}

function isCig() {
	return $("#cig").length > 0;
}

function killCherry() {
	$("#cherry").fadeOut(5000);
}

function smoke(t) {
	if(isCig()) {
		$("#cig").slideUp(t, "linear", killCherry);	
	}		
}

$(document).ready(function() {

	smoke(10000);

	$("#butt").click(function() {
		$("#cig").show();
		$("#cherry").show();
		smoke(10000);
	
	});
	
});