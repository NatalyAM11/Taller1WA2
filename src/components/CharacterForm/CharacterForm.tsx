import React from 'react';
import { useHistory } from 'react-router';
import {CharacterProps} from "../Character/Character"
import './CharacterForm.css';

//evento cuando se crea el personaje
interface CharacterFormProps{
    //onCreate: (newCharacter: CharacterProps)=>void;
    editId: number | null;
    type: "create" | "edit";
    onCreate: (newCharacter: {name:string, elementC: string, img:string, history: string, role: string, constelacion: string})=>void;
    onEdit: (id:number, editCharacter:{name:string})=>void;
}

export const CharacterForm: React.FC<CharacterFormProps> = ({ editId, type, onCreate, onEdit})=>{

    const history= useHistory();

    
    const [formSubmitted, setFormSubmitted] =React.useState(false);

    const [name, setName] = React.useState(' ');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setName(event.target.value);
    }

    const [elementC, setElementC] = React.useState(' ');
    const handleElementCChange: React.ChangeEventHandler<HTMLSelectElement> = (event)=>{
        console.log(event.target.value)
        setElementC(event.target.value)
    }

    const [mainImg, setMainImg ]= React.useState(' ');
    const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> = (event)=>{
        setMainImg(event.target.value)
    }

    const [perfil, setPerfil ]= React.useState(' ');
    const handlePerfilChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event)=>{
        setPerfil(event.target.value)
    }

    const [rol, setRol ]= React.useState(' ');
    const handleRolChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setRol(event.target.value)
    }

    const [arma, setArma ]= React.useState(' ');
    const handleArmaChange: React.ChangeEventHandler<HTMLSelectElement> =(event)=>{
        setArma(event.target.value)
    }

    const [constellation, setConstellation ]= React.useState(' ');
    const handleConstellationChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setConstellation(event.target.value)
    }

    const [trailerURL, setTrailerURL ]= React.useState(' ');
    const handleTrailerURLChange: React.ChangeEventHandler<HTMLInputElement> =(event)=>{
        setTrailerURL(event.target.value)
    }

    const nameValid= name.length>1;
    const mainImgValid= mainImg.length>5;
    const elementCValid= elementC.length>1;
    const perfilValid= perfil.length>10;
    const rolValid= rol.length>2;
    const armaValid= arma.length>1;
    const constellationValid=constellation.length>1;
    const trailerURLValid=trailerURL.length>1;
    
    const handleSubmit: React.FormEventHandler<HTMLFormElement> =(event)=>{
        event.preventDefault();

        setFormSubmitted(true);

        if(type==="create" && nameValid && mainImgValid && elementCValid 
        && perfilValid && rolValid && armaValid && constellationValid
        && trailerURLValid){
            console.log('valid')

            onCreate({
                name: name,
                elementC: elementC,
                img: mainImg,
                history: perfil,
                role: rol,
                constelacion: constellation,
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

    /*onChange={handleElementCChange} */
    return <form className="characterForm" onSubmit={handleSubmit}>

        <label>
            Nombre
            <input type="text" name="name" onChange={handleNameChange} value={name}></input>
            {(formSubmitted && !nameValid) &&
                <p className="CharacterForm_error">Debes escribir el nombre del personaje</p>
            }
            
        </label>

        <label>
            Elemento
            <select name="elementC" value={elementC} onChange={handleElementCChange} >
                <option value=" ">ELIGE UN ELEMENTO</option>
                <option value="pyro">PYRO</option>
                <option value="electro">ELECTRO</option>
                <option value="cryo">CRYO</option>
                <option value="anemo">ANEMO</option>
            </select>
            {(formSubmitted && !elementCValid) &&
                <p className="CharacterForm_error">Debes escoger el elemento del personaje</p>
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
            <textarea className="largeInput" name="perfil" onChange={handlePerfilChange} value={perfil}></textarea>
            {(formSubmitted && !perfilValid) &&
                <p className="CharacterForm_error">Debes escribir algo en el perfil del personaje</p>
            }
        </label>
        

        <label>
            Rol
            <input type="text" name="rol" onChange={handleRolChange} value={rol}></input>
            {(formSubmitted && !rolValid) &&
                <p className="CharacterForm_error">Debes escribir el rol del personaje</p>
            }
        </label>

        <label>
            Arma
            <select name="arma" value={arma} onChange={handleArmaChange} >
                <option value=" ">ELIGE UN ARMA</option>
                <option value="arco">ARCO</option>
                <option value="mandoble">MANDOBLE</option>
                <option value="espada">ESPADA</option>
                <option value="lanza">LANZA</option>
            </select>
            {(formSubmitted && !armaValid) &&
                <p className="CharacterForm_error">Debes escoger el arma que usa el personaje</p>
            }
        </label>

        <label>
            Constelación
            <input type="text" name="constalletion" onChange={handleConstellationChange} value={constellation}></input>
            {(formSubmitted && !constellationValid) &&
                <p className="CharacterForm_error">Debes escribir el nombre de la constelación del personaje</p>
            }
        </label>


        <label>
            URL Trailer
            <input type="text" name="urlTrailer" onChange={handleTrailerURLChange} value={trailerURL}></input>
            {(formSubmitted && !trailerURLValid) &&
                <p className="CharacterForm_error">Debes escribir la URL del trailer del personaje</p>
            }
        </label>

    
        <button className="button">{type==="create"? "CREAR": "GUARDAR CAMBIOS"}</button>
    </form>;

}