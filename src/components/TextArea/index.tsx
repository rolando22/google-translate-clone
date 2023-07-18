import { Form } from "react-bootstrap";

import { SectionType } from "../../types/translator.d";

import './TextArea.css';

interface Props {
    type: SectionType
    loading?: boolean
    value: string
    onChange: (value: string) => void
}

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return 'Introducir texto';
    if (loading === true) return 'Traduciendo...';
    return 'Traducción';
};

export function TextArea({ type, loading, value, onChange }: Props) {

    const handlerOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value);

    return (
        <Form.Control 
            className={`${(type === SectionType.From && 'TextArea-from') || (type === SectionType.To && 'TextArea-to')}`}
            as='textarea'
            placeholder={getPlaceholder({ type, loading })}
            value={value}
            onChange={handlerOnChange}
            disabled={type === SectionType.To}
            autoFocus={type === SectionType.From}
        />
    );
}
