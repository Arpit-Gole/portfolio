// import React, { useState } from 'react'
import React from 'react'
import { GiAchievement } from 'react-icons/gi'
import "./Achievement.scss"
import Card from '../Cards/index'
import img1 from '../../Image/Arpit_Gole.png'

function Achievement() {
    // const [view, setView] = useState(false)

    // const viewHandler = () => {
    //     setView(!view)
    // }

    return (
        <section className="achievement section" id='achievement'>
            <h2 className="section__title">Achievement</h2>
            <span className="section__subtitle">Take a look at some of the things I love working on.</span>

            <div className="achievement__container container grid">
                <Card type={<GiAchievement />} title="National Handball Player" link={img1} about="Represented Bengaluru region at 47th KVS Nationals Sports meet at Chennai." />
                {/* <Card type={<GiAchievement />} />
                <Card type={<GiAchievement />} />
                {
                    view && (
                        <>
                            {achivements.map((achivement) => (
                                <Card title={achivement.title} about={achivement.about} link={achivement.link} type={achivement.type} />
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

export default Achievement
