import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    {/* <h1 className="footer__title">Akshay Gole</h1>
                    <span className="footer__subtitle">Frontend Developer</span> */}
                    <div className="footer__content">
                        <h1 className="footer__title">Arpit Gole</h1>
                        <span className="footer__subtitle">Frontend Developer</span>
                    </div>
                    <div className="footer__content">
                        <h1 className="footer__title">Contact Me</h1>
                        <span className="footer__subtitle">(+61) ********* <span role="img" aria-label="au_flag">🇦🇺</span><br /></span>
                        <span className="footer__subtitle">arpitgole.gole011@gmail.com</span>
                    </div>
                    <div className="footer__content">
                        <h1 className="footer__title">Address</h1>
                        <span className="footer__subtitle">Adelaide, Australia.</span>
                    </div>
                </div>
                <p className="footer__copy">&#169; Arpit Gole. All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
