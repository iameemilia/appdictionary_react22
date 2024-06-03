import React, { useState } from 'react';
import WordList from './WordList';
import AddWordForm from './AddWordForm';

const MainPage = () => {
    const [words, setWords] = useState([
        { word: 'hello', transcription: 'həˈləʊ', translation: 'привет', theme: 'общее' },
        { word: 'apple', transcription: 'ˈæpl', translation: 'яблоко', theme: 'продукты' },
        { word: 'car', transcription: 'kɑːr', translation: 'машина', theme: 'транспорт' }
    ]);

    const handleAddWord = (newWord) => {
        setWords([...words, newWord]);
    };

    return (
        <div className="main-page">
            <h2>Список слов</h2>
            <WordList words={words} />
            <h2>Добавить новое слово</h2>
            <AddWordForm onAddWord={handleAddWord} />
        </div>
    );
}

export default MainPage;
