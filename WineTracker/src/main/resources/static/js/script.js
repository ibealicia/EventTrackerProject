window.addEventListener('load', function(e) {
	init();
});

function init() {
	document.findWine.getWine.addEventListener('click', function(event) {
		event.preventDefault();
		var wineId = document.findWine.wineId.value;
		if (!isNaN(wineId) && wineId > 0) {
			getWine(wineId);
		}
	})

	 document.addForm.addWine.addEventListener('click', function(event) {
	 event.preventDefault();
	 var form = event.target.parentElement;
	
	 if (form !== null) {
	 addWine(form);
	 }
	 })
}

function getWine(wineId) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/wines/' + wineId, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var wine = JSON.parse(xhr.responseText);
				displayWine(wine);
			} else {
				let wineDiv = document.getElementById('wineData')
				while (wineDiv.firstElementChild) {
					wineDiv.removeChild(wineDiv.firstElementChild);
				}
				let nf = document.createElement('h4');
				nf.textContent = 'No Wine Found'
				wineDiv.appendChild(nf);
			}
		}

	};

	xhr.send(null);
}

function displayWine(wine) {
	let wineDiv = document.getElementById('wineData')
	while (wineDiv.firstElementChild) {
		wineDiv.removeChild(wineDiv.firstElementChild);
	}

	let name = document.createElement('h3');
	name.textContent = wine.name + "  -  " + wine.winery.name;
	wineDiv.appendChild(name);
	let type = document.createElement('blockquote');
	type.textContent = wine.year + " - " + wine.type + " - " + wine.color;
	wineDiv.appendChild(type);
	let notes = document.createElement('blockquote');
	notes.textContent = wine.tastingNotes;
	wineDiv.appendChild(notes);
	let rating = document.createElement('blockquote');
	rating.textContent = 'Rating: ' + wine.rating + ' Price: $' + wine.price;
	wineDiv.appendChild(rating);
	let up = document.createElement('p');
	up.textContent= 'Update Wine Info:';
	wineDiv.appendChild(up);
	let update = document.createElement('form');
	wineDiv.appendChild(update);
	let nameForm= document.createElement('input');
	nameForm.type = 'text';
	nameForm.name = 'name';
	nameForm.value = wine.name;
	wineDiv.appendChild(update);
	update.appendChild(nameForm);
	let yearForm= document.createElement('input');
	yearForm.type = 'number';
	yearForm.name = 'year';
	yearForm.value = wine.year;
	update.appendChild(yearForm);
	let typeForm= document.createElement('input');
	typeForm.type = 'text';
	typeForm.name = 'type';
	typeForm.value = wine.type;
	update.appendChild(typeForm);
	let colorForm= document.createElement('input');
	colorForm.type = 'text';
	colorForm.name = 'color';
	colorForm.value = wine.color;
	update.appendChild(colorForm);
	let rateForm= document.createElement('input');
	rateForm.type = 'number';
	rateForm.name = 'rating';
	rateForm.value = wine.rating;
	update.appendChild(rateForm);
	let priceForm= document.createElement('input');
	priceForm.type = 'number';
	priceForm.name = 'price';
	priceForm.value = wine.price;
	update.appendChild(priceForm);
	let noteForm= document.createElement('input');
	noteForm.type = 'text';
	noteForm.name = 'tastingNotes';
	noteForm.value = wine.tastingNotes;
	update.appendChild(noteForm);
	let button = document.createElement('input');
	button.type = 'submit';
	button.name = 'updateWine';
	button.value = 'Submit Changes';
	update.appendChild(button);
//		  <button name="addWine">Submit</button> 
}

function addWine(wine) {
	var addForm = document.addForm;
	var newWine = {
		name : addForm.name.value,
		year: addForm.year.value,
		type : addForm.type.value,
		color : addForm.color.value,
		rating : addForm.rating.value,
		price: addForm.price.value,
		tastingNotes: addForm.tastingNotes.value,
		winery: {name: addForm.winery.value}
	};
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/wines/', true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var wine = JSON.parse(xhr.responseText);
				console.log(wine);
				displayWine(wine);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var newWineJson = JSON.stringify(newWine);

	xhr.send(newWineJson);
	addForm.reset();
}