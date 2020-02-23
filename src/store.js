import { createStore } from 'redux';

const initialState = {
  pokemons: [
    {
      id: 1,
      name: 'Blastoise',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/d/d1/latest/20101031232353/Blastoise_NB.gif',
    },
    {
      id: 2,
      name: 'Sandslash',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/8f/latest/20101031232857/Sandslash_NB.gif',
    },
    {
      id: 3,
      name: 'Nidoking',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/5/50/latest/20101031232936/Nidoking_NB.gif',
    },
    {
      id: 4,
      name: 'Fearow',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/6/60/latest/20101223231111/Fearow_NB.gif',
    },
    {
      id: 5,
      name: 'Primeape',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20101224091012/Primeape_NB.gif',
    },
    {
      id: 6,
      name: 'Arcanine',
      picture: 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/97/Arcanine_NB.gif',
    },
    {
      id: 7,
      name: 'Poliwrath',
      picture: 'https://vignette.wikia.nocookie.net/es.pokemon/images/d/d3/Poliwrath_NB.gif',
    },
    {
      id: 8,
      name: 'Golem',
      picture: 'https://vignette.wikia.nocookie.net/es.pokemon/images/0/04/Golem_NB.gif',
    },
    {
      id: 9,
      name: 'Gengar',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20110508164736/Gengar_NB.gif',
    },
    {
      id: 10,
      name: 'Hitmonchan',
      picture: 'https://images.wikidexcdn.net/mwuploads/wikidex/0/06/latest/20101224092201/Hitmonchan_NB.gif',
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_TITULAR':
      return {
        ...state,
        titulares: state.titulares.concat(action.pokemon),
        pokemons: state.pokemons.filter((p) => p.id !== action.pokemon.id),
      };
    case 'AGREGAR_SUPLENTE':
      return {
        ...state,
        suplentes: state.suplentes.concat(action.pokemon),
        pokemons: state.pokemons.filter((p) => p.id !== action.pokemon.id),
      };
    case 'QUITAR_SUPLENTE':
      return {
        ...state,
        pokemons: state.pokemons.concat(action.pokemon),
        suplentes: state.suplentes.filter((p) => p.id !== action.pokemon.id),
      };
    case 'QUITAR_TITULAR':
      return {
        ...state,
        pokemons: state.pokemons.concat(action.pokemon),
        titulares: state.titulares.filter((p) => p.id !== action.pokemon.id),
      };
    default:
      return state;
  }
};

export default createStore(reducerEntrenador);
