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

      const [mainImg, setMainImg] = React.useState(' ');
      const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setMainImg(event.target.value)
      }

      const [arena, setArena] = React.useState(' ');
      const handleArenaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setArena(event.target.value)
      }

      const [caliz, setCaliz] = React.useState(' ');
      const handleCalizChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setCaliz(event.target.value)
      }

      const [tiara, setTiara] = React.useState(' ');
      const handleTiaraChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setTiara(event.target.value)
      }


      const nameValid = name.length > 1;
      const mainImgValid = mainImg.length > 1;
      const arenaValid = arena.length > 1;
      const calizValid = caliz.length > 1;
      const tiaraValid = tiara.length > 1;




      const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
            event.preventDefault();

            setFormSubmitted(true);

            if (nameValid && mainImgValid && arenaValid && calizValid
                  && tiaraValid) {
                  const newArtifact: ArtifactsElemObj = {
                        id: Math.random(),
                        name: name,
                        mainImg: mainImg,
                        arena: arena,
                        copa: caliz,
                        tiara: tiara
                  }

                  onCreate(newArtifact)
                  setFormSubmitted(false);
                  console.log(newArtifact)
            }
      }


      return (<form onSubmit={handleSubmit} className="artifactForm">
            <label>
                  Nombre del set
                  <input type="text" name="name" onChange={handleNameChange} value={name}></input>

                  {(formSubmitted && !nameValid) &&
                        <p className="CharacterForm_error">Debes escribir el nombre del set de artefactos</p>
                  }
            </label>

            <label>
                  Imagen de la flor
                  <input type="text" name="MainImg" onChange={handleMainImgChange} value={mainImg}></input>

                  {(formSubmitted && !mainImg) &&
                        <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
                  }
            </label>

            <h4 className="subtitleForm">Stats</h4>
            <label>
                  Arena
                  <input type="text" name="arena" onChange={handleArenaChange} value={arena}></input>
                  {(formSubmitted && !arenaValid) &&
                        <p className="CharacterForm_error">Debes escribir el stat de la arena</p>
                  }
            </label>

            <label>
                  Cáliz
                  <input type="text" name="caliz" onChange={handleCalizChange} value={caliz}></input>
                  {(formSubmitted && !calizValid) &&
                        <p className="CharacterForm_error">Debes escribir el stat del cáliz</p>
                  }
            </label>

            <label>
                  Tiara
                  <input type="text" name="tiara" onChange={handleTiaraChange} value={tiara}></input>
                  {(formSubmitted && !tiaraValid) &&
                        <p className="CharacterForm_error">Debes escribir el stat de la tiara</p>
                  }
            </label>


            <button className="button">AÑADIR ARTEFACTO</button>
      </form>);

}

export default CharacterDetailsArtifactsForm;
