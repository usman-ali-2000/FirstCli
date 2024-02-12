import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "../Theme/ThemeContext";

export default function FlatItem(props){

    const theme = useTheme();

    return(
        <View style={{
            width:'100%',
            flexDirection:'row',
            alignItems:'center'
        }}>
            <Image source={{uri: props.image }} 
            style={{
               height:70, 
               width:69,           
               borderRadius:10
            }}/>
            <View style={{
                flexDirection:'column',
                padding:10,
                width:260
            }}>
            <Text style={{
                fontSize:14,
                fontFamily:theme.fonts.bold,
                fontWeight:'400',
                color:theme.colors.black,
                padding:5
            }}>{props.name}</Text>
            <Text style={{
                fontSize:10,
                fontFamily:theme.fonts.SemiBold,
                fontWeight:'400',
                color:theme.colors.grey,
                paddingLeft:5
            }}>{props.email}</Text>
            <Text style={{
                fontSize:10,
                fontFamily:theme.fonts.Regular,
                fontWeight:'400',
                color:theme.colors.black,
                padding:10
            }}>Age: {props.age}</Text>
            </View>
            <Text style={{
                fontSize:14,
                fontFamily:theme.fonts.bold,
                fontWeight:'400',
                color:theme.colors.black,
                padding:5,
            }}>{props.salary}/-</Text>
        </View>
    )
}