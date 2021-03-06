import React, {useState} from 'react';
import Navbar from '../../Navbar/index';
import Sidebar from '../../Sidebar/index';
import Info from '../../Info/Info';
//import { homeObjOne } from '../../Info/Data';
const Home = () => {
     const[isOpen,setIsOpen] = useState(false)
     const toggle = () => {
         setIsOpen(!isOpen);
     };

    return (
        <div>
            <Sidebar isOpen = {isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
        </div>
    )
}

export default Home;
