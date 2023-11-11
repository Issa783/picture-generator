import React,{useState} from "react";
import styles from "../style.module.css";
import Memesdata from "../memesdata";

function Meme(){
    
        const [meme,setmeme] = useState({
            toptext: "",
            bottomtext:"",
            randomImage:"../images/Rectangle 77.png"

        });
        function getMemeImage(event){
            event.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setmeme(prevState => ({
            ...prevState,randomImage:url
        }))
       
    }
    const[allMemeImages,setMemeImages] = useState(Memesdata.data.memes)
    return(<main className={styles.main}>
        <form className={styles.form} onSubmit={getMemeImage}>
            <input type="text"placeholder="top text" className={styles.txt1}/>
            <input type="text" placeholder="bottom text"className={styles.txt2} />
            <button type="submit" className={styles.btn}>Get a new image  🖼</button>
        </form>
          <img src={meme.randomImage} className={styles.random} />

    </main>)
}
export default Meme;