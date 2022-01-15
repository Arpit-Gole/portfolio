import React from 'react'

function SkillsBar(props) {
    const { name, number, classPercentage } = props;
    return (
        <div className="skills__data">
            <div className="skills__title">
                <h3 className="skills__name">{name}</h3>
                <div className="skills__number">{number}</div>
            </div>
            <div className="skills__bar">
                <div className={`skills__percentage ${classPercentage}`}></div>
            </div>
        </div>
    )
}

export default SkillsBar
