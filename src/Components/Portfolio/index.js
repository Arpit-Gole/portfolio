// import React, { useState } from 'react'
import React from 'react'
import { GiWorld } from 'react-icons/gi';
import "./Portfolio.scss"
import Card from '../Cards/index'
import sec from "../../pdf/Arpit_Gole_Student_engagement_committee.pdf"
import ecms from "../../pdf/ECMS_Faculty_Board_GoleA_20220125.pdf"
import vhp from "../../pdf/vishwa_hindu_parishad.pdf"
import ipss from "../../pdf/IPSS_Mentor_Certificate.pdf"

function Portfolio() {
    // const [view, setView] = useState(false)

    // const viewHandler = () => {
    //     setView(!view)
    // }

    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">A glance at the recent work of my endeavours to learn something new.</span>

            <div className="portfolio__container container grid">
                <Card type={<GiWorld />} 
                title="Alexa Skill (Video)" 
                about="A fun way to automate the HR division with Alexa!!"                
                link="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6673911170958790656?compact=1"/>

                <Card type={<GiWorld />} 
                title="Student Engagement Committee" 
                about="Expressed the student cohort perspective to the administrative staff of the University."
                link={sec} />

                <Card type={<GiWorld />} 
                title="ECMS Faculty Board Member" 
                about="Assisted the university in upholding its responsibilities for monitoring and managing academic standards." 
                link={ecms} />

                <Card type={<GiWorld />} 
                title="Social Media Campaign Analyst" 
                about="Diversified and conveyed strategies for social media campaigns." 
                link={vhp} />

                <Card type={<GiWorld />} 
                title="Membersuite" 
                about="Engineered and spearheaded a multi-tenant cloud-based SaaS application designed to automate back-end processes." 
                link="https://www.membersuite.com/" />

                
                <Card type={<GiWorld />} 
                title="International Peer Study Support" 
                about="Provided support and guidance to the commencing students on any hurdles which they are facing." 
                link={ipss} />


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
