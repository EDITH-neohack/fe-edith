import { useCallback } from "react";
import "./home.css";
import searchSVG from './../asset/search.svg'
import hamSVG from './../asset/ham.svg'

const Home = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "Search Result" to the project
  }, []);

  return (
    <div className="home">
      <img className="cihamburger-md-icon" alt="" src={hamSVG} />
      <b className="whom-are-you">Whom are you recruiting today?</b>
      
      <div className="home-child">
          <input
              type="text"
              className="search-input"
              placeholder="Try: Full Stack Developer"
          />
          <img className="search-icon" alt="Search" src={searchSVG} />
      </div>

      <img
        className="vector-icon"
        alt=""
        src="./../asset/search.svg"
        onClick={onVectorIconClick}
      />
    </div>
  );
};

export default Home;
