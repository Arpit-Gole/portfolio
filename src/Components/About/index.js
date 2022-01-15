import React from 'react'
import './About.scss'
import { SiGmail } from 'react-icons/si'
import { FaHandPointDown } from 'react-icons/fa'
import Arpit from '../../Image/arpit gole.png'
import Arpit_img from '../../Image/Arpit_Gole.png'

function About() {

    return (
        <div className="about section" id="about">
            <h2 className="section__title"> About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={Arpit} alt="" className="about__img" />
                <img src={Arpit_img} alt="" className="about__img1" />

                <div className="about__data">
                    <p className="about__description">
                        I’m originally a native of <a href="https://en.wikipedia.org/wiki/Uttar_Pradesh" target="_blank" rel="noreferrer">Uttar Pradesh, India</a>.
                        I’m fiercely competitive in my approach. Frontend developer, with intermediate knowledge and a year of
                        experience building solutions with web technologies and delivering quality products.<br /><br />

                        I'm also available for hire as a Frontend developer.
                        Drop me a line about your project if you're interested in
                        working with me. <FaHandPointDown />
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">1+</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span className="about__info-title">3+</span>
                            <span className="about__info-name">Completed <br /> Projects</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a href="mailto:akshaygole01111@gmail.com" target="_blank" rel="noreferrer" className="button button--flex">
                            Contact me
                            <div className="button__icon">
                                <SiGmail />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
