import React from 'react';
import './TitleSection.css';

interface TitleSectionProps{
    text:string
}

export const TitleSection: React.FC<TitleSectionProps> = ({text})=>{
    
      return <div className="TitleSectionC">
          <img className="imgTitleSectionC" src={`${process.env.PUBLIC_URL}/img/iconTitleSection.png`} ></img>
          <h2 className="textTitleSection">{text}</h2>
      </div>;

}