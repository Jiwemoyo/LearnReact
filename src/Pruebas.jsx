import { useState } from "react";

const Items =({nombre,comprado})=>{
  return(
    <li className=" font-bold text-3xl py-4">{nombre} {comprado?"✅":"❌"}</li>
  )
}

export const Pruebas = () => {

  const agregando =()=>{
    setarreglo([...arreglo,{nombre:'Nuevo producto',comprado:false}])
  }

  let listaCompras =[
    {nombre:"Azucar",comprado:true},
    {nombre:"Papas",comprado:true},
    {nombre:"Miel",comprado:true},
    {nombre:"Pan",comprado:false},
    {nombre:"Chocolate",comprado:false}
  ]

  const [arreglo, setarreglo] = useState(listaCompras)


  return (
  <>
  <ol>
    {
      arreglo.map(producto =><Items key={producto.nombre} nombre={producto.nombre} comprado={producto.comprado}></Items>)
    }
  </ol>
  <button className=" p-6 font-bold bg-slate-400 rounded-full" onClick={agregando}>Agregar</button>
  </>
  )
};
