import React from 'react';
import './Character.css';


export interface CharacterProps{
      id: number,
    name:string,
    img:string,
    onDelete: (id:number)=>void
    onEdit: (id:number)=>void
}


export const Character: React.FC<CharacterProps> = ({id, name, img, onDelete, onEdit})=>{

      const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            onDelete(id);
      }

      const handleEdit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            onEdit(id);
      }
    
      return (<div className="character">
            <h2 className="characterName">{name}</h2>
            <img className="characterImg" src={img}></img>
            <button onClick={handleDelete}>DELETE</button>
            <button onClick={handleEdit}>EDIT</button>
      </div>);

}

export default Character;
