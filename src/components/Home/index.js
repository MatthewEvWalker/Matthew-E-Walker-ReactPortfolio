import { Link } from 'react-router-dom';
import './Home.scss'
import Letters from "../Letters"
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 
    const nameList = [" ", "M", "a", "t", "t", "h", "e", "w", ",", " ", "a"]
    const webDevList1 = [" ", "F", "u", "l", "l", " ", "S", "t", "a", "c", "k", " "]
    const webDevList2 = ["D", "e", "v", "e", "l", "o", "p", "e", "r"]
    const pythonList = [" ", "a", "n", "d", " ", "D", "a", "t", "a", " ", "A", "n", "a", "l", "y", "s", "t"]

    return (
        <div className="container home-page">
            <div className="text-area">
                <h1> Hey I'm  
                <Letters letterClass={letterClass}
                letterArray={nameList}
                index={15} />

                <Letters letterClass={letterClass} 
                letterArray={webDevList1}
                index={26} />
                
                <br/>

                <Letters letterClass={letterClass} 
                letterArray={webDevList2}
                index={26} />

                <Letters letterClass={letterClass}
                letterArray={pythonList}
                index={47} />
                </h1>
                <h2>
                React Dev | Intermediate Python Programmer | Advanced Javascript Skills
                </h2>
                <Link to="/contact" className="contact-btn">CONTACT</Link>
            </div>
        </div>
    )

}

export default Home