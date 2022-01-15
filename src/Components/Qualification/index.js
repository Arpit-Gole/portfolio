import React, { useState } from 'react'
import './qualification.scss'
import { FaUserGraduate } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'
import Modal from '../modal'
import QualificationLeft from './QualificationLeft'
import QualificationRight from './QualificationRight'
import { qualifications } from '../Constants/constant'

function Qualifications() {

    const [education, setEducation] = useState(false)
    const [work, setWork] = useState(true) /*Making work as default*/
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
            case "MASTERS":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Master of Machine Learning"
                    qualifications={qualifications[0].MASTERS}
                />;
            case "BE":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="B.E in Computer Science"
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
                    <div className={`qualification__button button--flex ${work ? "qualification__button_active " : ""}`} onClick={workHandler}>
                        <div className="qualification__icon">
                            <BsBriefcase />
                        </div>
                        Work
                    </div>

                    <div className={`qualification__button button--flex ${education ? "qualification__button_active " : ""}`} onClick={educationHandler}>
                        <div className="qualification__icon">
                            <FaUserGraduate />
                        </div>
                        Education
                    </div>
                    
                </div>

                <div className="qualification__sections">
                    <div className={`qualification__content ${education ? "qualification__active" : "qualification__inactive"}`} >
                        <QualificationLeft
                            title="Master of Machine Learning"
                            subTitle="The University of Adelaide"
                            time="Present"
                            handleModal={handleModal}
                            type="MASTERS"
                            place="Adelaide, Australia"
                        />
                        <QualificationRight
                            title="B.E in Computer Science"
                            subTitle="Atria Institute of Technology"
                            time="2014-2018"
                            handleModal={handleModal}
                            type="BE"
                            place="Bengaluru, India"
                        />
                        <QualificationLeft
                            title="Intermediate"
                            subTitle="Kendriya Vidyalaya No.2"
                            time="2013-2014"
                            handleModal={handleModal}
                            type="HSC"
                            place="Bengaluru, India"
                        />
                        <QualificationRight
                            title="Matriculation"
                            subTitle="Kendriya Vidyalaya No.2"
                            time="2011-2012"
                            handleModal={handleModal}
                            type="SSC"
                            place="Bengaluru, India"
                            last /*To Mark the last entry*/
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
