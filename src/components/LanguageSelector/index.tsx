import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../../constants/languages.d';
import type { FromLanguage, Language } from '../../types/languages.d';
import { SectionType } from '../../types/translator.d';

import { Form } from 'react-bootstrap';

type Props = 
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export function LanguageSelector({ type, value, onChange }: Props) {

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => 
        onChange(event.target.value as Language);

    return (
        <Form.Select 
            aria-label='Selecciona un idioma' 
            value={value}
            onChange={handleOnChange} 
        >
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => 
                <option 
                    key={key} 
                    value={key}
                >
                    {literal}
                </option>
            )}
        </Form.Select>
    );
}
