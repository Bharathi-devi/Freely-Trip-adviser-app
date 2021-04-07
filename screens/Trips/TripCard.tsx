import React, {useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, AppState, TouchableOpacity } from 'react-native';
import  colorsapp from '../../assets/colors';
import { Card } from 'react-native-elements';


export default function TripCard(props)
{
    const item= props.item

    
    const getBGColor = () =>item.status == 'NOT_STARTED' && setbgColor(colorsapp.TRIP_CARD_BACKGROUND_HIGHLIGHTED);
    const [appState, setAppState]=useState(AppState.currentState)
    const [bgColor, setbgColor]=useState(colorsapp.TRIP_CARD_BACKGROUND)
   
    useEffect(()=>{
    AppState.addEventListener('change', appStateChangeHandler);   
 
     },[])

     const appStateChangeHandler = (nextAppState) => {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        
        getBGColor()
        
      }
      setAppState(nextAppState);
    }
    
    return (
      <View>
        <TouchableOpacity onPress={()=>{}}>
          <Card containerStyle={[styles.card, {backgroundColor: bgColor }]}>
          <Text style={[styles.nameText, styles.pad]}>Name: {item.name}</Text>
          <Text style={[styles.dateText, styles.pad]}>Start Date: { new Date(item.startDate).toDateString()}</Text>
          <Text style={[styles.dateText, styles.pad]}>End Date: {new Date(item.startDate).toDateString()}</Text>
          <Text style={[styles.fontds, styles.pad]}>Destinations: {item.destinations.join(',')}</Text>
          
          
          <Text style={[styles.status, styles.pad]}>status: {item.status} </Text>
          </Card>
        </TouchableOpacity> 
        </View>
    )
}
 
const styles= StyleSheet.create(
  {
    card:
    {
      //   flex:1,
        // flexDirection:'row',
        padding: 10,
        //backgroundColor: colorsapp.TRIP_CARD_BACKGROUND,
        justifyContent: 'center',
        marginBottom: 10,
        fontFamily: 'SF-PRO-Display'
        
    },
    nameText:
  {  fontFamily: 'SF-PRO-Display',
      fontSize: 20,
      fontWeight: 'bold'
  },
  dateText:
  {   fontFamily: 'SF-PRO-Display',
      fontSize:16,
      fontWeight: 'normal'
  },
 fontds :{
  fontFamily: 'SF-PRO-Display',
    fontSize:12,
    fontWeight: 'normal'
 },
 status :{
  fontFamily: 'SF-PRO-Display',
     fontSize: 12,
     fontWeight: 'bold'
 },
  pad:
  {
    padding:5
  }


  }
)
