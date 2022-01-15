// import React, { useState } from 'react'
import React from 'react'
import { GiAchievement, GiSoccerBall, GiMedal, GiProgression } from 'react-icons/gi'
import "./Achievement.scss"
import Card from '../Cards/index'
import national_handball from '../../Image/Arpit_National_Certificate.jpg'
import ncc from '../../Image/Arpit_NCC_C-Certificate_01.jpg'
import global_iq from '../../pdf/Global_iq_connect_certificate.pdf'

function Achievement() {
    // const [view, setView] = useState(false)

    // const viewHandler = () => {
    //     setView(!view)
    // }

    return (
        <section className="achievement section" id='achievement'>
            <h2 className="section__title">Achievement</h2>
            <span className="section__subtitle">Take a look at some of the things I enjoyed doing.</span>

            <div className="achievement__container container grid">

                <Card type={<GiProgression />} title="Global IQ Connect" link={global_iq} 
                about="A leading 5 weeks Program to develop crucial intercultural skills. 
                Educate on ways to operate in a culturally diverse environment." />
                
                <Card type={<GiSoccerBall />} title="National Handball Player" link={national_handball} 
                about="Won 5+ gold medals for Kendriya Vidyalaya Sangathan (KVS) at numerous sports meets for 3 years in a row." />

                <Card type={<GiMedal />} title="National Cadet Corps - 'C' Certificate" link={ncc} 
                about="An active member of National Cadet Corps - the youth wing of the Indian Armed Forces. 
                Passed Certificate 'C' - with the best grade 'A'." />
                
                               
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
