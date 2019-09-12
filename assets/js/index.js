document.addEventListener('DOMContentLoaded', function() {
let db = coDesConnect('https://codesign-2019-a.firebaseio.com/')

  db.download('/', function(data) {
  	console.log(data)
  })
})
