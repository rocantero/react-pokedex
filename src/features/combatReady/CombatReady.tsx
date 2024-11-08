import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./CombatReady.module.css"
import {
} from "./combatReadySlice"
import { Pokemon } from "../pokemon/Pokemon"

export const CombatReady = () => {
  const dispatch = useAppDispatch()
  const combatReady = useAppSelector((state) => state.combatReady)

  return (
    <div className={styles.row}>
      <h2 className={styles.title}>Listos para el combate</h2>
      <div className={styles.pokemons}>
      {combatReady.map((pokemon) => ( <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} isSelected={true} /> ))}
      </div>
    </div>
  )
}