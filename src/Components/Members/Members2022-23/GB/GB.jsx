import React from 'react'
import Card from '../Card/card.jsx'
import data from './GB.js'
import '../Advisory/Advisory.css'
import GBR from './GBR.js'
import HCard from '../../../HeaderCard/HCard.jsx'

function GB() {
    return (
        <>
            <HCard head={"Governing Body Members 2022-23"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div> <br /><br />
           
            <HCard head={"Governing Body Representative"}></HCard>
            <div className="members_container">
                {GBR.map((GBR, index) => (
                    <Card key={index} name={GBR.name} position={GBR.position} imageUrl={GBR.imageUrl} facebookLink={data.facebookLink}
                        email={GBR.email} linkedinLink={GBR.linkedinLink} />
                ))}
            </div>
        </>
    )
}

export default GB