import React from 'react';
import './App.css';
import { Link } from '../Link/Link'
import { MainTitle } from '../mainTitle/MainTitle'
import { ElementTitle } from '../ElementTitle/ElementTitle'
import { Character, CharacterProps } from '../Character/Character'
import { CharacterForm } from '../CharacterForm/CharacterForm';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Weapon from '../Weapon/Weapon';
import Artifacts from '../Artifacts/Artifacts';
import Error404 from '../Error404/Error404';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';
import { WeaponElemObj } from '../types/WeaponElemObj';
import { ArtifactsDetails } from '../ArtifactsDetails/ArtifactsDetails';
import { WeaponDetails } from '../WeaponDetails/WeaponDetails';
import { Footer } from '../Footer/Footer';
import { Bar } from 'react-chartjs-2';
import { TitleSection } from '../TitleSection/TitleSection';
import { getChartArtifactsData } from '../Utils/getChartData';
import { useLocalStorage } from '../Utils/useLocalStorage';



function App() {

  const [formType, setFormType] = React.useState<'create' | 'edit'>('create');
  const [editIdCharacter, setEditIdCharacter] = React.useState<number | null>(null);


  //Estado del arreglo de personajes
  const [CharactersElems, setCharacters] = useLocalStorage<CharacterElemObj[]>('CharacterElems', [
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
  const anemo = CharactersElems.filter((x) => {
    if (x.elementC === "anemo") {
      return true
    }
  })


  //Array artefactos
  let artifactArray: ArtifactsElemObj[] = [];

  CharactersElems.forEach((elem) => {
    elem.artifacts.forEach((artifactElem) => {
      artifactArray.push(artifactElem)
    })
  })


  //Weapon elem y array 
  let weaponElem: WeaponElemObj[] = []
  let weaponArray: WeaponElemObj[] = [];

  //separo los tipos de armas
  CharactersElems.forEach((elem) => {
    if (elem.weapon) {
      //Arreglo que separo
      weaponArray.push(elem.weapon)

      //arreglo detalles arma
      weaponElem.push(elem.weapon);
    }
  });

  const mandoble = weaponArray.filter((w) => {
    if (w?.type === "Mandoble") {
      return true
    }
  })
  const lanza = weaponArray.filter((w) => {
    if (w?.type === "Lanza") {
      return true
    }
  })
  const espada = weaponArray.filter((w) => {
    if (w?.type === "Espada") {
      return true
    }
  })
  const arco = weaponArray.filter((w) => {
    if (w?.type === "Arco") {
      return true
    }
  })



  //handle characters
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
          idOwner: 0
        }
      }
    ]
    setCharacters(newArrayCharacter);
  }


  const handleDeleteCharacter = (deleteId: number) => {
    const characterElemCopy = CharactersElems.filter((elem) => {
      if (elem.id === deleteId) {
        return false;
      }
      return true
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
    setFormType("create");
    setEditIdCharacter(null);
  }



  //handle artefactos
  const handleCreateArtifact = (characterId: number, newArtifact: ArtifactsElemObj) => {

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => elem.id === characterId);

    characterCopy[editIndex] = {
      ...CharactersElems[editIndex],
      artifacts: [
        ...CharactersElems[editIndex].artifacts,
        newArtifact
      ]
    }
    setCharacters(characterCopy);
  }

  const handleEditArtifact = (characterId: number, artifactId: number, editArtifact: ArtifactsElemObj) => {

    const characterCopy = CharactersElems.slice();
    const editIndex = CharactersElems.findIndex((elem) => elem.id === characterId);
    const artifactEditIndex = characterCopy[editIndex].artifacts.findIndex((elem) => elem.id === artifactId)

    setCharacters((prev) => {
      const copy = prev;

      copy[editIndex].artifacts[artifactEditIndex] = editArtifact;

      return [...copy]
    })
  }

  const handleDeleteArtifact = (characterId: number, deleteArtifactId: number) => {

    const editIndex = CharactersElems.findIndex((elem) => elem.id === characterId);
    
    const newArtifactArray = CharactersElems[editIndex].artifacts.filter((elemA) => {
      if (elemA.id === deleteArtifactId) {
        return false;
      }
      return true
    });

    setCharacters((prev) => {
      const copy = prev;
      copy[editIndex].artifacts = newArtifactArray;

      return [...copy] 
    })
  }


  ////Handle weapon
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

  const handleDeleteWeapon = (characterId: number) => {
    const characterCopy = CharactersElems.slice();
    const editIndexC = CharactersElems.findIndex((elem) => elem.id === characterId);

    setCharacters((prev) => {
      const copy = prev;
      const characterCopyW = copy[editIndexC];
      delete characterCopyW.weapon;

      copy[editIndexC] = characterCopyW;

      console.log(copy)
      return [...copy]

    })
  }

  const elementsData = {
    labels: ['PYRO', 'ELECTRO', 'CRYO', 'ANEMO', 'HYDRO', 'GEO'],
    datasets: [
      {
        label: '# de personajes',
        data: [pyro.length, electro.length, cryo.length, anemo.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(52, 235, 128, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(52, 235, 128, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  const artifactsData = getChartArtifactsData(CharactersElems);



  return (

    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <RouterLink to="/"><img src={`${process.env.PUBLIC_URL}/img/navLogo.png`} className="navLogo"></img></RouterLink>

          <Link
            text="ARMAS"
            url="/weaponsList"
          />
          <Link
            text="ARTEFACTOS"
            url="/artifactsList"
          />
          <Link
            text="FORMULARIO"
            url="/characterForm"
          />

          <Link
            text="ESTADÍSTICAS"
            url="/statistics"
          />
          <img src={`${process.env.PUBLIC_URL}/img/userIcon.png`} className="userIcon"></img>

        </nav>

        <Switch>
          <Route path="/" exact>
            <img src={`${process.env.PUBLIC_URL}/img/bannerImg.jpg`} className="banner"></img>

            <article className="info">
              <MainTitle
                text="PERSONAJES"
              />

              {pyro.length > 0 &&
                <>
                  <ElementTitle
                    text="PYRO"
                    img="pyroIcon.png"
                  />

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
                </>
              }

              {cryo.length > 0 &&
                <>
                  <ElementTitle
                    text="CRYO"
                    img="cryoIcon.png"
                  />

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
                </>
              }

              {electro.length > 0 &&
                <>
                  <ElementTitle
                    text="ELECTRO"
                    img="electroIcon.png"
                  />
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
                </>
              }

              {anemo.length > 0 &&
                <>
                  <ElementTitle
                    text="ANEMO"
                    img="anemoIcon.png"
                  />

                  <article className="componentsDiv">
                    {anemo.map((elem) => {
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
                </>
              }
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
                characterElem={CharactersElems}
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
              onEditArtifact={handleEditArtifact}
              onDeleteArtifact={handleDeleteArtifact}
              onCreateWeapon={handleCreateWeapon}
              onDeleteWeapon={handleDeleteWeapon}
            />
          </Route>

          <Route path="/weaponsList">
            <article className="info">
              <MainTitle
                text="ARMAS"
              />
              {mandoble.length > 0 &&
                <>
                  <h2 className="titlesSections normalTitles">MANDOBLE</h2>
                  <article className="componentsDiv">
                    {mandoble.map((elem) => {
                      return <Weapon
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        img={elem.mainImg}
                        idCharacter={elem.idOwner}
                      />
                    })}
                  </article>
                </>
              }
              {lanza.length > 0 &&
                <>
                  <h2 className="titlesSections normalTitles">LANZA</h2>
                  <article className="componentsDiv">
                    {lanza.map((elem) => {
                      return <Weapon
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        img={elem.mainImg}
                        idCharacter={elem.idOwner}
                      />
                    })}
                  </article>
                </>
              }
              {espada.length > 0 &&
                <>
                  <h2 className="titlesSections normalTitles">ESPADA</h2>
                  <article className="componentsDiv">
                    {espada.map((elem) => {
                      return <Weapon
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        img={elem.mainImg}
                        idCharacter={elem.idOwner}
                      />
                    })}
                  </article>
                </>
              }
              {arco.length > 0 &&
                <>
                  <h2 className="titlesSections normalTitles">ARCO</h2>
                  <article className="componentsDiv">
                    {arco.map((elem) => {
                      return <Weapon
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        img={elem.mainImg}
                        idCharacter={elem.idOwner}
                      />
                    })}
                  </article>
                </>
              }
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
                    idCharacter={elem.idOwner}
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
                listCharacter={CharactersElems}
              />
            }
          </Route>

          <Route path="/statistics">
            <article className="info">

              <MainTitle
                text="ESTADÍSTICAS"
              />
              <div className="characterDetails">
                <div className="graphicDiv">
                  <TitleSection
                    text="ELEMENTOS"
                  />

                  <Bar className="graphicBar" data={elementsData} options={
                    {
                      indexAxis: 'y',
                      elements: {
                        bar: {
                          borderWidth: 2,
                        },
                      },
                      responsive: true,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }
                  } />
                </div>

                <div className="graphicDiv">
                  <TitleSection
                    text="ARTEFACTOS POR PERSONAJE"
                  />
                  <Bar className="graphicBar" data={artifactsData} options={
                    {
                      indexAxis: 'y',
                      elements: {
                        bar: {
                          borderWidth: 2,
                        },
                      },
                      responsive: true,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }
                  } />
                </div>

              </div>
            </article>
          </Route>

          <Route path="/error404">
            <Error404></Error404>
          </Route>

          <Redirect to="/error404" />
        </Switch>
      </header>
      <Footer />
    </div>

  );
}

export default App;
