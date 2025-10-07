import React, { useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Books = ({ bookData }) => {
    const [allBooks, setAllBooks] = useState(bookData);
    setAllBooks

    // useEffect(() => {
    //     const url = '../../../public/bookData.json'
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => setAllBooks(data))
    //         .catch((err) => console.log(err));
    // }, [])
    // console.log(allBooks);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 place-items-center'>
            {
                allBooks.map((book) => {
                    return <BookCard
                        key={book.bookId} book={book}></BookCard>
                })
            }
        </div>
    );
};

export default Books;