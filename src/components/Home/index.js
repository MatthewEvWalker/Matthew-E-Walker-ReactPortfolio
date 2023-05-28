import { Link } from 'react-router-dom';
import './Home.scss'
import Letters from "../Letters"
import React, { useState, useEffect } from 'react';
import me2 from '../../assets/images/mount_river.avif';
import usual from "../../assets/images/usual.jpeg"
import austin from "../../assets/images/Vert-Austin_skyline.jpg"


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const heyList = ["H", "e", "y", "", " I", "'", "m"]
    const nameList = [" ", "M", "a", "t", "t", "h", "e", "w", ",", " ", "a"]
    const webDevList1 = [" ", "F", "u", "l", "l", " ", "S", "t", "a", "c", "k", " "]
    const webDevList2 = ["D", "e", "v", "e", "l", "o", "p", "e", "r"]
    const pythonList = [" ", "a", "n", "d", " ", "D", "a", "t", "a", " ", "A", "n", "a", "l", "y", "s", "t"]



    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)        
    }, [])


    return (
        <div className="container home-page">
            <div className="text-area">
                <h1>  
                <Letters letterClass={letterClass}
                letterArray={heyList} 
                index={15} />

                <Letters letterClass={letterClass}
                letterArray={nameList}
                index={18} />

                <Letters letterClass={letterClass} 
                letterArray={webDevList1}
                index={27} />
                
                <br/>

                <Letters letterClass={letterClass} 
                letterArray={webDevList2}
                index={27} />

                <Letters letterClass={letterClass}
                letterArray={pythonList}
                index={27} />
                </h1>

                <h2>
                React Dev | Intermediate Python Programmer | Advanced Javascript Skills
                </h2>

                <Link to="/contact" className="contact-btn">CONTACT</Link>
            </div>

            <div className="spinning-photo">
                <div className="photos">
                    <div className="sunrise">
                        <img src={usual} height="625" width="425" />

                    </div>

                    <div className="mountain">
                        <img src={austin} height="625" width="425" />

                    </div>
                    
                </div>
            
            </div>

        </div>
    )
}

export default Home