import React from 'react';

const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-200 to-blue-200">
            <div className="text-center p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-9xl font-bold text-green-500">404</h1>
                <p className="text-2xl md:text-3xl font-light leading-normal text-gray-700 mb-8">
                    Oops! We couldn't find this page.
                </p>
                <a href="/" className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600">
                    Go back home
                </a>
            </div>
        </div>
    );
};

export default PageNotFound;