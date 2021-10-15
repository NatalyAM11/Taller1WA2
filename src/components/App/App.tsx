import React from 'react';
import './App.css';
import {Link} from '../Link/Link'
import {MainTitle} from '../mainTitle/MainTitle'
import {ElementTitle} from '../ElementTitle/ElementTitle'
import {Character, CharacterProps} from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';
import { HashRouter, Route} from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom';
import { useHistory } from 'react-router';
import Weapon from '../Weapon/Weapon';
import Artifacts from '../Artifacts/Artifacts';


/*type CharacterElemObj= CharacterProps &{
  id: number;
}*/


type CharacterElemObj = {
  name:string,
  elementC: string,
  img: string,
  id: number;
}

function App() {

  const history=useHistory();
  

  const [formType, setFormType]= React.useState<'create' | 'edit'> ('create');
  const [editId, setEditId]= React.useState<number | null>(null);

  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters]= React.useState<CharacterElemObj[]>([
    {
      id: Math.random(),
      name: "DILUC",
      elementC: "pyro",
      img: "diluc.png",
    },

    {
      id: Math.random(),
      name: "BENNET",
      elementC: "pyro",
      img: "bennet.png",
    },
  ])


  //const handleCreate=(newCharacter: CharacterProps)=>{
  const handleCreate=(newCharacter: {name:string, elementC:string, img:string})=>{
    console.log('Se creo', newCharacter)

    const newArrayCharacter=[
      ...CharactersElems,
      {
        id: Math.random(),
        name: newCharacter.name,
        elementC: newCharacter.elementC,
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
  console.log(CharactersElems);
  
  
  return (

    <HashRouter>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
          <RouterLink to="/home"><img src={`${process.env.PUBLIC_URL}/img/navLogo.png`} className="navLogo"></img></RouterLink>
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
                  url="/characterForm"
            />
            <img src={`${process.env.PUBLIC_URL}/img/userIcon.png`} className="userIcon"></img>
            
          </nav>

        <Route path="/home">
          <img src={`${process.env.PUBLIC_URL}/img/bannerImg.jpg`} className="banner"></img>

          <article className="info">
            <MainTitle
            text="PERSONAJES"
            />

            <ElementTitle
              text="PYRO"
              img="pyroIcon.png"
           />

            <article className="componentsDiv">
              {CharactersElems.map ((elem) =>{
                return <Character 
                key={elem.id}
                id={elem.id} 
                name={elem.name} 
                elementC={elem.elementC}
                img={`${process.env.PUBLIC_URL}/img/${elem.img}`}
                onDelete={handleDelete}
                onEdit={handleBeginEdit}
                />
              })} 
              </article>
          </article>  
        </Route>

        <Route path="/characterForm">
          <article className="info">

            <div className="formTitle">
              <h2 className="titleForm">{formType==="create"? "FORMULARIO": "EDITA EL PERSONAJE"}</h2>
              
              {(formType==="create") &&
                  <div className="formTypes">
                    <Link
                      text="PERSONAJES"
                      url="/characterForm"
                    />
                    <Link
                      text="ARMAS"
                      url="/weaponForm"
                    />
                    <Link
                      text="ARTEFACTOS"
                      url="/artifactsForm"
                    />
                  </div>
                }
            </div>

            <CharacterForm 
            editId={editId}
            type={formType}
            onCreate={handleCreate}
            onEdit={handleEdit}
            />  
          </article>
        </Route>

        <Route path="/personajesList">
        
          <section className="charactersList">
            <ElementTitle
                text="PYRO"
                img="pyroIcon.png"
            />

            <article className="componentsDiv">
              {CharactersElems.map ((elem) =>{
                return <Character 
                key={elem.id}
                id={elem.id} 
                name={elem.name} 
                elementC={elem.elementC}
                img={`${process.env.PUBLIC_URL}/img/${elem.img}`}
                onDelete={handleDelete}
                onEdit={handleBeginEdit}
                />
              })} 
            </article>
          </section>

       
        </Route>


        <Route path="/perfilPersonaje">

        </Route>

        
        <Route path="/armas">
          <article className="info">
            <MainTitle
              text="ARMAS"
            />
            <h2 className="titlesSections normalTitles">MANDOBLE</h2>

            <article className="componentsDiv">
            <Weapon
            id={0}
            name={'Lápida del lobo'}
            img= {`${process.env.PUBLIC_URL}/img/lapidaLobo.png`}
            />
            </article>
          </article>

        </Route>
    
        <Route path="/artefactos">
          <article className="info">
              <MainTitle
                text="ARTEFACTOS"
              />

              <article className="componentsDiv">
              <Artifacts
              id={0}
              name={'Bruja Carmesí en Llamas'}
              img= {`${process.env.PUBLIC_URL}/img/brujaCarmesi.png`}
              />
              </article>
            </article>
        </Route>
        
          
        </header>
      </div>
    </HashRouter>
  );
}

export default App;
