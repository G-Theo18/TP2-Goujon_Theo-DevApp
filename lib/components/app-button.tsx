import type { FC } from "react";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const AppButton: FC<Props> = ({ label, onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.pressed,
      ]}
      onPress={() => {
        console.log("Button Pressed");
        onPress && onPress();
      }}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0AF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.8,
  },
  label: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});