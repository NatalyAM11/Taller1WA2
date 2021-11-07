import React from 'react';
import { Redirect, useParams } from 'react-router';
import './CharacterDetails.css';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { parse } from 'path';
import { TitleSection } from '../TitleSection/TitleSection';
import CharacterDetailsArtifactsForm from './CharacterDetailsArtifactsForm';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';
import { DetailsObj } from '../DetailsObj/DetailsObj';
import { CharacterDetailsArtifact } from './CharacterDetailsArtifact';
import { CharacterDetailsWeaponForm } from './CharacterDetailsWeaponForm';
import { WeaponElemObj } from '../types/WeaponElemObj';
import { CharacterDetailsWeapon } from './CharacterDetailsWeapon';
import { useHistory } from 'react-router';
import { type } from 'os';
import { useGetElementByIdParam } from '../Utils/useGetElementByIdParam';
import { useIdParam } from '../Utils/useIdParam';


interface CharacterDetailsProps {
    list: CharacterElemObj[];
    onCreateArtifact: (characterId: number, newArtifact: ArtifactsElemObj) => void
    onCreateWeapon: (characterId: number, newWeapon: WeaponElemObj) => void
}



export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ list, onCreateArtifact, onCreateWeapon }) => {
    const historyPages = useHistory();

    //Busco el elemento por su id que viene en el parametro en la lista
    const id= useIdParam();
    const character= useGetElementByIdParam(list);

    //Estado del arreglo de personajes
    const [CharactersElems, setCharacters] = React.useState<CharacterElemObj[]>(list);

    //estados weapon
    const [formWeaponType, setFormWeaponType] = React.useState<'create' | 'edit' | 'none'>('create');
    const [editIdWeapon, setEditIdWeapon] = React.useState<number | null>(null);

    //estados artifacts 
    const [formArtifactType, setFormArtifactType] = React.useState<'create' | 'edit' | 'none'>('create');
    const [editIdArtifact, setEditIdArtifact] = React.useState<number | null>(null);

    let [ArtifactElems, setArtifacts] = React.useState<ArtifactsElemObj[]>([]);



    //All character data
    if(!character){return null}
    const { name, img, history, role, constelacion, city, artifacts, weapon, trailer } = character;


    ///////Artifacts
    ArtifactElems = artifacts;

    const handleCreateArtifact = (newArtifact: ArtifactsElemObj) => {

        const newArrayArtifacts = [
            ...ArtifactElems,
            {
                id: Math.random(),
                name: newArtifact.name,
                mainImg: newArtifact.mainImg,
                arena: newArtifact.arena,
                copa: newArtifact.copa,
                tiara: newArtifact.tiara,
                twoItems: newArtifact.twoItems,
                fourItems: newArtifact.fourItems,
                domain: newArtifact.domain,
                notes: newArtifact.notes
            }
        ]

        //onCreateArtifact(id, newArtifact)
        //setFormArtifactType("none");
        setArtifacts(newArrayArtifacts);
        onCreateArtifact(id, newArtifact)
    }

    const handleBeginEditArtifact = (editId: number) => {
        setEditIdArtifact(editId);
        setFormArtifactType("edit");
        console.log('estas en edit', editId)
    }

    const handleEditArtifact = (id: number, editArtifact: ArtifactsElemObj) => {
        console.log(id, editArtifact.name)

        const characterCopy = list.slice();

        const ArtifactCopy = artifacts.slice();
        const editIndex = artifacts.findIndex((elem) => {
            if (elem.id === editIdArtifact) {
                return true;
            }
            return false
        });

        characterCopy[editIndex] = {
            ...CharactersElems[editIndex],
            artifacts: [
                ...CharactersElems[editIndex].artifacts,
                editArtifact,
            ]
        }


        setFormArtifactType("none");

        setCharacters(characterCopy);
        console.log(ArtifactCopy)
    }


    /////////Weapon 
    let weaponType, weaponName, weaponId;

    if (weapon) {
        weaponType = weapon.type;
        weaponName = weapon.name;
        weaponId = weapon.id;
    }

    const handleCreateWeapon = (newWeapon: WeaponElemObj) => {
        onCreateWeapon(id, newWeapon)
    }


    const handleBeginEditWeapon = (editId: number) => {
        setEditIdWeapon(editId);
        setFormWeaponType("edit");
        console.log('estas en edit', editId)
    }


    const handleEditWeapon = (id: number, editWeapon: WeaponElemObj) => {
        console.log(id, editWeapon.name)

        const characterCopy = CharactersElems.slice();
        const editIndex = CharactersElems.findIndex((elem) => {
            if (elem.id === editIdWeapon) {
                return true;
            }
            return false
        });

        characterCopy[editIndex] = {
            ...CharactersElems[editIndex],
            ...editWeapon,
        }

        setCharacters(characterCopy);
    }



    const handleDeleteWeapon = (deleteId: number) => {

        const characterElemCopy = CharactersElems.filter((elem) => {

        });

        setCharacters(characterElemCopy);
    }



    return (<div className="characterDetails">
        <TitleSection
            text="PERFIL"
        />

        <div className="mainInfoCharacter">
            <img src={`${process.env.PUBLIC_URL}/img/${img}`}></img>

            <div className="biographyDiv">
                <h2 className="titleElemDetail">{name}</h2>
                <p className="biographyText">{history}</p>
            </div>

            <div className="details">
                <DetailsObj
                    title={"Rareza"}
                    stars={`${process.env.PUBLIC_URL}/img/5stars.png`}
                />
                <DetailsObj
                    title={"Role"}
                    text={role}
                />
                <DetailsObj
                    title={"Arma"}
                    text={weaponType}
                />
                <DetailsObj
                    title={"Constelación"}
                    text={constelacion}
                />
                <DetailsObj
                    title={"Región natal"}
                    text={city}
                />

            </div>

        </div>

        <div className="weaponDiv">

            <TitleSection
                text="ARMA"
            />

            {!weaponName &&
                <section className="weaponFormDiv">
                    <img className="noSomething" src={`${process.env.PUBLIC_URL}/img/noWeapon.png`}></img>
                    <CharacterDetailsWeaponForm
                        onCreate={handleCreateWeapon}
                        onEdit={handleEditWeapon}
                    />
                </section>
            }

            {weaponName &&
                <section className="weaponElem">
                    {(weaponId && weaponType && weaponName) &&
                        <CharacterDetailsWeapon
                            key={weaponId}
                            id={weaponId}
                            name={weapon.name}
                            mainImg={weapon.mainImg}
                            history={weapon.history}
                            stat={weapon.stat}
                            passive={weapon.passive}
                            onEdit={handleBeginEditWeapon}
                            onDelete={handleDeleteWeapon}
                        />
                    }
                </section>
            }
        </div>


        <div className="ArtifactDiv">

            <TitleSection
                text="ARTEFACTOS"
            />

            {formArtifactType == "none" &&
                <button className="button buttonAddComponent">AÑADIR</button>}

            {(formArtifactType == "create" || formArtifactType == "edit") &&
                <div className="artifactFormDiv">

                    {artifacts.length < 1 &&
                        <img className="noSomething" src={`${process.env.PUBLIC_URL}/img/noArtifact.png`}></img>
                    }
                    <CharacterDetailsArtifactsForm
                        type={formArtifactType}
                        editId={editIdArtifact}
                        onCreate={handleCreateArtifact}
                        onEdit={handleEditArtifact}
                    />
                </div>
            }

            {(formArtifactType == "none" || formArtifactType == "create") &&

                <section className="artifactElem">
                    {artifacts.map((elem) => {
                        return <CharacterDetailsArtifact
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            imgFlor={elem.mainImg}
                            arena={elem.arena}
                            copa={elem.copa}
                            tiara={elem.tiara}
                            onEdit={handleBeginEditArtifact}
                        />
                    })}
                </section>
            }
        </div>



        <div className="TrailerDiv">
            <TitleSection
                text="TRAILER"
            />

            <iframe className="videoC" width="813" height="457" src={trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>


    </div>);

}

export default CharacterDetails;