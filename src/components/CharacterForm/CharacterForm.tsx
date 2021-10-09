import React from 'react';
import { useHistory } from 'react-router';
import {CharacterProps} from "../Character/Character"
import './CharacterForm.css';

//evento cuando se crea el personaje
interface CharacterFormProps{
    //onCreate: (newCharacter: CharacterProps)=>void;
    editId: number | null;
    type: "create" | "edit";
    onCreate: (newCharacter: {name:string, img:string})=>void;
    onEdit: (id:number, editCharacter:{name:string})=>void;
}

export const CharacterForm: React.FC<CharacterFormProps> = ({ editId, type, onCreate, onEdit})=>{

    const history= useHistory();

    
    const [formSubmitted, setFormSubmitted] =React.useState(false);

    const [name, setName] = React.useState(' ');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setName(event.target.value)
    }

    const [mainImg, setMainImg ]= React.useState(' ');
    const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setMainImg(event.target.value)
    }


    const nameValid= name.length>1;
    const mainImgValid= mainImg.length>10;
    
    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event)=>{
        event.preventDefault();

        setFormSubmitted(true);

        if(type==="create" && nameValid && mainImgValid){
            console.log('valid')

            onCreate({
                name: name,
                img: mainImg
            })

            //vacio los inputs
            setName(" ");
            setMainImg(" ");
            //tambien el form vuelve a su estado inicial
            setFormSubmitted(false);

            history.push('/personajesList')

        } else if(type==="edit" && nameValid){

            if(editId!==null){
                onEdit(editId, {name: name})
            }

        } else{
            console.log('invalid')
        }
    }

    
    return <form className="characterForm" onSubmit={handleSubmit}>



        <h3 className="titleForm">{type==="create"? "CREA UN PERSONAJE NUEVO": "EDITA EL PERSONAJE"}</h3>

        <label>
            Nombre
            <input type="text" name="name" onChange={handleNameChange} value={name}></input>
            {(formSubmitted && !nameValid) &&
                <p className="CharacterForm_error">Debes escribir el nombre del personaje</p>
            }
            
        </label>

        <label>
            Imagen
            <input type="text" name="MainImg" onChange={handleMainImgChange} value={mainImg}></input>
            {(formSubmitted && !mainImgValid) &&
                <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
            }
        </label>

        <label>
            Perfil
            <textarea className="largeInput"></textarea>
        </label>
        

        <label>
            Rol
            <input type="text"></input>
        </label>

        <label>
            Arma
            <input type="text"></input>
        </label>

        <label>
            Constelación
            <input type="text"></input>
        </label>

        <h4 className="subtitleForm">Stats</h4>

        <label>
            Arena
            <input type="text"></input>
        </label>

        <label>
            Cáliz
            <input type="text"></input>
        </label>

        <label>
            Tiara
            <input type="text"></input>
        </label>

        <button className="button">{type==="create"? "CREAR": "GUARDAR CAMBIOS"}</button>
    </form>;

}