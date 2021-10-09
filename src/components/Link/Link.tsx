import React from 'react';
import './Link.css';
import {NavLink} from 'react-router-dom';

interface LinkProps{
    text:string,
    active?:boolean,
    url:string
}

export const Link: React.FC<LinkProps> = ({text, active, url})=>{

      return <NavLink 
      className="Link"
      activeClassName="Link--active" 
      to={url}>
      {text}
      </NavLink>;

}