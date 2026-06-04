import { useEffect, useState} from "react";
import { useRouter } from "expo-router"

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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 12,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "#ddd",
            }}
          >
              <Image
            source={{uri:item.image}} style={styles.image}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color:'red',
              }}
            >
              {item.name}
            </Text>

            <Text style={styles.category}>{item.category} </Text>
            <TouchableOpacity 
             onPress={() => router.push('.') } 
            ><Text style={styles.button}>adam</Text></TouchableOpacity>
          
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#DFC560', padding: 15 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#D3BA58', padding: 10, marginBottom: 10, borderRadius: 10 ,elevation:10},
  image: { width: 260, height: 160, borderRadius: 8 },
  category:{ backgroundColor:'#1E293B', width:60,color:'white',borderRadius:5},
 button: {backgroundColor:'#1E293B',color:'white', width:50,borderRadius:20,marginLeft:200,marginTop:-25,textAlign:'center'}
})