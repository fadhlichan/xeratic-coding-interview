import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AnswerPayloadAction {
    questionId: number,
    selectedOptionIds: number[]
}

interface Answer {
    selectedOptionIds: number[]
    isLocked: boolean
}

interface QuestionAnswer {
    [questionId: number]: Answer
}

interface AnswerState {
    value: QuestionAnswer
}

const initialState: AnswerState = {
    value: {}
}

export const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        createAnswer: (state, action: PayloadAction<number>) => {
            if (!state.value[action.payload]) {
                state.value[action.payload] = {
                    isLocked: false,
                    selectedOptionIds: []
                }
            }
        },
        lockAnswer: (state, action: PayloadAction<number>) => {
            state.value[action.payload].isLocked = true
        },
        recordAnswers: (state, action: PayloadAction<AnswerPayloadAction>) => {
            state.value[action.payload.questionId].selectedOptionIds = action.payload.selectedOptionIds
        }
    }
})

export const { createAnswer, lockAnswer, recordAnswers } = answerSlice.actions

export default answerSlice.reducer