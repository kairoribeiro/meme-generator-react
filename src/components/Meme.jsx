import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {

    let url

    const [memeImage, setMemeImage] = useState('')


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url);
    }


    
    return ( 
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form-input"/>
                <input
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form-input"/>
                <button 
                    onClick={getMemeImage} 
                    type="submit" 
                    className="form-btn"
                >
                    Get a new Meme Image 🖼
                </button>
                <img src={memeImage} className="meme-img" />
            </div>
        </main>
    );
}

export default Meme;