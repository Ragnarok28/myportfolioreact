import React, {useState} from 'react';
import { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 




const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs.sendForm('service_v9o9h3g', 'template_yb8ag4b', form.current, '9zlivvMochxUHYyRM')
          .then((result) => {
              console.log(result.text);
              toast("Your email has been sent!");
              window.location.reload(false);
          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.id] : e.target.value
    }));

};

    return (
        <div className='contact section-p' id='contact'>
            <div className='container'>
            <div className='contact-section'>
                <div className='section-title'>
                <h1 className='text-brown text-center'>Contact <span className='text-dark'>Me</span></h1>
                </div>
            </div>

            <form ref={form} className='contact-form mx-auto' onSubmit={sendEmail}>
                <div className='form-elem'>
                    <input type="text" name="name" value={formData.name}
                    className = "form-control" placeholder="Name" onChange={handleChange}
                    id = "name" required/>
                </div>
                <div className='form-elem'>
                    <input type="email" name="email" value={formData.email}
                    className = "form-control" placeholder="Email" onChange={handleChange}
                    id = "email" required/>
                </div>
                <div className='form-elem'>
                    <textarea name="message" rows="2" value={formData.message} className="form-control" placeholder="Message"
                    onChange={handleChange} id="message" required></textarea>
                </div>
                <button type='submit' value="Send" className='bg-dark text-white submit-btn fw-3 fs-22'>Submit</button>
            </form>
            <div>
        <ToastContainer ToastContainer
        position="bottom-center"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      </div>
            </div>
        </div>
    );
};


export default Contact