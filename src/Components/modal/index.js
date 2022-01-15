import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import { FaRegHandPointRight } from 'react-icons/fa';
import './Modal.scss'

function Modal(props) {
    const { showModal, handleClose, title, qualifications } = props;
    const [modal] = useState(showModal)

    const hideModalHandler = () => {
        handleClose()
    }

    return (
        <div className={`modal ${modal ? 'active--modal' : ''}`}>
            <div className="modal__content">
                <h4 className="modal__title">{title}</h4>
                <div className="modal__close" onClick={hideModalHandler}>
                    <CgClose />
                </div>

                <ul className="modal--ul grid">
                    {
                        qualifications ? (
                            qualifications.map((qualification) => {
                                return <li className="modal--li">
                                    <div className="modal__icon" >
                                        <FaRegHandPointRight />
                                    </div>
                                    <p>{qualification}</p>
                                </li>
                            })
                        ) :
                            <li className="modal--li">
                                <div className="modal__icon" >
                                    <FaRegHandPointRight />
                                </div>
                                <p>I develop the user interface.</p>
                            </li>
                    }
                </ul>
            </div>

        </div>
    )
}

export default Modal
