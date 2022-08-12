import React from 'react';
import { useCharacters } from './Hooks/useCharacters';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <p>loading...</p>;
  if (error) return <p>something went wrong...</p>;

  return (
    <>
      <h1>The characters of Rick and Morty</h1>
      <div className='char'>
        {data.characters.results.map((e) => {
          return (
            <div className='char2'>
              <h3>{e.name}</h3>
              <img src={e.image} alt={e.name} />
            </div>
          );
        })}
      </div>
    </>
  );
}
