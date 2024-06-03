import React from 'react';

const WordCard = ({ word }) => {
    return (
        <div className="card">
            <h2>{word.word}</h2>
            <p><strong>Транскрипция:</strong> {word.transcription}</p>
            <p><strong>Перевод:</strong> {word.translation}</p>
            <p><strong>Тема:</strong> {word.theme}</p>
        </div>
    );
}

export default WordCard;
