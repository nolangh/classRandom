let pokemon = getPokemon(displayPokemon);

function getPokemon(callBack) {
	const httpRequest = new XMLHttpRequest();
	httpRequest.onload = () => {
		if (
			httpRequest.readyState == XMLHttpRequest.DONE &&
			httpRequest.status == 200
		) {
			const pokemon = JSON.parse(httpRequest.responseText)?.results;
			callBack(pokemon);
			console.log(pokemon);
		}
	};
	httpRequest.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=20");
	httpRequest.send();
}

function displayPokemon(pokemon) {
	//
	let pokemonHtml = " ";
	pokemon.forEach((pokemon) => {
		pokemonHtml += `<div>${pokemon.name}</div>`;
	});
	document.querySelector("#pokemon").innerHTML = pokemonHtml;
}

/* -------------------------- ANCHOR Basic Rest API Syntax ------------------------- */
/**
 * GET /Candy - all the candy
 * GET /candy/snickers - for one specefic candy
 * GET /candy/type/chocolate - for all chcoclate candy
 * POST /candy/twinSnakes - create new candy called twinSnakes
 * PUT /candy/twinSnakes - replaces old twinSnakes
 * DELETE /candy/twinSnakes - Delets twinSnakes
 */
