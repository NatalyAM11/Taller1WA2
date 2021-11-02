import React from 'react';
import './CharacterDetailsWeapon.css';

interface CharacterDetailsWeaponProps {
    name: string;
    mainImg: string;
    history: string;
    stat: string;
    passive: string;
}

export const CharacterDetailsWeapon: React.FC<CharacterDetailsWeaponProps> = ({ name, mainImg, history, stat, passive }) => {

    return <div className="characterDetailsWeapon">

        <section className="mainInfoWeapon">
            <img className="mainInfoArtifactImg" src={`${process.env.PUBLIC_URL}/img/${mainImg}`}></img>

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