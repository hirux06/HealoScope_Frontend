import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-red-500">403</h1>
                <h2 className="text-2xl font-semibold mt-4">Unauthorized Access</h2>
                <p className="mt-2 text-gray-600">Sorry, you do not have permission to view this page.</p>
                <Link to="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Unauthorized;