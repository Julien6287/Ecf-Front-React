import React from "react";
import axios from "axios";
import Fiche from "./Fiche.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/repas").then(response => {
      this.setState ({dishes: response.data});
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="insideBar">
          <h1>Découvrez notre <span className="blueTitle">Menu.</span></h1>
          <div className="filter">
            <button>Tout</button>
            <button>Viande</button>
            <button>Légumes</button>
          </div>
          </div>
        </div>
        <div className="container">
          {this.state.dishes.map(dishe => <Fiche dishe={dishe} key={dishe.id}  />)}
        </div>
        <div className="blob1">
          <svg viewBox="0 0 600 600">
            <g transform="translate(300,300)">
            <path
            d="M86.4,-125.7C108.9,-102.5,122,-73.2,149.6,-37.1C177.2,-0.9,219.4,42,223.6,86.1C227.8,130.3,194.2,175.6,150.6,200.7C107,225.9,53.5,231,5.2,223.8C-43.1,216.7,-86.2,197.3,-109.5,165.6C-132.8,133.8,-136.3,89.6,-138.8,52.1C-141.4,14.6,-143,-16.2,-147,-61.4C-151,-106.6,-157.5,-166.1,-133.4,-188.8C-109.3,-211.5,-54.7,-197.2,-11.4,-181.6C31.9,-166,63.9,-148.9,86.4,-125.7Z"
            fill="#e8dcff"/>
            </g>
          </svg>
        </div>
        <div className="blob2">
          <svg viewBox="0 0 600 600">
            <g transform="translate(300,300)">
              <path
                d="M103.9,-95.2C140.4,-67.4,179.7,-33.7,191.6,11.9C203.5,57.5,188,115,151.5,150.2C115,185.4,57.5,198.2,-5.4,203.6C-68.4,209,-136.7,207,-183.4,171.9C-230,136.7,-255,68.4,-233.5,21.6C-211.9,-25.2,-143.8,-50.4,-97.1,-78.3C-50.4,-106.1,-25.2,-136.6,4.2,-140.8C33.7,-145,67.4,-123.1,103.9,-95.2Z"
                fill="#feedf4"/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
