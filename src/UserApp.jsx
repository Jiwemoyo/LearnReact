import { useState, useEffect } from "react";
import { UserList } from "./components/userList";

export const UserApp = () => {

    const [enpoint, setEnpoint] = useState('users')
  const mostrarTodo = () => {
    setEnpoint('comments')
  };


  return (
    <div className=" font-bold text-3xl text-white">
      <h1 className=" text-white font-bold text-5xl">Lista de usuarios</h1>
      <UserList endpoint={enpoint}></UserList>

      <button className=" bg-slate-500" onClick={mostrarTodo}>
        Mostrar usarios
      </button>
    </div>
  );
};
