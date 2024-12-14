import dataMeme from "../data";
import { useState } from "react";

export default function Meme() {
   let [meme, setMeme]  = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
   })
   let [allImages , setAllImages] = useState(dataMeme);


   function getMemeImage() {
    const memesArray = allImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    let url  = memesArray[randomNumber].url; 
    setMeme(prevState => ({
        ...prevState,
        randomImage: url,
    }));
    
}
function handleChange(event) {
    let {name, value} = event.target;
    setMeme((prev)=> {
        return {
            ...prev,
            [name]: value,
        }
    })
}
  
  return (
      <main>
            <div className="form">
            <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage}
                    className="form--button"
                    >
                    Get a new meme image 🖼
                </button>
            </div>
 <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}