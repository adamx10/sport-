import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useState, useEffect } from "react";
import apiData from "@/services/api"

export default function Details() {
       type Sport = {
        id: string;
        name: string;
        de: string;
       category:string;
        
        image: string;
        gallery: string;
        
        }
    const [data, setData] = useState<Sport[]>([])
    const { id } = useLocalSearchParams();
    console.log(id)

    useEffect(() => {
        async function getData(){
            const reasut = await apiData();
            setData(reasut)
        }; getData()
    }, [])

 


  const sport = data.find((item) => item.id === id);
    console.log(sport)
    if(!sport){
        return (
            <View>
                <Text>
                    no card
                </Text>
            </View>
        )
    }
  return (
   
        <View>
            
            
        </View>



    
  );
}



const styles = StyleSheet.create({
    ImagebackgroundStyle: {
        flex: 1,
        width: "100%",
        height: "100%",

    },
    cardStyle: {

    }

})

