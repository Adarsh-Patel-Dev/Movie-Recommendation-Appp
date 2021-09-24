import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const recommendations = {
    Horror: [
      {
        name: "A Quiet Place",
        release: "2018",
        rating: "4.3 / 5",
        desc:
          "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing. "
      },

      {
        name: "Paranormal Activity",
        release: "2007",
        rating: "4.5 / 5",
        desc:
          "After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence. "
      },

      {
        name: "The Babadook",
        release: "2014",
        rating: "4 / 5 ",
        desc:
          " A single mother and her child fall into a deep well of paranoia when an eerie children's book titled Mister Babadook manifests in their home."
      },

      {
        name: "The Birds",
        release: "1963",
        rating: "4.1 / 5",
        desc:
          "A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people. "
      }
    ],
    "Sci-Fi": [
      {
        name: "Extinction",
        release: "2018",
        rating: "4.3 / 5",
        desc:
          " A father has a recurring dream of losing his family. His nightmare turns into reality when the planet is invaded by a force bent on destruction. Fighting for their lives, he comes to realize an unknown strength to keep them safe from harm."
      },

      {
        name: "Coma",
        release: "2019",
        rating: "4.4 / 5",
        desc:
          " When a young female doctor notices an unnatural amount of comas occurring in her hospital she uncovers a horrible conspiracy."
      },

      {
        name: "Tenet",
        release: "2020",
        rating: "4.1 / 5",
        desc:
          "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time. "
      },

      {
        name: "Venom",
        release: "2018",
        rating: "4.6 / 5",
        desc:
          "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it. "
      }
    ],

    Romantic: [
      {
        name: "Remember Me",
        release: "2010",
        rating: "4.5 / 5",
        desc:
          "A romantic drama centered on two new lovers: Tyler, whose parents have split in the wake of his brother's suicide, and Ally, who lives each day to the fullest since witnessing her mother's murder. "
      },

      {
        name: "The Notebook",
        release: "2004",
        rating: "4.7 / 5",
        desc:
          "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences. "
      },

      {
        name: "Twilight",
        release: "2008",
        rating: "4.1 / 5",
        desc:
          " When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
      },

      {
        name: "Titanic",
        release: "2011",
        rating: "4.4 / 5",
        desc:
          " A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
      }
    ],

    Comedy: [
      {
        name: "Due Date",
        release: "2010",
        rating: "4.5 / 5",
        desc:
          " High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time."
      },

      {
        name: "Shazam",
        release: "2019",
        rating: "4.6 / 5",
        desc:
          "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy. "
      },

      {
        name: "Johny English",
        release: "2003",
        rating: "4.7 / 5",
        desc:
          "After a sudden attack on MI5, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy. "
      },

      {
        name: "Despicable Me",
        release: "2010",
        rating: "4.8 / 5",
        desc:
          "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better. "
      }
    ],
    Action: [
      {
        name: "The Avengers",
        release: "2012",
        rating: "4.7 / 5",
        desc:
          " Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
      },

      {
        name: "Avengers Endgame",
        release: "2019",
        rating: "4.8 / 5",
        desc:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe. "
      },

      {
        name: "Logan",
        release: "2017",
        rating: "4.5 / 5",
        desc:
          "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety. "
      },

      {
        name: "John Wick",
        release: "2014",
        rating: "4.3 / 5",
        desc:
          " An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him."
      }
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
                  <div className="Release-year">
                    Release Year: {item.release}
                  </div>
                  <div className="descr">{item.desc}</div>
                  <div className="Rating">Rating: {item.rating}</div>
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
