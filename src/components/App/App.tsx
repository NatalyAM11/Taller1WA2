import React from 'react';
import './App.css';
import {Link} from '../Link/Link'
import {MainTitle} from '../mainTitle/MainTitle'
import {ElementTitle} from '../ElementTitle/ElementTitle'
import {Character, CharacterProps} from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';
import { HashRouter, Route} from 'react-router-dom';


/*type CharacterElemObj= CharacterProps &{
  id: number;
}*/


type CharacterElemObj = {
  name:string,
  img: string,
  id: number;
}

function App() {

  const [formType, setFormType]= React.useState<'create' | 'edit'> ('create');
  const [editId, setEditId]= React.useState<number | null>(null);

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


  const handleBeginEdit = (editId: number) =>{
    setEditId(editId);
    setFormType("edit");
    console.log('estas en edit', editId)
  }

  const handleEdit = (id: number, editCharacter:{name: string})=>{
    console.log(id, editCharacter.name)

    const characterCopy= CharactersElems.slice();
    const editIndex= CharactersElems.findIndex((elem)=>{
      if(elem.id === editId){
        return true;
      }
      return false
    });

    characterCopy[editIndex] = {
      ...CharactersElems[editIndex],
      ...editCharacter,
    }

    setCharacters(characterCopy);
  }

  
  
  return (

    <HashRouter>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
          <a href="https://www.youtube.com/"><img src={`${process.env.PUBLIC_URL}/img/navLogo.png`} className="navLogo"></img></a>
            <Link
                  text="PERSONAJES"
                  url="/personajesList"
              />
            <Link
                  text="ARMAS"
                  url="/armas"
              />
            <Link
                  text="ARTEFACTOS"
                  url="/artefactos"
            />
             <Link
                  text="FORM"
                  url="/form"
            />
            <img src={`${process.env.PUBLIC_URL}/img/userIcon.png`} className="userIcon"></img>
          </nav>

        <Route path="/form">
          <CharacterForm 
          editId={editId}
          type={formType}
          onCreate={handleCreate}
          onEdit={handleEdit}
          />  
        </Route>

        <Route path="/personajesList">
        <article className="content">
        {CharactersElems.map ((elem) =>{
          return <Character 
          key={elem.id}
          id={elem.id} 
          name={elem.name} 
          img={elem.img}
          onDelete={handleDelete}
          onEdit={handleBeginEdit}
          />
        })} 
        </article>
        </Route>
        
          
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
