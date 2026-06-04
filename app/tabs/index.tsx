
import { useEffect, useState } from "react";
import {
  View,
 Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { fetchSport } from "../../services/api";

export default function Home() {
  const [sports, setSports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSports();
  }, []);

  const loadSports = async () => {
    try {
      const data = await fetchSport();

      console.log("SPORTS:", data);

      setSports(data);
    } catch (error) {
      console.log("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
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
        <View
          key={sport.id}
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 12,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {sport.name}
          </Text>

          <Text>{sport.category}</Text>
        </View>
      ))}
    </ScrollView>
  );
}