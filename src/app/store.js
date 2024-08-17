import { configureStore } from "@reduxjs/toolkit";
import topicsSlice from "../features/topics/topicsSlice";
// import reducers

export default configureStore({
  reducer: {
    topics: topicsSlice,
  },
});
