import { FromLanguage, Language } from '../types/languages';

export async function translate({ fromLanguage, toLanguage, fromText } 
    : { fromLanguage: FromLanguage, toLanguage: Language, fromText: string }) {
    const response = await fetch('https://translate.argosopentech.com/translate', {
        method: 'POST',
        body: JSON.stringify({
            q: `${fromText}`,
            source: `${fromLanguage}`,
            target: `${toLanguage}`,
            // format: 'text',
            // api_key: ''
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data.translatedText;
};
