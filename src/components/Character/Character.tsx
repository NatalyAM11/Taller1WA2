import React from 'react';
import './Character.css';


export interface CharacterProps{
    name:string,
    img:string
}

export const Character: React.FC<CharacterProps> = ({name, img})=>{
    
      return (<div className="character">
            <h2 className="characterName">{name}</h2>
            <img className="characterImg" src={img}></img>
      </div>);

}

export default Character;
