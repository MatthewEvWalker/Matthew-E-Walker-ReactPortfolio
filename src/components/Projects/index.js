import './Projects.scss'
import Letters from '../Letters'
import { useState, useEffect, useRef } from 'react'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate') 



    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)        
    }, [])

    return (
        
        <div className="container projects-page">
            <div className="text-area">
                <h1>
                    <Letters letterClass={letterClass} letterArray={["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"]} 
                    index={20}

                    />
                </h1>
            </div>
        </div>
    )
}

export default Project