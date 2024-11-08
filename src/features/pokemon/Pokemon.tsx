import { useState } from "react"
import styles from './Pokemon.module.css'; // Adjust the path as necessary

import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { useEffect } from "react"
import { PokemonLite, Pokemon as PokemonType } from "../../types/pokemon"
import { useGetPokemonQuery } from "../list/pokemonApiSlice"
import { addPokemon, removePokemon } from "../combatReady/combatReadySlice"
import { selectPokemon } from "./pokemonSlice"
import Spinner from "../spinner"
import { selectAll } from "@testing-library/user-event/dist/cjs/event/index.js"

interface PokemonProps {
  name: string;
  url: string;
  isSelected: boolean; // para diferenciar entre List (se puede agregar) y CombatReady (se puede remover)
}

export const Pokemon = ({ name, url, isSelected }: PokemonProps) => {
  const dispatch = useAppDispatch()
  const id = Number(url.split("/")[url.split("/").length - 2])
  const { data: pokemon, isError, isLoading, isSuccess } = useGetPokemonQuery(id)

  return (
    <div className={styles.card}>
      { isSuccess && 
      <>
      { !isSelected && <button className={styles.addButton} onClick={() => dispatch(addPokemon({ name, url }))}>-</button> }
      { isSelected && <button className={styles.removeButton} onClick={() => dispatch(removePokemon({ name, url }))}>-</button> }
      </>}
      
      { isSuccess ? <img className="pokemon__image" src={pokemon?.sprites?.front_default} 
        onClick={() => dispatch(selectPokemon(pokemon))} /> 
      : <Spinner />
      }
      <h6 className={styles.name}>{ name }</h6>
    </div>
  )
}