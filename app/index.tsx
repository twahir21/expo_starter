import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-secondary">
      <Text className="text-light-100">Twahir</Text>
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
