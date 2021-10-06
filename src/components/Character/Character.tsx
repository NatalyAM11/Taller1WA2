import React from 'react';
import './Character.css';


export interface CharacterProps{
id: number,
    name:string,
    img:string,
    onDelete: (id:number)=>void
}


export const Character: React.FC<CharacterProps> = ({id, name, img, onDelete})=>{

      const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            onDelete(id);
      }
    
      return (<div className="character">
            <h2 className="characterName">{name}</h2>
            <img className="characterImg" src={img}></img>
            <button onClick={handleDelete}>DELETE</button>
      </div>);

}

export default Character;
