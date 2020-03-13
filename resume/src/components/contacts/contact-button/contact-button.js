import React from 'react';
import './contact-button.scss';

export default function ContactButton(props) {
    return (
        <a className="button-ref" href={props.place} target="_blank" rel="noopener noreferrer">
            <svg 
                viewBox="0 0 512 512" 
                xmlns="http://www.w3.org/2000/svg">
                    
                {props.icon}

            </svg>
        </a>
    );
};