import { useState } from 'react';
import './Header.css';
import Header1 from './Header1'
function Header(prop){
    const [msg,setMsg] = useState('hello world')
    return(
        <div>
    <h2 className='clr'>Hi..Hello</h2>
    <p>{prop.name}</p>
    <p>{msg}</p>
    <Header1 />
    </div>
    );
}
export default Header;