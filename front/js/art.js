$(document).ready(function() {
	// renderPopularRequest(2);
});

function renderPopularRequest(argument) {
	let req = "renderPopularRequest";
	$.ajax({
		url: "../server/requests.php",
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
		// Получаем данные
		data = JSON.stringify(data);
		data = JSON.parse(data);
		let gettedJson = data;

		// отрисовываем айтемы
		var JSONlength = Object.keys(gettedJson).length;
		for (let i = 0; i < JSONlength; i++) {
			$('.container').append('<div class="item" itemID ="' + gettedJson[i]["id"] + '"> <div class="df aic"> <div> <img class="cover" src="data/covers/' + gettedJson[i]["img"] + '"> </div> <div class="w-75"> <h3>' + gettedJson[i]["name"] + '</h3> <p>' + gettedJson[i]["short_desc"] + '</p> </div> <div> <img src="front/img/next-arrow.svg" > </div> </div> <hr> </div>');
		}
	}
}
