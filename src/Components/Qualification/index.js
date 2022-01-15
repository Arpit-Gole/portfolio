import React, { useState } from 'react'
import './qualification.scss'
import { FaUserGraduate } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'
import Modal from '../modal'
import QualificationLeft from './QualificationLeft'
import QualificationRight from './QualificationRight'
import { qualifications } from '../Constants/constant'

function Qualifications() {

    const [education, setEducation] = useState(true)
    const [work, setWork] = useState(false)
    const [modalProp, setModalProp] = useState(false)
    const [childrenElement, setChildrenElement] = useState();

    const educationHandler = () => {
        setWork(false);
        setEducation(true);
    }

    const workHandler = () => {
        setEducation(false);
        setWork(true);
    }

    const handleClose = () => {
        setModalProp(false)
    }

    const handleModal = (type) => {
        const component = renderModal(type)
        setModalProp(true)
        setChildrenElement(component)
    }

    const renderModal = (type) => {
        switch (type) {
            case "BE":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="B.E in Information Science"
                    qualifications={qualifications[0].BE}
                />;
            case "HSC":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="HSC/Intermediate"
                    qualifications={qualifications[0].HSC}
                />;
            case "SSC":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="SSC/Matriculation"
                    qualifications={qualifications[0].SSC}
                />;
            case "INTERN":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Software Development Engineer - Intern"
                    qualifications={qualifications[0].INTERN}
                />;
            default:
                return null
        }
    }
    return (
        <div className="qualification section" id="qualification" >
            <h2 className="section__title"> Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={`qualification__button button--flex ${education ? "qualification__button_active " : ""}`} onClick={educationHandler}>
                        <div className="qualification__icon">
                            <FaUserGraduate />
                        </div>
                        Education
                    </div>

                    <div className={`qualification__button button--flex ${work ? "qualification__button_active " : ""}`} onClick={workHandler}>
                        <div className="qualification__icon">
                            <BsBriefcase />
                        </div>
                        Work
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={`qualification__content ${education ? "qualification__active" : "qualification__inactive"}`} >
                        <QualificationLeft
                            title="B.E in Information Science"
                            subTitle="Atria Institute of Technology"
                            time="Present"
                            handleModal={handleModal}
                            type="BE"
                            place="Bengaluru"
                        />
                        <QualificationRight
                            title="Intermediate"
                            subTitle="Kendriya Vidyalaya No.1"
                            time="2015-2016"
                            handleModal={handleModal}
                            type="HSC"
                            place="Bengaluru"
                        />
                        <QualificationLeft
                            title="Matriculation"
                            subTitle="Kendriya Vidyalaya No.1"
                            time="2017-2018"
                            handleModal={handleModal}
                            type="SSC"
                            place="Bengaluru"
                            last
                        />
                    </div>


                    <div className={`qualification__content ${work ? "qualification__active" : "qualification__inactive"}`} >
                        <QualificationLeft
                            title="Software Development Engineer - Intern"
                            subTitle="Nineleaps Technology Solutions Pvt Ltd"
                            time="Present"
                            handleModal={handleModal}
                            type="INTERN"
                            place="Bengaluru"
                        />
                    </div>
                </div>

            </div>
            {modalProp && (
                childrenElement
            )}
        </div >
    )
}

export default Qualifications
