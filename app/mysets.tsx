import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { Image, StyleSheet } from "react-native";

const MySets = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        perspiciatis repellat nobis assumenda quidem autem provident corrupti
        repellendus voluptates possimus aut, eligendi incidunt rerum vitae optio
        corporis iste veniam recusandae.
      </ThemedText>
      <Image
        style={styles.image}
        source={require("@/assets/images/chart-placeholder.png")}
      ></Image>
    </ThemedView>
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
});
