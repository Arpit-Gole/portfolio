import React from 'react'
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { FaFileDownload } from 'react-icons/fa'
import Arpit from '../../Image/Arpit_Gole.png'
import pdf from "../../pdf/Arpit Gole Resume.pdf"
import './Home.scss'
import Typical from 'react-typical'

function Home() {
    console.log(window.innerWidth < 768)
    return (
        <section className="home section" id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/akshaygole/" rel="noreferrer" target="_blank" className="home__social-icon">
                            <AiOutlineLinkedin />
                        </a>
                        <a href="https://arpit-gole.github.io/" rel="noreferrer" target="_blank" className="home__social-icon">
                            <AiFillGithub />
                        </a>
                        <a href="mailto:arpitgole.gole011@gmail.com" rel="noreferrer" target="_blank" className="home__social-icon">
                            <SiGmail />
                        </a>
                    </div>

                    <div className="home__img">
                        <div className="home__blob">
                            <img className="home__blob-img" src={Arpit} alt="img h meri" />
                        </div>
                    </div>


                    <div className="home__data">
                        <h1 className="home__title">Hi, I'm<br /> Arpit Gole.</h1>
                        <h3 className="home__subtitle">
                            <Typical
                                loop={Infinity}
                                steps={[
                                    'Artificial Intelligence Developer',
                                    1000,
                                    'Reinforcement Learning',
                                    1000
                                ]}
                            />
                        </h3>
                        <p className="home__description">
                            Experience in web ap development and producing quality work by
                            combining my knowledge on Frontend Development.
                        </p>
                        <a download="" href={pdf} className="button button--flex">
                            Download CV
                            <div className="button__icon">
                                <FaFileDownload />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
