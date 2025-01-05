import React from 'react'
import Card from '../Card/card.jsx'
import data from './GB.js'
import '../Advisory/Advisory.css'
import HCard from '../../../HeaderCard/HCard.jsx'

function GB() {
    return (
        <>
            <HCard head={"Governing Body Members 2021-22"}></HCard>
            <div className="members_container">
                {data.map((data, index) => (
                    <Card key={index} name={data.name} position={data.position} imageUrl={data.imageUrl} facebookLink={data.facebookLink}
                        email={data.email} linkedinLink={data.linkedinLink} />
                ))}
            </div>
            
        </>
    )
}

export default GB