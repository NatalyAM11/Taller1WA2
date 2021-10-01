import React from 'react';
import './ElementTitle.css';

interface ElementTitleProps{
    text:string,
    img:string
}

export const ElementTitle: React.FC<ElementTitleProps> = ({text, img})=>{
    
      return <div className="ElementTitle">
          <img className="imgElementTitle" src={img}></img>
          <h2 className="TitleElement">{text}</h2>
      </div>;

}
