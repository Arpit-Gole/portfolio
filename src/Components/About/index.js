import React from 'react'
import './About.scss'
import { SiGmail } from 'react-icons/si'
import { FaHandPointDown } from 'react-icons/fa'
import Arpit from '../../Image/arpit gole.png'
import Arpit_img from '../../Image/Arpit_Gole.png'

function About() {

    return (
        <div className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Knock, knock!! Few items to know me more</span>

            <div className="about__container container grid">
                <img src={Arpit} alt="" className="about__img" />
                <img src={Arpit_img} alt="" className="about__img1" />

                <div className="about__data">
                    <p className="about__description">
                        I’m originally a native of <a href="https://en.wikipedia.org/wiki/Uttar_Pradesh" target="_blank" rel="noreferrer">Uttar Pradesh, India</a>.
                        I come from a military background, hence lived across India. I’m fiercely competitive in my approach, and I endeavour to overcome challenges. <br /><br />

                        Require to discuss anything regarding Artificial intelligence?
                        Drop me a line about your project if you're interested in
                        working with me. <FaHandPointDown />
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">3.5+</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span className="about__info-title">5+</span>
                            <span className="about__info-name">Completed <br /> Projects</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a href="mailto:arpitgole.gole011@gmail.com" target="_blank" rel="noreferrer" className="button button--flex">
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
