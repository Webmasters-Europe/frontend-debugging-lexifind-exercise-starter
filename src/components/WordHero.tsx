import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, HeartIcon, HeartFilled } from './Icons';
import { Phonetic } from '../lib/datatypes';

interface WordHeroProps {
  data: {
    word: string;
    phonetics: Phonetic[];
  };
}

const WordHero: React.FC<WordHeroProps> = ({ data }) => {
  const { word, phonetics } = data;

  const [isFavorite, setIsFavorite] = useState(false);

  const americanEnglishPhonetic = phonetics.find((phonetic) =>
    phonetic.audio?.includes('-us')
  );
  const finalPhonetic = americanEnglishPhonetic || phonetics[0];

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteWords') || '[]');

    if (favorites.includes(word)) {
      const filteredFavorites = favorites.filter(
        (item: string) => item !== word
      );
      localStorage.setItem('favoriteWords', JSON.stringify(filteredFavorites));
    } else {
      favorites.push(word);
      localStorage.setItem('favoriteWords', JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favoriteWords = JSON.parse(
      localStorage.getItem('favortieWords') || '[]' // BUG favortieWords instead of (favoriteWords)
    );
    // setIsFavorite(favoriteWords.includes(word)); // BUG
  }, [word]);

  return (
    <div className="wordhero-wrapper">
      <div className="wordhero-word-container">
        <button className="heart-icon-btn" onClick={toggleFavorite}>
          {isFavorite ? (
            <HeartFilled className="heart-icon-filled" aria-hidden="true" />
          ) : (
            <HeartIcon className="heart-icon-unfilled" aria-hidden="true" />
          )}
        </button>

        <h1 className="wordhero-word">{word}</h1>
        {finalPhonetic?.text && (
          <p className="wordhero-word-phonetic">{finalPhonetic.text}</p>
        )}
      </div>

      {finalPhonetic?.audio && (
        <div>
          <button onClick={playAudio} className="wordhero-play-btn">
            <PlayIcon className="wordhero-play-icon" aria-hidden="true" />
          </button>
          <audio ref={audioRef} src={finalPhonetic.audio}></audio>
        </div>
      )}
    </div>
  );
};

export default WordHero;
