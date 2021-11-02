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


interface CharacterDetailsProps {
    list: CharacterElemObj[];
    onCreateArtifact: (characterId: number, newArtifact: ArtifactsElemObj) => void
    onCreateWeapon: (characterId: number, newWeapon: WeaponElemObj) => void
}



export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ list, onCreateArtifact, onCreateWeapon }) => {
    const historyPages = useHistory();

    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);

    let nameArtifact, florArtifact, arenaArtifact, copaArtifact, tiaraArtifact, idArtifact;

    //estados artifacts edit
    const [formArtifactType, setFormArtifactType] = React.useState<'create' | 'edit'>('create');
    const [editIdArtifact, setEditIdArtifact] = React.useState<number | null>(null);

    const [ArtifactElems, setArtifacts] = React.useState<ArtifactsElemObj[]>([]);

    
    const character = list.find((elem) => {
        if (elem.id === id) {
            return true;
        } else {
            return false;
        }
    })

    if (!character) {
        return <Redirect to="/Error404" />
    }

    //Character data
    const { name, img, history, role, constelacion, city, artifacts, weapon, trailer } = character;

    //artifacts data
    artifacts.forEach((a) => {
        idArtifact = a.id;
        nameArtifact = a.name;
        florArtifact = a.mainImg;
        arenaArtifact = a.arena;
        copaArtifact = a.copa;
        tiaraArtifact = a.tiara;
        idArtifact = a.id;
    })

    

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


        onCreateArtifact(id, newArtifact)
    }

    const handleBeginEditArtifact = (editId: number) => {
        setEditIdArtifact(editId);
        setFormArtifactType("edit");
        console.log('estas en edit', editId)
    }

    const handleEditArtifact = (id: number, editArtifact: ArtifactsElemObj) => {
        console.log(id, editArtifact.name)

        const ArtifactCopy = artifacts.slice();
        const editIndex = artifacts.findIndex((elem) => {
            if (elem.id === editIdArtifact) {
                return true;
            }
            return false
        });

        ArtifactCopy[editIndex] = {
            ...artifacts[editIndex],
            ...editArtifact,
        }

        setArtifacts(ArtifactCopy);
    }




    //weapon data
    const handleCreateWeapon = (newWeapon: WeaponElemObj) => {
        onCreateWeapon(id, newWeapon)
    }


    console.log(nameArtifact)


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
                    text={weapon.type}
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
            {!weapon.name &&
                <section className="weaponFormDiv">
                    <img className="noSomething" src={`${process.env.PUBLIC_URL}/img/noWeapon.png`}></img>
                    <CharacterDetailsWeaponForm
                        onCreate={handleCreateWeapon}
                    />
                </section>
            }

            {weapon.name &&
                <section className="weaponElem">
                    <CharacterDetailsWeapon
                        name={weapon.name}
                        mainImg={weapon.mainImg}
                        history={weapon.history}
                        stat={weapon.stat}
                        passive={weapon.passive}
                    />
                </section>
            }
        </div>


        <div className="ArtifactDiv">
            <TitleSection
                text="ARTEFACTOS"
            />


            <div className="artifactFormDiv">
                <img className="noSomething" src={`${process.env.PUBLIC_URL}/img/noArtifact.png`}></img>

                <CharacterDetailsArtifactsForm
                    type={formArtifactType}
                    editId={editIdArtifact}
                    onCreate={handleCreateArtifact}
                    onEdit={handleEditArtifact}
                />
            </div>


            <section className="artifactElem">
                {(idArtifact && nameArtifact && florArtifact && arenaArtifact && copaArtifact && tiaraArtifact) &&
                    <CharacterDetailsArtifact
                        id={idArtifact}
                        name={nameArtifact}
                        imgFlor={florArtifact}
                        arena={arenaArtifact}
                        copa={copaArtifact}
                        tiara={tiaraArtifact}
                        onEdit={handleBeginEditArtifact}
                    />}

            </section>
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