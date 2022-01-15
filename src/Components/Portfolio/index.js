// import React, { useState } from 'react'
import React from 'react'
import { GiWorld } from 'react-icons/gi';
import "./Portfolio.scss"
import Card from '../Cards/index'

function Portfolio() {
    // const [view, setView] = useState(false)

    // const viewHandler = () => {
    //     setView(!view)
    // }

    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Take a look at my recent work.</span>

            <div className="portfolio__container container grid">
                <Card type={<GiWorld />} title="Devic Earth" about="Developed Admin and User portals for Devic Earth. A project which focus on Air Pollution Controlling." link="https://www.devic-earth.com/" />
                <Card type={<GiWorld />} title="Spry" about="Engineered Student, Admin and Super admin portals for student athletes in the U.S universities." link="https://spry.so/" />
                <Card type={<GiWorld />} title="Music Player" about="Created music player while I was learning React." link="https://akshay-gole.github.io/Music-Player_Reactjs/" />
                {/* {
                    view && (
                        <>
                            {portfolio.map((port) => (
                                <Card title={port.title} about={port.about} link={port.link} type={<AiFillGithub />} />
                            ))}
                        </>
                    )
                } */}
            </div>
            {/* <div className="view__buttons" onClick={viewHandler}>
                <a className="button button--flex">
                    {view ? 'View less' : 'View more'}
                    <div className="button__icon">
                        <GiArmoredBoomerang />
                    </div>
                </a>
            </div> */}
        </section>
    )
}

export default Portfolio
