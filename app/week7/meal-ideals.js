"use client";

import React, { useState, useEffect } from 'react';
import Item from './item';

export default function MealIdeals({ ingredient }) 

    // Define state variable for meals
    {
        const [meals, setMeals] = useState([]);

    // Define api Fetching Function

        const getMealIdeas = async (ingredient) =>
        {
            try
            {
                const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                if (!response.ok)
                {
                    throw new Error ('Network response Error');
                }

                const data = await response.json();
                setMeals( data.meals || []);
            }

                catch (error)
                {
                    console.error ('Error fetching ideas for the meals:', error);
                }
        };

        useEffect (() => 

        // Fetch meal ideas when the component mounts
        {
            getMealIdeas(ingredient);
        }, [ingredient]);

        return 
        (
            <div>
                <h2> Meal Ideas with {ingredient} : </h2>
                <ul>
                    {meals.map((meal) =>
                    (
                        <li key = {meal.idMeal} >
                        <img src = { meal.strMealThumb} alt = {meal.strMeal} />
                        {meal.strMeal}
                        </li>
                    ))}
                 </ul>
            </div>       

          );

    }            
               
         
      