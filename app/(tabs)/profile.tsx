import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="mt-10 items-center gap-4 px-5">
        <View className="h-40 w-40 items-center justify-center rounded-full border-2 border-primary">
          <AntDesign name="user" size={40} color="#555555" />
        </View>

        <Text className="text-2xl text-white">Username</Text>
      </View>
    </SafeAreaView>
  );
}
