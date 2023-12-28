import { useState } from "react";

export const PruebasDiPruebas = () => {
  //esto es lo que controla el valor que se envia desde el retun
  const Item = ({ nombre, comprado }) => {
    return (
      <li className=" font-bold text-xl py-5">
        {nombre}
        {comprado?'✅':'❌'}
      </li>
    );
  };

  const agregando =()=>{
    setarreglo([...arreglo,{nombre:'Producto nuevo',comprado:false}])
  }

  let Productos =[
    {nombre:"Pan",comprado:true},
    {nombre:"Azucar",comprado:true},
    {nombre:"Galletas",comprado:true},
    {nombre:"Panela",comprado:true},
    {nombre:"Chocolatada",comprado:true},
    {nombre:"Servillets",comprado:true},
  ]

  const [arreglo, setarreglo] = useState(Productos)

  return (
    <>
      <ul>
        {
          arreglo.map(item => <Item key={item.nombre} nombre={item.nombre} comprado={item.comprado}></Item>)
        }
      </ul>
      <button className=" p-4 bg-slate-800 text-white rounded-sm" onClick={agregando}>Agregar objeto</button>
    </>
  );
};
