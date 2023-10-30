import React from 'react';

export default function Item ({ name, quantity, category, onSelect }) 
{
    const itemDetails =
    {
        name,
        quantity,
        category,
    };

    const handleItemClick = () => 
    {
        onSelect(itemDetails);
    };

    return (
        <li className="max-w-md mx-auto mt-6 p-4 hover:bg-orange-700 rounded shadow-lg ml-1 bg-dark bg-gray-900 text-white" 
        onClick={handleItemClick}    
        style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
       
            >
            <h3 className="text-x1 font-bold">{name}</h3>
            <p className="text-x1 font-bold"> {quantity}</p>
            <p className="text-x1 font-bold"> {category}</p>
        </li> 
        
    );
}