import {AchievementInfo} from "../types";

export type RootStoreData = Record<string, any>

export type UserStoreData = {
    passed: number,
    perfect: number,
    passedTests: Record<string, {attempts: number}>
}

export type AchievementsStoreData = Record<string, AchievementInfo>

export type FiltersStoreData = {
    doneFetching: boolean,
    error: boolean,
    allTypes: Set<string>,
    typeFilter: Set<string>,
}