import React from "react";

export default function Content() {
  const [DB, SetDB] = React.useState([]);
  const [Meme, setMeme] = React.useState({
    TopT: "",
    BottomT: "",
    img: "",
  });
  React.useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    const url = await fetch("https://api.imgflip.com/get_memes");
    let Items = await url.json();
    console.log(Items.data.memes);
    SetDB(Items.data.memes);
  };
  function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit + 1);
  }
  const handleInput = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  function HandleClick() {
    let FullData = DB[getRandomNumber(DB.length)].url;
    setMeme(() => {
      return {
        TopT: TopText.value,
        BottomT: BottomText.value,
        img: FullData,
      };
    });
  }
  return (
    <div className="Content">
      <div id="form">
        <div className="inputs">
          <input
            id="TopText"
            name="TopT"
            type="text"
            value={Meme.TopT}
            onChange={handleInput}
            placeholder="Top text"
          ></input>
          <input
            id="BottomText"
            name="BottomT"
            type="text"
            value={Meme.BottomT}
            onChange={handleInput}
            placeholder="Bottom text"
          ></input>
        </div>
        <button id="submit" onClick={HandleClick}>
          Get a new meme image
        </button>
      </div>
      <div className="Meme">
        <p className="TopText">{Meme.TopT}</p>
        {Meme.img && <img src={Meme.img}></img>}
        <p className="BottomText">{Meme.BottomT}</p>
      </div>
    </div>
  );
}
