import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import  fetchSport  from "../../services/api";

export default function Home() {
  const [sports, setSports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSports();
  }, []);

  const loadSports = async () => {
    try {
      const { data } = await fetchSport("sports");

      console.log(data);

      setSports(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
        }}
      >
        Explorer
      </Text>

      <Text
        style={{
          color: "gray",
          marginBottom: 20,
        }}
      >
        Découvrez votre prochaine passion
      </Text>

      {sports.map((sport) => (
        <Text
          key={sport.id}
          style={{
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          {sport.name}
        </Text>
      ))}
    </View>
  );
}