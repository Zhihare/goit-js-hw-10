import Notiflix from 'notiflix';
import { refs } from './index.js';

export function fetchBreds() {
	const url = "https://api.thecatapi.com/v1/breeds";
	const apiKey = "live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H";


	return fetch(url, {
		headers: {
			'x-api-key': apiKey,
		}
	}).then((resp) => {
		if (!resp.ok) {
			refs.loader.classList.replace("loader", "loader-hidden");
			throw new Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
		}
		return resp.json();
	});
};


export function fetchCatByBreed(breedId) {
	const url = `https://api.thecatapi.com/v1/images/search/?breed_ids=${breedId}`;
	const apiKey = "live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H";

	const options = {
		headers: {
			'x-api-key':
				"live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H",
		},
	};



	return fetch(url, options).then((resp) => {
		if (!resp.ok) {
			refs.loader.classList.replace("loader", "loader-hidden");
			throw new Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
		}
		return resp.json();
	});
};

