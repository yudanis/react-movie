import React from 'react';
const AddFavourite = () => {
    return (
    <>
            <span className="mr-2">Add to Favourites</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"/>
                <path
                    fillRule="evenodd"
                    d="M8 14s-5-3.5-5-6.5 2.5-5 5-5 5 2.5 5 5-5 6.5-5 6.5z" />
            </>
            );
}

export default AddFavourite;