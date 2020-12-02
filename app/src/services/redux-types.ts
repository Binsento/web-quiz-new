import {AchievementInfo} from "../types";

export type RootStoreData = Record<string, any>

export type UserStoreData = {
    passed: number,
    perfect: number,
    passedTests: Record<string, {attempts: number}>
}

export type AchievementsStoreData = Record<string, AchievementInfo>