import type { translatorState, translatorTypeAction } from '../types/translator';
import { AUTO_LANGUAGE } from '../constants/languages.d';

export const initialTranslatorState: translatorState = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false,
};

const translatorReducerObject = (state: translatorState, action: translatorTypeAction) => ({
    ['INTERCHANGE_LANGUAGES']: 
        state.fromLanguage === AUTO_LANGUAGE 
        ? state 
        : { 
            ...state, 
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
            result: '',
            loading: state.fromText !== '',
        },
    ['SET_FROM_LANGUAGE']: 
        state.fromLanguage === action.payload 
        ? state 
        : {
            ...state,
            fromLanguage: action.payload,
            result: '',
            loading: state.fromText !== '',
        },
    ['SET_TO_LANGUAGE']: 
        state.toLanguage === action.payload 
        ? state 
        : {
            ...state,
            toLanguage: action.payload,
            result: '',
            loading: state.fromText !== '',
        },
    ['SET_FROM_TEXT']: {
        ...state,
        loading: action.payload !== '',
        fromText: action.payload,
        result: '',
    },
    ['SET_RESULT']: {
        ...state,
        loading: false,
        result: action.payload,
    },
});

export const translatorReducer = (state: translatorState, action: translatorTypeAction) => {
    return translatorReducerObject(state, action)[action.type] || state;
};
