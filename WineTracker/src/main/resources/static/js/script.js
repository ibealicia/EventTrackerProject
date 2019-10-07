window.addEventListener('load', function(e) {
	init();
});

function init() {
	document.findAllWines.getAllWines.addEventListener('click',
			function(event) {
				event.preventDefault();
				getAllWines();
			})

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
function getAllWines() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/wines/', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				var wines = JSON.parse(xhr.responseText);
				displayAllWines(wines);
			} else {
				let nf = document.createElement('h4');
				nf.textContent = 'No Wine Found'
				wineDiv.appendChild(nf);
			}
		}

	};

	xhr.send(null);
}

function displayAllWines(wines) {
	let wineDiv = document.getElementById('wineData');
	while (wineDiv.firstElementChild) {
		wineDiv.removeChild(wineDiv.firstElementChild);
	}
	var table = document.createElement('table');
	wineDiv.appendChild(table);
	let header = document.createElement('tr');
	let th1 = document.createElement('th');
	th1.textContent = 'Name';
	header.appendChild(th1);
	let th2 = document.createElement('th');
	th2.textContent = 'Vintage';
	header.appendChild(th2);
	let th3 = document.createElement('th');
	th3.textContent = 'Type';
	header.appendChild(th3);
	let th4 = document.createElement('th');
	th4.textContent = 'Color';
	header.appendChild(th4);
	let th5 = document.createElement('th');
	th5.textContent = 'Tasting Notes';
	header.appendChild(th5);
	let th6 = document.createElement('th');
	th6.textContent = 'Price';
	header.appendChild(th6);
	let th7 = document.createElement('th');
	th7.textContent = 'Rating';
	header.appendChild(th7);
	let th8 = document.createElement('th');
	th8.textContent = 'Winery Name';
	header.appendChild(th8);
	let th9 = document.createElement('th');
	th9.textContent = 'Website';
	header.appendChild(th9);
	table.appendChild(header);
	for (var i = 0; i < wines.length; i++) {
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		td1.textContent = wines[i].name;
		td1.wine = wines[i];
		td1.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td1);
		let td2 = document.createElement('td');
		td2.textContent = wines[i].year;
		td2.wine = wines[i];
		td2.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td2);
		let td3 = document.createElement('td');
		td3.textContent = wines[i].type;
		td3.wine = wines[i];
		td3.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td3);
		let td4 = document.createElement('td');
		td4.textContent = wines[i].color;
		td4.wine = wines[i];
		td4.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td4);
		let td5 = document.createElement('td');
		td5.textContent = wines[i].tastingNotes;
		td5.wine = wines[i];
		td5.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td5);
		let td6 = document.createElement('td');
		td6.textContent = wines[i].price;
		td6.wine = wines[i];
		td6.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td6);
		let td7 = document.createElement('td');
		td7.textContent = wines[i].rating;
		td7.wine = wines[i];
		td7.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td7);
		let td8 = document.createElement('td');
		td8.textContent = wines[i].winery.name;
		td8.wine = wines[i];
		td8.addEventListener('click', function(event) {
			displayWine(event.target.wine);
		});
		tr.appendChild(td8);
		let link = document.createElement('a');
		let td9 = document.createElement('td');
		link.href = wines[i].winery.link;
		link.textContent = link.href;
		tr.appendChild(td9);
		td9.appendChild(link);
		table.appendChild(tr);
	}
	let sortList = document.createElement('form');
	sortList.id = 'sortList';
	sortList.name = 'sortList';
	wineDiv.appendChild(sortList);
	let button = document.createElement('input');
	button.type = 'submit';
	button.name = 'sortByRating';
	button.value = 'Sort By Rating';
	sortList.appendChild(button);
	let sortedRating = wines.sort(function(a, b) {
		return a.rating - b.rating;
	});

	document.sortList.sortByRating.addEventListener('click', function(event) {
		event.preventDefault();
		var form = event.target.parentElement;

		if (form !== null) {
			displayAllWines(sortedRating);
		}
	})

};

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
	let wineDiv = document.getElementById('wineData');
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
	let up = document.createElement('h5');
	up.textContent = 'Update Wine Info:';
	wineDiv.appendChild(up);
	let updateForm = document.createElement('form');
	updateForm.id = 'updateForm';
	updateForm.name = 'updateForm';
	wineDiv.appendChild(updateForm);
	let nameForm = document.createElement('input');
	nameForm.type = 'text';
	nameForm.name = 'name';
	nameForm.value = wine.name;
	wineDiv.appendChild(updateForm);
	updateForm.appendChild(nameForm);
	let yearForm = document.createElement('input');
	yearForm.type = 'number';
	yearForm.name = 'year';
	yearForm.value = wine.year;
	updateForm.appendChild(yearForm);
	let typeForm = document.createElement('input');
	typeForm.type = 'text';
	typeForm.name = 'type';
	typeForm.value = wine.type;
	updateForm.appendChild(typeForm);
	let colorForm = document.createElement('input');
	colorForm.type = 'text';
	colorForm.name = 'color';
	colorForm.value = wine.color;
	updateForm.appendChild(colorForm);
	let rateForm = document.createElement('input');
	rateForm.type = 'number';
	rateForm.name = 'rating';
	rateForm.value = wine.rating;
	updateForm.appendChild(rateForm);
	let priceForm = document.createElement('input');
	priceForm.type = 'number';
	priceForm.name = 'price';
	priceForm.value = wine.price;
	updateForm.appendChild(priceForm);
	let noteForm = document.createElement('input');
	noteForm.type = 'text';
	noteForm.name = 'tastingNotes';
	noteForm.value = wine.tastingNotes;
	updateForm.appendChild(noteForm);
	let button = document.createElement('input');
	button.type = 'submit';
	button.name = 'updateWine';
	button.value = 'Submit Changes';
	updateForm.appendChild(button);
	updateForm.wineid = wine.id;
	let delbutton = document.createElement('input');
	delbutton.type = 'submit';
	delbutton.name = 'deleteWine';
	delbutton.value = 'Delete This Wine';
	updateForm.appendChild(delbutton);

	document.updateForm.updateWine.addEventListener('click', function(event) {
		event.preventDefault();
		var form = event.target.parentElement;

		if (form !== null) {
			updateWine(form);
		}
	});

	document.updateForm.deleteWine.addEventListener('click', function(event) {
		event.preventDefault();
		var form = event.target.parentElement;

		if (form !== null) {
			deleteWine(form);
		}
	});
}

