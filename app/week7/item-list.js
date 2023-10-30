"use client";

import React,{useState} from 'react';
import Item from './item';



export default function ItemList({ items, onItemSelect, getMealIdeas, }) { // Add getMealIdeas as a prop
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);

    const sortItems = () => {
      const sortedItems = [...items];
       
      switch (sortBy) {
        case "name":
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "quantity":
          sortedItems.sort((a, b) => a.quantity - b.quantity);
          break;
        case "category":
          sortedItems.sort((a, b) => a.category.localeCompare(b.category));
          break;
        default:
          break;
      }
    
      return sortedItems;
    };

    const { sortedCategories, sortedItemsByCategory } = groupByCategory();

   

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
      <div className="max-w-md mx-auto mt-6 p-4 border rounded shadow-lg ml-1 bg-dark bg-gray-800 text-white">
        <div>
          <label htmlFor="sortBy">Sort by:</label>
        
            <button
              className={`px-2 py-1 mx-2 
              ${
                sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-600"
              }`}
              onClick={() => setSortBy("name")}
            >Sort by Name</button>

            <button
              className={`px-2 py-1 mx-2 
              ${
                sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-600"
              }`}
              onClick={() => setSortBy("category")}
            >Sort by Category</button>
           
            
              
            
        
          <ul>
          {grouped
            ? sortedCategories.map((category, index) => (
                <li key={index}>
                  <h2 className="text-xl font-bold capitalize">{category}</h2>
                  <ul>
                    {sortedItemsByCategory[index].map((item) => (
                      (<Item
                        key={item.id} 
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect= {() => {
                          onItemSelect(item);
                          getMealIdeas(item.name); // Call getMealIdeas when an item is selected
                        }}
                        //  getMealIdeas= {getMealIdeas}
                      />)
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
                onSelect= {() => {
                  // let item_name = item.name.split(" ");
                  // console.log(item_name[0])
                  onItemSelect(item.name);
                  // getMealIdeas(item.name); // Call getMealIdeas when an item is selected
                }}
                //  getMealIdeas= {getMealIdeas}
                />
                
            ))}
          </ul>
          </div>
      </div>
    );
}
