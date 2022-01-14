import { configureStore } from '@reduxjs/toolkit'
import answerSlice from '../features/answerSlice'

export const store = configureStore({
    reducer: {
        answer: answerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>