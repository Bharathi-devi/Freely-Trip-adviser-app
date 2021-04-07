import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TripCard from './TripCard'
import { connect } from 'react-redux'
import { fetchFontFamily, fetchTrips } from '../redux/TripACtions'

import Spinner from 'react-native-loading-spinner-overlay';

function TripList({ data, fetchtripsList, fetchFontf}) {


  useEffect(() => {
    fetchFontf()
    setTimeout(
      fetchtripsList, 500)

  }, [])

  return (
    <View>

      {(data.loading) ? <Spinner
        visible={data.loading}
        textContent={'Loading...'} color='#6F7B7E'
        textStyle={styles.spinnerTextStyle} /> :
        <View>

          {data.list &&
            data.list.map((item) => { return <View key={item.id}><TripCard item={item}></TripCard></View> })}
        </View>}
    </View>
  )
}

const mapStateToProps = state => {
  console.log("map state", state);
  return {
    data: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchtripsList: () => dispatch(fetchTrips()),
    fetchFontf: () => dispatch(fetchFontFamily()),
  }
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 20
  },
  spinnerTextStyle: {
    flex: 1,
    color: '#111'

  }
})
export default connect(mapStateToProps, mapDispatchToProps)(TripList)