import { useEffect, useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./CombatReady.module.css"
import {
} from "./combatReadySlice"
import { Pokemon } from "../pokemon/Pokemon"

export const CombatReady = () => {
  const dispatch = useAppDispatch()
  const combatReady = useAppSelector((state: { combatReady: Pokemon[] }) => state.combatReady)
  const [hasPokemons, setHasPokemons] = useState(false)

  useEffect(() => {
    setHasPokemons(combatReady.length > 0)
  }, [combatReady])

  return (
    
    <div className={styles.row}>
      <h2 className={styles.title}>Listos para el combate</h2>
      <div className={styles.pokemons}>
      {
      hasPokemons ?
      <>
      {combatReady.map((pokemon) => ( <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} isSelected={true} /> ))}
      </> 
      : 
      <p>No hay pokemons listos para el combate</p>
      } 
      
      </div>
    </div>
  )
}