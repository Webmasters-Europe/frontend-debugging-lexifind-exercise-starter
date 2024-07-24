import React from 'react';

interface SearchbarProps {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  word,
  setWord,
  handleSubmit,
}) => {
  return (
    <div className="searchbar-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchWord" className="screen-reader-text">
          Search word
        </label>

        <div className="searchbar-container">
          <input
            type="text"
            name="searchWord"
            id="searchWord"
            className="searchbar-input"
            placeholder="Type a word to search"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            type="submit"
            className="searchbar-magnifying-glass"
            aria-label="Search"
          >
            <SearchIcon className="searchbar-icon" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
};

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

export default Searchbar;
