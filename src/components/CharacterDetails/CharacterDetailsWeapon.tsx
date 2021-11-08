import React from 'react';
import { useHistory } from 'react-router-dom';
import './CharacterDetailsWeapon.css';

interface CharacterDetailsWeaponProps {
    id: number;
    name: string;
    mainImg: string;
    history: string;
    stat: string;
    passive: string;
    onDelete?: (id: number) => void;
    onEdit?: (id: number) => void
}

export const CharacterDetailsWeapon: React.FC<CharacterDetailsWeaponProps> = ({ id, name, mainImg, history, stat, passive, onDelete, onEdit }) => {

    const historyPage = useHistory();


    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {

        if (onEdit) {
            onEdit(id);
        }

    }

    const handleDelete: React.MouseEventHandler<HTMLButtonElement>= () => {
        if (onDelete) {
            onDelete(id);
        }
    }

    const handleDetailWeapon: React.MouseEventHandler<HTMLImageElement> = () => {
        historyPage.push(`/weaponDetails/${id}`)
    }



    return <div className="characterDetailsWeapon">

        <section className="mainInfoWeapon">
            <img className="mainInfoWeaponImg" src={`${process.env.PUBLIC_URL}/img/${mainImg}`} onClick={handleDetailWeapon}></img>

            <div className="mainInfoWeapon--textDiv">
                <p className="mainInfoArtifact--text">{name}</p>
                <p className="subtitleMainInfo">{stat}</p>

                <div className="buttonsWeaponDiv">
                    <button className="buttonComponents button" onClick={handleEdit}>EDITAR</button>
                    <button className="buttonComponents button deleteButton" onClick={handleDelete}>ELIMINAR</button>
                </div>
            </div>
        </section>

        <div className="detailsWeapon">
            <p className="infoStatsTitle">{"Efecto pasivo"}</p>
            <p className="infoStatsText">{passive}</p>
        </div>

    </div>;

}