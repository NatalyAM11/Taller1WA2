import React from 'react';
import './App.css';
import { Link } from '../Link/Link'
import { MainTitle } from '../mainTitle/MainTitle'
import { ElementTitle } from '../ElementTitle/ElementTitle'
import { Character, CharacterProps } from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import Weapon from '../Weapon/Weapon';
import Artifacts from '../Artifacts/Artifacts';
import Error404 from '../Error404/Error404';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';


/*type CharacterElemObj= CharacterProps &{
  id: number;
}*/


function App() {

  const history = useHistory();


  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editId, setEditId] = React.useState<number | null>(null);

  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters] = React.useState<CharacterElemObj[]>([
    {
      id: Math.random(),
      name: "DILUC",
      elementC: "pyro",
      img: "diluc2.png",
      history:`Diluc Ragnvindr es el dueño actual de Viñedo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece apático sobre los asuntos de la ciudad, la protege de noche como el rumoreado Héroe Oscuro.
      Como el hombre más rico de Mondstadt, Diluc siempre muestra su lado más exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinación. Protege a Mondstadt con todas sus fuerzas en todo momento.`,
      role: "DPS",
      constelacion: "Noctua",
      artifacts: []
    },

    {
      id: Math.random(),
      name: "BENNET",
      elementC: "pyro",
      img: "bennet2.png",
      history:'Diluc Ragnvindr es el dueño actual de Viñedo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece apático sobre los asuntos de la ciudad, la protege de noche como el rumoreado Héroe Oscuro.Como el hombre más rico de Mondstadt, Diluc siempre muestra su lado más exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinación. Protege a Mondstadt con todas sus fuerzas en todo momento.',
      role: "BURST SUPPORT",
      constelacion: "Rota Calamitas",
      artifacts: []
    },
  ])


  //const handleCreate=(newCharacter: CharacterProps)=>{
  const handleCreate = (newCharacter: { name: string, elementC: string, img: string, history: string, role: string, constelacion: string}) => {
    console.log('Se creo', newCharacter)

    const newArrayCharacter = [
      ...CharactersElems,
      {
        id: Math.random(),
        name: newCharacter.name,
        elementC: newCharacter.elementC,
        img: newCharacter.img,
        role: newCharacter.role,
        constelacion: newCharacter.constelacion,
        history: newCharacter.history,
        artifacts: [
          {
            id: 0,
            name:"Bruja Carmesi",
            mainImg:"brujaCarmesi.png",
          }
        ]
      }
    ]

    setCharacters(newArrayCharacter);
  }


  const handleDelete = (deleteId: number) => {

    const characterElemCopy = CharactersElems.filter((elem) => {

      if (elem.id == deleteId) {
        return false
      } else {
        return true
      }
    });

    setCharacters(characterElemCopy);
  }


  const handleBeginEdit = (editId: number) => {
    setEditId(editId);
    setFormType("edit");
    console.log('estas en edit', editId)
  }

  const handleEdit = (id: number, editCharacter: { name: string }) => {
    console.log(id, editCharacter.name)

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => {
      if (elem.id === editId) {
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
  //console.log(CharactersElems);


  //Artefactos
  const handleCreateArtifact = (characterId: number, newArtifact: ArtifactsElemObj) => {

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => {
      if (elem.id === characterId) {
        return true;
      }
      return false
    });

    characterCopy[editIndex] = {
      ...CharactersElems[editIndex],
      artifacts:[
        ...CharactersElems[editIndex].artifacts,
        newArtifact
      ]
    }

    setCharacters(characterCopy);
  }


  return (

    <HashRouter>
      <div className="App">
        <header className="App-header">
          <nav className="nav">
            <RouterLink to="/home"><img src={`${process.env.PUBLIC_URL}/img/navLogo.png`} className="navLogo"></img></RouterLink>
            <Link
              text="PERSONAJES"
              url="/charactersList"
            />
            <Link
              text="ARMAS"
              url="/weaponsList"
            />
            <Link
              text="ARTEFACTOS"
              url="/artifactsList"
            />
            <Link
              text="FORM"
              url="/characterForm"
            />
            <img src={`${process.env.PUBLIC_URL}/img/userIcon.png`} className="userIcon"></img>

          </nav>


          <Switch>
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
                  {CharactersElems.map((elem) => {
                    return <Character
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      elementC={elem.elementC}
                      img={`${process.env.PUBLIC_URL}/img/${elem.img}`}
                      history= {elem.history}
                      role={elem.role}
                      constelacion={elem.constelacion}
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
                  <h2 className="titleForm">{formType === "create" ? "FORMULARIO" : "EDITA EL PERSONAJE"}</h2>

                  {(formType === "create") &&
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

            <Route path="/charactersList">

              <section className="charactersList">
                <ElementTitle
                  text="PYRO"
                  img="pyroIcon.png"
                />

                <article className="componentsDiv">
                  {CharactersElems.map((elem) => {
                    return <Character
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      elementC={elem.elementC}
                      img={`${process.env.PUBLIC_URL}/img/${elem.img}`}
                      history={elem.history}
                      role={elem.role}
                      constelacion={elem.constelacion}
                      onDelete={handleDelete}
                      onEdit={handleBeginEdit}
                    />
                  })}
                </article>
              </section>
            </Route>


            <Route path="/characterDetails/:id">
              <CharacterDetails
                list={CharactersElems}
                onCreateArtifact= {handleCreateArtifact}
              /> 
            </Route>


            <Route path="/weaponsList">
              <article className="info">
                <MainTitle
                  text="ARMAS"
                />
                <h2 className="titlesSections normalTitles">MANDOBLE</h2>

                <article className="componentsDiv">
                  <Weapon
                    id={0}
                    name={'Lápida del lobo'}
                    img={`${process.env.PUBLIC_URL}/img/lapidaLobo.png`}
                  />
                </article>
              </article>

            </Route>

            <Route path="/artifactsList">
              <article className="info">
                <MainTitle
                  text="ARTEFACTOS"
                />

                <article className="componentsDiv">
                  <Artifacts
                    id={0}
                    name={'Bruja Carmesí en Llamas'}
                    mainImg={`${process.env.PUBLIC_URL}/img/brujaCarmesi.png`}
                  />
                </article>
              </article>
            </Route>

            <Route path="/error404">
              <Error404></Error404>
            </Route>
            <Redirect to="/error404"/>
          </Switch>

        </header>
      </div>
    </HashRouter>
  );
}

export default App;
