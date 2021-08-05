import { PokemonDispatchTypes, PokemonType, stateTypes } from "../actions/PokemonActionTypes";

export interface DefaultStateI {
  loading: boolean,
  pokemon?: PokemonType
}

const defaultState: DefaultStateI = {
  loading: false,
};


const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case stateTypes.POKEMON_FAIL:
      return {
        loading: false,
      }
    case stateTypes.POKEMON_LOADING:
      return {
        loading: true
      }
    case stateTypes.POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload
      }
    default:
      return state
  }
}


export default pokemonReducer
