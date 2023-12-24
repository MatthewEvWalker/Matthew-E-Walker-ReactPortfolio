import './Contact.scss';
import Letters from '../Letters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import austin from '../../assets/images/austin.jpg';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wj7liva',
        'template_6qj6luj',
        formRef.current,
        'UW2HOpTXVow6wLqTd'
      )
      .then(
        () => {
          alert('Email sent!');
          window.location.reload(false);
        },
        (error) => {
          alert('Error sending email. Please try again.');
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="contact-text-area">
          <h1>
            <Letters
              letterClass={letterClass}
              letterArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              index={20}
            />
          </h1>

          <p>
            If you need to reach me,
            please feel free to contact me at the email below. I will get back
            to you as soon as possible. Thank you for visiting my portfolio!
            <br/>
            matthewevwalker@gmail.com
            
          </p>

          {/* <p>
            <a
              className="a-tag"
              href="https://www.linkedin.com/in/matthewevwalker/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <br />
            <a
              className="a-tag"
              href="https://github.com/MatthewEvWalker/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p> */}

          <div className="form">
            <form ref={formRef} onSubmit={sendEmail}>
              <ul>
                <li className="listHalf">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="listHalf">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input type="text" placeholder="Subject" required />
                </li>

                <li>
                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    required
                  />
                </li>

                <li>
                  <input
                    type="submit"
                    className="submit-btn"
                    value="SUBMIT"
                    required
                  />
                </li>
              </ul>
            </form>
          </div>


        </div>
        <div className="texas-img">
          <img alt="austin" src={austin} />
        </div>

      </div>


    </>
  );
};

export default Contact;
