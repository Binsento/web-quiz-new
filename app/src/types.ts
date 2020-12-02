//TODO уточнить тип
export type TestData = {
    type: string,
    title: string,
    description: string,
    level: string,
    test: any[]
}

export type AchievementInfo = {
    earn: boolean,
    title: string,
    description: string,
    dateInMs: number
}