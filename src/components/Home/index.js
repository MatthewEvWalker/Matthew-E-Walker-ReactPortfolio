import { Link } from 'react-router-dom';
import './Home.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-area">
                <h1> Hey I'm Matthew, a
                FullStack Developer
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