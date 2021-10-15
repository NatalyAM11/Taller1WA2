import React from 'react';
import './ElementTitle.css';

interface ElementTitleProps{
    text:string,
    img:string
}

export const ElementTitle: React.FC<ElementTitleProps> = ({text, img})=>{
    
      return <div className="ElementTitle">
          <img className="imgElementTitle" src={`${process.env.PUBLIC_URL}/img/${img}`}></img>
          <h2 className="titleElement titlesSections">{text}</h2>
      </div>;

}
