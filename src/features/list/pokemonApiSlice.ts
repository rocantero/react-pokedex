// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery, RootState } from "@reduxjs/toolkit/query/react"
import { Pokemon } from "../../types/pokemon"
import { createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit"

interface PokemonListItem {
  name: string
  url: string
}

interface PokemonListApiResponse {
  results: PokemonListItem[]
  count: number
  next: string
  previous: number
}



// Define a service using a base URL and expected endpoints
export const pokemonApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  reducerPath: "pokemonList",
  // Tag types are used for caching and invalidation.
  tagTypes: ["Pokemons"],
  endpoints: build => ({
    getPokemons: build.query<PokemonListItem[], void> ({
      query: () => `?limit=151`,
      transformResponse: (response: PokemonListApiResponse) => {
        const { results } = response
        return results
      }
    }),
    getPokemon: build.query<Pokemon, number>({
      query: id => `/${id}`,
      providesTags: (result, error, id) => [{ type: "Pokemons", id }],
    })
  }),
})

// const emptyPokemons: PokemonListItem[] = []
// export const selectPokemonsResult = pokemonApiSlice.endpoints.getPokemons.select()
// export const selectAllPokemons = createSelector(
//   selectPokemonsResult,
//   pokemons => pokemons?.data ?? emptyPokemons
// )

// export const findPokemonByName = createSelector(
//   selectAllPokemons,
//   (state,  name: string) => name,
//   (pokemons: PokemonListItem[], name: string) => pokemons.filter(pokemon => pokemon.name.includes(name))
// )

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonApiSlice
