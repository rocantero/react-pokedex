import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./pokemonDetail.module.css"
import { RootState, TypedUseQueryStateResult } from "@reduxjs/toolkit/query/react"
import { Pokemon, PokemonLite } from "../../types/pokemon"
import { createSelector } from "@reduxjs/toolkit"
import { removePokemon, addPokemon } from "../combatReady/combatReadySlice"
import { clearPokemon } from "../pokemon/pokemonSlice"

export const PokemonDetail = () => {
  const dispatch = useAppDispatch()
  const activePokemon = useAppSelector((state) => state.pokemon.selectedPokemon)
  const combatReadyList = useAppSelector((state) => state.combatReady)
  const name = activePokemon?.name || ''
  const [isCombatReady, setIsCombatReady] = useState(false)

  useEffect(() => {
    setIsCombatReady(combatReadyList.some((pokemon: PokemonLite) => pokemon.name === activePokemon?.name))
  }, [combatReadyList, activePokemon])

  return (
    <div className={styles.row}>
      <div className={styles.buttonNav}>
        <button onClick={() => dispatch(clearPokemon())}>Volver</button>
        {
          isCombatReady ? 
          <button onClick={() => dispatch(removePokemon({ name, url: '' }))}>Remover de la lista</button> : 
          <button onClick={() => dispatch(addPokemon({ name, url: '' }))}>Agregar a la lista</button>
        }
      </div>
      <img src={activePokemon?.sprites?.other?.dream_world?.front_default} />
      <h2>{activePokemon?.name}</h2>
      <h3>Numero</h3>
      <p>{activePokemon?.id}</p>
      <h3>Altura</h3>
      <p>{activePokemon?.height} m</p>
      <h3>Tipo</h3>
      <ul>
        {activePokemon?.types?.map(({ type }) => (
          <li key={type.name}>{type.name}</li>
        ))}
      </ul>
      <h3>Estadisticas Base</h3>
      <ul>
        {activePokemon?.stats?.map(({ base_stat, stat }) => (
          <li key={stat.name}>{stat.name}: {base_stat}</li>
        ))}
      </ul>
    </div>
  )
}

