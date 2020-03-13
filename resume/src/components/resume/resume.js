import React, { Component } from 'react';
import './resume.scss';
import Scills from './scills/scills'

export default class Resume extends Component {
  render() {
    return (
        <div className="resume">
                <Scills />
            
            <article>   
            <h2>SUMMARY</h2>

            <section class="article-block">
                    
                    <ul>
                        <li>
                            <h3>Goal:</h3>
                            <ul>
                                <li>Seeking an opportunity to extend my web development skills and knowledge to purchase necessary experience when doing interesting job</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Wishes:</h3>
                            <ul>
                                <li>to develop as a specialist with the benefit of the company</li>
                                <li>enjoy an interesting job</li>
                                <li>chat with interesting people in a good team</li>
                            </ul>
                        </li>
                        <li>
                            <h3>How I’m possible to do:</h3>
                            <ul>
                                <li>study hard by myself and ask the most experienced people if it’s necessary</li>
                                <li>highly self-motivated and adaptable to learning and understanding new technologies</li>
                                <li>ability to create simple, clean, maintainable, efficient code using standard design patterns to good effect</li>
                                <li>being able to read and write technical English, as well as being able to stand a basic English conversation with customers, colleagues, and partners</li>
                            </ul>
                        </li>
                    </ul>
            </section>

            <h2>EDUCATION</h2>

            <section class="article-block">
                <ul>
                    <li>
                        <h3>Computer science</h3>
                        <ul>
                            <li>studied with Harvard Course CS50 (video on russian & english)</li>
                            <li>studied with htmlbook.ru</li>
                            <li>studied with JavaScript textbook (<a href="https://learn.javascript.ru/profile/alexlysikov">my profile here</a>)</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Literature</h3>
                        <ul>
                            <li>Donald E. Knuth. The Art of Computer Programming (“Fundamental Algorithms” & “Sorting and Searching”)</li>
                            <li>Aditya Y. Bhargava. Grokking Algorithms</li>
                            <li>Karl E. Wiegers. Software Requirements</li>
                            <li>Robson E., Freeman E. Head First HTML and CSS</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Online courses</h3>
                        <ul>
                            <li>any courses at “HTML academy” (<a href="https://htmlacademy.ru/profile/alekseilysikov">my profile here</a> )</li>
                            <li>any courses at “Codecademy” (<a href="https://www.codecademy.com/profiles/AlexeiLysikov">my profile here</a> )</li>
                            <li>course “Algorithms-part1” by coursera.org</li>
                            <li>“Basics of commercial WEB-design” from Photoshop-master.org</li>
                            <li>course “JavaScript: Complete Guide to Modern Web Development” from webformyself.com
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>English</h3>
                        <ul>
                            <li>learning with duolingo & lingualeo</li>
                            <li>military translator’s certificate (at 2004)</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <h2>EXPERIENCE</h2>

            <section class="article-block">
                <ul>
                    <li>
                        <h3>Coding practice</h3>
                        <ul>
                            <li>scoding as part of online courses (“HTML academy”, “Codecademy”, ect.)</li>
                            <li>project for learning some web-technologies “Web-tech-conspect” (<a href="https://github.com/AlexLysikov/Web-tech-conspect">here</a>)</li>
                            <li>some other projects…</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Code examples</h3>
                        <p>You can see my latest code examples <a href="https://github.com/AlexLysikov/Dump">here</a></p>
                    </li>
                </ul>
            </section>
        </article> 
        </div>
      );
  };
};