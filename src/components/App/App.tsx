import React from 'react';
import './App.css';
import { Link } from '../Link/Link'
import { MainTitle } from '../mainTitle/MainTitle'
import { ElementTitle } from '../ElementTitle/ElementTitle'
import { Character, CharacterProps } from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import Weapon from '../Weapon/Weapon';
import Artifacts from '../Artifacts/Artifacts';
import Error404 from '../Error404/Error404';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';
import { WeaponElemObj } from '../types/WeaponElemObj';
import { ArtifactsDetails } from '../ArtifactsDetails/ArtifactsDetails';
import { WeaponDetails } from '../WeaponDetails/WeaponDetails';


/*type CharacterElemObj= CharacterProps &{
  id: number;
}*/
let weaponn: WeaponElemObj;

function App() {
  const history = useHistory();

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editIdCharacter, setEditIdCharacter] = React.useState<number | null>(null);




  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters] = React.useState<CharacterElemObj[]>([
    {
      id: Math.random(),
      name: "DILUC",
      elementC: "pyro",
      img: "diluc.png",
      history: `Diluc Ragnvindr es el dueño actual de Viñedo del Amanecer y un noble de alta estima en la sociedad de Mondstadt. Aunque parece apático sobre los asuntos de la ciudad, la protege de noche como el rumoreado "Héroe Oscuro".
      Como el hombre más rico de Mondstadt, Diluc siempre muestra su lado más exquisito. Sin embargo, su verdadera naturaleza es la de un guerrero con una gran determinación. Protege a Mondstadt con todas sus fuerzas en todo momento.`,
      role: "DPS",
      constelacion: "Noctua",
      city: "Mondstadt",
      trailer: "https://www.youtube.com/embed/1TfbiDo7N4k",
      artifacts: [],
      weapon: weaponn,
    },
    {
      id: Math.random(),
      name: "BENNET",
      elementC: "pyro",
      img: "bennet.png",
      history: 'Un huérfano descubierto por un anciano aventurero cuando era un bebé, Bennett se crio en el Gremio de Aventureros de Mondstadt. Él es el único miembro de la "Brigada de Benny", ya que todos los demás dejaron el equipo después de experimentar la desgracia constante que lo sigue.',
      role: "BURST SUPPORT",
      constelacion: "Rota Calamitas",
      city: "Mondstadt",
      trailer: "https://www.youtube.com/embed/UW8lG_wNFIY",
      artifacts: [],
      weapon: weaponn,
    },
  ])


  //Separo los personajes por elemento
  const pyro = CharactersElems.filter((x) => {
    if (x.elementC === "pyro") {
      return true
    }
  })

  const electro = CharactersElems.filter((x) => {
    if (x.elementC === "electro") {
      return true
    }
  })

  const cryo = CharactersElems.filter((x) => {
    if (x.elementC === "cryo") {
      return true
    }
  })


  //artefactos array
  let artifactArray: ArtifactsElemObj[] = [];

  CharactersElems.forEach((elem) => {
    elem.artifacts.forEach((artifactElem) => {
      artifactArray.push(artifactElem)
    })
  })


  //weapon elem y array 
  let weaponElem: WeaponElemObj | undefined;
  let weaponArray: WeaponElemObj[] = [];

  
  CharactersElems.forEach((elem) => {
    weaponArray.push(elem.weapon)
  });

  const mandoble= weaponArray.filter((w)=>{
    if (w?.type === "Mandoble") {
      return true
    }
  })

  const lanza= weaponArray.filter((w)=>{
    if (w?.type === "Lanza") {
      return true
    }
  })


  CharactersElems.forEach((elem) => {
    if (elem) {

      if (elem.weapon) {
        weaponElem = elem.weapon;
      }
    }
  });

  console.log(weaponArray)

  const handleCreate = (newCharacter: { name: string, elementC: string, img: string, history: string, role: string, constelacion: string, city: string, trailer: string }) => {
    console.log('Se creo', newCharacter)

    const newArrayCharacter = [
      ...CharactersElems,
      {
        id: Math.random(),
        name: newCharacter.name,
        elementC: newCharacter.elementC,
        img: newCharacter.img,
        history: newCharacter.history,
        role: newCharacter.role,
        constelacion: newCharacter.constelacion,
        city: newCharacter.city,
        trailer: newCharacter.trailer,
        artifacts: [],
        weapon: {
          id: 0,
          name: "",
          mainImg: "",
          history: "",
          type: "",
          stat: "",
          passive: "",
        }
      }
    ]

    setCharacters(newArrayCharacter);
  }


  const handleDeleteCharacter = (deleteId: number) => {
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
    setEditIdCharacter(editId);
    setFormType("edit");
    console.log('estas en edit', editId)
  }


  const handleEdit = (id: number, editCharacter: { name: string, elementC: string, img: string, history: string, role: string, constelacion: string, city: string, trailer: string }) => {
    console.log(id, editCharacter.name)

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => {
      if (elem.id === editIdCharacter) {
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
      artifacts: [
        ...CharactersElems[editIndex].artifacts,
        newArtifact
      ]
    }

    setCharacters(characterCopy);

    //console.log(CharactersElems.artifacts)
  }


  //Artefactos
  const handleCreateWeapon = (characterId: number, newWeapon: WeaponElemObj) => {

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => {
      if (elem.id === characterId) {
        return true;
      }
      return false
    });

    characterCopy[editIndex] = {
      ...CharactersElems[editIndex],
      weapon: newWeapon
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

                {pyro.length > 0 &&
                  <ElementTitle
                    text="PYRO"
                    img="pyroIcon.png"
                  />
                }

                <article className="componentsDiv">
                  {pyro.map((elem) => {
                    return <Character
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      elementC={elem.elementC}
                      img={elem.img}
                      history={elem.history}
                      role={elem.role}
                      constelacion={elem.constelacion}
                      trailer={elem.trailer}
                      onDelete={handleDeleteCharacter}
                      onEdit={handleBeginEdit}
                    />
                  })}
                </article>

                {electro.length > 0 &&
                  <ElementTitle
                    text="ELECTRO"
                    img="pyroIcon.png"
                  />
                }

                <article className="componentsDiv">
                  {electro.map((elem) => {
                    return <Character
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      elementC={elem.elementC}
                      img={elem.img}
                      history={elem.history}
                      role={elem.role}
                      constelacion={elem.constelacion}
                      trailer={elem.trailer}
                      onDelete={handleDeleteCharacter}
                      onEdit={handleBeginEdit}
                    />
                  })}
                </article>


                {cryo.length > 0 &&
                  <ElementTitle
                    text="CRYO"
                    img="pyroIcon.png"
                  />
                }

                <article className="componentsDiv">
                  {cryo.map((elem) => {
                    return <Character
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      elementC={elem.elementC}
                      img={elem.img}
                      history={elem.history}
                      role={elem.role}
                      constelacion={elem.constelacion}
                      trailer={elem.trailer}
                      onDelete={handleDeleteCharacter}
                      onEdit={handleBeginEdit}
                    />
                  })}
                </article>

              </article>
            </Route>

            <Route path="/characterForm">
              <article className="info">

                <img src={`${process.env.PUBLIC_URL}/img/bannerForm.png`} className="banner"></img>
                <MainTitle
                  text="FORMULARIO"
                />

                <CharacterForm
                  editId={editIdCharacter}
                  type={formType}
                  onCreate={handleCreate}
                  onEdit={handleEdit}
                />
              </article>
            </Route>

            <Route path="/characterDetails/:id">
              <CharacterDetails
                list={CharactersElems}
                onCreateArtifact={handleCreateArtifact}
                onCreateWeapon={handleCreateWeapon}
              />
            </Route>


            <Route path="/weaponsList">
              <article className="info">
                <MainTitle
                  text="ARMAS"
                />
                {mandoble.length>0 &&
                  <h2 className="titlesSections normalTitles">MANDOBLE</h2>
                }

                <article className="componentsDiv">
                  {mandoble.map((elem) => {
                    return <Weapon
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      img={elem.mainImg}
                    />
                  })}
                </article>


                {lanza.length>0  &&
                  <h2 className="titlesSections normalTitles">LANZA</h2>
                }

                <article className="componentsDiv">
                 {lanza.map((elem) => {
                    return <Weapon
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      img={elem.mainImg}
                    />
                  })}
                </article>
              </article>

            </Route>

            <Route path="/artifactsList">
              <article className="info">
                <MainTitle
                  text="ARTEFACTOS"
                />

                <article className="componentsDiv">
                  {artifactArray.map((elem) => {
                    return <Artifacts
                      key={elem.id}
                      id={elem.id}
                      name={elem.name}
                      mainImg={elem.mainImg}
                    />
                  })}
                </article>
              </article>
            </Route>



            <Route path="/artifactsDetails/:id">
              <ArtifactsDetails
                list={artifactArray}
              />
            </Route>

            <Route path="/weaponDetails/:id">
              {weaponElem &&
                <WeaponDetails
                  weapon={weaponElem}
                />
              }
            </Route>

            <Route path="/error404">
              <Error404></Error404>
            </Route>
            <Redirect to="/error404" />
          </Switch>

        </header>
      </div>
    </HashRouter>
  );
}

export default App;
