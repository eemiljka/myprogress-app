import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image
            source={require("@/assets/images/mp-logo.png")}
            style={{ width: "100%", height: 67, resizeMode: "contain" }}
          />
        }
      >
        <ThemedView style={styles.card}>
          <Link href={"/mysets"}>
            <ThemedText type="subtitle" style={styles.cardTitle}>
              My sets
            </ThemedText>
            <ThemedView style={styles.cardContentRow}>
              <ThemedText style={styles.cardDescription}>
                See your set progress here.
              </ThemedText>
              <Image
                style={styles.cardImage}
                source={require("@/assets/images/chart-placeholder.png")}
              ></Image>
            </ThemedView>
          </Link>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  cardTitle: {
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  cardContentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDescription: {
    flex: 1,
    marginRight: 12,
    fontSize: 16,
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 4,
  },
  stepContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 4,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
