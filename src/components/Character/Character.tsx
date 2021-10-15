import React from 'react';
import './Character.css';
import { useHistory } from 'react-router';


export interface CharacterProps{
    id: number,
    name:string,
    elementC:string,
    img:string,
    onDelete: (id:number)=>void
    onEdit: (id:number)=>void
}


export const Character: React.FC<CharacterProps> = ({id, name, elementC, img, onDelete, onEdit})=>{

      const history=useHistory();

      const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            history.push('/perfilPersonaje')
            onDelete(id);
      }

      const handleEdit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            history.push('/characterForm')
            onEdit(id);
      }
    
      return (<div className="character">
            <h2 className="characterName titlesAllComp">{name}</h2>
            <img className="characterImg" src={img}></img>
            <button className="componentsButton" onClick={handleEdit}>EDIT</button>
            <button className="componentsButton deleteButton" onClick={handleDelete}>DELETE</button>
      </div>);

}

export default Character;
