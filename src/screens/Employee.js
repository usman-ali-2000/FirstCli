import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import { useTheme } from "../Theme/ThemeContext";
import FlatItem from "../components/FlatItem";


export default function Home(){

    const theme = useTheme();

    const [userData, setUserData] = useState([]);
    const [found, setFound] = useState([]);
    const [text, setText] = useState('');

    const Api_url = 'https://dummy.restapiexample.com/api/v1/employees';

    const fetchData= async()=>{
        const response = await fetch(Api_url);
        const json = await response.json();
        console.log('json:', json.data);
        setUserData(json.data);
        setFound(json.data);
    }

    const filterData =(text)=>{
        const filteredData = userData.filter((item)=> item.employee_name.toLowerCase().includes(text));
        setFound(filteredData);
        console.log('filter:', filteredData);
    }

    const handleText=(txt)=>{
      setText(txt);
      filterData(txt);
    }

      useEffect(()=>{
        fetchData();
      },[]);


    return(
        <View style={{
            height:'100%', 
            width:'100%', 
            flexDirection:'column', 
            alignItems:'center',
            backgroundColor: theme.colors.white,
            }}>
            <View style={{
                width:'100%',
                padding:10
            }}>
            <Header text={"Employee"}/>
            </View>
            <View style={{
                width:'100%',
                padding:10
            }}>
            <Search value={text} onChange={handleText}/>
            </View>
            <FlatList
            data={found}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return(
            <View style={{
                width:'100%',
                padding:10
            }}>
            <FlatItem image={'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp'}
            name={item.employee_name}
            email = {'jensonjoy@gmail.com'}
            age={item.employee_age}
            salary={item.employee_salary}
            />
            </View>
                )
            }}
            />
        </View>
    )
}