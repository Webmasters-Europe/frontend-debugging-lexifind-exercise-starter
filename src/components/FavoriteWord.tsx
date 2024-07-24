import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeartFilled, HeartIcon } from './Icons';

interface FavoriteWordProps {
  word: string;
}

const FavoriteWord: React.FC<FavoriteWordProps> = ({ word }) => {
  const [isFavorite, setIsFavorite] = useState(false);

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

  // BUG: Missing useEffect
  /*   useEffect(() => {
    const favoriteWords = JSON.parse(
      localStorage.getItem('favoriteWords') || '[]'
    );
    setIsFavorite(favoriteWords.includes(word));
  }, [word]); */

  return (
    <div className="fave-word-wrapper">
      <Link
        // to={`/?word=${word}`}
        to="/" // BUG
        className="fave-word-link"
      >
        <p>{word}</p>
      </Link>

      <button className="fave-icon-btn" onClick={toggleFavorite}>
        {isFavorite ? (
          <HeartFilled className="heart-icon-filled" aria-hidden="true" />
        ) : (
          <HeartIcon className="heart-icon-unfilled" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default FavoriteWord;
