import axios from "axios";
import { fetchBreds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

export const refs = {
	select: document.querySelector(".breed-select-hidden"),
	catInfo: document.querySelector(".cat-info-hidden"),
	error: document.querySelector(".error-hidden"),
	loader: document.querySelector(".loader"),
}
refs.select.classList.replace("breed-select-hidden", "breed-select");
refs.select.addEventListener("change", breedSelection);

fetchBreds().then((breeds) => {
	// console.log(breeds);
	create(breeds);
	selectCSS();
	refs.loader.classList.replace("loader", "loader-hidden");
});

function breedSelection(e) {
	refs.loader.classList.replace("loader-hidden", "loader");
	e.preventDefault();
	refs.catInfo.innerHTML = "";
	let id = refs.select.value;
	fetchCatByBreed(id).then((prom) => {
		// console.log(prom);
		if (prom.length > 0) {
			createCard(prom);
			refs.catInfo.classList.replace("cat-info-hidden", "cat-info")
			refs.loader.classList.replace("loader", "loader-hidden");
		}
		else {
			new Notiflix.Notify.info("Oops! There is no information about this breed yet!");
			refs.catInfo.classList.replace("cat-info-hidden", "cat-info")
			refs.loader.classList.replace("loader", "loader-hidden");
			console.log("sorry");
		}
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


function create(arr) {
	const createMarkup = arr.map(
		({ id, name }, index) =>
			`<option value="${id}">${name}</option>`).join("");
	refs.select.insertAdjacentHTML("beforeend", createMarkup);
}

