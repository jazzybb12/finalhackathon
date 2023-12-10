import React from 'react'
import '../Home.scss';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <main className='bg_home min-h-screen'>
            <div className='min-h-screen bg_header flex items-center justify-center'>
                <div className="flex flex-col md:w-[50%] items-center justify-center">
                    <h1 className='font-semibold text-white text-xl mb-0'>Health& Fitness</h1>
                    <h1 className='font-bold text-white text-[2rem] md:text-[4rem] text-center'>Approach the Best Doctor Near You</h1>
                    <div className="flex gap-3 items-center justify-center w-full">
                        <Link to='/doctors-details'>
                            <button className='bg-[#3498db] text-white px-4 md:px-8 py-2 md:py-4 md:text-lg rounded'>Search a Doctor</button>
                        </Link>
                        <button className='bg-white text-[#3498db] px-4 md:px-8 py-2 md:py-4 md:text-lg rounded'>Explore More</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomeHeader;