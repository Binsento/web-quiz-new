import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import initialAchievementState from './achievements'
import {AchievementsStoreData} from "../redux-types"

const initialState: AchievementsStoreData = initialAchievementState

const achievementsSlice = createSlice({
    name: 'achievements',
    initialState: initialState,
    reducers: {
        achievementEarn: (state, action: PayloadAction<string>) => {
            state[action.payload].earn = true;
            state[action.payload].dateInMs = Date.now()
        },
        loadAchievementStats: (state, action: PayloadAction<{ id: string, date: number }>) => {
            state[action.payload.id].earn = true;
            state[action.payload.id].dateInMs = action.payload.date
        },
    },
})

const { actions, reducer } = achievementsSlice

export const achievementsReducer = reducer

export const achievementEarn = actions.achievementEarn
export const loadAchievementStats = actions.loadAchievementStats