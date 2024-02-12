import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "../Theme/ThemeContext";

export default function Header(props){

    const theme = useTheme();

    return(
        <View style={{width:'100%', height:50, flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10}}>
            <Image source={require('../assets/images/ArrowLeft.png')} style={{height:50, width:50}}/>
            <Text style={{fontSize:16, fontWeight:'400', color: theme.colors.black, fontFamily:theme.fonts.bold}}>{props.text}</Text>
            <Image source={require('../assets/images/Dots.png')} style={{height:50, width:50}}/>
        </View>
    )
}