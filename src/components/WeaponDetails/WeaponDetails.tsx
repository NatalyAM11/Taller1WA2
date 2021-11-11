import React from 'react';
import { DetailsObj } from '../DetailsObj/DetailsObj';
import { TitleSection } from '../TitleSection/TitleSection';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { WeaponElemObj } from '../types/WeaponElemObj';
import { useGetElementByIdParam } from '../Utils/useGetElementByIdParam';
import { useIdParam } from '../Utils/useIdParam';
import './WeaponDetails.css';

interface WeaponDetailsProps {
    weapon: WeaponElemObj[];
    listCharacter: CharacterElemObj[];
}

export const WeaponDetails: React.FC<WeaponDetailsProps> = ({ weapon, listCharacter }) => {

    /*const { name, mainImg, history, type, stat, passive } = weapon*/

    //Busco el elemento por su id que viene en el parametro en la lista
    const id = useIdParam();
    const weaponElem = useGetElementByIdParam(weapon);


    if (!weaponElem) { return null }
    const { name, mainImg, history, type, stat, passive, idOwner } = weaponElem;


    const c = listCharacter.find((elem: CharacterElemObj) => {
        if (elem.id === weaponElem?.idOwner) {
            return true;
        } else {
            return false;
        }
    })





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
                    title={"Dueño"}
                    textLink={c?.name}
                    link={c?.id}
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