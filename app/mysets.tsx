import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { API_URL } from "../config";

interface Set {
  id: number;
  name: string;
  rep_range?: string;
}

const MySets = () => {
  const [sets, setSets] = useState<Set[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/mysets`)
      .then((res) => res.json())
      .then((data) => setSets(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ParallaxScrollView
      headerImage={<ThemedText style={styles.normTitle}>Sets</ThemedText>}
    >
      <ThemedView style={styles.card}>
        <FlatList
          data={sets}
          keyExtractor={(item, index) =>
            item?.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <ThemedText style={styles.cardTitle}>
              {item.name} {item.rep_range}
              {" reps"}
            </ThemedText>
          )}
        />
        <Image
          style={styles.image}
          source={require("@/assets/images/chart-placeholder.png")}
        ></Image>
      </ThemedView>
    </ParallaxScrollView>
  );
};

export default MySets;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 100,
    resizeMode: "contain",
  },
  text: { padding: 16 },
  cardTitle: {
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.15,
    // Elevation for android
    elevation: 4,
  },
  normTitle: {
    padding: 16,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
