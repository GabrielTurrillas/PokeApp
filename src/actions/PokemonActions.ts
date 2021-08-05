import axios from "axios"
import { Dispatch } from "redux"
import { PokemonDispatchTypes, stateTypes } from './PokemonActionTypes'

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: stateTypes.POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
      type: stateTypes.POKEMON_SUCCESS,
      payload: res.data
    })

  } catch (e) {
    dispatch({
      type: stateTypes.POKEMON_FAIL,
      payload: e.data
    })
  }
}