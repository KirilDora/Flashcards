import { createSlice } from "@reduxjs/toolkit";

const initialState = {cards:{}};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = {...action.payload};
    }
  }
});

export const selectCard = (state, id) => state.cards.cards[id];
export const {addCard} = cardSlice.actions;

export default cardSlice.reducer;