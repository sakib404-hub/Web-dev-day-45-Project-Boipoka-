import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-15'>
                <h1 className='text-3xl font-bold text-center'>Books</h1>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;