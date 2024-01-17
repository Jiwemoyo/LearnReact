import React from 'react'
import { useState , useEffect} from 'react'

export const UserApp = () => {

  const Lu =({nombre})=>{
    return <li className=' font-bold text-5xl text-yellow-100 py-4'>{nombre}</li>
  }


  const [User, setUser] = useState([])

  const userFetch = async()=>{
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUser(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
    userFetch()
  }, [])
  

  return (
    <>
    <h1 className='font-bold text-7xl text-white'>Lista de Usuarios</h1>
    <ul>
      {User.map(usuario =><Lu key={usuario.id}nombre={usuario.name}/>)}
    </ul>
    </>
  )
}
