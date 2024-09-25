const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			ships: [],
			planets: [],
			character: null, 
			ship: null,
			planet: null,
			favorites: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then ((data) => setStore({ people: data.results }))

			},

			loadSingleCharacter: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id )
					.then(res => res.json())
					.then ((data) => setStore({ character: data.result }))

			},
			
			loadShips: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(res => res.json())
					.then ((data) => setStore({ ships: data.results }))

			},

			loadSingleStarship: (id) => {
				fetch("https://www.swapi.tech/api/starships/" + id )
					.then(res => res.json())
					.then ((data) => setStore({ ship: data.result }))

			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then ((data) => setStore({ planets: data.results }))

			},

			loadSinglePlanet: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id )
					.then(res => res.json())
					.then ((data) => setStore({ planet: data.result }))

			},

			addFavorite: (newFavorite) => {
				const store = getStore();
				const currentFavorites = store.favorites;
				setStore({ favorites: [...currentFavorites, newFavorite] })
			},

			removeFavorite: (name) => { 
				const store = getStore();
				const currentFavorites = store.favorites;
				setStore({ favorites: currentFavorites.filter((f) =>  name !== f.name)})
			},

		}
	};
};

export default getState;
