import Link from "next/link";
import StudentInfo from "./StudentInfo";
import NewItem from "./week4/new-item";
//import React, {useState} from 'react';


export default function Home() {
  return (
    <main> 
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      

      <Link href="week3">My Shopping List</Link> 

      <div>
      <Link href="page">New item</Link> 
        <NewItem />
       </div>

    </main>
  )
}
