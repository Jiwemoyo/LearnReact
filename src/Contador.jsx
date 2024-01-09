import { useState } from "react";

import React from 'react'


export const Contador = ({value}) => {

  function aumentando() {
    let aumento = value++
    console.log(aumento)
  }
  return (
    <>
        <h1 className=" font-bold text-5xl py-8">0</h1>
        <button className=" bg-slate-400 rounded-xl p-7 text-white font-bold" onClick={aumentando}>Hola soy un botom</button>
    </>

  )
}
