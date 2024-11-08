import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Pokemon } from "../../types/pokemon" // Adjust the import path as necessary

const initialState:  { selectedPokemon: Pokemon | null, isSelected: boolean } = {  selectedPokemon: null, isSelected: false }

export const pokemonSlice = createSlice({
  name: "activePokemon",
  initialState,
  reducers: create => ({
    clearPokemon: create.reducer((state) => {
      state.selectedPokemon = null
      state.isSelected = false
    }),
    selectPokemon: create.reducer((state, action: PayloadAction<Pokemon>) => {
      state.selectedPokemon = action.payload
      state.isSelected = true
      
    }),
  }),
})
export const selectActivePokemon = (state: { activePokemon: { selectedPokemon: Pokemon | null, isSelected: boolean } }) => state.activePokemon
export const { clearPokemon, selectPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer