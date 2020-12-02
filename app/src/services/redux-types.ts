export type RootStoreData = Record<string, any>

export type UserStoreData = {
    passed: number,
    perfect: number,
    passedTests: Record<string, {attempts: number}>
}