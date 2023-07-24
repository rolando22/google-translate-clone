// @ts-nocheck
import { useReducer } from "react";

import { initialTranslatorState, translatorReducer } from "../reducers/translator";
import { type FromLanguage, type Language } from "../types/languages";

export function useTranslatorReducer() {
    const [{ 
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
     }, dispatch] = useReducer(translatorReducer, initialTranslatorState);

    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES', payload: ''})
    };

    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    };

    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    };
    
    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    };

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload })
    };

     return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult,
     };
};
