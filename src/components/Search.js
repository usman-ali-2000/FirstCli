import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useTheme } from "../Theme/ThemeContext";


export default function Search(props){

    const theme = useTheme();

    return(
        <View style={{
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            padding:5,
            backgroundColor:theme.colors.background,
            borderRadius:10
        }}>
            <Image
             source={require('../assets/images/Search.png')}
             style={{
                height:14,
                width:14
             }} />
             <TextInput
             style={{
                paddingLeft:10,
                fontSize:15,
                fontWeight:'400',
             }}
             placeholderTextColor={theme.colors.grey}
             placeholder="Search Employee"
             value={props.value}
             onChangeText={props.onChange}
             />
        </View>
    )
}