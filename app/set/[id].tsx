import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

interface Set {
  id: number;
  name: string;
  rep_range?: string;
}

export default function SetPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [set, setSet] = useState<Set | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/mysets/${id}`)
      .then((res) => res.json())
      .then((data) => setSet(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!set) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return (
    <ParallaxScrollView headerImage={<ThemedText>{set?.name}</ThemedText>}>
      <ThemedText>Set ID: {id}</ThemedText>
      <ThemedText>Rep Range: {set?.rep_range}</ThemedText>
    </ParallaxScrollView>
  );
}
