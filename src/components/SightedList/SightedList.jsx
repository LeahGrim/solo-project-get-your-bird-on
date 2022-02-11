import "./SightedList.css"
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";


function SightedList (){
    const list = useSelector(store => store.clientList);
    console.log('list is', list);
  //setup dispatch
  const dispatch = useDispatch();


    useEffect(()=> {
        dispatch({
          type: 'FETCH_CLIENT_LIST'
        });
        dispatch({
          type: 'FETCH_COMMON_NAMES'
        });
      }, [])

    return (
        <>
        
        </>
    )
}

export default SightedList; 