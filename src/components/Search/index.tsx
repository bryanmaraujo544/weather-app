import React from 'react';

export const Search = () => {
  const [inputValue, setInputValue] = React.useState('');

  function handleChange(event: any) {
    setInputValue(event.target.value);
  }

  return <input onChange={handleChange} title="search" value={inputValue} />
}