import React from 'react';
import styles from './search.styles.css';
import linkedinSVG from './../asset/linkedin.svg';
import viewCVSVG from './../asset/viewCV.svg';
import collectionSVG from './../asset/collection.svg';


function downloadFile(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = "File.pdf"; // Or dynamically generate filename if needed
    link.click();
    link.remove();
}


const CandidateCard = ({ candidateName, urls, latest_company, years, resumeUrl }) => {
    return (
        <div className="candidateCard">
            <div className="candidateDetails">
                <div className="textContainer"> {/* This container will wrap the name and info */}
                    <b className="candidateName">{candidateName}</b>
                    <p className="candidateInfo">
                        {latest_company.company} | {years} years experience
                    </p>
                </div>
                
                <div className="iconsContainer">
                    <a href={resumeUrl || "#"} target="_blank" rel="noopener noreferrer">
                        <img className="icon" alt="View CV" src={viewCVSVG} />
                    </a>
                    <a href={urls.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                        <img className="icon" alt="LinkedIn" src={linkedinSVG} />
                    </a>
                    <img className="icon" alt="Add to Collection" src={collectionSVG} />
                </div>
            </div>
        </div>
    );
};



const SearchContainer = (props) => {
    console.log("props ", props)
    

    return (

        <div className={styles.resultsContainer}>
            <CandidateCard {...props} />
        </div>
        
    );
};

export default SearchContainer;
