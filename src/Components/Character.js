import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({character}) {
  return (
    <div className='card'>
        <img src={character.image} alt={character.name} />
        <ul className='text-container' >
            <Link to ><li>{character.name}</li></Link> 
             {/* <li className='status' >{character.status} - {character.species}</li>
             <li className='title' >Last seen on </li>
             <li>{character.location.name}</li> */}
            </ul>
        </div>
  )
}
