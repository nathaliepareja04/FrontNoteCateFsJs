import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './NoteSlice'

export const store = configureStore({
  reducer: {
    noteStore: noteReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})