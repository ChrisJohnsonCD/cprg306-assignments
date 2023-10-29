"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import itemsData from './items.json';
import MealIdeas from './meal-ideas';



export default function Page() 
{ // Initializes the items state with the data from items.json
  const[items, setItems] = useState (itemsData);
  const [fetchedMealIdeas, setFetchedMealIdeas] = useState([]);
  const [cleanedItemName, setCleanedItemName] = useState('');

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
    setCleanedItemName(cleanedItemName);
      fetchMealIdeas(cleanedItemName);
    }
  };

  // Fetch meal ideas based on the selected item name
  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      if (!response.ok) {
        throw new Error('Network response Error');
      }

      const data = await response.json();
      setFetchedMealIdeas(data.meals.slice(0, 10) || []);
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  };

  

    return (
      <main className = "flex">
      <div className = "w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem ={handlerAddItem} />
        <ItemList items = {items} onItemSelect={handlerItemSelect} getMealIdeas={fetchMealIdeas} />
      </div>
      <div className ="w-1/2 p-4">
        <h1 className = "text-2x1 font-bold mb -4">Meal Ideas</h1>
        <MealIdeas ingredient={cleanedItemName} fetchedMealIdeas={fetchedMealIdeas} />
      </div>
      
      
      </main>
    );
  }