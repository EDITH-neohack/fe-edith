import React from 'react';
import './collections.styles.css';
import closeSVG from '../asset/close.svg';

// Assuming you want to use the SearchContainer for displaying the candidates
import SearchContainer from '../search/search.component';
import { useNavigate } from "react-router-dom";
import '../search/search.styles.css';  // adjust path if needed


const Collections = () => {
    // Sample data or you might want to fetch this from somewhere (like context or Redux store)
    const collectionData = [
        {
            "id": "wVWRnooBaQGmhrdPuLP7",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/logesh.pdf",
            "name": "Logesh Kannan",
            "totalYearsExperience": 4,
            "linkedin": null,
            "profession": "Software Engineer Associate",
            "isSaved": true
        },
        {
            "id": "wlW2nooBaQGmhrdPvLPV",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/abhishek-narayanan.pdf",
            "name": "ABHISHEK NARAYANAN",
            "totalYearsExperience": 0,
            "linkedin": null,
            "profession": null,
            "isSaved": true
        },
        {
            "id": "w1XGnooBaQGmhrdP6LMr",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/ashwin.pdf",
            "name": "ASHWIN K R",
            "totalYearsExperience": 0,
            "linkedin": "https://www.linkedin.com/in/ashwin-kr-5866a0220/",
            "profession": null,
            "isSaved": true
        },
        {
            "id": "xFXHnooBaQGmhrdPxbPD",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/ashwin.pdf",
            "name": "ASHWIN K R",
            "totalYearsExperience": 0,
            "linkedin": "https://www.linkedin.com/in/ashwin-kr-5866a0220/",
            "profession": null,
            "isSaved": true
        },
        {
            "id": "xVXJnooBaQGmhrdPL7N-",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/ashwin.pdf",
            "name": "ASHWIN K R",
            "totalYearsExperience": 0,
            "linkedin": "https://www.linkedin.com/in/ashwin-kr-5866a0220/",
            "profession": null,
            "isSaved": true
        },
        {
            "id": "zFU3n4oBaQGmhrdPqLPv",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/darsini.pdf",
            "name": "DARSINI K",
            "totalYearsExperience": 0,
            "linkedin": "www.linkedin.com/in/darsini-kabilan",
            "profession": null,
            "isSaved": true
        },
        {
            "id": "zVVBn4oBaQGmhrdPWLOw",
            "downloadLink": "https://storage.googleapis.com/edith-resumes/bharath.pdf",
            "name": "BHARATH BALAN ASHOKKUMAR",
            "totalYearsExperience": 2,
            "linkedin": null,
            "profession": "Account Manager Key Account",
            "isSaved": true
        }
    ]
  
    const navigate = useNavigate();
    const handleRoute = () => {
      navigate('/')
    }
    return (
        <div className="collections">
            <img 
                className="cihamburger-md-icon" 
                alt="" 
                src={closeSVG}
                onClick={handleRoute}
            />

            <h1>Saved Collections</h1>

            <div className="collection-list">
                {
                    collectionData.map(candidate => <SearchContainer {...candidate} />)
                }
            </div>
        </div>
    );
}

export default Collections;
