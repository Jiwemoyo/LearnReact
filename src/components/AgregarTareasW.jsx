import { useState } from "react";

export const AgregarTareasW = ({productinio}) => {
  const [tarein, settarein] = useState("");

  const onInputchange = (event) => {
    settarein(event.target.value);
  };

  const onsubmit =(escuhando)=>{
    escuhando.preventDefault()
    let producto ={
      nombre:tarein,
      comprado:false
    }
    productinio(producte =>[...producte,producto])

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
