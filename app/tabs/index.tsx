import { useEffect, useState } from "react";
import { useRouter } from "expo-router";




import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { fetchSport } from "../../services/api";

export default function Home() {
  const router = useRouter();
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


  const renderDetails = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => router.push(`/details/detailsSport?id=${item.id}`)}>
      <View
    
        style={{
         
          padding: 15,
          borderRadius: 12,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "red",
          }}
        >
          {item.name}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );

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
    <View style={{ flex: 1, padding: 20 }}>
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

      <FlatList
        data={sports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDetails}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "gray",
  },
});








