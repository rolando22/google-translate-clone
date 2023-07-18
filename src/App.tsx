import { ArrowIcon, LanguageSelector, TextArea } from './components/';

import { useTranslatorReducer } from './hooks/useTranslatorReducer';

import { AUTO_LANGUAGE } from './constants/languages.d';
import { SectionType } from './types/translator.d';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

import './App.css';



export function App() {
    const { 
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
    } = useTranslatorReducer();

    const handleOnClicktoInterchangeLanguages = () => interchangeLanguages();

    return (
        <Container fluid>
            <h1>Google Translate Clone</h1>
            <Row>
                <Col>
                    <Stack gap={2}>
                        <LanguageSelector 
                            type={SectionType.From}
                            value={fromLanguage}
                            onChange={setFromLanguage}
                        />
                        <TextArea 
                            type={SectionType.From}
                            value={fromText}
                            onChange={setFromText}
                        />
                    </Stack>
                </Col>
                <Col xs='auto'>
                    <Button 
                        variant='link'
                        disabled={fromLanguage === AUTO_LANGUAGE}
                        onClick={handleOnClicktoInterchangeLanguages}
                    >
                        <ArrowIcon />
                    </Button>
                </Col>
                <Col>
                    <Stack gap={2}>
                        <LanguageSelector 
                            type={SectionType.To}
                            value={toLanguage}
                            onChange={setToLanguage}                        
                        />
                        <TextArea 
                            type={SectionType.To}
                            loading={loading}
                            value={result}
                            onChange={setResult}
                        />
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}
