import React from 'react'
import banner from '../imagens/icons@2x.png'

function Were() {
    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='text-blue font-bold text-[39px] tracking-[.78px] mt-20 text-center w-[356px]'>we’re here to help</h1>
            </div>
            <div className='mt-[40px] h-[251px] w-[550px] text-darkGray text-center mx-auto'>
                <p className='tracking-[.4px] text-[20px] mb-2'>
                    When it comes to caring for our most intimate areas, we’ve lost our connection.
                </p>
                <p className='tracking-[.4px] text-[20px] mb-2'>
                    Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most.
                </p>
                <p className='tracking-[.4px] text-[20px]'>
                    We’re here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care.
                </p>
            </div>
            <div className='flex justify-center mt-8'>
                <img src={banner} className="w-[1132px] h-[259px]" alt="" />
            </div>
        </div>
    )
}

export default Were