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
}

export const CharacterDetailsWeapon: React.FC<CharacterDetailsWeaponProps> = ({ id, name, mainImg, history, stat, passive }) => {

    const historyPage = useHistory();

    console.log(id)

    const handleDetailWeapon: React.MouseEventHandler<HTMLImageElement> = () => {
        historyPage.push(`/weaponDetails/${id}`)
    }

    return <div className="characterDetailsWeapon">

        <section className="mainInfoWeapon">
            <img className="mainInfoArtifactImg" src={`${process.env.PUBLIC_URL}/img/${mainImg}`} onClick={handleDetailWeapon}></img>

            <div className="mainInfoWeapon--textDiv">
                <p className="mainInfoArtifact--text">{name}</p>
                <p className="subtitleMainInfo">{stat}</p>
            </div>
        </section>

        <div className="detailsWeapon">
                 <p className="infoStatsTitle">{"Efecto pasivo"}</p>
                 <p className="infoStatsText">{passive}</p>
            </div>

    </div>;

}