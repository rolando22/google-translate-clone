import { useEffect } from 'react';

import { ArrowIcon, ClipboardIcon, SpeakerIcon, LanguageSelector, TextArea } from './components/';

import { useTranslatorReducer } from './hooks/useTranslatorReducer';
import { useDebounce } from './hooks/useDebounce';

import { AUTO_LANGUAGE } from './constants/languages.d';
import { SectionType } from './types/translator.d';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

import './App.css';
import { translate } from './services/translate';



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
    const debouncedFromText = useDebounce<string>(fromText);

    const handleOnClicktoInterchangeLanguages = () => interchangeLanguages();
    const handleOnClickClipboard = () => navigator.clipboard.writeText(result);
    const handleOnClickSpeaker = () => {
        const utterance = new SpeechSynthesisUtterance(result);
        utterance.lang = toLanguage;
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        if (debouncedFromText === '') return;
        (async () => {
            try {
                const traslatedText = await translate({ fromLanguage, toLanguage, fromText: debouncedFromText });
                if (traslatedText == null) return;
                setResult(traslatedText);
            } catch (error) {
                setResult('Error');
            }
        })();
    }, [debouncedFromText, fromLanguage, toLanguage]);

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
                        <Stack 
                            className='App-textarea-to'
                        >
                            <TextArea 
                                type={SectionType.To}
                                loading={loading}
                                value={result}
                                onChange={setResult}
                            />
                            {result !== '' && 
                                <div className='App-textarea-to-icons'>
                                    <Button 
                                        variant='link'
                                        onClick={handleOnClickClipboard}
                                    >
                                        <ClipboardIcon />
                                    </Button>
                                    <Button 
                                        variant='link'
                                        onClick={handleOnClickSpeaker}
                                    >
                                        <SpeakerIcon />
                                    </Button>
                                </div>
                            }
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}
