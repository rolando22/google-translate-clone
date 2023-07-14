import { useTranslatorReducer } from './hooks/useTranslatorReducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export function App() {
    const { fromLanguage, setFromLanguage } = useTranslatorReducer();

    return (
        <>
            <h1>Google Translate Clone</h1>
            <button onClick={() => setFromLanguage('es')}>Cambiar Idioma</button>
            <p>{fromLanguage}</p>
        </>
    );
}
