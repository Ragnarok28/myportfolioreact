import React from 'react';
import "./footer.css";
import { FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer bg-dark'>
            <div className='container'>
                <div className='section-title'>
                    <h3 className='text-brown text-center'>Social <span className='text-white'>Links</span></h3>
                </div>
                <div className='footer-content'>
                    <ul className='footer-social-links text-center'>
                        <li>
                            <a href="https://twitter.com/MUSCLE__PALACE" className='text-white'>
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/amelsijaric/" className='text-white'>
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Ragnarok28" className='text-white'>
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                    <p className='text-center fs-14 text-white op-06 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer