import Image from './rose.jpeg'
function Pic(){
    return(
        <div>
            <img src={Image} alt='rose' width={200} height={300}/>
        </div>
    );
}
export default Pic;