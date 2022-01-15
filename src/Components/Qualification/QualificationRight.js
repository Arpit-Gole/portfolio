import React from 'react'
import { BsCalendar } from 'react-icons/bs'
import { BiRightArrowAlt } from 'react-icons/bi'

function QualificationRight(props) {
    const { title, subTitle, time, handleModal, type, last, place } = props
    return (
        <div className="qualification__data">
            <div></div>

            <div>
                <span className="qualification__rounder"></span>
                {last ? null : <span className="qualification__line"></span>}
            </div>

            <div>
                <h3 className="qualification__title">{title}</h3>
                <span className="qualification__subtitle">{subTitle}</span>
                <span className="qualification__place">{place}</span>
                <div className="qualification__calendar">
                    <BsCalendar />
                    {` ${time}`}
                </div>
                <span className="button button--flex button--small button--link qualification__know__more__button" onClick={() => handleModal(type)}>
                    Know more
                    <div className="qualification__button__icon">
                        <BiRightArrowAlt />
                    </div>
                </span>
            </div>
        </div>
    )
}

export default QualificationRight
