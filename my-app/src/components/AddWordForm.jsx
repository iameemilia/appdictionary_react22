import React, { useState } from 'react';

const AddWordForm = ({ onAddWord }) => {
    const [word, setWord] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [theme, setTheme] = useState('');

    const handleAddWord = () => {
        onAddWord({ word, transcription, translation, theme });
        setWord('');
        setTranscription('');
        setTranslation('');
        setTheme('');
    };

    return (
        <div className="add-word-form">
            <input type="text" placeholder="Слово" value={word} onChange={(e) => setWord(e.target.value)} />
            <input type="text" placeholder="Транскрипция" value={transcription} onChange={(e) => setTranscription(e.target.value)} />
            <input type="text" placeholder="Перевод" value={translation} onChange={(e) => setTranslation(e.target.value)} />
            <input type="text" placeholder="Тема" value={theme} onChange={(e) => setTheme(e.target.value)} />
            <button onClick={handleAddWord}>Добавить слово</button>
        </div>
    );
}

export default AddWordForm;
