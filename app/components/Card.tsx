import React from "react";
import Link from 'next/link';

type CardProps = {
    height:string;
    width:string;
    heading: string;
    description: string;
    image: string;
    buttonlink:string;
    buttonText: string;
    headfont:string;
};

const Card: React.FC<CardProps> = ({ height,width,heading, description, image, buttonlink, buttonText,headfont }) => {
    return (
        <div
            className={`card ${width} ${height} w-[30%] my-4 bg-slate-300 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-slate-50 hover:shadow-lg cursor-pointer`}>
            <img
                src={image}
                alt="Card image"
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className={`text-3xl font-semibold mb-2 text-gray-800 ${headfont}`}>{heading}</h3>
                <p className="text-gray-600 mb-4 text-xl ">{description}</p>
                <Link href={buttonlink}><button
                    className="px-4 py-2 bg-green-900 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    {buttonText}
                </button></Link>
            </div>
        </div>
    );
};

export default Card;
