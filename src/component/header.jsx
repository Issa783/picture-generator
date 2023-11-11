import React from "react";
import Image1 from "../images/Troll Face.png";
import styles from "../style.module.css";
function Header(){
    return(<div className={styles.nav}>
        <img src={Image1} className={styles.pic}/>
        <h2 className={styles.title1}>ImageGenerator</h2>
        <h3 className={styles.title2}>React Course - project 3</h3>
    </div>)
}
export default Header;