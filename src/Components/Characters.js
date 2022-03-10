import React, { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character';

export default function Characters() {
 
  const [page, setPage] = useState(2);

  const  fetchCharacters = async ({queryKey}) => {

    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
}  

    const {data, status} = useQuery(["characters", page], fetchCharacters); 

    if (status === "loading"){
      return <div>Loading...</div>
    }

    if (status === "error"){
      return <div>Error</div>
    }
    

  return (
    <div>
    <div className='container'>
      {data.results.map(character => (
        <Character character={character}/>
      ))}  
 </div>
   <button>Previous Page</button>
   <button>Next Page</button>
   </div>
  )
}
