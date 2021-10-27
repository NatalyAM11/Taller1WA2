import React from 'react';
import './StatsArtifacts.css';

interface StatsArtifactsProps{
    title:string,
    text:string,
    img:string
}

export const StatsArtifacts: React.FC<StatsArtifactsProps> = ({title, text, img})=>{
    
    return <div className="statsArtifacts">
        <img src={img}></img>
        <div className="infoStats">
            <p className="infoStatsTitle">{title}</p>
            <p className="infoStatsText">{text}</p>
        </div>
        
    </div>
}