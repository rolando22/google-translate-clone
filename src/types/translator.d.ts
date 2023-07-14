export interface translatorState {
    fromLanguage: string
    toLanguage: string
    fromText: string
    result: string
    loading: boolean
}

export type translatorTypeAction = 
    | { type: 'INTERCHANGE_LANGUAGES', payload: string }
    | { type: 'SET_FROM_LANGUAGE', payload: string }
    | { type: 'SET_TO_LANGUAGE', payload: string }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }
