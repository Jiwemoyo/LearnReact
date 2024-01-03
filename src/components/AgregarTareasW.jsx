import { useState } from "react";

export const AgregarTareasW = ({productinio}) => {
  const [tarein, settarein] = useState("");

  const onInputchange = (event) => {
    settarein(event.target.value);
  };

  const onsubmit =(escuhando)=>{
    escuhando.preventDefault()
    productinio(tarein)

    settarein("")
  }
  return (
    <form action="" onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Ingrese Producto"
        value={tarein}
        onChange={onInputchange}
      />
    </form>
  );
};
