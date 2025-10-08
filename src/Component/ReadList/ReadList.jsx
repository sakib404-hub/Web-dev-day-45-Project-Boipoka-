import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBookFromLocalStorage, getWishListFromLocalStorage } from '../../utilities/AddtoLocal';
import BookCard from '../../Pages/BookCard/BookCard';
import BookCardw from '../BookCardw/BookCardw';

const ReadList = () => {

    const [readList, setReadlist] = useState([]);
    const [wishList, setWishList] = useState([]);
    // state for the sort 
    const [sort, setSort] = useState('');
    const [open, setOpen] = useState(false);

    const handleSorting = (type) => {
        setSort(type);

        if (type === 'pages') {
            const sortedByPageReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadlist(sortedByPageReadList);

            const sortedByPageWishList = [...wishList].sort((a, b) => a.totalPages - b.totalPages)
            setWishList(sortedByPageWishList);

        }
        if (type === 'ratings') {
            const sortedByRatingList = [...readList].sort((a, b) => b.rating - a.rating)
            setReadlist(sortedByRatingList);

            const sortedByRatingWishList = [...wishList].sort((a, b) => a.rating - b.rating)
            setWishList(sortedByRatingWishList);
        }

    }

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
        <div>
            <div className={`dropdown ${open ? 'dropdown-open' : ''} flex items-center justify-center py-5`}>
                <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1"
                    onClick={() => setOpen(!open)}
                >
                    Sort By: {sort || 'Select'}
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                    <li><a onClick={() => { handleSorting('pages'); setOpen(false); }}>Pages</a></li>
                    <li><a onClick={() => { handleSorting('ratings'); setOpen(false); }}>Ratings</a></li>
                </ul>
            </div>

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
        </div>
    );
};

export default ReadList;