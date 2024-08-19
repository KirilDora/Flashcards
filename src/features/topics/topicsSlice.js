import { createSlice } from "@reduxjs/toolkit";

const initialState = {topics:{}};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {...action.payload, quizIds:[]};
    },
    addQuizId: (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic} = topicsSlice.actions;
export const {addQuizId} = topicsSlice.actions;

export default topicsSlice.reducer;