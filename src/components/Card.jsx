'use client';

import Button from '@/components/Button'

export default function Card({image, name, text}) {
    return (

        <div className="w-full bg-white rounded-lg p-5 mt-5">
            <div className="flex flex-col items-center ">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={image} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <p className="text-gray-950">{text}</p>
                <Button theme='Primary'>Contactar</Button>
            </div>
        </div>)
}   