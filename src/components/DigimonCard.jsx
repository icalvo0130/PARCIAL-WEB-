import { useState } from 'react';

export const DigimonCard = ({ index, digi, deleteDigi }) => {
  return (
    <div key={index}>
      <p>{index}</p>
      <img src={digi.image} />
      <p>{digi.name}</p>
      <button onClick={() => deleteDigi(index)}>Eliminar</button>
    </div>
  );
};

