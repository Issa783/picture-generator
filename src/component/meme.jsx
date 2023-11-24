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
    function handlechange(event){
        const {name,value} = event.target
        setmeme(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const[allMeme,setallMeme] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallMeme(data.data.memes))
    },[])
    return(<main className={styles.main}>
         <form className={styles.form} onSubmit={getMemeImage}>
            <input type="text"placeholder="top text" value={meme.toptext} onChange={handlechange} name="toptext" className={styles.txt1}/>
            <input type="text" placeholder="bottom text"value={meme.bottomtext} onChange={handlechange} name="bottomtext"className={styles.txt2} />
            <button type="submit" className={styles.btn}>Get a new image  🖼</button>
        </form>
        <div className={styles.txtgenerate}>
        <img src={meme.randomImage} className={styles.random} />
        <h2 className={styles.toptext}>{meme.toptext}</h2> 
        <h2 className={styles.bottomtext}>{meme.bottomtext}</h2>
        </div>

    </main>)
}
export default Meme;