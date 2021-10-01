import React from 'react';
import './Link.css';

interface LinkProps{
    text:string,
    active?:boolean,
    url:string
}

export const Link: React.FC<LinkProps> = ({text, active, url})=>{
    let className = 'Link';

    if(active) {
        className = 'Link_selected';
    }
    
      return <a className={className} href={url}>
      {text}
      </a>;

}