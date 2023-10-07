
//import React, { useState } from 'react';

"use client";

import{ useState } from "react";

export default function NewItem () {
    
    const[name, setName] = useState("Enter Name");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);    
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        

        const newItem = {
            name: name,
            quantity: quantity,
            category: category,
          };
      
          console.log(newItem);

        alert(`Name: ${name}\nQuantity: ${quantity}\ncategory: $[category}`);

        setName("");
        setQuantity(1)
        setCategory("produce");
    };
 
    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
            <h1 className="text-2x1 mb-4">New Item Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
            
                    <label className="block mb-1"> </label>
                        Name:
                        <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        />
                </div>        
               <div className="mb-4">
                <label className ="block mb-1">
                    Quantity:  </label>
                    <input
                    type="number"
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max="99"
                    required
                    />
               </div>
            
                <div className="mb-4">
                    <label className="block mb-1">
                    Category:</label>
                    <select 
                        value={category} 
                        onChange={handleCategoryChange}
                        className="border rounded px-2 py-1 w-full"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="meat">Meats</option>
                            <option value="bakery">Bakery</option>
                            <option value="household">Household</option>
                            <option value="snacks">Snacks</option>
                            <option value="frozen">Frozen</option>
                            <option value="international">International</option>
                    </select>
                 </div> 
            
            <button type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >Submit
            </button>
          </form>  
        </div>
    );
};

