import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ButtonApp } from '../../src/components/ui/ButtonApp';
import { Link, useRouter } from 'expo-router';
import { Input } from '../../src/components/ui/Input';

export default function LoginScreen() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coliseum</Text>
      <Text style={styles.subtitle}>Sign in</Text>

      <View
        style={{gap: 20}}
      >
        <Input
          placeholder="Username or e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel='email'
        />
        <Input
          placeholder="Password"
          accessibilityLabel='password'
          secureTextEntry
        />

        <ButtonApp title='Join' onPress={() => router.navigate("/(tabs)")}/>

      </View>

      <Link
        href="/register"
        style={{
          marginTop: 40
        }}
        children={
          <Text style={styles.register}>
            Don't have an account?{' '}
            <Text style={styles.registerHighlight}>Sign up</Text>
          </Text>
        }
      >
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    color: '#00FF87',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  register: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  registerHighlight: {
    color: '#00FF87',
    fontWeight: 'bold',
  },
});