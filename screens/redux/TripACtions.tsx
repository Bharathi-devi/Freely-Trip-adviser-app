import {FETCH_DATA, FETCH_FONT } from './actionTypes'
import customData from '../../trip.list.json';
import * as Font from 'expo-font'



export const fetchData= (trips) =>
{
    return {type: FETCH_DATA,
             payload: trips}
}

export const fetchFont= () =>
{
    return {type: FETCH_FONT}
            
}

export const fetchTrips= ()=>
{
return(dispatch) =>{
    const trips= customData;
        dispatch(fetchData(trips))
    
}}

export const fetchFontFamily = () =>{
    return (dispatch) =>{
        Font.loadAsync({
            'SF-PRO-Display': require('../../assets/SFProDisplay-Regular.ttf')
            
          });
          dispatch(fetchFont);
    }
}



