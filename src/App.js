import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const recommendations = {
    Horror: [
      { name: "A Quiet Place", release: "2018" },
      { name: "Paranormal Activity", release: "2007" },
      { name: "The Babadook", release: "2014" },
      { name: "The Birds", release: "1963" }
    ],
    "Sci-Fi": [
      { name: "Xtinction", release: "2018" },
      { name: "Coma", release: "2019" },
      { name: "Tenet", release: "2020" },
      { name: "Venom", release: "2018" }
    ],

    Romantic: [
      { name: "Remember Me", release: "2010" },
      { name: "The Notebook", release: "2004" },
      { name: "Twilight", release: "2008" },
      { name: "One Day", release: "2011" }
    ],

    Comedy: [
      { name: "Due Date", release: "2010" },
      { name: "Shazam", release: "2019" },
      { name: "Johny English", release: "2008" },
      { name: "Despicable Me", release: "2010" }
    ],
    Action: [
      { name: "The Avengers", release: "2012" },
      { name: "Avengers Endgame", release: "2019" },
      { name: "Logan", release: "2017" },
      { name: "John Wick", release: "2014" }
    ]
  };

  const [recommendation, setRecommendations] = useState([]);
  const [category, setCategory] = useState("");

  const clickHandler = function (item) {
    setRecommendations(recommendations[item]);
    setCategory(item);
  };

  return (
    <div className="App">
      <h1>Movies Library</h1>
      <p>
        {" "}
        Movie recommendation app which recommends movies in various category
      </p>
      {/* <h5>category</h5> */}
      <br />
      <hr />
      <div>
        {Object.keys(recommendations).map((item) => {
          return <button onClick={() => clickHandler(item)}>{item}</button>;
        })}
        <hr />
      </div>

      <div>
        {recommendation.length > 0 && (
          <p>
            Here are some recommendations for <strong>{category}</strong>{" "}
            Movies:
          </p>
        )}
        <ul>
          {recommendation.map((item) => {
            return (
              <React.Fragment>
                <li>
                  <div className="MovieName">{item.name}</div>
                  <div className="Release-year">{item.release}</div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
