import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../../src/components/ui/Button';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coliseum</Text>
      <Text style={styles.subtitle}>Inicia sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#555"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#555"
        secureTextEntry
      />

      <Button title='Entrar' onPress={() => router.navigate("/(tabs)")}/>

      <TouchableOpacity>
        <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: '#111',
    color: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#222',
  },
  button: {
    backgroundColor: '#00FF87',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  register: {
    color: '#555',
    textAlign: 'center',
    fontSize: 14,
  },
});