import React, { useEffect, useState } from 'react';
import './ListCard.css'
import UpArrow from '../../media/arrow-up.png';
import DisableDown from '../../media/disabledDown.png'
import DisableUp from '../../media/disabledUp.png'
import DownArrow from '../../media/down-filled-triangular-arrow.png'
import Close from '../../media/close.png'
import { db } from '../../firebaseinit'
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { query, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util';
import { toast } from 'react-toastify';


const ListCard = () => {
    const [listItem, setListItem] = useState([]);
    const [newLanguage, setNewLanguage] = useState('');
    const languageCollectionRef = query(collection(db, "programming-language"))

// Get data from firestore
    const resultData = useFirestoreQuery(
        ["programming-language"],
        languageCollectionRef,
        {
          subscribe: true,
        },
        {
          onSuccess(snapshot) {
            setListItem(snapshot.docs.map((doc) => ({...doc.data(),id: doc.id})))
          },
          onError(error) {
            toast.error("Woops, something went wrong!");
          },
        }
      );


    if (resultData.isLoading) {
        return <div>Loading...</div>;
    }

    const lastElement = listItem[listItem?.length - 1]
    const lowToHigh = listItem?.sort((a, b) => a.order - b.order)

    //create a document in firestore
    const createList = async (event) => {
        event.preventDefault()
        let order;
        if(!lastElement){
            order = 1
        }else{
           order = lastElement.order + 1
        }

        await addDoc(languageCollectionRef, { languageName: newLanguage, order: order })
        event.target.reset();
    }

    // update document in firestore
    const moveOrder = async (id, order, obj) => {
        if(id && order && obj){
            const languageDoc = doc(db, "programming-language", id)
            const updateUpperOrder = doc(db, 'programming-language', obj.id)
            const downOrder = { order: order }
            const upOrder = { order: obj.order }
            await updateDoc(updateUpperOrder, downOrder)
            await updateDoc(languageDoc, upOrder)
        }
    }

    // delete document in firestore
    const deleteList = async (id) => {
        const languageDoc = doc(db, "programming-language", id)
        await deleteDoc(languageDoc)
    }


    return (
            <div>
                <div className='flex flex-col items-center gap-3 mt-12'>
                    <h1 className='font-bold text-2xl bg-blue-500 w-[500px] py-2 text-white rounded-tl rounded-tr'>List card</h1>
                    <div className='flex flex-col'>
                        {
                            lowToHigh?.map((list, index) =>  ( 
                                
                                    <div key={list.id} className='flex justify-between w-[500px] px-1 py-3 border-2 border-blue-200 rounded gap-1 mb-2 bg-blue-200 active:bg-blue-600'>

                                        <div className='text-section'>{list.languageName}</div>
                                        <div className='button-section'>
                                            <button onClick={() => { moveOrder(list.id, list.order, lowToHigh[index - 1]) }}>
                                                <img className='icon' src={lowToHigh[index - 1] ? UpArrow : DisableUp} alt="" />
                                            </button>
                                            <button onClick={() => { moveOrder(list.id, list.order, lowToHigh[index + 1]) }}>
                                                <img className='icon' src={lowToHigh[index + 1] ? DownArrow : DisableDown} alt="" />
                                            </button>
                                            <button onClick={() => { deleteList(list.id) }}>
                                                <img className='icon' src={Close} alt="" />
                                            </button>
                                        </div>
                                    </div>

                                
                            ))
                        }
                    </div>
                    <form onSubmit={createList} className='bg-blue-500 w-[500px] rounded-br rounded-bl py-2'>
                        <input className='input w-[380px]' type="text" onChange={(event) => { setNewLanguage(event.target.value) }} />
                        <input type='submit' value="Add" className="btn ml-3 px-6 font-bold"/>
                        
                    </form>
                </div>
            </div>

    );
};

export default ListCard;