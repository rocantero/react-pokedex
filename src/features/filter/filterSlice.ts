import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { AppThunk } from "../../app/store"

export interface FilterSliceState {
  value: string
}

const initialState: FilterSliceState = {
  value: ""
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const filterSlice = createAppSlice({
  name: "pokemonFilter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setFilter: create.reducer((state, action: PayloadAction<string>) => {
      state.value = action.payload
    }),
  })
})

export default filterSlice.reducer