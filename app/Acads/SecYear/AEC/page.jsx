import React from 'react'
import aecData from '@/public/data/SecYear/AEC'
import Card from "@/app/components/Card"

const PnS = () => {
    return (
        <div className='text-center mx-3'>
            <h1 className='text-5xl italic  text-yellow-600 my-3'>Analog Electronics Circuits</h1>
            <div className="flex flex-row flex-wrap gap-[4%]">
                {aecData.map((card) => (
                    <Card heading={card.heading} height={card.height} width={card.width} buttonText={card.buttonText} buttonlink={card.buttonLink} description={card.description} image={card.image} headfont={card.headfont}></Card>
                ))}
            </div>
        </div>
    )
}

export default PnS