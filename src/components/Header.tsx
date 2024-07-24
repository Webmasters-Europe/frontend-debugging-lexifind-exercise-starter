import React from 'react';
import { Link } from 'react-router-dom';

import { SERIF_FONTS, SANS_SERIF_FONTS } from '../lib/constants';

interface HeaderProps {
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ font, setFont }) => {
  return (
    <header className="header-container">
      <Link to="/" className="header-logo-wrapper">
        <img
          src="/LexiFind.webp"
          alt="LexiFind Logo"
          className="header-logo-img"
        />
        <span className="header-logo-text">LexiFind</span>
      </Link>

      <div>
        <Link to="/favorites" className="header-link-text">
          Favorites
        </Link>
      </div>

      <select
        value={font}
        onChange={(e) => setFont(e.target.value)}
        className="header-select"
        style={{ fontFamily: font }}
      >
        <option value={SERIF_FONTS}>Serif</option>
        <option value={SANS_SERIF_FONTS}>Sans Serif</option>
      </select>
    </header>
  );
};

export default Header;
