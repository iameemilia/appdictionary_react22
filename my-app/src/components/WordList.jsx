import React from 'react';
import WordCard from './WordCard';

const WordList = ({ words }) => {
    return (
        <div className="word-list">
            {words.map((word, index) => (
                <WordCard key={index} word={word} />
            ))}
        </div>
    );
}

export default WordList;
