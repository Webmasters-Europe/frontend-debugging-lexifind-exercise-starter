import React from 'react';
import { Meaning, WordData } from '../lib/datatypes';

interface WordDefinitionsProps {
  wordData: WordData;
}

const WordDefinitions: React.FC<WordDefinitionsProps> = ({ wordData }) => {
  return (
    <div className="word-definitions-wrapper">
      {wordData.meanings.map((meaning: any, index: number) => (
        <WordDefinitionBlock key={index} data={meaning} />
      ))}
    </div>
  );
};

interface WordDefinitionBlockProps {
  data: Meaning;
}

const WordDefinitionBlock: React.FC<WordDefinitionBlockProps> = ({ data }) => {
  const { partOfSpeech, definitions, synonyms } = data;

  return (
    <div className="word-block-wrapper">
      <div className="word-block-category-container">
        <h2 className="word-block-category-name">{partOfSpeech}</h2>
        <div className="word-block-category-divider"></div>
      </div>

      <div className="word-block-meaning-container">
        <h3 className="word-block-meaning-title">Meaning</h3>

        <ul className="word-block-meaning-list">
          {definitions.map((definition: any, index: number) => (
            <li key={index} className="word-block-meaning-list-item">
              {definition.definition}{' '}
              {definition.example && (
                <span className="word-block-meaning-list-item-example">
                  "{definition.example}"
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {synonyms.length > 0 && (
        <div className="word-block-synonyms-container">
          <h3 className="word-block-synonyms-title">Synonyms</h3>

          <ul className="word-block-synonyms-list">
            {synonyms.map((synonym: string, index: number) => (
              <li key={index} className="word-block-synonyms-list-item">
                {synonym}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordDefinitions;
