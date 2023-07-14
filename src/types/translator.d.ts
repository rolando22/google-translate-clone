import type { FromLanguage, Language } from "./languages"

export interface translatorState {
    fromLanguage: FromLanguage
    toLanguage: Language
    fromText: string
    result: string
    loading: boolean
}

export type translatorTypeAction = 
    | { type: 'INTERCHANGE_LANGUAGES', payload: string }
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }

export enum SectionType {
    From = 'from',
    To = 'to',
}
