import './Projects.scss'
import Letters from '../Letters'
import { useState, useEffect } from 'react'
import crypto from '../../assets/images/crypto-game.png';
import slither from '../../assets/images/slither.png';
import workDay from '../../assets/images/work-day-scheduler.png';
import password from '../../assets/images/password-gen.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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

                <p>
                The following are some of my projects. Click on the images to view the deployed application or the GitHub icons in the bottom left of the projects to view the code on GitHub.


                </p>

                <h2>
                    whatacrypto
                </h2>

                
            </div>


            <div className="project-area">
                    
                    <div className="project-1">
                        {/* <h2>Project 1</h2> */}


                        <a target="_blank" href='https://matthewevwalker.github.io/whatacrypto-crypto-game/' >
                            <img src={crypto} height="300" width="425" />
                        </a>

                        <a className='github-icons'
                            target="_blank" 
                            rel='noreferrer' 
                            href='https://github.com/MatthewEvWalker/whatacrypto-crypto-game'
                            >
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>

                    </div>


                    <div className="project-2" >
                        {/* <h2>Project 1</h2> */}


                        <a target="_blank" href='https://github.com/MatthewEvWalker/Slither-AI' >
                            <img src={slither} height="300" width="425" />
                        </a>

                        <a className='github-icons'
                            target="_blank" 
                            rel='noreferrer' 
                            href='https://github.com/MatthewEvWalker/whatacrypto-crypto-game'
                            >
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>

                    </div>

                    <div className="project-3">
                        {/* <h2>Project 1</h2> */}
                        <a target="_blank" href='https://matthewevwalker.github.io/work-scheduler-5/' >
                            <img src={workDay} height="300" width="425" />
                        </a>

                        <a className='github-icons'
                            target="_blank" 
                            rel='noreferrer' 
                            href='https://github.com/MatthewEvWalker/whatacrypto-crypto-game'
                            >
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>

                    </div>

                    <div className="project-4">
                        {/* <h2>Project 1</h2> */}
                        <a target="_blank" href='https://matthewevwalker.github.io/Password_Generator/' >
                            <img src={password} height="300" width="425" />
                        </a>

                        <a className='password-gen-github'
                            target="_blank" 
                            rel='noreferrer' 
                            href='https://github.com/MatthewEvWalker/whatacrypto-crypto-game'
                            >
                            <FontAwesomeIcon icon={faGithub}  />
                        </a>

                    </div>

            </div>
        </div>
    )
}

export default Project