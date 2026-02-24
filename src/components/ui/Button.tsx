import { Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline';
}

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === 'outline' && styles.outline,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === 'outline' && styles.outlineText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00FF87',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00FF87',
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  outlineText: {
    color: '#00FF87',
  },
});