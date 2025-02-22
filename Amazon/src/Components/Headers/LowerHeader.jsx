// import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from './header.module.css'


const LowerHeader = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
            {/* <li onClick={() => setMenuOpen(!menuOpen)}> */}
            <AiOutlineMenu />
                <p>All</p>
            </li>
            {/* {menuOpen && ( */}
                 {/* <div className={classes.dropdown_menu}> */}
            
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
            {/* </div> */}
            {/* )} */}
        </ul>
    </div>
  );
};

export default LowerHeader;
