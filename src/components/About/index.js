import "./About.scss"
import Letters from "../Letters"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import certificate from "../../assets/images/bootcamp.png"
import boyScout from "../../assets/images/boy_scout.jpeg"

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
                I am an Eagle Scout from Troop 511 in Austin, TX. I enjoy hiking, camping, and spending time with my family. I am a huge fan of the Dallas Cowboys and the Texas Longhorns. During my free time I enjoy playing video games, learning new coding languages and learning the Piano. 
                </p>

                <p>
                I achieved my Full Stack Developer Certifciate through <a className="UT-tag" target="_blank" href='https://techbootcamps.utexas.edu/' >The University of Texas at Austin BootCamp</a> The coding languages I learned can be seen on the Cube to the right such as HTML, CSS, Javascript, Python, NodeJS and React. As well as Data/Route languages like MongoDB, MySQL and ExpressJS.
                </p>
                <p>
                I currently attend Austin Community College and I am working towards my Associates Degree in Computer Science. I am  working on my Google Data, Data, Everywhere Certification and Codecademy Machine Learning Certificate. I am also developing a few personal business projects that I will be adding to my portfolio soon. Always open to news opportunities to work alongside coworkers in the Tech Field! 
                </p>


            </div>

                    
            <div className="UT-area">
                <img className="UT-img" src={certificate} alt="placeholder" />

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

            <div className="image-area">
                <img className="boy-scout" src={boyScout} alt="placeholder" width="400" height="650" />
            </div>

        </div>

    )
}


export default About