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

                <p className='top-p'>
                    The following are some of my projects. Click on the images to view the deployed application or the GitHub icons in the bottom left of the projects to view the code on GitHub.
                </p>

                <h2 className='header-crypto'>
                    Whatacrypto
                </h2>

                <p>
                    WhataCrypto is a cryptocurrency game that allows people to make decisions on how and when to buy and sell crypto. WhataCrypto promotes strategic thinking and gives people opportunities to learn in a low stakes environment.

                </p>

                <h2 className='header-slither'>
                    SlitherAi
                </h2>

                <p>
                    This is a single page MERN application. It illustrates an example of a Deep Q Network (DQN) Reinforced Learning. It automates the snake game, by implementing qTables to enable Reinforced Learning. The snake learns to play the game by itself and gets better over time.
                </p>

                <h2 className='header-scheduler'>
                    Work Day scheduler
                </h2>

                <p>
                    This is a simple static website that you can use to schedule your work day. It uses moment.js to display the current date and time. It also uses local storage to save your schedule.
                </p>
                
                <h2 className='header-password'>
                    Password Generator
                </h2>

                <p>
                    A beginner friendly website password generator that allows you to generate a password between 8 and 128 characters. You can choose to include uppercase, lowercase, numbers, and special characters.
                </p>
            </div>


            <div className="project-area">
                    
                    <div className="project-1">
                        <a target="_blank" rel="noreferrer" href='https://matthewevwalker.github.io/whatacrypto-crypto-game/' >
                            <img alt="crypto" src={crypto} height="300" width="425" />
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
                        <a target="_blank" rel="noreferrer" href='https://github.com/MatthewEvWalker/Slither-AI' >
                            <img alt="slither" src={slither} height="300" width="425" />
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
                        <a target="_blank" rel="noreferrer" href='https://matthewevwalker.github.io/work-scheduler-5/' >
                            <img alt="work-day" src={workDay} height="300" width="425" />
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
                        <a target="_blank" rel="noreferrer" href='https://matthewevwalker.github.io/Password_Generator/' >
                            <img alt="password-gen" src={password} height="300" width="425" />
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