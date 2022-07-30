import React from 'react'
import "./header.css"



const Header = () => {
    return(
        <div className='header flex' id='header'>
            <div className='container flex flex-col'>
                <div className='header-content'>
                    <h2 className='text-uppercase text-center text-white op-07 fw-8 ls-2'>My Portfolio</h2>
                    <h1 className='text-white fw-6 header-title'>Hello, my name is <span className='text-brown'>Amel Sijaric</span> and I'm a <span className='text-brown'>Front-end Web Developer</span>;</h1>
                    <div className='btn-group'>
                        <button type='button' className='btn-item bg-brown text-dark fw-6 ls-2'><a href='#projects'>My Projects</a></button>
                        <button type='button' className='btn-item bg-dark text-white fw-6 ls-2'><a href='#skills'>My Skills</a></button>
                        <button type='button' className='btn-item bg-dark text-white fw-6 ls-2'><a href='#contact'>Contact Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header