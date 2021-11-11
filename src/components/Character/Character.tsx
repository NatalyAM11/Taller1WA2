import React from 'react';
import './Character.css';
import { useHistory } from 'react-router';


export interface CharacterProps{
    id: number,
    name:string,
    elementC:string,
    img:string,
    history:string,
    role:string,
    constelacion: string,
    trailer:string
    onDelete?: (id:number)=>void
    onEdit?: (id:number)=>void
}


export const Character: React.FC<CharacterProps> = ({id, name, elementC, img, onDelete, onEdit})=>{

      const history=useHistory();

      const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{

            if(onDelete){
                  onDelete(id);
            }
      }

      const handleEdit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            history.push('/characterForm');

            if(onEdit){
                   onEdit(id);
            }
       
      }

      const handlePerfil: React.MouseEventHandler<HTMLDivElement>  = ()=>{
            history.push(`/characterDetails/${id}`)
      }

    
      return (<div className="character">
            <div className="onlyCharacter" onClick={handlePerfil}>
            <h2 className="characterName titlesAllComp">{name}</h2>
            <div>
            <img className="characterImg" src={`${process.env.PUBLIC_URL}/img/${img}`}></img>
            </div>
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

export default Character;
