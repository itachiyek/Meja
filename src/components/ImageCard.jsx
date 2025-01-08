import React from 'react';

export const ImageCard = ({ imageUrl, altText = "image", title, description }) => {
    return (
        <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg">
            <div className="relative w-full">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="p-2">
                <h2 className="mb-2 text-2xl font-semibold text-gray-800 leading-tight tracking-wide">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};
