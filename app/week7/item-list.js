"use client"

import React,{useState} from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
   
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);

    const sortItems = () => {
      const sortedItems = [...items];
       
              if(sortBy === "name") {
                 sortedItems.sort((a, b) => a.name.localeCompare(b.name));
              } else if (sortBy === "quantity") {
                sortedItems.sort((a, b) => a.quantity - b.quantity);
              } else if (sortBy === "category") {
                sortedItems.sort((a, b) => a.category.localeCompare(b.category));
              }
              return sortedItems;

    };

    const { sortedCategories, sortedItemsByCategory } = groupByCategory();

    const toggleGrouping = () => {
      setGrouped(!grouped);

    };

    function groupByCategory ()  {
      const groupedItems = items.reduce ((acc, item) => {
        const category = item.category.toLowerCase();
        if(!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {});

      const sortedCategories = Object.keys(groupedItems).sort();

      const sortedItemsByCategory = sortedCategories.map((category) =>
        groupedItems[category].sort((a, b) => a.name.localeCompare(b.name))
        );

        return { sortedCategories, sortedItemsByCategory };
      }
      
      
    

    return (
      <div>
        <div>
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="quantity">Quantity</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div>
        <button
          className={`px-2 py-1 mx-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-2 py-1 mx-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
        <button
          className={`px-2 py-1 mx-2 ${
            grouped ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={toggleGrouping}
        >
          {grouped ? "Ungroup" : "Group by Category"}
        </button>
      </div>

        <ul>
        {grouped
          ? sortedCategories.map((category, index) => (
              <li key={index}>
                <h2 className="text-xl font-bold capitalize">{category}</h2>
                <ul>
                  {sortedItemsByCategory[index].map((item) => (
                    <Item
                      key={item.id} 
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                      onSelect = {() => onItemSelect(item)}
                    />
                  ))}
                </ul>
              </li>
            ))
          
          : sortItems().map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect= {onItemSelect}
              />
          ))}
        </ul>
       </div>
    );
}
     
          
          
          
          
          
          
      