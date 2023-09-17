import React, { useState } from 'react';
import linkedinSVG from './../asset/linkedin.svg';
import viewCVSVG from './../asset/viewCV.svg';
import collectionSVG from './../asset/collection.svg';
import UnSavedSVG from './../asset/unsaved.svg';





const CandidateCard = ({ id, name, linkedin, totalYearsExperience, downloadLink, profession, isSaved }) => {

    const [saved, setSaved] = useState(isSaved);


    const handleSaveBookMarks = (id) => {
        setSaved(!saved);
        
        // code to update and remove from saved list
    }

    return (
        <div className="candidateCard">
            <div className="candidateDetails">
                <div className="textContainer"> {/* This container will wrap the name and info */}
                    <div><p className="candidateName"><strong>{name}</strong></p></div>
                    <div><p className="candidateInfo"> 
                    { profession ? `${ profession } | ` : ""}
                    {
                        totalYearsExperience === 0 ? "Fresher" : `${ totalYearsExperience } years experience`
                    }
                    </p></div>
                </div>
                
                <div className="iconsContainer">
                    <a href={downloadLink || "#"} target="_blank" rel="noopener noreferrer">
                        <img className="icon" alt="View CV" src={viewCVSVG} />
                    </a>
                    {
                        linkedin && (
                            <a href={linkedin || "#"} target="_blank" rel="noopener noreferrer">
                                <img className="icon" alt="LinkedIn" src={linkedinSVG} />
                            </a>
                        )
                    }
                    
                    <img className="icon bookmark" alt="Add to Collection" src={saved ? collectionSVG : UnSavedSVG} onClick={() => handleSaveBookMarks(id)}/>
                </div>
            </div>
        </div>
    );
};



const SearchContainer = (props) => {
    console.log("props ", props)

    return (

        <div className="resultsContainer">
            <CandidateCard {...props} />
        </div>
        
    );
};

export default SearchContainer;
