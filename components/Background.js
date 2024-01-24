import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

export default function BackGround(props) {

    let {children}=props
  return (
    <View>

    <ImageBackground  source={require("../assets/images/loginBackImg.png")} style={{height:780}}  />
        <View style={{position:'absolute'}}>
            {children}
        </View>
        
    </View>
    
  )
}