"use client";
 import { dbAddItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"
import { dbGetItems } from "../_services/shopping-list-service";
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item'; 
import MealIdeas from './meal-ideas';
import { db } from "../_utils/firebase";

export default function Page (){

    const{ user, gitHubSignIn, firebaseSignOut} = useUserAuth ();
    const [itemList,setItemList] = useState([]);
    // const[items, setItems] = useState (itemsData);
    const [fetchedMealIdeas, setFetchedMealIdeas] = useState([]);
    const [cleanedItemName, setCleanedItemName] = useState('');

 // Event handler to add new items to the items state
 const handlerAddItem = (newItem) => 
 {
  setItemList((prevItems) => [...prevItems, newItem]);
 };

 //Create a new event handler for item selection for ingredients

 const handlerItemSelect = ( itemName ) => 
 // Cleans up the size and emoji
 {
   if (typeof itemName === 'string')
   {
   const cleanedItemName = itemName.split(',')[0].trim();
   let newcleanedItemName = cleanedItemName
   .replace(
     /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
     ''
   )
   .replace(/\s+/g, ' ')
   .trim();
     
   setCleanedItemName(newcleanedItemName);
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

 
     useEffect(() => {
         if(user ){
         dbGetItems(user.uid, setItemList);
     }
     }, [user]);
     
 
     return(
         <main className = "flex">
       <div className = "w-1/2 p-4">
         <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
         <NewItem onAddItem ={handlerAddItem} />
         <ItemList items = {itemList} onItemSelect={handlerItemSelect} getMealIdeas={fetchMealIdeas} />
       </div>
       <div className ="w-1/2 p-4">
         <h1 className = "text-2x1 font-bold mb -4">Meal Ideas</h1>
         <MealIdeas ingredient={cleanedItemName} fetchedMealIdeas={fetchedMealIdeas} />
       </div>
       
       
       </main>
     );












    
    
    















        // <main >
        //     <header>
        //     <h1>Shopping List</h1>
        //     </header>
        //     <section>
        //         { user ? (
        //             <div>
        //             <p>Welcome, {user.displayName}  you are signed in!</p>
        //             {/* <button onClick={() => dbAddItem(user.uid, itemObj)}>Add Test Item</button> */}
        //             {
        //                 itemList.map( (item) => (
        //                     <div>
        //                         <p>{item.id}</p>
        //                         <p>{item.name}</p>
        //                         <p>{item.category}</p>
        //                         <p>{item.quantity}</p>
        //                     </div>
        //                 ))
        //             }
        //             </div>
        //         ) : (
        //             <p> you must be signed in to view this age</p>
        //         )}
                
        //     </section>
        // </main>
    
}