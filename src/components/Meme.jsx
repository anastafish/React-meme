import React from 'react';
import '../styles/form.css'

export default function Form(){   

const [meme, setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage: 'https:\/\/i.imgflip.com\/54hjww.jpg'
    }) 
    
const [allMemes, setAllMemes] = React.useState([])      

React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
    },[])      
 
    

function getMemeImage(){ 
    const randomImg = Math.floor(Math.random()* allMemes.length)
    const url = allMemes[randomImg].url;
    setMeme(prevState => ({
        ...prevState,
        randomImage:url
    }))
}


function changeText(event){
    const {value, name} = event.target
    setMeme(prevMeme => ({         
            ...prevMeme,
            [name]:value        
    }))
}

    return(
        <div className="form-container">
            <div className='inputs'>
                <input onChange={changeText} value={meme.topText} name='topText' type="text" placeholder='Top text'/>
                <input onChange={changeText} value={meme.bottomText} name='bottomText' type="text" placeholder='Bottom text'/>
            </div>
            <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div className="meme">
                <img className='memeimg' src={meme.randomImage} alt="" />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                </div>
        </div>
    )
}