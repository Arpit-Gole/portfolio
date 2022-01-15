import React, { useState } from 'react'
import { Link } from "react-scroll";
import { BiHomeSmile, BiImages, BiBriefcaseAlt2 } from "react-icons/bi";
import { AiOutlineUser, AiOutlineFileText } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiAchievement } from 'react-icons/gi'
import './NavBar.scss'

function NavBar() {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = (title) => {
        setToggle(!toggle)
        switch (title) {
            case "Home":
                document.title = "Home | Arpit Gole"
                break;
            case "About":
                document.title = "About | Arpit Gole"
                break;
            case "Qualification":
                document.title = "Qualification | Arpit Gole"
                break;
            case "Skills":
                document.title = "Skills | Arpit Gole"
                break;
            case "Achievement":
                document.title = "Achievement | Arpit Gole"
                break;
            case "Portfolio":
                document.title = "Portfolio | Arpit Gole"
                break;
            default:
                return
        }
    }

    return (
        <header className='header' id="header">
            <nav className='nav container'>
                <Link
                    className='nav__logo'
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={100}
                >
                    Arpit Gole
                </Link >

                <div className={`nav__menu ${toggle ? 'show__menu' : ''}`}>
                    <ul className="nav__list grid">
                        <li className='nav__item' >
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("Home")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("Home") : null}
                            >
                                <div className="nav__icon">
                                    <BiHomeSmile />
                                </div>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("About")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("About") : null}
                            >
                                <div className="nav__icon">
                                    <AiOutlineUser />
                                </div>
                                About
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="qualification"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("Qualification")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("Qualification") : null}
                            >
                                <div className="nav__icon">
                                    <BiBriefcaseAlt2 />
                                </div> Qualifications
                            </Link>
                        </li>
                        <li className='nav__item' >
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("Skills")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("Skills") : null}
                            >
                                <div className="nav__icon">
                                    <AiOutlineFileText />
                                </div>
                                Skills
                            </Link>
                        </li>
                        <li className='nav__item' >
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="achievement"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("Achievement")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("Achievement") : null}
                            >
                                <div className="nav__icon">
                                    <GiAchievement />
                                </div>
                                Achievement
                            </Link>
                        </li>
                        <li className='nav__item' >
                            <Link
                                className='nav__link'
                                activeClass="nav__link nav__link__active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={100}
                                onClick={() => toggleHandler("Portfolio")}
                                onSetActive={window.outerWidth > 767 ? () => toggleHandler("Portfolio") : null}
                            >
                                <div className="nav__icon">
                                    <BiImages />
                                </div>
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__close" onClick={() => toggleHandler('')}>
                        <CgClose />
                    </div>
                </div>

                <div className="nav__btns" onClick={() => toggleHandler('')}>
                    <div className="nav__toggle">
                        <GiHamburgerMenu />
                    </div>
                </div>
            </nav >
        </header >
    )
}

export default NavBar
