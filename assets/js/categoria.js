document.addEventListener('DOMContentLoaded', function() {
let db = coDesConnect("https://codesign-2019-a.firebaseio.com/")

  db.download('/', function(data) {
  	const val = coDesExtract();
    console.log(val);
  	const id = val['id'];
  	let context = data['portfolio'][id];
    let dict = {"origin":id};

  	console.log(id);
  	console.log(context);
    coDesReplace('.main-title', context);
    coDesReplace('.sub-header', context);
  	coDesReplace('.menu', context);
  })
})
