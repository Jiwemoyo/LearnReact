import { useState } from "react";

export const AgregarTareas = ({ procutines }) => {
  const [inputt, setinputt] = useState("");

  const cambiando = (eventin) => {
    setinputt(eventin.target.value);
  };

  const onsubmit = (papua) => {
    papua.preventDefault();
    procutines(inputt);
    setinputt("");
  };
  return (
    <form action="" onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="ingresa producto"
        value={inputt}
        onChange={cambiando}
      />
    </form>
  );
};
