import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './index.css'
import { Contador } from './Contador'
import { ListadoApp } from './ListadoApp'
import { Pruebas } from './Pruebas'
import { PruebasDiPruebas } from './PruebasDiPruebas'


// Practicas de una semana
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pruebas/>
    {/* <PruebasDiPruebas valor={0}/> */}
  </React.StrictMode>
)

