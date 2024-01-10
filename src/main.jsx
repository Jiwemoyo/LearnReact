import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Contador } from './Contador'
import ListadoCompras from './ListadoCompras'


// Se realizan cambios cada mes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Contador value={0}></Contador> */}
    <ListadoCompras/>
  </React.StrictMode>
)

