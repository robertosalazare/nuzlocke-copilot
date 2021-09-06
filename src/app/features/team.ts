import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

interface TeamPokemon {
  name: string;
  id: number;
}

interface TeamState {
  pokemons: TeamPokemon[];
}

const initialState: TeamState = {
  pokemons: [],
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<TeamPokemon>) => {
      state.pokemons.push(action.payload);
    }
  },
});

export const { addPokemon } = teamSlice.actions;

export const selectTeam = (state: RootState) => state.team.pokemons;

export default teamSlice.reducer;
