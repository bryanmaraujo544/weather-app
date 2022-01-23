import { useState } from 'react';
import './styles.css';

export const Button = ({ label }: any) => {
  const [value, setValue] = useState("Press Here");

  return (
    <button title="button" className="btn" onClick={() => setValue("You Clicked")}>
      {value}
    </button>
  )
}