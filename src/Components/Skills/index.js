import React from 'react'
import { BsBraces } from 'react-icons/bs'
import "./Skills.scss"
import SkillsBar from './skills'

function Skills() {

    return (
        <div className="skills section" id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">The extent of my technical expertise.</span>

            <div className="skills__container container grid">

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <BsBraces />
                        </div>

                        <div>
                            <h1 className="skills__title">Programming Mastery</h1>
                            <span className="skills__subtitle">
                                Programming Languages, Data Structures <br/> 
                                and Design Principles.</span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="Python" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="C#" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="JavaScript" number="3.5" classPercentage="skills__seventy" />
                        <SkillsBar name="C and C++" number="3.5" classPercentage="skills__seventy" />
                        <SkillsBar name="Domain Driven Development" number="4" classPercentage="skills__eighty" />
                    </div>
                </div>

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <BsBraces />
                        </div>

                        <div>
                            <h1 className="skills__title">Frontend Development</h1>
                            <span className="skills__subtitle">More than 1 years</span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="React JS and React Ts" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="Redux" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="HTML" number="3.5" classPercentage="skills__seventy" />
                        <SkillsBar name="CSS" number="3.5" classPercentage="skills__seventy" />
                    </div>
                </div>

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <BsBraces />
                        </div>

                        <div>
                            <h1 className="skills__title">Languages</h1>
                            <span className="skills__subtitle">
                                Programming Languages, Data Structures and Design Principles</span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="Python" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="Data Structures and Algorithms" number="4" classPercentage="skills__eighty" />
                    </div>
                </div>

            </div>
        </div >


    )
}

export default Skills
