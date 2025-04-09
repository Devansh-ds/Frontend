import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import journalData from "./components/JournalData";

import CatCard from "./components/Cat";

import Joke from "./components/Jokes";
import jokesData from "./components/JokesData";

import mrWhishkerson from "./images/mr-whiskerson.png";
import felix from "./images/felix.png";
import fluffy from "./images/fluffykins.png";
import pumpkin from "./images/pumpkin.png";

const root = createRoot(document.getElementById("root"));

const nums = ["alice", "bob", "John"];
const capital = nums.map((num) => {
  return num[0].toUpperCase() + num.slice(1);
});

root.render(
  <>
    <Jokes />
  </>
);

function Journal() {
  const dataEntry = journalData.map((data) => {
    return (
      <Entry
        key={data.id}
        img={data.img.src}
        alt={data.img.alt}
        title={data.title}
        country={data.country}
        googleMapsLink={data.googleMapsLink}
        dates={data.dates}
        text={data.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="journal-container">{dataEntry}</main>
    </>
  );
}

function Cat() {
  return (
    <>
      <div className="contacts">
        <CatCard img={mrWhishkerson} name="Mr. Whishkerson" phone="(212) 555-1234" email="mr.whiadfs@gmail.com" />
        <CatCard img={felix} name="Mrs. Felix" phone="(212) 325-1234" email="mrs.felix@gmail.com" />
        <CatCard img={fluffy} name="Mrs. Fluffy" phone="(212) 555-4334" email="mrs.fluffy@gmail.com" />
        <CatCard img={pumpkin} name="Mr. Pumkin" phone="(212) 115-2434" email="mr.pumpkin@gmail.com" />
      </div>
    </>
  );
}

function Jokes() {
  const jokesElement = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return (
    <>
      <div className="joke-container">{jokesElement}</div>
    </>
  );
}
