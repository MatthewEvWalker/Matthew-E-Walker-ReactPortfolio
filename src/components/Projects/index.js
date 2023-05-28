import './Projects.scss'
import Letters from '../Letters'
import { useState, useEffect } from 'react'
import me1 from '../../assets/images/landscape_sun_field.jpg';
import me2 from '../../assets/images/mount_river.avif';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.
                </p>
            </div>

            <div className="project-area">
                <div className="project-1">
                    {/* <h2>Project 1</h2> */}
                    <a target="_blank" href='https://www.linkedin.com/in/matthew-ev-walker/' >
                        <img src={me1} height="300" width="425" />
                    </a>


                </div>

                <div className="project-2" >
                    {/* <h2>Project 1</h2> */}


                    <a target="_blank" href='https://www.linkedin.com/in/matthew-ev-walker/' >
                        <img src={me1} height="300" width="425" />
                    </a>

                </div>

                <div className="project-3">
                    {/* <h2>Project 1</h2> */}
                    <a target="_blank" href='https://www.linkedin.com/in/matthew-ev-walker/' >
                        <img src={me1} height="300" width="425" />
                    </a>

                </div>

                <div className="project-4">
                    {/* <h2>Project 1</h2> */}
                    <a target="_blank" href='https://www.linkedin.com/in/matthew-ev-walker/' >
                        <img src={me1} height="300" width="425" />
                    </a>


                </div>
            </div>
        </div>
    )
}

export default Project