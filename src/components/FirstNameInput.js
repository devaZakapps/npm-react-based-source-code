// src/components/FirstNameInput.js
import React from 'react';

const FirstNameInput = ({ value, onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
            </label>
            <input
                type="text"
                id="firstName"
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    );
};

export default FirstNameInput;