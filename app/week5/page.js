
"use client";
import React from 'react';
import ItemList from './item-list';
import itemsData from './items.json';


export default function Page() {
    return (
      <main>
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      
      <ItemList items = {itemsData} />
      </main>
    );
  }