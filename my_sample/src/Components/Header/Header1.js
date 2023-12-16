import Image from './Image.jpg';
import './Header.css';
function Header1(){
    return(
        <div>
            <h1>My First IMage</h1>
            <img src={Image} alt="my-image" className="Image-class" />
        </div>
        
    );
}
export default Header1;