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
    onDelete?: (id:number)=>void
    onEdit?: (id:number)=>void
}


export const Character: React.FC<CharacterProps> = ({id, name, elementC, img, onDelete, onEdit})=>{

      const history=useHistory();

      const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            //history.push('/charactersList');

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

      const handleView: React.MouseEventHandler<HTMLButtonElement> = ()=>{
            history.push(`/characterDetails/${id}`)
      }

      const handlePerfil: React.MouseEventHandler<HTMLDivElement>  = ()=>{
            history.push(`/characterDetails/${id}`)
      }

    
      return (<div className="character">
            <div className="onlyCharacter" onClick={handlePerfil}>
            <h2 className="characterName titlesAllComp">{name}</h2>
            <img className="characterImg" src={img}></img>
            </div>
            {onEdit && <button className="componentsButton" onClick={handleEdit}>EDIT</button>}
            {onDelete && <button className="componentsButton deleteButton" onClick={handleDelete}>DELETE</button>}
      </div>);

}

export default Character;
