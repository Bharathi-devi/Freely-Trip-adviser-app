
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import TripList from './screens/Trips/TripList';
import colorsapp from './assets/colors';
import { Provider } from 'react-redux';
import store from './screens/redux/reduxstore'

export default function App() {

  const [showList, setshowList] = useState(false)


  return (
    <Provider store={store}>
      <View style={styles.containerapp}>
        {!showList ? <Button title='load Trip list' onPress={() => { setshowList(true) }} />
          : <View>
            <TripList />
          </View>}

      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  containerapp: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: colorsapp.SCREEN_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
