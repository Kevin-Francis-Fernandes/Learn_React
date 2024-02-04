import profilePic from '../assets/myImage.jfif'
import "../styles/Card.css"
function Card(){
    return(
        <div className='card'>
           <img className='card-image' src={profilePic} alt='Profile Picture'></img>
           <h2 className='card-title'>Kevin</h2>
           <p className='card-text'>I am an engineering student</p>

        </div>
    );
}

export default Card