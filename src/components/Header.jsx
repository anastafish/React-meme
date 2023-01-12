import '../styles/header.css'

export default function Header(){
    return(
        <div className="header-container">
            <div className='header-left'>
                <img src="../../public/images/trollface.png" alt="" />
                <h1>Meme Generator</h1>
            </div>
            <div>
                <h3>React Course - Project 3</h3>
            </div>
        </div>
    )
}