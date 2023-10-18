import Link from "next/link";
import StudentInfo from "./StudentInfo";



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
                   
          </li>
          <li>
          <Link href="week5">Week5</Link>
          </li>
          <li>
          <Link href="week6">Week6</Link>
          </li>
        </ul>

       </div>

    </main>
  )
}


      
      
      