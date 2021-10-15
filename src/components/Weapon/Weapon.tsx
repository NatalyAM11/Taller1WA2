import React from 'react';
import './Weapon.css';
import { useHistory } from 'react-router';

export interface WeaponProps{
    id: number,
    name:string,
    img:string,
    onDelete?: (id:number)=>void
    onEdit?: (id:number)=>void
}

export const Weapon: React.FC<WeaponProps> = ({id, name, img, onDelete, onEdit})=>{

    const history=useHistory();

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        /*  history.push('/perfilPersonaje')
          onDelete(id);*/
    }

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
          /*history.push('/form')
          onEdit(id);*/
    }
  
    return (<div className="weapon">
          <h2 className="weaponName titlesAllComp">{name}</h2>
          <img className="weaponImg" src={img}></img>
          <button className="componentsButton" onClick={handleEdit}>EDIT</button>
          <button className="componentsButton deleteButton" onClick={handleDelete}>DELETE</button>
    </div>);

}

export default Weapon;