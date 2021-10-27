import React from 'react';
import './CharacterDetailsArtifact.css';
import { StatsArtifacts } from './StatsArtifacts/StatsArtifacts';

interface CharacterDetailsArtifactProps {
    name: string;
    imgFlor: string;
    arena: string;
    copa:string;
    tiara:string
}

export const CharacterDetailsArtifact: React.FC<CharacterDetailsArtifactProps> = ({ name, imgFlor, arena, copa, tiara }) => {

    return <div className="ArtifactsCharacter">

        <div className="mainInfoArtifact">
            <img className="mainInfoArtifactImg" src={`${process.env.PUBLIC_URL}/img/${imgFlor}`}></img>

            <section className="mainInfoArtifact--textDiv">
                <p className="mainInfoArtifact--text">{name}</p>
                <p>{"4 set items"}</p>
            </section>
        </div>

        <section className="detailsArtifacts">

            <StatsArtifacts
                title={"Arenas de Eón"}
                text={arena}
                img={`${process.env.PUBLIC_URL}/img/arena.png`}
            />
            <StatsArtifacts
                title={"Cáliz de Eonothem"}
                text={copa}
                img={`${process.env.PUBLIC_URL}/img/copa.png`}
            />
            <StatsArtifacts
                title={"Tiara de Logos"}
                text={tiara}
                img={`${process.env.PUBLIC_URL}/img/tiara.png`}
            />

        </section>

    </div>
}