import "./About.scss"
import Letters from "../Letters"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)        
    }, [])

    return (
        <div className="container about-page">
            <div className="text-area">
                <h1>
                    <Letters letterClass={letterClass} letterArray={["A", "b", "o", "u", "t", " ", "M", "e"]} 
                    index={20}
                    />
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.


                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.


                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.

  
                </p>

            </div>

            <div className="stage-cube-cont">
                <div className="cubeSpin">
                    <div className="side1"> 
                        <FontAwesomeIcon icon={faPython} 
                        color="white" />
                    </div>

                    <div className="side2"> 
                        <FontAwesomeIcon icon={faHtml5} 
                        color="white" />
                    </div>

                    <div className="side3"> 
                        <FontAwesomeIcon icon={faCss3} 
                        color="white" />
                    </div>

                    <div className="side4"> 
                        <FontAwesomeIcon icon={faReact} 
                        color="white" />
                    </div>

                    <div className="side5"> 
                        <FontAwesomeIcon icon={faJsSquare} 
                        color="white" />
                    </div>

                    <div className="side6"> 
                        <FontAwesomeIcon icon={faGitAlt} 
                        color="white" />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default About