import { useEffect, useState } from "react";

const Meme = () => {

    let url


    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
   

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random()* allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme({...meme, randomImage: url});
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(meme => ({
            ...meme,
            [name] : value
        }))

    }


    
    return ( 
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top Text" 
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text" 
                    placeholder="Bottom Text" 
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImage} 
                    type="submit" 
                    className="form-btn"
                >
                    Get a new Meme Image 🖼
                </button>
            </div>

                <div className="meme">
                <img src={meme.randomImage} className="meme-img " />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    );
}

export default Meme;