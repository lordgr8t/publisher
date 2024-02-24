$(document).ready(function() {
	renderArt(2);
});

function renderArt(argument) {
	let req = "renderArt";
	let artNum = 2;
	$.ajax({
		url: "../server/requests.php",
		type: "POST",
		data: ({req: req, artNum: artNum}),
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
		console.log(gettedJson);
		
		// считаем сколько символов влезет на страницу
		let viewBlockHeight = Math.floor($('.container-art').height()) - 30;
		let viewBlockWidth = Math.floor($('.container-art').width()) - 30;
		let canChart = Math.floor((viewBlockHeight / 17) * (viewBlockWidth / 6));

		// дробим текст на куски
		var text = gettedJson[0]['descript'];
		var chunks = [];
		for (var i = 0; i < text.length; i += canChart) {
			chunks.push(text.substr(i, canChart));
		}

		console.log(chunks);

		console.log(canChart)


		// ширина буквы 6
		// высота 17
	}
}

