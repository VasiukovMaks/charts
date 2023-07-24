import React from 'react';

export default function Error({ message }) {
  return (
    <>
      <div>Что-то пошло не так, приходите позже...</div>
      {message && <div>{ message }</div>}
    </>
  );
}
