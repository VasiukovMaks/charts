import React from 'react';

export default function SelectComponent({ options, value, onChange }) {
  return (
    <select onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option.name} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
}
