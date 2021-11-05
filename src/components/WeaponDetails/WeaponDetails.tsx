import React from 'react';
import { DetailsObj } from '../DetailsObj/DetailsObj';
import { TitleSection } from '../TitleSection/TitleSection';
import { WeaponElemObj } from '../types/WeaponElemObj';
import './WeaponDetails.css';

interface WeaponDetailsProps {
    weapon: WeaponElemObj;
}

export const WeaponDetails: React.FC<WeaponDetailsProps> = ({ weapon }) => {

    const { name, mainImg, history, type, stat, passive } = weapon

    return <div className="weaponDetails">
        <TitleSection
            text="ARMA"
        />

        <div className="weaponMainInfoDiv">

            <section className="weaponDescriptionDiv">
                <img src={`${process.env.PUBLIC_URL}/img/${mainImg}`}></img>

                <div className="weaponDescriptionTextDiv">
                    <h2 className="titleElemDetail" >{name}</h2>
                    <p className=" textBody">{history}</p>
                </div>
            </section>

            <section className="details">
                <DetailsObj
                    title={"Rareza"}
                    stars={`${process.env.PUBLIC_URL}/img/5stars.png`}
                />
                <DetailsObj
                    title={"Tipo"}
                    text={type}
                />
                <DetailsObj
                    title={"Obtención"}
                    text={"Gacha"}
                />
                <DetailsObj
                    title={"Tipo de stat secundario"}
                    text={stat}
                />

            </section>
        </div>

        <section className="weaponPassiveDiv">
            <TitleSection
                text="EFECTO PASIVO"
            />
            
            <p className="textBody weaponPassive--text">{passive}</p>
        </section>


    </div>
}