function addWine(wine) {
	var addForm = document.addForm;
	var newWine = {
		name : addForm.name.value,
		year : addForm.year.value,
		type : addForm.type.value,
		color : addForm.color.value,
		rating : addForm.rating.value,
		price : addForm.price.value,
		tastingNotes : addForm.tastingNotes.value,
		winery : {
			name : addForm.winery.value
		}
	};
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/wines/', true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var wine = JSON.parse(xhr.responseText);
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
function updateWine(wine) {
	var updateForm = document.updateForm;
	var updatedWine = {
		name : updateForm.name.value,
		year : updateForm.year.value,
		type : updateForm.type.value,
		color : updateForm.color.value,
		rating : updateForm.rating.value,
		price : updateForm.price.value,
		tastingNotes : updateForm.tastingNotes.value
	// winery : {
	// name : addForm.winery.value
	// }
	};
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/wines/' + wine.wineid, true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var updatedWine = JSON.parse(xhr.responseText);
				displayWine(updatedWine);
			} else {
				console.log("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var updatedWineJson = JSON.stringify(updatedWine);

	xhr.send(updatedWineJson);
	updateForm.reset();
}

function deleteWine(wine) {
	var xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/wines/' + wine.wineid, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				let wineDiv = document.getElementById('wineData');
				wineDiv.textContent = '';
				let deleted = document.createElement('h3');
				deleted.textContent = 'Wine Deleted'
				wineDiv.appendChild(deleted);
			} else {
				let wineDiv = document.getElementById('wineData')
				while (wineDiv.firstElementChild) {
					wineDiv.removeChild(wineDiv.firstElementChild);
				}

			}
		}

	};

	xhr.send(null);
}