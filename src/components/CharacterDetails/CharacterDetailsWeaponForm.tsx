import React from 'react';
import { WeaponElemObj } from '../types/WeaponElemObj';


interface CharacterDetailsWeaponFormProps {
    typeWF: "create" | "edit" | "none";
    editId: number | null;
    weaponElem?: WeaponElemObj,
    onCreate: (newWeapon: WeaponElemObj) => void;
    onEdit: (id: number, editWeapon: WeaponElemObj) => void;
}

export const CharacterDetailsWeaponForm: React.FC<CharacterDetailsWeaponFormProps> = ({ typeWF, editId, weaponElem, onCreate, onEdit }) => {


    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const [name, setName] = React.useState(weaponElem?.name || ' ');
    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    }

    const [mainImg, setMainImg] = React.useState(weaponElem?.mainImg || ' ');
    const handleMainImgChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setMainImg(event.target.value)
    }

    const [history, setHistory] = React.useState(weaponElem?.history || ' ');
    const handleHistoryChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setHistory(event.target.value)
    }

    const [type, setType] = React.useState(weaponElem?.type || ' ');
    const handleTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setType(event.target.value)
    }

    const [stat, setStat] = React.useState(weaponElem?.stat || ' ');
    const handleStatChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setStat(event.target.value)
    }

    const [passive, setPassive] = React.useState(weaponElem?.passive || ' ');
    const handlePassiveChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setPassive(event.target.value)
    }


    const nameValid = name.length > 1;
    const mainImgValid = mainImg.length > 1;
    const historyValid = history.length > 10;
    const typeValid = type.length > 1;
    const statValid = stat.length > 1;
    const passiveValid = passive.length > 1;

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        setFormSubmitted(true);

        if (nameValid && mainImgValid && historyValid && typeValid
            && statValid && passiveValid) {
            const newWeapon: WeaponElemObj = {
                id: Math.random(),
                name: name,
                mainImg: mainImg,
                history: history,
                type: type,
                stat: stat,
                passive: passive
            }

            onCreate(newWeapon)
            setFormSubmitted(false);
            console.log(newWeapon)
        }
    }




    return (<form onSubmit={handleSubmit} className="weaponForm">

        <p className="formIntro">{typeWF === "create" ? "Agrega el arma correspondiente a este personaje" : "Edita los datos del arma"}</p>

        <label>
            Nombre del arma
            <input type="text" name="name" onChange={handleNameChange} value={name}></input>

            {(formSubmitted && !nameValid) &&
                <p className="CharacterForm_error">Debes escribir el nombre del arma</p>
            }
        </label>

        <label>
            Imagen del arma
            <input type="text" name="MainImg" onChange={handleMainImgChange} value={mainImg}></input>

            {(formSubmitted && !mainImgValid) &&
                <p className="CharacterForm_error">Debes escribir el URL completo de la imagen</p>
            }
        </label>

        <label>
            Historia del arma
            <textarea className="largeInput" name="perfil" onChange={handleHistoryChange} value={history}></textarea>
            {(formSubmitted && !historyValid) &&
                <p className="CharacterForm_error">Debes escribir algo en la historia del personaje</p>
            }
        </label>

        <label>
            Tipo de arma
            <select name="arma" value={type} onChange={handleTypeChange} >
                <option value=" ">ELIGE EL TIPO DE ARMA</option>
                <option value="Mandoble">MANDOBLE</option>
                <option value="Arco">ARCO</option>
                <option value="Espada">ESPADA</option>
                <option value="Lanza">LANZA</option>
            </select>

            {(formSubmitted && !typeValid) &&
                <p className="CharacterForm_error">Debes escribir el tipo de arma</p>
            }
        </label>

        <label>
            Stat secundario
            <input type="text" name="type" onChange={handleStatChange} value={stat}></input>

            {(formSubmitted && !statValid) &&
                <p className="CharacterForm_error">Debes escribir el stat del arma</p>
            }
        </label>

        <label>
            Efecto pasivo
            <textarea className="largeInput" name="passive" onChange={handlePassiveChange} value={passive}></textarea>
            {(formSubmitted && !passiveValid) &&
                <p className="CharacterForm_error">Debes escribir el efecto pasivo del arma</p>
            }
        </label>


        <button className="button">{typeWF=== "create" ? "AÑADIR ARMA" : "GUARDAR CAMBIOS"}</button>

    </form>)



}