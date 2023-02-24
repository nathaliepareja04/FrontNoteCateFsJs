import { configureStore } from '@reduxjs/toolkit'
import noteReducer from './NoteSlice'

export const store = configureStore({
  reducer: {
    noteStore: noteReducer,
  },
  devTools: Process.env.NODE_ENV !== "production",
})