import { useCallback, useState } from "react";
import "./home.css";
import searchSVG from './../asset/search.svg'
import hamSVG from './../asset/ham.svg';
import collectionSVG from './../asset/collection.svg';
import SearchContainer from "../search/search.component";
import environment from "../utils/environments";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const onVectorIconClick = useCallback(() => {
  }, []);

  const [search, setSearch] = useState("");
  const [sampleData, setSampleData] = useState([])
  const [searchFocused, setSearchFocused] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(hamSVG);
  const [savedCollections, setSavedCollections] = useState([]);
  const navigate = useNavigate();

  
  const handleSearchActivation = () => {
    setSearchFocused(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!search) return;

    handleSearchActivation();

    let payload = {
      limit: 10,
      search
    }

    let { data } = await axios.post(`${environment.HOST_LINK}/search`, payload);

    setSampleData(data.results);
    setSavedCollections(data.savedList);
  }

  const handleRoute = () => {
    navigate('/collections')
  }

  return (
    <div className="home">
            <img 
                className="cihamburger-md-icon" 
                alt="" 
                src={hamburgerIcon} 
                onMouseOver={() => setHamburgerIcon(collectionSVG)}
                onMouseOut={() => setHamburgerIcon(hamSVG)}
                onClick={handleRoute}
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
            sampleData.map((item, idx) => <SearchContainer key={idx} {...item}/>)
          }
        </div>
      }

    </div>
  )
}

export default Home;

