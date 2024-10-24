// src/components/LastNameInput.js
import React from 'react';

const LastNameInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
            </label>
            <input
                type="text"
                id="lastName"
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default LastNameInput;
