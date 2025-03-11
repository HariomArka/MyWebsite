import React from 'react'
import Card from "@/app/components/Card"
import card1Data from '@/public/data/Data1';
import card2Data from '@/public/data/Data2';
import card3Data from '@/public/data/Data3';
// import Data from './Data.js'

const acads = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl italic  text-yellow-800'>Acads</h1>
            <div className='flex gap-9 items-center m-[3%]'>
                No more boring words Bro.. lets begin the <span className='text-green-500'>most boring and interesting</span> thing..
            </div>
            <div className='text-center mx-[2%]'>
                <div className='pyqs flex justify-around gap-[5%] items-center'>
                    <Card heading='PYQs' height='300px' width='[50%]' buttonText='Click Here' buttonlink='https://qp.metakgp.org/' description='Here is the link of PYQs of the MetaKGP. You can also contribute your PYQs: just scan the question paper of the exam(mid-sem, end-sem, class test) and upload it following the instruction given in the website.' image='PYQs.jpeg' headfont='font-[Alegreya]' >
                    </Card>
                    <div className='w-[50%]'>
                        We have two good sources of Previous Year Questions in IIT KGP - website of Central Library and MetaKGP website. You can <a about='blank' href="http://10.18.24.75/peqp/" className='text-green-500 hover:text-yellow-600'> Click here </a> and visit the horrible looking website of pyqs Central Library. The link for MetaKGP is given in the card beside. Click the green button and check for all the available PYQs you need.
                        <p className='mt-5'>That's all about any type of PYQs....</p>
                    </div>
                </div>

                <h1 className='years m-4'>First Year</h1>
                <div className="flex flex-wrap gap-[4%]">
                    {card1Data.map((card) => (
                        <Card heading={card.heading} height={card.height} width={card.width} buttonText={card.buttonText} buttonlink={card.buttonLink} description={card.description} image={card.image} headfont={card.headfont}></Card>
                    ))}
                </div>

                <h1 className='years m-4'>Second Year</h1>
                <div className="flex flex-row flex-wrap gap-[4%]">
                    {card2Data.map((card) => (
                        <Card heading={card.heading} height={card.height} width={card.width} buttonText={card.buttonText} buttonlink={card.buttonLink} description={card.description} image={card.image} headfont={card.headfont}></Card>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap gap-[4%]">
                    {card3Data.map((card) => (
                        <Card heading={card.heading} height={card.height} width={card.width} buttonText={card.buttonText} buttonlink={card.buttonLink} description={card.description} image={card.image} headfont={card.headfont}></Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default acads;