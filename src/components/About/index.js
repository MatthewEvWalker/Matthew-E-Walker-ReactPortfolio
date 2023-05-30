import "./About.scss"
import Letters from "../Letters"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"

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
                I achieved my Full Stack Developer Certifciate through <a className="UT-tag" target="_blank" href='https://techbootcamps.utexas.edu/' >The University of Texas at Austin BootCamp</a> I have a passion for learning and I am always looking for ways to improve my skills. I am currently working on a project that uses Reinforced Learning to automate the snake game. I am also working on a project that uses the MERN stack to create a cryptocurrency game. I am looking for a position that will allow me to continue to learn and grow as a developer.


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
                    <div className="sidePy"> 
                        <FontAwesomeIcon icon={faPython} 
                        color="#6495ED" />
                    </div>

                    <div className="sideHTML"> 
                        <FontAwesomeIcon icon={faHtml5} 
                        color="#C46210" />
                    </div>

                    <div className="sideCSS"> 
                        <FontAwesomeIcon icon={faCss3} 
                        color="#1F75FE" />
                    </div>

                    <div className="sideReact"> 
                        <FontAwesomeIcon icon={faReact} 
                        color="#5ED4F4" />
                    </div>

                    <div className="sideJS"> 
                        <FontAwesomeIcon icon={faJsSquare} 
                        color="yellow" />
                    </div>

                    <div className="sideNode"> 
                        <FontAwesomeIcon icon={faNodeJs} 
                        color="#03C03C" />
                    </div>
                </div>

            </div>
        </div>

    )
}


export default About