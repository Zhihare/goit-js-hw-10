import axios from "axios";
import { fetchBreds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
	select: document.querySelector(".breed-select"),
	catInfo: document.querySelector(".cat-info"),
}

refs.select.addEventListener("change", breedSelection);

function breedSelection(e) {
	e.preventDefault();
	refs.catInfo.innerHTML = "";
	let id = refs.select.value;
	fetchCatByBreed(id).then((prom) => {
		console.log(prom);
		createCard(prom);
	});
}


function createCard(arr) {
	const createMarkupCard = arr.map(({ url, breeds: { 0: {
		temperament, description, name }
	}
	}) =>
		`<div class ="cat-inform">
			<img src="${url}" alt="${name}" class="cat-photo" width = 600>
	      <div class="cat-info-text">
	      	<h2 class="title-breed">${name}</h2>
		      <p class="inform-breed">${description}</p>
			  <p class="temper"><span>Temperament: </span>${temperament}</p>
	      </div>
		</div>`).join("");
	refs.catInfo.insertAdjacentHTML("beforeend", createMarkupCard);
}

function selectCSS() {
	new SlimSelect({
		select: refs.select,
	});
}

fetchBreds().then((breeds) => {
	console.log(breeds);
	create(breeds);
	selectCSS();
});


function create(arr) {
	const createMarkup = arr.map(
		({ id, name }, index) =>
			`<option value="${id}">${name}</option>`).join("");
	refs.select.insertAdjacentHTML("beforeend", createMarkup);
}

