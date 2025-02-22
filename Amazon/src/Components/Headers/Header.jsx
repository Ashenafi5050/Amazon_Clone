// import React, {useState}from 'react'
import classes from './header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';


const Header = () => {
    // const [darkMode, setDarkMode] = useState(false);
    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //     document.body.classList.toggle(classes.dark);
    //   };
  return (
    <>
        <section>
        {/* <section className={darkMode ? classes.dark_mode : ""}> */}
            <div className={classes.header_container}>
                <div className={classes.logo_container}>
                    <a href="#">
                        <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="Amazon Logo" />
                    </a>
                    <div className={classes.delivery}>
                        <span><SlLocationPin /></span>
                        <div>
                            <p>Delivered to</p>
                            <span>Ethiopia</span>
                    </div>
                </div>
            </div>

        {/* Search section */}
        <div className={classes.search}>
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" aria-label="Search Products" />
            <BsSearch size={25} />
        </div>
        {/* right side link */}
        <div className={classes.order_container}>
            <a href="" className={classes.language}>
            <img src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg" alt="USA_Flag" />
            <select name="" id="">
                <option value="">EN</option>
            </select> 
            </a>
            <a href="" >
                <p>Sign In</p>
                <span>Account & Lists</span>
            </a>
            <a href="" >
                <p>Returns</p>
                <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
                <BiCart 
                size={35} />
                <span>0</span>
            </a>
            {/* Dark Mode Toggle */}
            {/* <button onClick={toggleDarkMode} className={classes.dark_mode_btn}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button> */}
        </div>
    </div>
    </section>
    <LowerHeader />
    </>
  );
};

export default Header
