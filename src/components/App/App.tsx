import React from 'react';
import './App.css';
import {Link} from '../Link/Link'
import {MainTitle} from '../mainTitle/MainTitle'
import {ElementTitle} from '../ElementTitle/ElementTitle'
import {Character, CharacterProps} from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';

/*type CharacterElemObj= CharacterProps &{
  id: number;
}*/


type CharacterElemObj = {
  name:string,
  img: string,
  id: number;
}

function App() {

  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters]= React.useState<CharacterElemObj[]>([
    {
      id: Math.random(),
      name: "DILUC",
      img: `${process.env.PUBLIC_URL}/img/diluc.png`,
    },
  ])

  //const handleCreate=(newCharacter: CharacterProps)=>{
  const handleCreate=(newCharacter: {name:string, img:string})=>{
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


  const handleDelete=(deleteId: number)=>{

    const characterElemCopy= CharactersElems.filter((elem)=>{

      if(elem.id==deleteId){
        return false
      }else{
        return true
      }
    });

    setCharacters(characterElemCopy);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
        <a href="https://www.youtube.com/"><img src={`${process.env.PUBLIC_URL}/img/navLogo.png`} className="navLogo"></img></a>
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
          <img src={`${process.env.PUBLIC_URL}/img/userIcon.png`} className="userIcon"></img>
        </nav>

       <CharacterForm 
       onCreate={handleCreate}
       type="create"/>  
      
      <article className="content">
       {CharactersElems.map ((elem) =>{
         return <Character 
         key={elem.id}
         id={elem.id} 
         name={elem.name} 
         img={elem.img}
         onDelete={handleDelete}
         />
       })} 
       </article>
       
        
      </header>
    </div>
  );
}

export default App;
