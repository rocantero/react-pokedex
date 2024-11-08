import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./pokemonList.module.css"
import { useGetPokemonsQuery, useGetPokemonQuery } from "./pokemonApiSlice"
import { Pokemon } from "../pokemon/Pokemon"
import { RootState, TypedUseQueryStateResult } from "@reduxjs/toolkit/query/react"
import { PokemonLite } from "../../types/pokemon"
import { createSelector } from "@reduxjs/toolkit"

// import { findPokemonByName } from "./pokemonApiSlice"

type GetPokemonFiltered = TypedUseQueryStateResult<PokemonLite[], any, any>

const filterPokemons = createSelector(
  (res: GetPokemonFiltered) => res.data,
  (res: GetPokemonFiltered, searchTerm: string) => searchTerm,
  (data, searchTerm) => {
    if (!data) return []
    return data.filter(pokemon => pokemon.name.includes(searchTerm))
  }
)

export const PokemonList = () => {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState("")
  const [pokemons, setPokemons] = useState<PokemonLite[]>([])
  const combatReadyList = useAppSelector((state) => state.combatReady)
  const { data, isError, isLoading, isSuccess } =
    useGetPokemonsQuery()

  // const pokemons = useAppSelector(state => findPokemonByName(state.pokemonList, searchTerm))

  // const { data, isError, isLoading, isSuccess } } = useGetPokemonsQuery(undefined, {
  //   selectFromResult: (result) => filterPokemons(result, searchTerm)
  // })

  useEffect(() => {
    if (data) {
      const filteredPokemons = data.filter(pokemon => { 
        
        return pokemon.name.includes(searchTerm) && !combatReadyList.find(p => p.name === pokemon.name)
      })
      setPokemons(filteredPokemons)
    }
  }, [searchTerm, data, combatReadyList])

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isSuccess) {

    return (
      <div className={styles.row}>
        <div className={styles.filter}>
          <input
            className={styles.textbox}
            aria-label="Find a pokemon"
            placeholder="Que pokemon buscas?"
            value={searchTerm}
            type="text"
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
        <div className={styles.pokemonGrid}>
          {pokemons.map(({ name, url }) => (
            <Pokemon key={name} name={name} url={url} isSelected={false} />
          ))}
        </div>
      </div>
    )
  }
}
