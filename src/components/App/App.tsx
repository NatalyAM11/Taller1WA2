import React from 'react';
import './App.css';
import {Link} from '../Link/Link'
import {MainTitle} from '../mainTitle/MainTitle'
import {ElementTitle} from '../ElementTitle/ElementTitle'
import {Character, CharacterProps} from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';

type CharacterElemObj= CharacterProps &{
  id: number;
}

function App() {

  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters]= React.useState<CharacterElemObj[]>([])

  const handleCreate=( newCharacter: CharacterProps)=>{
    console.log('Se creo', newCharacter)

    const newArrayCharacter=[
      ...CharactersElems,
      {
        id: Math.random(),
        name: newCharacter.name,
        img: newCharacter.img
      }
    ]

    setCharacters(newArrayCharacter);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <a href="https://www.youtube.com/"><img src="./img/navLogo.png" className="navLogo"></img></a>
          <Link
                text="PERSONAJES"
                url="https://www.youtube.com/"
            />
          <Link
                text="ARMAS"
                url="https://www.youtube.com/"
            />
          <Link
                text="ARTEFACTOS"
                url="https://www.youtube.com/"
          />
          <img src="./img/userIcon.png" className="userIcon"></img>
        </nav>

       <CharacterForm onCreate={handleCreate}/>  
      
      <article className="content">
       {CharactersElems.map ((elem) =>{
         return <Character key={elem.id} name={elem.name} img={elem.img}/>
       })} 
       </article>
       
        
      </header>
    </div>
  );
}

export default App;
