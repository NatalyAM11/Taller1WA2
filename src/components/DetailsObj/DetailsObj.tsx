import React from 'react';
import { useHistory } from 'react-router';
import { start } from 'repl';
import './DetailsObj.css';

interface DetailsObjProps{
    title:string,
    text?:string | undefined,
    textLink?:string | undefined,
    stars?:string,
    link?:number
}


export const DetailsObj: React.FC<DetailsObjProps> = ({title, text, textLink, stars, link})=>{
    const history = useHistory();
    
    const handleGotoCharacter: React.FormEventHandler<HTMLParagraphElement> = (event) => {
        history.push(`/characterDetails/${link}`)
    }
    
    return <div className="DetailsObj">
        <h4 className="DetailsObj--title">{title}</h4>
        {text && <p className="DetailsObj--text">{text}</p>}
        {textLink && <p className = "DetailsObj--textLink" onClick={handleGotoCharacter}>{textLink}</p>}
        <img src={stars}></img>
    </div>
}