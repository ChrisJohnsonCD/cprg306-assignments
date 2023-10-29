"use client";

import React, { useState, useEffect } from 'react';

// async function getMealIdeas() {
      
//   try {
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php`);
//     if (!response.ok)
//     {
//       console.log(response.status);
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) 
//   {
//     console.log(error.message);
//     }
   
   
//   }

//   export default function MealIdeas()
//   {
//     const[mealIdeasDisplay, setMealIdeasDisplay] = useState(null);

//     async function getMealByName(mealName){
//       try
//       {
//         const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter/${mealName}`);
//         if (!response.ok)
//         {
//           console.log(response.status);
//         }
//         const data = await response.json();
//         console.log(data)
//         setMealIdeasDisplay (data);
//       } catch (error)
//       {
//         console.log(error.message);
//       }
//     }

//     useEffect(() => 
//     {
//       getMealIdeas();
//       getMealByName();
//     }, []);

//     return (
//       <section>
//         <div>

//         </div>
//       </section>
//     );
//   }

async function fetchMealDetails(mealId) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealId}`);
      if (!response.ok) {
        console.log(response.status);
      }
      const data = await response.json();
      console.log(data);
      return data.meals[0];
    } catch (error) {
      console.log(error.message);
    }
  }

export default function MealIdeas({ingredient}) 

    // Define state variable for meals
    {
        const [meals, setMeals] = useState([]);
        const [selectedMeal,setSelectedMeal] = useState(null);
        

        const getMealIdeasImages = async () => {
          try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
              console.log(response.status);
            }
            const data = await response.json();
            setMeals(data.meals);
          } catch (error) {
            console.log(error.message);
          }
        };
      
        
        useEffect(() => {
          getMealIdeasImages();
        }, [ingredient]);
      

        

          
        return (
        
            <div>
                <h2> Top 10 Meal Ideas with {ingredient} : </h2>
                
                {meals && meals.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
                {meals.slice(0, 12).map((meal) => (
                  <div key={meal.idMeal} 
                  style={{ width: '120px', margin: '8px', cursor: 'pointer' }}
                  onClick={() => setSelectedMeal(meal.idMeal)}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '100%' }} />
                    <p>{meal.strMeal}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No meals available</p>
            )}

                
{selectedMeal && (
        <div>
          <h3>Meal Details</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
          <h4>{selectedMeal.strMeal}</h4>
          <h5>Ingredients:</h5>
          <ul>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
              const ingredient = selectedMeal[`strIngredient${i}`];
              const measure = selectedMeal[`strMeasure${i}`];
              if (ingredient && measure) {
                return (
                  <li key={i}>
                    {measure} {ingredient}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}