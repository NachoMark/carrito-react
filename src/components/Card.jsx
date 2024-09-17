import React, { useState } from 'react'

export const Card = ({image, title, description, price}) => {

    const [added, setadded] = useState(false)

  return (
    <div className='flex border-solid border-2 border-slate-300
    rounded p-2.5 mb-2.5'>
        <img src={image} className='w-24 h-24 object-cover rounded mr-2.5' />
        <div className='flex-1'>
            <h3 className='m-0'>{title}</h3>
            <p className='m-0 mb-2.5'>{description}</p>
            <p className='m-0 font-bold'>{price}</p>
        
            {
                added 
                ? <button type='button' 
                className='bg-red-500 text-white border-0 py-2.5 px-5
                rounded cursor-pointer hover:bg-red-600'>
                    Quitar del carrito
                    </button>
                : <button type='button' className='bg-green-500 text-white border-0 py-2.5 px-5
                rounded cursor-pointer hover:bg-green-600'>
                    Agregar al carrito
                    </button>
            }
            </div>
    </div>
  )
}
