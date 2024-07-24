import React, { useState, useEffect } from 'react';
import { WordData } from '../lib/datatypes';

import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import WordHero from '../components/WordHero';
import WordDefinitions from '../components/WordDefinitions';
import SourceFooter from '../components/SourceFooter';

import { SERIF_FONTS } from '../lib/constants';

function Root() {
  const [font, setFont] = useState<string>(SERIF_FONTS);
  const [word, setWord] = useState<string>('course');
  const [wordData, setWordData] = useState<WordData | null>(null);

  const fetchData = async () => {
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await fetch(url);
      const data = await response.json();

      setWordData(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="app-wrapper"
      style={{
        fontFamily: font,
      }}
    >
      <Header font={font} setFont={setFont} />

      <Searchbar word={word} setWord={setWord} handleSubmit={handleSubmit} />

      {wordData && (
        <div>
          <WordHero data={wordData} />
          <WordDefinitions wordData={wordData} />
          <SourceFooter source={wordData.sourceUrls[0]} />
        </div>
      )}
    </div>
  );
}

export default Root;
