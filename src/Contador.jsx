import { useState } from "react";

import React from 'react'


export const Contador = ({value}) => {

  const [cont, setcont] = useState(value)

  function aumentando() {
    setcont(cont+1)
  }
  return (
    <>
        <h1 className=" font-bold text-5xl py-8">{cont}</h1>
        <button className=" bg-slate-400 rounded-xl p-7 text-white font-bold" onClick={aumentando}>Hola soy un botom</button>
    </>

  )
}
