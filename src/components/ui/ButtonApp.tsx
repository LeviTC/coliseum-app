import { Pressable, Text, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "outline";
  className?: string;
}

export function ButtonApp({
  title,
  onPress,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseButton = "rounded-lg px-4 py-4 items-center active:opacity-70";
  const variantButton =
    variant === "outline"
      ? "bg-transparent border border-[#00FF87]"
      : "bg-[#00FF87]";

  const textClass =
    variant === "outline"
      ? "text-[#00FF87] font-bold text-base"
      : "text-black font-bold text-base";

  return (
    <Pressable
      className={`${baseButton} ${variantButton} ${className ?? ""}`}
      onPress={onPress}
    >
      <Text className={textClass}>{title}</Text>
    </Pressable>
  );
}
