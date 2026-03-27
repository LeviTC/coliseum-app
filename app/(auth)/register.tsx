import { View, Text, StyleSheet } from "react-native";
import { ButtonApp } from "../../src/components/ui/ButtonApp";
import { Link, useRouter } from "expo-router";
import { Input } from "../../src/components/ui/Input";

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coliseum</Text>
      <Text style={styles.subtitle}>Sign up</Text>

      <View style={{ gap: 20 }}>
        <Input
          placeholder="Username or e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="email"
        />
        <Input
          placeholder="Password"
          accessibilityLabel="password"
          secureTextEntry
        />

        <Input
          placeholder="Confirm password"
          accessibilityLabel="password"
          secureTextEntry
        />

        <ButtonApp title="Sign up" onPress={() => router.navigate("/(tabs)")} />
      </View>

      <Link
        href="/login"
        style={{
          marginTop: 40,
        }}
      >
        <Text style={styles.register}>
          Already have an account?{" "}
          <Text style={styles.loginHighlight}>Sign in</Text>
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    color: "#00FF87",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  register: {
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
  loginHighlight: {
    color: "#00FF87",
    fontWeight: "bold",
  },
});
