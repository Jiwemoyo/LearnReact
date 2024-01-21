import React from "react";
import { useState } from "react";

const AgregarProducto = () => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();  // Corregir aquí
    console.log(input);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Agrega un nuevo producto"
        className="p-4 mt-3"
        onInput={onInputChange}
        value={input}
      />
    </form>
  );
};

export default AgregarProducto;
