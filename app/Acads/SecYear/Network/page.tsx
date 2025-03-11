import React from 'react'
import naData from '@/public/data/SecYear/Network'
import Card from "@/app/components/Card"

const Network = () => {
    return (
        <div className='text-center mx-3'>
            <h1 className='text-5xl italic  text-yellow-600 my-3'>Network Analysis</h1>
            <div className="flex flex-row flex-wrap gap-[4%]">
                {naData.map((card) => (
                    <Card heading={card.heading} height={card.height} width={card.width} buttonText={card.buttonText} buttonlink={card.buttonLink} description={card.description} image={card.image} headfont={card.headfont}></Card>
                ))}
            </div>
        </div>
    )
}

export default Network