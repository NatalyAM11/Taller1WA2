import React from 'react';

import { useHistory } from 'react-router';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';


export interface CharacterDetailsArtifactsFormProps {
      type: "create" | "edit" | "none";
      editId: number | null;
      artifactElem: ArtifactsElemObj[],
      onCreate: (newArtifact: ArtifactsElemObj) => void;
      onEdit: (id: number, editArtifact: ArtifactsElemObj) => void;
}


export const CharacterDetailsArtifactsForm: React.FC<CharacterDetailsArtifactsFormProps> = ({ type, editId, artifactElem, onCreate, onEdit }) => {

      const editA= artifactElem.find((elem)=>{
            return elem.id===editId
      })

      console.log(type)
    
      const [formSubmitted, setFormSubmitted] = React.useState(false);

      const [name, setName] = React.useState(editA?.name || ' ');
      const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setName(event.target.value);
      }

      const [mainImg, setMainImg] = React.useState(editA?.mainImg || ' ');
      const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setMainImg(event.target.value)
      }

      const [arena, setArena] = React.useState(editA?.arena || ' ');
      const handleArenaChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setArena(event.target.value)
      }

      const [caliz, setCaliz] = React.useState(editA?.copa || ' ');
      const handleCalizChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setCaliz(event.target.value)
      }

      const [tiara, setTiara] = React.useState(editA?.tiara || ' ');
      const handleTiaraChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setTiara(event.target.value)
      }

      const [twoItems, setTwoItems] = React.useState(editA?.twoItems || ' ');
      const handleTwoItemsChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setTwoItems(event.target.value)
      }

      const [fourItems, setFourItems] = React.useState(editA?.fourItems || ' ');
      const handleFourItemsChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
            setFourItems(event.target.value)
      }

      const [domain, setDomain] = React.useState(editA?.domain || ' ');
      const handleDomainChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setDomain(event.target.value)
      }

      const [notes, setNotes] = React.useState(editA?.notes || ' ');
      const handleNotesChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
            setNotes(event.target.value)
      }



      const nameValid = name.length > 1;
      const mainImgValid = mainImg.length > 1;
      const arenaValid = arena.length > 1;
      const calizValid = caliz.length > 1;
      const tiaraValid = tiara.length > 1;
      const twoItemsValid = twoItems.length > 1;
      const fourItemsValid = fourItems.length > 10;
      const domainValid = domain.length > 1;
      const notesValid = notes.length > 1;


      const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
            event.preventDefault();

            setFormSubmitted(true);

            if (type == "create" && nameValid && mainImgValid && arenaValid && calizValid
                  && tiaraValid) {
                        
                  const newArtifact: ArtifactsElemObj = {
                        id: Math.random(),
                        name: name,
                        mainImg: mainImg,
                        arena: arena,
                        copa: caliz,
                        tiara: tiara,
                        twoItems: twoItems,
                        fourItems: fourItems,
                        domain: domain,
                        notes: notes
                  }

                  onCreate(newArtifact)
                  setFormSubmitted(false);
                  console.log(newArtifact)

            } else if (type === "edit" && nameValid && mainImgValid && arenaValid && calizValid
                  && tiaraValid) {

                  if (editId !== null) {
                        onEdit(editId, {id: editId, name: name, mainImg: mainImg, arena: arena, copa: caliz, tiara: tiara, twoItems: twoItems, fourItems: fourItems, domain: domain, notes: notes})
                  }

            } else {
                  console.log('invalid')
            }
      }




      return (<form onSubmit={handleSubmit} className="artifactForm">

            <p className="formIntro">{type === "create" ? "Agrega el set correspondiente a este personaje" : "Edita los datos del artefacto"}</p>

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

                  {(formSubmitted && !mainImgValid) &&
                        <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
                  }
            </label>

            <label>
                  2 piezas
                  <input type="text" name="twoItems" onChange={handleTwoItemsChange} value={twoItems}></input>

                  {(formSubmitted && !twoItemsValid) &&
                        <p className="CharacterForm_error">Debes escribir el efecto de las 2 piezas</p>
                  }
            </label>

            <label>
                  4 piezas
                  <textarea className="largeInput" name="perfil" onChange={handleFourItemsChange} value={fourItems}></textarea>
                  {(formSubmitted && !fourItemsValid) &&
                        <p className="CharacterForm_error">Debes escribir el efecto de las 4 piezas</p>
                  }
            </label>

            <label>
                  Dominio
                  <input type="text" name="MainImg" onChange={handleDomainChange} value={domain}></input>

                  {(formSubmitted && !domainValid) &&
                        <p className="CharacterForm_error">Debes escribir el dominio del set de artefactos</p>
                  }
            </label>

            <label>
                  Notas del set
                  <textarea className="largeInput" name="notes" onChange={handleNotesChange} value={notes}></textarea>
                  {(formSubmitted && !notesValid) &&
                        <p className="CharacterForm_error">Debes escribir algo en las notas del set</p>
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


            <button className="button">{type === "create" ? "AÑADIR ARTEFACTO" : "GUARDAR CAMBIOS"}</button>
      </form>);

}

export default CharacterDetailsArtifactsForm;
