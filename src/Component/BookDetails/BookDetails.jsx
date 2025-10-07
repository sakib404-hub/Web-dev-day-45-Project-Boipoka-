import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);
    return (
        <div>
            This is the Book Detail Section!
        </div>
    );
};

export default BookDetails;