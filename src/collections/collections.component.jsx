import React from 'react';
import './collections.styles.css';
import hamSVG from './../asset/ham.svg'; // Adjust the path accordingly

// Assuming you want to use the SearchContainer for displaying the candidates
import SearchContainer from '../search/search.component';
import { useNavigate } from "react-router-dom";
import '../search/search.styles.css';  // adjust path if needed


const Collections = () => {
    // Sample data or you might want to fetch this from somewhere (like context or Redux store)
    const collectionData = [
      {
          candidateName: "John Doe",
          urls: {
              linkedin: "http://linkedin.com/in/johndoe",
          },
          latest_company: {
              company: "ABC Corp"
          },
          years: 5,
          resumeUrl: "http://example.com/resume.pdf"
      },
      // ... add more candidates for testing if needed
  ];
  
    const navigate = useNavigate();
    const handleRoute = () => {
      navigate('/')
    }
    return (
        <div className="collections">
            <img 
                className="cihamburger-md-icon" 
                alt="" 
                src={hamSVG}
                onClick={handleRoute}
            />

            <h1>Collections</h1>

            <div className="collection-list">
                {
                    collectionData.map(candidate => <SearchContainer {...candidate} />)
                }
            </div>
        </div>
    );
}

export default Collections;
