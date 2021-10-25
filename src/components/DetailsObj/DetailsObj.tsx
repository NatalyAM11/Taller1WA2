import React from 'react';
import { start } from 'repl';
import './DetailsObj.css';

interface DetailsObjProps{
    title:string,
    text?:string,
    stars?:string
}

export const DetailsObj: React.FC<DetailsObjProps> = ({text, title, stars})=>{
    
    return <div className="DetailsObj">
        <h4 className="DetailsObj--title">{title}</h4>
        <p className="DetailsObj--text">{text}</p>
        <img src={stars}></img>
    </div>
}