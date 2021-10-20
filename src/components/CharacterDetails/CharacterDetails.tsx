import React from 'react';
import { Redirect, useParams } from 'react-router';
import './CharacterDetails.css';
import { CharacterElemObj } from '../types/CharacterElemObj';
import { parse } from 'path';


interface CharacterDetailsProps{
 list: CharacterElemObj[];
}



export const CharacterDetails: React.FC<CharacterDetailsProps> = ({list})=>{
    const { id } = useParams<{ id: string}>();
    console.log(id)

    const c = list.find((elem) =>{
        if(elem.id === parseFloat(id)){
            return true;
        } else{
            return false;
        }
    })

    if(!c){
        return <Redirect to="/Error404"/>
    }

    const{ name }= c;
   

    return (<div className="characterDetails">
        <h2>Perfil {name}</h2>
    </div>);

}

export default CharacterDetails;