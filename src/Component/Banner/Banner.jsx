import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex gap-2 p-20 rounded-2xl bg-[#f0f8ff] shadow-xl'>
            <div className='w-1/2 flex flex-col items-center justify-center space-y-10 font-semibold'>
                <p className='text-5xl'>  Lorem, ipsum dolor sit amet consectetur</p>
                <button className='btn bg-green-500 text-white
                 hover:bg-green-600 hover:scale-105 duration-300
                 transition-all ease-in-out'>View The List</button>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img src={bookImg} alt="" className='w-4/6 rounded-xl' />
            </div>
        </div>
    );
};

export default Banner;