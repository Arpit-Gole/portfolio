import React from 'react'
import { BsCodeSlash, BsCloudHaze1 } from 'react-icons/bs'
import { GiRobotGolem} from 'react-icons/gi'
import "./Skills.scss"
import SkillsBar from './skills'

function Skills() {

    return (
        <div className="skills section" id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                The extent of my technical expertise. Fascinated by Reinforcement Learning!!
                </span>

            <div className="skills__container container grid">

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <BsCodeSlash />
                        </div>

                        <div>
                            <h1 className="skills__title">Programming Mastery</h1>
                            <span className="skills__subtitle">
                                Programming Languages, Data Structures and Design Principles.
                            </span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="Python" number="4.5" classPercentage="skills__ninety" />
                        <SkillsBar name="C#" number="4.5" classPercentage="skills__ninety" />
                        <SkillsBar name="Domain Driven Development" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="JavaScript" number="3.5" classPercentage="skills__seventy" />
                        <SkillsBar name="C and C++" number="3.5" classPercentage="skills__seventy" />
                    </div>
                </div>

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <GiRobotGolem />
                        </div>

                        <div>
                            <h1 className="skills__title">Artificial Intelligence</h1>
                            <span className="skills__subtitle">
                                I'm thrilled with the field of AI. I try to understand new and unique always.
                            </span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="Reinforcement Learning" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="Deep Learning (Computer Vision & Recommendation Systems)" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="Machine Learning " number="4.5" classPercentage="skills__ninety" />
                        <SkillsBar name="Statistical Proficiency " number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="All famous packages (TensorFlow, PyTorch, Scikit-Learn, Matplotlib, etc) " number="4" classPercentage="skills__eighty" />
                    </div>
                </div>

                <div className="skills__content">
                    <div className="skills__header">
                        <div className="skills__icon">
                            <BsCloudHaze1 />
                        </div>

                        <div>
                            <h1 className="skills__title">Web Development</h1>
                            <span className="skills__subtitle">
                                Experience of wearing multiple hats - frontend, backend and cloud.
                            </span>
                        </div>
                    </div>
                    <div className="skills__list grid">
                        <SkillsBar name="Databases (Relational, Non-Relational and Elastic Search)" number="4.5" classPercentage="skills__ninety" />
                        <SkillsBar name="Amazon Web Services (AWS)" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="APIs (REST and GraphQL)" number="4" classPercentage="skills__eighty" />
                        <SkillsBar name="Angular Framework" number="3.5" classPercentage="skills__seventy" />
                    </div>
                </div>
                
            </div>
        </div >


    )
}

export default Skills
