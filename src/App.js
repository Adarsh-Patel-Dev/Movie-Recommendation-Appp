import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const recommendations = {
    Horror: [
      { name: "A Quiet Place", release: "2018", rating: "4.3 / 5" },
      { name: "Paranormal Activity", release: "2007", rating: "4.5 / 5" },
      { name: "The Babadook", release: "2014", rating: "4 / 5 " },
      { name: "The Birds", release: "1963", rating: "4.1 / 5" }
    ],
    "Sci-Fi": [
      { name: "Xtinction", release: "2018", rating: "4.3 / 5" },
      { name: "Coma", release: "2019", rating: "4.4 / 5" },
      { name: "Tenet", release: "2020", rating: "4.1 / 5" },
      { name: "Venom", release: "2018", rating: "4.6 / 5" }
    ],

    Romantic: [
      { name: "Remember Me", release: "2010", rating: "4.5 / 5" },
      { name: "The Notebook", release: "2004", rating: "4.7 / 5" },
      { name: "Twilight", release: "2008", rating: "4.1 / 5" },
      { name: "One Day", release: "2011", rating: "4.3 / 5" }
    ],

    Comedy: [
      { name: "Due Date", release: "2010", rating: "4.5 / 5" },
      { name: "Shazam", release: "2019", rating: "4.6 / 5" },
      { name: "Johny English", release: "2008", rating: "4.7 / 5" },
      { name: "Despicable Me", release: "2010", rating: "4.8 / 5" }
    ],
    Action: [
      { name: "The Avengers", release: "2012", rating: "4.7 / 5" },
      { name: "Avengers Endgame", release: "2019", rating: "4.8 / 5" },
      { name: "Logan", release: "2017", rating: "4.5 / 5" },
      { name: "John Wick", release: "2014", rating: "4.3 / 5" }
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
        Movie recommendation app which recommends movies in various categories.
      </p>

      <br />
      {/* <hr /> */}
      <div className="category">
        <h3>Category</h3>
        {Object.keys(recommendations).map((item) => {
          return <button onClick={() => clickHandler(item)}>{item}</button>;
        })}

        {/* <hr /> */}
      </div>

      <div>
        {/* <br/> */}
        {recommendation.length > 0 && (
          <p className="recom">
            Here are some recommendations for <strong>{category}</strong>{" "}
            Movies:
          </p>
        )}
        <br />
        <ul>
          {recommendation.map((item) => {
            return (
              <React.Fragment>
                <li>
                  <div className="MovieName">{item.name}</div>
                  <div className="Release-year">{item.release}</div>
                  <div className="Rating">{item.rating}</div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>

      <footer>
        <h3>Social Media Presence</h3>
        <div class="icon">
          <a
            href="https://github.com/Adarsh-Patel-Dev"
            class="fa fa-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/adarsh-patel-449a55175"
            class="fa fa-linkedin"
          ></a>
          <a
            href="https://twitter.com/AdarshPatelDev?s=08"
            class="fa fa-twitter"
          ></a>
          <a
            href="https://instagram.com/git_sit_code"
            class="fa fa-instagram"
          ></a>
        </div>
      </footer>
    </div>
  );
}
