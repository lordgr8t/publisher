$(document).ready(function() {
	let item = $('.item').html();
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');
	$('.container').append('<div class="item">' + item + '</div>');

	renderPopularRequest(2);
});



function renderPopularRequest(argument) {
	let req = "renderPopularRequest";
	$.ajax({
		url: "server/requests.php",
		type: "POST",
		data: ({req: req}),
		dataType: "json",
		beforeSend: funcB,
		success: funcS
	});

	function funcB(){
	// тут над придумать лоад
	};
	function funcS(data) {
		data = JSON.stringify(data);
		data = JSON.parse(data);
		console.log(data);
	}
}



