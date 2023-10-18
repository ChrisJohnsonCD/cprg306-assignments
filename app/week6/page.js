"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import itemsData from './items.json';




export default function Page() 
{ // Initializes the items state with the data from items.json
  const[items, setItems] = useState (itemsData);

  // Event handler to add new items to the items state
  const handleAddItem = (newItem) => 
  {
    setItems((prevItems) => [...prevItems, newItem]);
  };
    return (
      <main>
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

        <NewItem onAddItem ={handleAddItem} />
      
      <ItemList items = {items}/>
      </main>
    );
  }