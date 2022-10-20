const Meme = () => {

    function handleClick() {
        console.log('i was clicked');
    }


    return ( 
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form-input"/>
                <input type="text" placeholder="Bottom Text" className="form-input"/>
                <button onClick={handleClick} type="submit" className="form-btn">Get a new Meme Image 🖼</button>
            </div>
        </main>
    );
}

export default Meme;