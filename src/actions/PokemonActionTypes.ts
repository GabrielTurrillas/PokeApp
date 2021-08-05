export enum stateTypes {
  POKEMON_LOADING = 'POKEMON_LOADING',
  POKEMON_FAIL = 'POKEMON_FAIL',
  POKEMON_SUCCESS = 'POKEMON_SUCCESS'
}

export type PokemonType = {
  id: number
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[]
  name: PokemonName
}

export type PokemonName = {
  name: string
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export type PokemonSprites = {
  front_default: string
}

export interface PokemonLoading {
  type: typeof stateTypes.POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof stateTypes.POKEMON_FAIL
  payload: string
}

export interface PokemonSuccess {
  type: typeof stateTypes.POKEMON_SUCCESS
  payload: {
    id: number,
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStat[]
    name: PokemonName
  }
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess