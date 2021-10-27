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


interface CharacterDetailsProps {
    list: CharacterElemObj[];
    onCreateArtifact: (characterId: number, newArtifact: ArtifactsElemObj) => void
    onCreateWeapon: (characterId: number, newWeapon: WeaponElemObj) => void
}



export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ list, onCreateArtifact, onCreateWeapon }) => {
    const { id: idString } = useParams<{ id: string }>();
    const id = parseFloat(idString);
    let nameArtifact, florArtifact, arenaArtifact, copaArtifact,tiaraArtifact;
    let nameWeapon;


    //console.log(id)

    const c = list.find((elem) => {
        if (elem.id === id) {
            return true;
        } else {
            return false;
        }
    })

    if (!c) {
        return <Redirect to="/Error404" />
    }

    //Character data
    const { name, img, history, role, artifacts, constelacion, weapon } = c;

    //artifacts data
    artifacts.forEach((a)=>{
        nameArtifact =a.name;
        florArtifact=a.mainImg;
        arenaArtifact=a.arena;
        copaArtifact=a.copa;
        tiaraArtifact=a.tiara;
    })


    const handleCreateArtifact = (newArtifact: ArtifactsElemObj) => {
        onCreateArtifact(id, newArtifact)
    }


    //weapon data
    const handleCreateWeapon = (newWeapon: WeaponElemObj) => {
        onCreateWeapon (id, newWeapon)
    }

    console.log(nameArtifact)


    return (<div className="characterDetails">
        <TitleSection
            text="PERFIL"
        />

        <div className="mainInfoCharacter">
            <img src={`${process.env.PUBLIC_URL}/img/${img}`}></img>

            <div className="biographyDiv">
                <h2 className="biographyName">{name}</h2>
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

                />
                <DetailsObj
                    title={"Constelación"}
                    text={constelacion}
                />
                <DetailsObj
                    title={"Región natal"}
                    text={"Mondstadt"}
                />

            </div>

        </div>

        <div className="WeaponDiv">
            <TitleSection
                text="ARMA"
            />

            <CharacterDetailsWeaponForm
                onCreate={handleCreateWeapon}
            />
        </div>


        <div className="ArtifactDiv">
            <TitleSection
                text="ARTEFACTOS"
            />

        {artifacts.length<1 &&
            <CharacterDetailsArtifactsForm
                onCreate={handleCreateArtifact}
            />
        }
        <h1>{artifacts.length}</h1>

        {(nameArtifact &&  florArtifact && arenaArtifact && copaArtifact && tiaraArtifact) &&
        <CharacterDetailsArtifact
            name={nameArtifact}
            imgFlor={florArtifact}
            arena={arenaArtifact}
            copa={copaArtifact}
            tiara={tiaraArtifact}
        />}
        </div>

        <div className="TrailerDiv">
            <TitleSection
                text="TRAILER"
            />
        </div>


    </div>);

}

export default CharacterDetails;