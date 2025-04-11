import { useState, useEffect } from "react";

export default function MemeMain() {
  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMemeData((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
        console.log(data.data.memes);
      });
  }, []);

  function getMemeFromApi() {
    const random = Math.floor(Math.random() * allMemes.length);
    setMemeData((prev) => {
      return {
        ...prev,
        imageUrl: allMemes[random].url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input onChange={handleChange} type="text" placeholder="One does not simply" name="topText" value={memeData.topText} />
        </label>

        <label>
          Bottom Text
          <input onChange={handleChange} value={memeData.bottomText} type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button onClick={getMemeFromApi}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={memeData.imageUrl} />
        <span className="top">{memeData.topText}</span>
        <span className="bottom">{memeData.bottomText}</span>
      </div>
    </main>
  );
}
