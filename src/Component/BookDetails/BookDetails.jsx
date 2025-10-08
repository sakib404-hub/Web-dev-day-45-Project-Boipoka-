import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Star } from 'lucide-react';
import { addToLocalStorage, addToWishListLocalStorage } from '../../utilities/AddtoLocal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const book = useLoaderData();
    const { bookName, author, image, review, category, rating, tags, totalPages,
        yearOfPublishing, publisher, bookId
    } = book;

    const path = useNavigate();
    const handleButtonOnclick = () => {
        path('/');
    }

    const handleMarkAsRead = (id) => {
        // console.log('Book id is  : ', id);
        // Storing with id 
        //where to store --> we will store the data in the local storage
        // collection of set means we will set an array of object
        //if book already exist therefore showing a alert 
        //if the book does not exist therefore pushing it in the array

        addToLocalStorage(id);

    }


    const addToWishList = (id) => {
        // console.log(typeof id);
        addToWishListLocalStorage(id);
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm p-4
        flex flex-col lg:flex-row justify-between gap-10">
            <figure className='w-full lg:w-[800px]'>
                <img
                    src={image}
                    alt="Movie"
                    className='w-full object-center rounded-xl' />
            </figure>
            <div className="card-body">
                <div className='border-b border-dotted py-2'>
                    <p className='text-2xl font-semibold'>{bookName}</p>
                    <p className='font-semibold'>By : {author}</p>
                </div>
                <div className='border-b border-dotted py-2'>
                    <p className='text-xl font-semibold'>{category}</p>
                </div>
                <div className='border-b border-dotted py-2'>
                    <div className='text-base'>
                        {review}
                    </div>
                    <div className='flex flex-col mt-3 space-y-2'>
                        <p className='text-xl font-semibold'> Tag :</p>
                        <div>
                            {
                                tags.map((tag, index) => {
                                    return <div
                                        key={index} className="badge bg-gray-200 text-green-600 font-semibold">{tag}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <p className='text-base text-gray-60'>Number of Pages :
                        <span
                            className='text-black font-semibold ml-5'>
                            {totalPages}
                        </span>
                    </p>
                    <p className='text-base text-gray-600'>
                        Publisher :
                        <span
                            className='text-black font-semibold ml-5'>
                            {publisher}
                        </span>
                    </p>
                    <p className='text-base text-gray-600'> Year of Publishing :
                        <span
                            className='text-black font-semibold ml-5'>
                            {yearOfPublishing}
                        </span>
                    </p>
                    <p className='text-base text-gray-600'>
                        Rating :
                        <span
                            className='text-black font-semibold ml-5'>
                            {rating}
                        </span>
                    </p>
                </div>
                <div className='space-x-4'>
                    <button className='btn'
                        onClick={() => { handleMarkAsRead(bookId) }}>Mark As Read</button>
                    <button className='btn btn-primary'
                        onClick={() => addToWishList(bookId)}>Add to Wishlist</button>
                </div>
                <div>
                    <button className="btn btn-soft btn-success px-4"
                        onClick={handleButtonOnclick}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;