import React,{useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import Animated from 'react-native-reanimated'
import { PanGestureHandler, State }  from 'react-native-gesture-handler'
// import { diffClamp, withOffset, onGestureEvent } from 'react-native-redash'

const App = () => {
  const { width, height} = Dimensions.get('window')
  const { Value, event } = Animated;
  const state = new Value(State.UNDETERMINED)
  const yOffset = new Value(40);
  const translateY = yOffset.interpolate({
    inputRange: [0,300],
    outputRange: [50,-300]
  })

  useEffect(()=>{
    console.log({translateY})
  },[translateY])

  const gestureHandler = event([{nativeEvent: {y: yOffset}}],{useNativeDriver: true})

  animatedStyle = {
    transform: [
      {translateY}
    ]
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
     
      </SafeAreaView>
        <PanGestureHandler
            {...{gestureHandler}}
            onHandlerStateChange={gestureHandler}
            >
            <Animated.View style={[styles.animatedView, animatedStyle ]}>
            </Animated.View>
            </PanGestureHandler> 
      </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor:'red',
    borderWidth: 1
  },
  animatedView:{
    height: 250, 
    backgroundColor:'black', 
    borderRadius: 13, 
    borderColor:'lime', 
    borderWidth: 1,
  }
 
});

export default App;
