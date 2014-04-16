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

	smoke(45000);

	$("#butt").click(function() {
		$("#cig").show();
		$("#cherry").show();
		smoke(45000);
	});
	
});