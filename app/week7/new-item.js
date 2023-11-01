"use client";
import React, { useState } from 'react';


export default function NewItem ({ onAddItem, setIngredient, getMealIdeas }) {
    
    const[name, setName] = useState("Item Name");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");
    const [selectedItem, setSelectedItem] = useState(null); 

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
        onAddItem(newItem);  
        setName("Item Name");
        setQuantity(1)
        setCategory("produce");
    };

    const handleNameFocus = () =>
    {
        if( name === 'Item Name')
        {
            setName('');
        }
    }

    const handlerItemSelect = (item) => {
      
        const itemName = item.name;
        setSelectedItem(itemName);
      };
        

    return (
        <div className="max-w-md mx-auto mt-6 p-4 border rounded shadow-lg ml-1 bg-dark bg-gray-800">
            <h1 className=" font-bold mb-2 text-white">Add New Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    
                       <input
                        type="text"
                        placeholder="Item Name"
                        value={name}
                        onChange={handleNameChange}
                        onFocus={handleNameFocus}
                        required
                        className="w-full border rounded px-2 py-1"
                        />
                </div>        
 
               <div className="mb-2 flex">
                    <div className="mr-4">
                        
                            <input
                            type="number"
                            placeholder="Enter Quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            max="99"
                            required
                            className="border rounded px-2 py-1 w-full"
                            />
                    </div>
                    <div className="mb-2 flex"> 
                       
                    <select 
                        value={category} 
                        onChange={handleCategoryChange}
                        className="border rounded px-2 py-1 w-full"
                        style={{ marginLeft: "180px"}}
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
                 </div> 
            
                
                    
                    
            
            <button type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white border rounded px-2 py-1 w-full"
            >+
            </button>
          </form>  
        </div>
    );
};


        

          


          
      
        
 
