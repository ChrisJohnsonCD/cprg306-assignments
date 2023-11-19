"use client";
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function dbAddItem(userId, itemObj){
    try {
        let collectionReference = collection(db, "users", userId, "items");
        const addedItemPromise = await addDoc(collectionReference, itemObj);
        console.log(addedItemPromise.id);
        } catch (error) {
        console.error(error);
    }
}

export async function dbGetItems(userId, updateItemList){
    try {
        let collectionReference = collection(db, "users", userId, "items");
        const getItemsPromise = await getDocs(collectionReference);
        let dataList = [];

        getItemsPromise.forEach((doc) => {
        // console.log( doc.id, " - ", doc.data() );
        let thisItem ={
            id: doc.id,
            ...doc.data()
        }
        dataList.push(thisItem);
         });
       updateItemList(dataList);
    }catch (error) {
        console.error(error);
    }
   
}