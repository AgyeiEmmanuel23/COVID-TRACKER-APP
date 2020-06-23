import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Animated} from 'react-native';




class ImageLoader extends Component{

  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity,{
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();

  }

  render(){
    return (

      <Animated.Image
       onLoad = {this.onLoad}
       {...this.props}     
       
       style = {
         [
           {
             opacity: this.state.opacity,
             transform: [
               {
                 scale: this.state.opacity.interpolate({

                  inputRange: [0,1],
                  outputRange: [0.85, 1]
                 })
               }
             ]
           },
           this.props.style,
         ]
       }
      
      />
    )
  }
}






export default function App() {

  // constructor(props){

  //   super();

  //   this.state = {
  //     fadevalue: new Animated.Value(0),
  //   }

    onLoad = () => {
      Animated.timing(this.state.fadevalue,{
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }).start();
  }
  return (
    <View style={styles.container}>

      <ImageLoader
      style = {styles.image}
      source = {require("./assets/image.png")} />
      

      <ImageLoader text = "Fellow Ghanaians!" />
      <ImageLoader text = "These are not ordinary times" />
      <ImageLoader text = "Our very existence is being" />
    </View>

    

    // <View><Text>Fellow Ghanaians!</Text></View>
    // <View><Text>These are not ordinary times</Text></View>
    // <View><Text>Our very existence is being</Text></View>
    // <View><Text>threatened by COVID-19</Text></View>
    // <View><Text>The Ghana Health Service</Text></View>
    // <View><Text>needs your help!!!</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
   backgroundColor: '#fff',
    alignItems: 'center', 
    
    
  },
  image: {

    height: 200,
    width: 200,
    borderRadius: 1
    
  }
});
