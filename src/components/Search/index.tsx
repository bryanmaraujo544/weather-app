import React from 'react';
import { Container } from './styles';
import { BiSearchAlt } from 'react-icons/bi';

export const Search = () => {
  const [inputValue, setInputValue] = React.useState('');

  function handleChange(event: any) {
    setInputValue(event.target.value);
  }

  return (
    <Container>
      <button>
        <BiSearchAlt className="icon" />
      </button>
      <input 
        onChange={handleChange} 
        title="search" 
        value={inputValue} 
        placeholder="Search a city..."
      />
    </Container>
    
  )
}