import { useState, useEffect } from 'react';
import { DigimonCard } from './DigimonCard';

export const Form = () => {
  const [inputName, setInputName] = useState();
  const [inputImagen, setInputImagen] = useState();
  const [digi,setDigi] = useState([]); //este es list pero yo con ese nombre feo no me iba a guiar bien :)))

  const createDigi = (e) => {
    e.preventDefault();
    setDigi([...digi, { name: inputName, imagen: inputImagen }]);

  };

  const deleteDigi = (id) => {
    const digiFiltered = digi.filter((_, index) => index !== id);
    setDigi(digiFiltered);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch(
          `https://digi-api.com/api/v1/digimon?pageSize=10`
        )
          .then((res) => res.json())
          .then((digi) => setDigi(digi.content));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  },[]);


  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagen"
          onChange={(e) => setInputImagen(e.target.value)}
        />
        <button onClick={(e) => createDigi(e)}>Crear</button>
      </form>
      {digi.map((digi, index) => (
        <DigimonCard
          digi={digi}
          index={index}
          deleteDigi={deleteDigi} 
        />
      ))}
    </>
  );
};

