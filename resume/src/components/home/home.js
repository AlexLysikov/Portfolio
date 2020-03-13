import React from 'react';
import './home.scss';
import person from '../../images/person.jpg'

function Home() {
    return (
        <div className="home">
            <img className="home__person" src={person} alt="Oops, maybe something went wrong :)" />
            <div className="home__intro">
                <span>Hi everyone!<br/>My name's</span>
                <h1>Aleksei Lysikov</h1>
                <span>I'm a front-end web developer capable of writing clean,
                     valid, modern and original code. I'm looking for an opportunity
                      to extend my web development skills and knowledge to purchase
                       necessary experience when doing interesting job.
                </span>
            </div>
        </div>
    );
};

export default Home;