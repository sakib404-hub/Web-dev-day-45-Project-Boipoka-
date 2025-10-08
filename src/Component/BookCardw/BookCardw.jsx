import { Star } from 'lucide-react';
import React from 'react';

const BookCardw = ({ book }) => {
    const { bookName, author, image, review, category, rating, tags } = book;
    return (
        <div
            className="flex gap-10">
            <div className='flex items-center justify-center p-4 bg-[#f0f8ff] py-6 rounded-2xl'>
                <img
                    src={image}
                    alt="Shoes"
                    className='h-full w-3/7 object-center' />
            </div >
            <div className='w-1/2'>
                <div className="card-actions px-4 mt-4">
                    {
                        tags.map((tag, index) => {
                            return <div
                                key={index} className="badge bg-gray-200 text-green-600 font-semibold">{tag}</div>
                        })
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className='font-semibold'>By : {author}</p>
                    <p>{review}</p>
                    <div className='flex border-t border-dotted p-2'>
                        <p className='font-semibold'>{category}</p>
                        <div className='flex items-center justify-center gap-2'>
                            <p>{rating}</p>
                            <Star></Star>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCardw;