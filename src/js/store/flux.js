const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [ ],
			vehiculos: [],
			planetas: [],
			personajeEspecifico: [],
			favoritos:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			mostrarPersonajes: () => {
				fetch ("https://www.swapi.tech/api/people", {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log(response)
					setStore({personajes:response.results})
				})
			},
			mostrarVehiculos: () => {
				fetch ('https://www.swapi.tech/api/vehicles/', {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log(response)
					setStore({vehiculos:response.results})
				})
			},
			mostrarPlanetas: () => {
				fetch ('https://www.swapi.tech/api/planets', {method: "GET"})
				.then (response => response.json())
				.then (response => {
					console.log(response)
					setStore({planetas:response.results})
				})
			},
			
			agregarFavoritos: (name) => {
				const store = getStore();
				const favoritos = store.favoritos;
				const nuevosFavoritos = favoritos.includes(name)
				? favoritos 
				: [...favoritos, name]; 

				setStore({ ...store, favoritos: nuevosFavoritos });
			},

						//Eliminar tareas con el ICONO -
			eliminarfavoritos:(index) => {
				const store = getStore();
				let eliminar = store.favoritos.filter((t, i) => i !== index);
				setStore({...store, favoritos:eliminar});
			},
			

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
