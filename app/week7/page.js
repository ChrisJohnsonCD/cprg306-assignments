"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import itemsData from './items.json';
import MealIdeas from './meal-ideals';



export default function Page() 
{ // Initializes the items state with the data from items.json
  const[items, setItems] = useState (itemsData);

  // Event handler to add new items to the items state
  const handlerAddItem = (newItem) => 
  {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  //Create a new event handler for item selection for ingredients

  const handlerItemSelect = ( itemName ) => 
  // Cleans up the size and emoji
  {
    if (typeof itemName === 'string')
    {
    const cleanedItemName = itemName.split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
    }
  };

  // Declare the selectedItemName state variable
  const [selectedItemName, setSelectedItemName] = useState ("");

    return (
      <main className = "flex">
      <div className = "w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem ={handlerAddItem} />
        <ItemList items = {items} onItemSelect={handlerItemSelect} />
      </div>
      <div className ="w-1/2 p-4">
        <h1 className = "text-2x1 font-bold mb -4">Meal Ideas</h1>
        <MealIdeas ingredient = {selectedItemName} />
      </div>
      
      
      </main>
    );
  }