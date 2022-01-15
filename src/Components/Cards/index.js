import React from 'react'

function Card(props) {
    const { title, about, link, type } = props
    return (
        <a className="portfolio__content" href={link ? link : '#'} rel="noreferrer" target="_blank">
            <div className="portfolio__content--Heading">
                <div className="portfolio__icon">
                    {type}
                </div>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            <p>{about}</p>
            <div className="portfolio-corner" href="#">
                <div className="portfolio-arrow">
                    →
                </div>
            </div>
        </a>
    )
}

export default Card
