import { TextInput, StyleSheet, TextInputProps } from "react-native";

type InputProps = TextInputProps;

export function Input({ style, placeholderTextColor, ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor || "#555"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#111",
    color: "#fff",
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#222",
  },
});
