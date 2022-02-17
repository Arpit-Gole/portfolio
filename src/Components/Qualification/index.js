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
            case "MTS":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Member of Technical Staff"
                    qualifications={qualifications[0].MTS}
                />;
            case "SDE1":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Software Development Engineer 1"
                    qualifications={qualifications[0].SDE1}
                />;
            case "SDE2":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Software Development Engineer 2"
                    qualifications={qualifications[0].SDE2}
                />;
            case "SRE1":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Graduate Student Researcher"
                    qualifications={qualifications[0].SRE1}
                />;
            case "SRE2":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Summer Researcher"
                    qualifications={qualifications[0].SRE2}
                />;
            case "ASM":
                return <Modal
                    showModal={true}
                    handleClose={handleClose}
                    title="Academic Staff Member"
                    qualifications={qualifications[0].ASM}
                />;
            default:
                return null
        }
    }
    return (
        <div className="qualification section" id="qualification" >
            <h2 className="section__title"> Qualification</h2>
            <span className="section__subtitle">
            The pinnacles that I achieved in my academics and work. A deeper dive into everything.
            </span>

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
                            subTitleLink="https://www.adelaide.edu.au/"
                            time="2021 - Present"
                            handleModal={handleModal}
                            type="MASTERS"
                            place="Adelaide, Australia"
                        />
                        <QualificationRight
                            title="B.E in Computer Science"
                            subTitle="Atria Institute of Technology"
                            subTitleLink="https://atria.edu/home.php"
                            time="2014 - 2018"
                            handleModal={handleModal}
                            type="BE"
                            place="Bengaluru, India"
                        />
                        <QualificationLeft
                            title="Intermediate"
                            subTitle="Kendriya Vidyalaya No.2"
                            subTitleLink="https://no2jalahalli.kvs.ac.in/"
                            time="2013 - 2014"
                            handleModal={handleModal}
                            type="HSC"
                            place="Bengaluru, India"
                        />
                        <QualificationRight
                            title="Matriculation"
                            subTitle="Kendriya Vidyalaya No.2"
                            subTitleLink="https://no2jalahalli.kvs.ac.in/"
                            time="2011 - 2012"
                            handleModal={handleModal}
                            type="SSC"
                            place="Bengaluru, India"
                            last /*To Mark the last entry*/
                        />
                    </div>


                    <div className={`qualification__content ${work ? "qualification__active" : "qualification__inactive"}`} >
                        <QualificationLeft
                            title="Academic Staff Member"
                            subTitle="The University of Adelaide"
                            subTitleLink="https://www.adelaide.edu.au/"
                            time="02/2022 - Present"
                            handleModal={handleModal}
                            type="ASM"
                            place="Adelaide, Australia"
                        />
                        <QualificationRight
                            title="Summer Researcher"
                            subTitle="The University of Adelaide"
                            subTitleLink="https://www.adelaide.edu.au/"
                            time="11/2021 - 02/2022"
                            handleModal={handleModal}
                            type="SRE2"
                            place="Adelaide, Australia"
                        />
                        <QualificationLeft
                            title="Graduate Student Researcher"
                            subTitle="The University of Adelaide"
                            subTitleLink="https://www.adelaide.edu.au/"
                            time="05/2021 - 08/2021"
                            handleModal={handleModal}
                            type="SRE1"
                            place="Adelaide, Australia"
                        />
                        <QualificationRight
                            title="Software Development Engineer 2"
                            subTitle="Nineleaps"
                            subTitleLink="https://www.nineleaps.com/"
                            time="10/2020 - 02/2022"
                            handleModal={handleModal}
                            type="SDE2"
                            place="Bengaluru, India"
                        />
                        <QualificationLeft
                            title="Software Development Engineer 1"
                            subTitle="Nineleaps"
                            subTitleLink="https://www.nineleaps.com/"
                            time="01/2019 - 10/2020"
                            handleModal={handleModal}
                            type="SDE1"
                            place="Bengaluru, India"
                        />
                        <QualificationRight
                            title="Member of Technical Staff"
                            subTitle="Nineleaps"
                            subTitleLink="https://www.nineleaps.com/"
                            time="08/2018 - 12/2018"
                            handleModal={handleModal}
                            type="MTS"
                            place="Bengaluru, India"
                            last /*To Mark the last entry*/
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
