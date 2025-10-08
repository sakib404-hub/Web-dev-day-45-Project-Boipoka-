import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBookFromLocalStorage, getWishListFromLocalStorage } from '../../utilities/AddtoLocal';
import BookCard from '../../Pages/BookCard/BookCard';
import BookCardw from '../BookCardw/BookCardw';

const ReadList = () => {

    const [readList, setReadlist] = useState([]);
    const [wishList, setWishList] = useState([]);

    const bookData = useLoaderData();
    // console.log(bookData);

    //When we deal with something from outside we use useEffect
    useEffect(() => {
        // Readlist 
        const readBooksData = getStoredBookFromLocalStorage();
        const convertedToNumber = readBooksData.map((id) => parseInt(id));
        const readListBooks = bookData.filter((book) => convertedToNumber.includes(book.bookId));
        setReadlist(readListBooks);
        // WishList 
        const wishBookData = getWishListFromLocalStorage();
        const wishListConvertedToNumber = wishBookData.map((id) => parseInt(id));
        const wishListBooks = bookData.filter((book) => wishListConvertedToNumber.includes(book.bookId))
        setWishList(wishListBooks);
    }, [bookData])

    return (
        < div className="tabs tabs-lift" >
            <input type="radio" name="my_tabs_3" className="tab" aria-label="ReadList" />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                {
                    readList.map((book) => {
                        return <BookCardw
                            key={book.bookId}
                            book={book}></BookCardw>
                    })
                }
            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label="WishList" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">
                {
                    wishList.map((book) => {
                        return <BookCardw
                            key={book.bookId}
                            book={book}></BookCardw>
                    })
                }
            </div>
        </div >
    );
};

export default ReadList;