
export function fetchBreds() {
	const url = "https://api.thecatapi.com/v1/breeds";
	const apiKey = "live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H";


	return fetch(url, {
		headers: {
			'x-api-key': apiKey,
		}
	}).then((resp) => {
		if (!resp.ok) {
			throw new Error(resp.statusText);
		}
		return resp.json();
	});
};


export function fetchCatByBreed(breedId) {
	const url = `https://api.thecatapi.com/v1/images/search/?breed_ids=${breedId}`;
	const apiKey = "live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H";

	// const params = new URLSearchParams({
	// 	breed_ids: breedId,
	// });

	const options = {
		headers: {
			'x-api-key':
				"live_Q77ypHQymq0xDZDIHgyTFXXkDGXaZqgWXlRROAEigrSADGW3SLjyFsEMRUa8xY9H",
		},
	};



	return fetch(url, options).then((resp) => {
		if (!resp.ok) {
			throw new Error(resp.statusText);
		}
		return resp.json();
	});
};

