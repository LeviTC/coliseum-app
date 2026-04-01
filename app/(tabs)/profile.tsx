import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatar}>
          <AntDesign name="user" size={40} color="#555555" />
        </View>

        <Text style={styles.username}>Username</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    marginTop: 40,
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 160,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#00FF87",
  },
  username: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});
