import { useState, useEffect } from 'react';

import Header from '../components/Header';
import FavoriteWord from '../components/FavoriteWord';

import { SERIF_FONTS } from '../lib/constants';

function Favorites() {
  const [font, setFont] = useState<string>(SERIF_FONTS);
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  useEffect(() => {
    const loadedFavorites = JSON.parse(
      localStorage.getItem('favoriteWords') || '[]'
    );
    setFavoriteWords(loadedFavorites);
  }, []);

  return (
    <div
      className="app-wrapper"
      style={{
        fontFamily: font,
      }}
    >
      <Header font={font} setFont={setFont} />

      {favoriteWords.length > 0 ? (
        <ul className="favorites-list">
          {favoriteWords.map((word, index) => (
            <li
              className={`favorites-item ${index > 0 ? 'with-divider' : ''}`}
              key={index}
            >
              <FavoriteWord word={word} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="favorites-text">No favorite words added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
