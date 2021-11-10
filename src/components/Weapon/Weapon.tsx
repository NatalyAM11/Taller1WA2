import React from 'react';
import './Weapon.css';
import { useHistory } from 'react-router';

export interface WeaponProps {
    id: number,
    name: string,
    img: string,
    onDelete?: (id: number) => void
    onEdit?: (id: number) => void
}

export const Weapon: React.FC<WeaponProps> = ({ id, name, img, onDelete, onEdit }) => {

    const historyPage = useHistory();


    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = () => {  
        if(onDelete){
            onDelete(id);
      }
    }

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
        if(onEdit){
            onEdit(id);
      }
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
            {onEdit && <button className="componentsButton" onClick={handleEdit}>
            <img src={`${process.env.PUBLIC_URL}/img/editIcon.png`}></img></button>}
            {onDelete && <button className="componentsButton deleteButton" onClick={handleDelete}>
            <img src={`${process.env.PUBLIC_URL}/img/deleteIcon.png`}></img>
            </button>}
            </div>
    </div>);

}

export default Weapon;