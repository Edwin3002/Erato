import React from 'react'

const CardCursos = ({ info }) => {
    return (
        <div className='my-4 rounded-lg border p-4'>
            <span className='flex w-48 h-24 md:w-96 md:h-48'>
                <img src={info.img} className='w-full object-cover hover:scale-105'/>
            </span>
            <p className='text-xl text-bold text-center'>{info.name}</p>
        </div>
    )
}

export default CardCursos