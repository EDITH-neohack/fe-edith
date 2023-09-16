import { useCallback, useState } from "react";
import "./home.css";
import searchSVG from './../asset/search.svg'
import hamSVG from './../asset/ham.svg';
import collectionSVG from './../asset/collection.svg';
import SearchContainer from "../search/search.component";

const Home = () => {
  const onVectorIconClick = useCallback(() => {

  }, []);

  const [search, setSearch] = useState("");
  const [sampleData, setSampleData] = useState([])
  const [searchFocused, setSearchFocused] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(hamSVG);

  
  const handleSearchActivation = () => {
    setSearchFocused(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return;

    handleSearchActivation()

    setSampleData([
      {
          "student_id": "12345",
          "candidateName": "John Doe",
          "email": "john.doe@example.com",
          "phone_number": {"country_code": "+1", "number": "555-123-4567"},
          "urls": {"linkedin": "https://linkedin.com/johndoe"},
          "current_company": "ABC Inc.",
          "years": 3,
          "resumeUrl": "https://storage.cloud.google.com/edith-resumes/FY'23%20Accenture%20ATCI%20Technology%20Solutions%20IPS%20CL10.pdf",
          "latest_company": {"role": "Software Engineer", "company": "XYZ Tech"},
          "experience": [
              {"role": "Software Developer", "company": "Tech Solutions", "start_year": 2018, "end_year": 2021},
              {"role": "Intern", "company": "Internship Corp.", "start_year": 2017, "end_year": 2018},
          ],
          "education": [
              {"university": "University of XYZ", "start_yr": 2014, "end_yr": 2018},
              {"university": "ABC State University", "start_yr": 2010, "end_yr": 2014},
          ],
          "skills": ["Python", "Java", "JavaScript", "SQL"], 
      },
      {
          "student_id": "67890",
          "candidateName": "Jane Smith",
          "email": "jane.smith@example.com",
          "phone_number": {"country_code": "+44", "number": "20-1234-5678"},
          "urls": {"linkedin": "https://linkedin.com/janesmith"},
          "current_company": "XYZ Corp.",
          "years": 5,
          "resumeUrl": "https://storage.cloud.google.com/edith-resumes/ATC-%20B-Schools%20Flyer%20V2.pdf",
          "latest_company": {"role": "Data Scientist", "company": "Data Co."},
          "experience": [
              {"role": "Data Analyst", "company": "Data Insights", "start_year": 2016, "end_year": 2017},
              {"role": "Research Assistant", "company": "Research Lab", "start_year": 2015, "end_year": 2016},
          ],
          "education": [
              {"university": "ABC University", "start_yr": 2010, "end_yr": 2014},
              {"university": "University of PQR", "start_yr": 2006, "end_yr": 2010},
          ],
          "skills": ["Data Analysis", "Machine Learning", "Statistics", "R"],
      },
    ]);
  }

  return (
    <div className="home">
            <img 
                className="cihamburger-md-icon" 
                alt="" 
                src={hamburgerIcon} 
                onMouseOver={() => setHamburgerIcon(collectionSVG)}
                onMouseOut={() => setHamburgerIcon(hamSVG)}
            />

{!searchFocused && <b className="whom-are-you">Whom are you recruiting today?</b>}

      
      <div className={searchFocused ? "home-child activated" : "home-child"}>
          <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Try: Full Stack Developer"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
          </form>
          <img className="search-icon" alt="Search" src={searchSVG} />
      </div>

      <img
        className="vector-icon"
        alt=""
        src="./../asset/search.svg"
        onClick={onVectorIconClick}
      />

      {
        <div>
          {
            sampleData.map((item) => <SearchContainer {...item}/>)
          }
        </div>
      }

    </div>
  )
}

export default Home;

