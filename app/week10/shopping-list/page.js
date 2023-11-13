"use client";
// import { dbAddItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"
import { dbGetItems } from "../_services/shopping-list-service";
import React, { useState, useEffect } from 'react';


export default function Page (){

    const{ user, gitHubSignIn, firebaseSignOut} = useUserAuth ();
    const [itemList,setItemList] = useState([]);

    useEffect(() => {
        if(user ){
        dbGetItems(user.uid, setItemList);
    }
    }, [user]);
    

    // let itemObj = {
    //     name: 'apples',
    //     category: 'produce',
    //     quantity: 3

    // }
    
    
    return(
        <main>
            <header>
            <h1>Shopping List</h1>
            </header>
            <section>
                { user ? (
                    <div>
                    <p>Welcome, {user.displayName}  you are signed in!</p>
                    {/* <button onClick={() => dbAddItem(user.uid, itemObj)}>Add Test Item</button> */}
                    {
                        itemList.map( (item) => (
                            <div>
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                                <p>{item.category}</p>
                                <p>{item.quantity}</p>
                            </div>
                        ))
                    }
                    </div>
                ) : (
                    <p> you must be signed in to view this age</p>
                )}
                
            </section>
        </main>
    )
}