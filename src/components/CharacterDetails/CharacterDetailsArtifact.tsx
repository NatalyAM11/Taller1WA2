import React from 'react';
import { useHistory } from 'react-router-dom';
import './CharacterDetailsArtifact.css';
import { StatsArtifacts } from './StatsArtifacts/StatsArtifacts';

interface CharacterDetailsArtifactProps {
    id: number;
    name: string;
    imgFlor: string;
    arena: string;
    copa: string;
    tiara: string;
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void
}


export const CharacterDetailsArtifact: React.FC<CharacterDetailsArtifactProps> = ({ id, name, imgFlor, arena, copa, tiara, onEdit }) => {

    const history = useHistory();

    const handleDetailArtifact: React.MouseEventHandler<HTMLDivElement> = () => {
        history.push(`/artifactsDetails/${id}`)
    }

    const handleEditArtifact: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(onEdit){
            onEdit(id);
     }
    } 




    
    return <div className="ArtifactsCharacter">

        <button className="editButtonArtifact button" onClick={handleEditArtifact}>EDITAR</button>

        <div className="AllInfoDiv">
            <section className="mainInfoArtifact" onClick={handleDetailArtifact}>
                <img className="mainInfoArtifactImg" src={`${process.env.PUBLIC_URL}/img/${imgFlor}`}></img>

                <div className="mainInfoArtifact--textDiv">
                    <p className="mainInfoArtifact--text">{name}</p>
                    <p className="subtitleMainInfo">{"4 set items"}</p>
                </div>
            </section>

            <section className="detailsArtifacts">
                <h3 className="titleStats">{"Stats principales"}</h3>
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

    </div>
}