import React from 'react';
import './Artifacts.css';
import { useHistory } from 'react-router';

export interface ArtifactsProps{
    id: number,
    name:string,
    img:string,
    onDelete?: (id:number)=>void
    onEdit?: (id:number)=>void
}

export const Weapon: React.FC<ArtifactsProps> = ({id, name, img, onDelete, onEdit})=>{

    const history=useHistory();

    const handleDelete: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        /*  history.push('/perfilPersonaje')
          onDelete(id);*/
    }

    const handleEdit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
          history.push('/artifactsForm')
          /*onEdit(id);*/
    }
  
    return (<div className="artifacts">
          <h2 className="artifactName titlesAllComp">{name}</h2>
          <img className="artifactImg" src={img}></img>
          <button className="componentsButton" onClick={handleEdit}>EDIT</button>
          <button className="componentsButton deleteButton" onClick={handleDelete}>DELETE</button>
    </div>);

}

export default Weapon;