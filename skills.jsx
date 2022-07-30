import React from 'react';
import "./skills.css";
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Skills() {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings: [" Programming Languages", "Libraries & Frameworks"]
        })

    },[])

    return( 
        <div className='skills bg-light-grey' id='skills'>
            <div className='section-p container'>
                <div className="section-p skills-content">
                <div className='section-p skills-title text-center'>
            <h1 className='text-white' id='skills-title'>My 
            <span className='text-white'> Skills</span></h1>
            <h2 className='text-white'><span className='text-light-grey' ref={textRef}></span> I have worked with:</h2>
            <div className='skills-list'>
            <ol className='text-white'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>React</li>
            </ol>
            </div>
            </div>
            </div>
            </div>
        </div>
        )
    }

    
    
    
   
