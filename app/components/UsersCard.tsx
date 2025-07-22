import React, { ReactNode } from 'react';
import usersCardMD from './UsersCard.module.css';

interface Iuser {
  id: number;
  name: string;
}

const UsersCard = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
    const allusers: Iuser[] | null = await result.json();
  return (
    <div>
      <h1>This is a usercard title</h1>
      {allusers && allusers.map((user):ReactNode => {
        return <div key={user.id} className={`${usersCardMD.usersCard} m-3`} >
          <p>{user.name}</p>
        </div>
      })}
    </div>
  )
}

export default UsersCard;
