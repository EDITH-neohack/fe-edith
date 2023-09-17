import { useCallback, useState } from "react";
import "./home.css";
import searchSVG from './../asset/search.svg'
import hamSVG from './../asset/ham.svg';
import collectionSVG from './../asset/collection.svg';
import SearchContainer from "../search/search.component";
import closeSvg from '../asset/close.svg';
import environment from "../utils/environments";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader.component";

const Home = () => {
  const onVectorIconClick = useCallback(() => {
  }, []);

  const [search, setSearch] = useState("");
  const [sampleData, setSampleData] = useState([])
  const [searchFocused, setSearchFocused] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState(hamSVG);
  const [savedCollections, setSavedCollections] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  
  const handleSearchActivation = () => {
    setSearchFocused(true);
  };

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    if(!search) return;

    handleSearchActivation();

    let payload = {
      search_prompt: search
    }

    let { data } = await axios.post(`${environment.HOST_LINK}/search`, payload);
    // let { data } = await axios.get(`${environment.HOST_LINK}/get_all_documents`);

    console.log("data", data);
    
    let formateData = [];

    data.forEach((each) => {
      let item = each._source;

      formateData.push({
        id: each._id,
        downloadLink: `https://storage.googleapis.com/edith-resumes/${item.meta.fileName}`,
        name: item.data.name.raw,
        totalYearsExperience: item.data.totalYearsExperience,
        linkedin: item.data.linkedin,
        profession: item.data.profession,
      });
  })

    console.log(formateData);

    setSampleData(formateData);
    setSavedCollections(data.savedList);

    setLoader(false);
  }

  const handleRoute = () => {
    navigate('/collections')
  }

  const handleClose = () => {
    setSampleData([]);
    setSearchFocused(false);
    setSearch('');
  }

  return (
    <div className="home">
            {
              searchFocused ? 
              (
                <img 
                  className="cihamburger-md-icon" 
                  alt="" 
                  src={closeSvg} 
                  onClick={handleClose}
                />
              )
              :
              <img 
                  className="cihamburger-md-icon" 
                  alt="" 
                  src={hamburgerIcon} 
                  onMouseOver={() => setHamburgerIcon(collectionSVG)}
                  onMouseOut={() => setHamburgerIcon(hamSVG)}
                  onClick={handleRoute}
              />
            } 
             

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
        loader ? 
        <Loader />
        :
        (<div className={searchFocused && `search-container`}>
          {
            sampleData.length ?
            (
              sampleData.map((item, idx) => <SearchContainer key={idx} {...item}/>)
            )
            :
            (
                searchFocused && <div> No matches found! </div>
            )
          }
        </div>)
      }

    </div>
  )
}

export default Home;

