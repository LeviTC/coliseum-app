import {
  Pressable,
  Text,
  PressableProps,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from "react-native";

interface ButtonProps extends Omit<PressableProps, "style"> {
  title: string;
  variant?: "primary" | "outline";
  style?: StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
}

export function ButtonApp({ title, variant = "primary", style, ...props }: ButtonProps) {
  const isOutline = variant === "outline";

  return (
    <Pressable
      {...props}
      style={(state) => [
        styles.base,
        isOutline ? styles.outline : styles.primary,
        state.pressed && styles.pressed,
        typeof style === "function" ? style(state) : style,
      ]}
    >
      <Text style={[styles.textBase, isOutline ? styles.textOutline : styles.textPrimary]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: "#00FF87",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#00FF87",
  },
  textBase: {
    fontWeight: "700",
    fontSize: 16,
  },
  textPrimary: {
    color: "#000000",
  },
  textOutline: {
    color: "#00FF87",
  },
});
