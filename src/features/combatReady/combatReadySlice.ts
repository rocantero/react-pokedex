import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Pokemon, PokemonLite } from "../../types/pokemon" // Adjust the import path as necessary

const initialState: PokemonLite[] = []

export const combatReadySlice = createSlice({
  name: "combatReadyList",
  initialState,
  reducers: create => ({
    removePokemon: create.reducer((state, action: PayloadAction<PokemonLite>) => {
      const pokemonName = action.payload.name
      const index = state.findIndex(p => p.name === pokemonName)
      if (index !== -1) {
        state.splice(index, 1);
      }
    }),
    addPokemon: create.reducer((state, action: PayloadAction<PokemonLite>) => {
      state.push(action.payload)
    }),
  }),
})
export const { removePokemon, addPokemon } = combatReadySlice.actions
export default combatReadySlice.reducer