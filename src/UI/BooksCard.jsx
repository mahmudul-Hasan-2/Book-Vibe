import React from 'react';

const BooksCard = ({book}) => {
    return (
        <div>
            <h2>{book.bookName}</h2>
        </div>
    );
};

export default BooksCard;