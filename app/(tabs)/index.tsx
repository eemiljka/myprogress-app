import { Image, Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
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
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">My sets</ThemedText>
          <ThemedText>
            Edit{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            to see changes. Press{" "}
            <ThemedText type="defaultSemiBold">
              {Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
                web: "F12",
              })}
            </ThemedText>{" "}
            to open developer tools.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Link href="/modal">
            <Link.Trigger>
              <ThemedText type="subtitle">My weight</ThemedText>
            </Link.Trigger>
            <Link.Preview />
            <Link.Menu>
              <Link.MenuAction
                title="Action"
                icon="cube"
                onPress={() => alert("Action pressed")}
              />
              <Link.MenuAction
                title="Share"
                icon="square.and.arrow.up"
                onPress={() => alert("Share pressed")}
              />
              <Link.Menu title="More" icon="ellipsis">
                <Link.MenuAction
                  title="Delete"
                  icon="trash"
                  destructive
                  onPress={() => alert("Delete pressed")}
                />
              </Link.Menu>
            </Link.Menu>
          </Link>

          <ThemedText>
            {`Tap the Explore tab to learn more about what's included in this starter app.`}
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
