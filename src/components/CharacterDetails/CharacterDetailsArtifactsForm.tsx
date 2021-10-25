import React from 'react';

import { useHistory } from 'react-router';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';


export interface CharacterDetailsArtifactsFormProps {
      onCreate: (newArtifact: ArtifactsElemObj) => void;
}


export const CharacterDetailsArtifactsForm: React.FC<CharacterDetailsArtifactsFormProps> = ({ onCreate }) => {


      const [formSubmitted, setFormSubmitted] = React.useState(false);

      const [name, setName] = React.useState(' ');
      const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setName(event.target.value);
      }

      const [img, setImg] = React.useState(' ');
      const handleImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setImg(event.target.value)
      }

      const [mainImg, setMainImg] = React.useState(' ');
      const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setMainImg(event.target.value)
      }

      const nameValid = name.length > 1;
      const mainImgValid = mainImg.length > 1;





      const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
            event.preventDefault();

            setFormSubmitted(true);

            if (nameValid) {
                  const newArtifact: ArtifactsElemObj = {
                        id: Math.random(),
                        name: name,
                        mainImg: mainImg
                  }

                  onCreate(newArtifact)
                  setFormSubmitted(false);
                  console.log(newArtifact)
            }
      }


      return (<form onSubmit={handleSubmit} className="characterForm">
            <label>
                  Nombre
                  <input type="text" name="name" onChange={handleNameChange} value={name}></input>

                  {(formSubmitted && !nameValid) &&
                        <p className="CharacterForm_error">Debes escribir el nombre del set de artefactos</p>
                  }
            </label>
            
            <label>
                  Imagen principal
                  <input type="text" name="MainImg" onChange={handleMainImgChange} value={mainImg}></input>

                  {(formSubmitted && !mainImg) &&
                        <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
                  }
            </label>

            <label>
                  Imagen de perfil
                  <input type="text" name="img" onChange={handleImgChange} value={img}></input>

                  {(formSubmitted && !nameValid) &&
                        <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
                  }
            </label>

            <button className="button">AÑADIR CANCIÓN</button>
      </form>);

}

export default CharacterDetailsArtifactsForm;
