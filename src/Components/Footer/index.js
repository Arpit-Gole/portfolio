import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">

                    <div className="footer__content">
                        <h1 className="footer__title">Arpit Gole</h1>
                        <span className="footer__subtitle">Master of Machine Learning <br /></span>
                        <span className="footer__subtitle">Artificial Intelligence Developer</span>                        
                    </div>

                    <div className="footer__content">
                        <h1 className="footer__title">Contact Me</h1>
                        <span className="footer__subtitle">(+61) 414 839 074 <span role="img" aria-label="au_flag">🇦🇺</span><br /></span>
                        <span className="footer__subtitle">arpitgole.gole011@gmail.com</span>
                    </div>

                    <div className="footer__content">
                        <h1 className="footer__title">Address</h1>
                        <span className="footer__subtitle">Adelaide <br/> </span>
                        <span className="footer__subtitle">SA, Australia</span>
                    </div>
                </div>
                <p className="footer__copy">&#169; Arpit Gole. All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
