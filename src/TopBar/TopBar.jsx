import React from 'react';
import classes from "./TopBar.module.css";
import Amazon from '/src/assets/amazonlogo.png';
// import Amazon from './src/assets/amazonlogo.png'

const TopBar =()=>{
    return (
     <div>
        <header>  
            <nav className={classes.TopBar}>
                <img src={Amazon} alt="Amazon Logo"/>
            </nav>
        </header>
   </div>
    )
}
export default TopBar