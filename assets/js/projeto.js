document.addEventListener('DOMContentLoaded', function() {
let db = coDesConnect("https://codesign-2019-a.firebaseio.com/")

  db.download('/', function(data) {
    const val = coDesExtract();
  	var id = val['id'];
  	map = MapDataBase(data);
  	let cat = map[id];
  	let context = data['portfolio'][cat]["projetos"][id];
  	console.log(context);

  	let body = {};
  	body["main-body"] = {};
  	for (line in data['portfolio'][cat]["projetos"][id]["main-body"]) {
  		body["main-body"]["subtitles"] = data['portfolio'][cat]["projetos"][id]["main-body"]["subtitles"]
 		body["main-body"]["text"] = data['portfolio'][cat]["projetos"][id]["main-body"]["text"]
  	}

  	console.log(body);

	coDesReplace('.main-title', context);
    coDesReplace('.sub-header', context);
    coDesReplace('.main-body', body);
  	coDesReplace('.menu', context);

  })

function MapDataBase(object) {
	map = {}
	for(let directory in object["portfolio"]) {
		for (let project in object["portfolio"][directory]["projetos"]) {
			map[project] = directory;
		}
	}
	return map
}



})
