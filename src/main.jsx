import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './index.css'
import { Contador } from './Contador'
import { ListadoApp } from './ListadoApp'
import { Pruebas } from './Pruebas'
import { PruebasDiPruebas } from './PruebasDiPruebas'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente titulo='Enviando desde el padre' sumando={3}/> */}
    {/* <Contador value={0}/> */}
    <ListadoApp/>
    {/* <Pruebas/> */}
    {/* <PruebasDiPruebas valor={0}/> */}
  </React.StrictMode>
)

