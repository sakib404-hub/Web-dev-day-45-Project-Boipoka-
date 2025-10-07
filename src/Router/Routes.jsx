import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Component/BookDetails/BookDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/bookData.json'),
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: 'bookDetails/:id',
                loader: async ({ params }) => {
                    const res = await fetch('/bookData.json')
                    const data = await res.json()
                    const book = data.find((book) => Number(book.bookId) === Number(params.id))
                    return book;
                },
                Component: BookDetails
            }
        ]
    }
])