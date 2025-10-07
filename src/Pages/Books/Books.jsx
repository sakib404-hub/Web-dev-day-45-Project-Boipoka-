import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        const url = '../../../public/bookData.json'
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllBooks(data))
            .catch((err) => console.log(err));
    }, [])
    console.log(allBooks);
    return (
        <div>
            Hey this is the Books!
        </div>
    );
};

export default Books;