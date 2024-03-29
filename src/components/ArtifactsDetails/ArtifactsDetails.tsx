import React from 'react';
import { Redirect, useParams } from 'react-router';
import { TitleSection } from '../TitleSection/TitleSection';
import { ArtifactsElemObj } from '../types/ArtifactsElemObj';
import { useGetElementByIdParam } from '../Utils/useGetElementByIdParam';
import { useIdParam } from '../Utils/useIdParam';
import './ArtifactsDetails.css';

interface ArtifactsDetailsProps {
    list: ArtifactsElemObj[];
}

export const ArtifactsDetails: React.FC<ArtifactsDetailsProps> = ({ list }) => {

    
    //Busco el elemento por su id que viene en el parametro en la lista
    const id= useIdParam();
    const artifact= useGetElementByIdParam(list);

    //Character data
    if(!artifact){return null}
    const { name, mainImg, twoItems, fourItems, domain, notes } = artifact;

    return <div className="ArtifactsDetails">

        <TitleSection
            text="SET DE ARTEFACTOS"
        />

        <section className="artifactsDetailsDiv">
            <div className="imgSectionDiv">
                <img className="imgArtifactDetails" src={`${process.env.PUBLIC_URL}/img/${mainImg}`}></img>
                <div className="domainSection">
                    <h3 className="titleStats titleDomain">{"Dominio donde se puede conseguir"}</h3>
                    <p className=" textBody textArtifactDetails">{domain}</p>
                </div>
            </div>


            <div className="artifactInfoDiv">
                <h2 className="titleElemDetail titleArtfiact" >{name}</h2>
                <h4 className="titleStats titleDomain">{"2 piezas"}</h4>
                <p className="textBody textArtifactDetails">{twoItems}</p>
                <h4 className="titleStats titleDomain">{"4 piezas"}</h4>
                <p className="textBody textArtifactDetails">{fourItems}</p>
            </div>

            <div className="artifactNotes">
                <h4 className="titleStats titleDomain">{"NOTAS"}</h4>
                <h4 className="titleStats titleDomain">{"Bono de 4 piezas"}</h4>
                <p className="textBody textArtifactDetails">{notes}</p>
            </div>
        </section>
    </div>
}