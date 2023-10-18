import Link from "next/link";
import StudentInfo from "./StudentInfo";
import NewItem from "./week4/new-item";
//import React, {useState} from 'react';


export default function Home() {
  return (
    <main> 
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li>
            <Link href="week3">My Shopping List</Link> 
          </li>
          <li>
            <Link href="week4">New item</Link> 
                    <NewItem />
          </li>
          <li>
          <Link href="week5">Week5</Link>
          </li>
        </ul>

       </div>

    </main>
  )
}


      
      
      