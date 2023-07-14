import { ArrowIcon, LanguageSelector } from './components/';

import { useTranslatorReducer } from './hooks/useTranslatorReducer';

import { AUTO_LANGUAGE } from './constants/languages.d';
import { SectionType } from './types/translator.d';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

import './App.css';



export function App() {
    const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLanguages } = useTranslatorReducer();

    const handleOnClicktoInterchangeLanguages = () => interchangeLanguages();

    return (
        <Container fluid>
            <h1>Google Translate Clone</h1>
            <Row>
                <Col>
                    <LanguageSelector 
                        type={SectionType.From}
                        value={fromLanguage}
                        onChange={setFromLanguage}
                    />
                    {fromLanguage}
                </Col>
                <Col>
                    <Button 
                        variant='link'
                        disabled={fromLanguage === AUTO_LANGUAGE}
                        onClick={handleOnClicktoInterchangeLanguages}
                    >
                        <ArrowIcon />
                    </Button>
                </Col>
                <Col>
                    <LanguageSelector 
                        type={SectionType.To}
                        value={toLanguage}
                        onChange={setToLanguage}                        
                    />
                    {toLanguage}
                </Col>
            </Row>
        </Container>
    );
}
