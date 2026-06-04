import { View,Text } from "react-native";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{fontSize: 30,fontWeight: "bold",}}>Explorer</Text>

      <Text style={{ color: "gray", marginTop: 10 }}>
        Découvrez votre prochaine passion
      </Text>
    </View>
  );
}