import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Contador } from './Contador'


// Se realizan cambios cada mes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador value={0}></Contador>
  </React.StrictMode>
)

