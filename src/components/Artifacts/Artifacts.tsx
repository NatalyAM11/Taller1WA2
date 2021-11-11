import React from 'react';
import './Artifacts.css';
import { useHistory } from 'react-router';

export interface ArtifactsProps {
    id: number,
    name: string,
    mainImg: string,
    idCharacter: number
}

export const Weapon: React.FC<ArtifactsProps> = ({ id, name, mainImg, idCharacter}) => {

    const history = useHistory();

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        history.push(`/characterDetails/${idCharacter}`)
    }

    const handleDetails: React.MouseEventHandler<HTMLImageElement> = () => {
        history.push(`/artifactsDetails/${id}`)
    }

    return (<div className="artifacts">
        <h2 className="artifactName titlesAllComp">{name}</h2>
        <img className="artifactImg" src={`${process.env.PUBLIC_URL}/img/${mainImg}`} onClick={handleDetails}></img>

        <div className="buttonsDiv">
            <button className="componentsButton" onClick={handleEdit}>
                <img src={`${process.env.PUBLIC_URL}/img/editIcon.png`}></img></button>
        </div>
    </div>);

}

export default Weapon;