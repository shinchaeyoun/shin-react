/* eslint-disable */
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

let categorys = createSlice({
  name: 'categorys',
  initialState: [
  ],
  reducers: {
    
  }
});


export default configureStore({
  reducer: {
    categorys: categorys.reducer
  }
});


export let { gotoContentTop,changeTopArr } = categorys.actions;