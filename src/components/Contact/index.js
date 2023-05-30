import './Contact.scss'
import Letters from '../Letters'
import { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate') 
    const formRef = useRef()


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000)        
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_wj7liva', 'template_6qj6luj', formRef.current, 'UW2HOpTXVow6wLqTd')
    .then(() => {
        alert('Email sent!')
        window.location.reload(false)
    }, 
    (error) => {
        alert('Error sending email. Please try again.')
        console.log(error.text)
    })

}
    return (
        <>
        <div className="container contact-page">
            <div className="text-area">
                <h1>
                    <Letters letterClass={letterClass} letterArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]} 
                    index={20}

                    />
                </h1>

                <p className='contact-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.


                </p>
                <p className='contact-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.


                </p>
                <p className='contact-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet scelerisque risus quis auctor. Ut ac nisi quis ex rhoncus eleifend nec non tortor. Fusce porttitor a dui non maximus. Curabitur vehicula varius massa non blandit. Proin feugiat turpis sem, et consequat augue pretium quis. Aenean vitae bibendum lectus. Nullam vestibulum arcu vestibulum nisi volutpat, tristique ornare nibh tempus. In sed luctus quam, non dapibus est.

  
                </p>

                <div className="form">
                    <form ref={formRef} onSubmit={sendEmail}>
                        <ul>
                            <li className='listHalf'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='listHalf'>
                                <input type="text" name="email" placeholder="Email" required/>
                            </li>

                            <li>
                                <input type="text" placeholder="Subject" required/>
                            </li>

                            <li>
                                <textarea type="text" placeholder="Message" 
                                name="message"
                                required/>
                            </li>

                            <li>
                                <input type="submit" className='submit-btn' value="SUBMIT" required/>
                            </li>


                        </ul>

                    
                    </form>

                </div>
            </div>
        </div>

        </>
    )
}

export default Contact