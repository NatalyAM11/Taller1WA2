import React from 'react';
import './Error404.css';


interface Error404Props{

}



export const Error404: React.FC<Error404Props> = ()=>{


    return (<div className="Error404">
        <h1>ERROR 404</h1>
        <h2>No se encontro la página</h2>
    </div>);

}

export default Error404;