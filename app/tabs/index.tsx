import { useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("https://6a1eeb33b79eec0d6cf046ed.mockapi.io/X10/sports")
      .then((res) => {
        console.log("DATA:", res.data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}