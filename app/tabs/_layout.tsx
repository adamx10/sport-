import { Tabs} from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
      name="index"
      options={{
        title:"Home",
        tabBarIcon: ({color , size}) => (
          <Entypo name="home" size={24} color="black" />

        ),
      }}/>

        <Tabs.Screen
      name="favorite"
      options={{
        title:"fav",
        tabBarIcon: ({color , size}) => (
          <MaterialIcons name="favorite" size={24} color="black" />

        ),
      }}/>

    </Tabs>
  
  )
  

}

