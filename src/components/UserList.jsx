import { useEffect, useState } from "react";

export const UserList = ({ endpoint }) => {
  const [data, setdata] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const data = await response.json();
      console.log(data);
      setdata(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchUsers()
  },[endpoint])
  return (
    <ul className=" py-8">
        {endpoint=='users'?data.map(item => <li key={item.id}>{item.name}</li>):data.map(item => <li key={item.id}>{item.body}</li>)}
    </ul>
  );
};
