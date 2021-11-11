import React from 'react';
import './Weapon.css';
import { useHistory } from 'react-router';

export interface WeaponProps {
    id: number,
    name: string,
    img: string,
    idCharacter:number,
}

export const Weapon: React.FC<WeaponProps> = ({ id, name, img, idCharacter}) => {

    const historyPage = useHistory();


    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        historyPage.push(`/characterDetails/${idCharacter}`)
    }

    const handleDetails: React.MouseEventHandler<HTMLImageElement> = () => {
        historyPage.push(`/weaponDetails/${id}`)
    }



    return (<div className="weapon">
        <div className="weaponImgDiv">
            <h2 className="weaponName titlesAllComp">{name}</h2>
            <img className="weaponImg" src={`${process.env.PUBLIC_URL}/img/${img}`} onClick={handleDetails}></img>
        </div>

        <div className="buttonsDiv">
            <button className="componentsButton" onClick={handleEdit}>
            <img src={`${process.env.PUBLIC_URL}/img/editIcon.png`}></img></button>
        </div>
    </div>);

}

export default Weapon;