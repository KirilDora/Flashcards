import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {topics:{}};

const addQuiz = createAsyncThunk(
  "topics/addQuizId",
  async (state, action) => {
    state.topics[action.paylaod.topicId].quizIds.push(action.payload.id);
  }
);

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {...action.payload, quizIds:[]};
    }
  },
  extraReducers: {
    addQuiz
  }
});

export const selectTopics = (state) => state.topics.topics;
export const {addTopic} = topicsSlice.actions;

export default topicsSlice.reducer;