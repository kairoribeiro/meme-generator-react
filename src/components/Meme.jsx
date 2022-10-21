import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {

    let url


    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMeme, setAllMeme] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMeme.data.memes
        const randomNumber = Math.floor(Math.random()* memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme({...meme, randomImage: url});
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
                <img src={meme.randomImage} className="meme-img " />
            </div>
        </main>
    );
}

export default Meme;