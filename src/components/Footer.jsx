import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray text-xs '>
                    More ways to shop:{' '}
                    <span className='underline text-blue'>
                        Find an Apple store{' '}


                    </span>
                    or{' '}
                    <span className='underline text-blue'> 
                        other retailer

                    </span>{' '}
                    near you.
                </p>
                <p className='font-semibold text-gray text-xs '>
                    Or call 000800-505-4322
                </p>

                <div className='bg-neutral-700 my-5 h-[1px]' />

                <div className='flex md:flex-row flex-col md:items-center justify-between'>
                    <p className='font-semibold text-gray text-xs '>
                    Copright @ 2024 Apple Inc. All rights reserved.

                    </p>

                </div>

                
            </div>

        </div>

    </footer>
  )
}

export default Footer