import React from 'react';
import './MainTitle.css';

interface MainTitleProps{
    text:string,
}

export const MainTitle: React.FC<MainTitleProps> = ({text})=>{
    
    return <div className="MainTitle">
        <img src="./img/titleFlechaD.png" className="flechasTitle"></img>
        <h3 className="titleMain">{text}</h3>
        <img src="./img/titleFlechaI.png" className="flechasTitle"></img>
    </div>
}