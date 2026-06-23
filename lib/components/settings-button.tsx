import { useAdaptiveColors } from "@/lib/hooks/use-adaptive-colors";
import { Feather } from "@expo/vector-icons";
import { ComponentRef, forwardRef, type ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";

type Props = {
  /**
   * La couleur du bouton
   */
  color?: string;

  /**
   * Le texte qui sera affiché pour le bouton
   */
  label: string;

  /**
   * Un icon optionel. Reçoit la couleur en paramètre.
   */
  icon?: (color: string) => ReactNode;

  /**
   * Callback appelé lors d'une pression sur le bouton
   */
  onPress?: () => void;
};

/**
 * Bouton de l'écran de paramètres
 */
const SettingsButton = forwardRef<ComponentRef<typeof Pressable>, Props>(
  function ({ color, icon, label, ...rest }, ref) {
    const colors = useAdaptiveColors();
    if (!color) color = colors.text;

    const pressed = useSharedValue<boolean>(false);

    const animatedStyles = useAnimatedStyle(() => ({
      opacity: withTiming(pressed.value ? 0.6 : 1, {
        easing: Easing.inOut(Easing.quad),
        duration: 120
      }),
      transform: [{ scale: withSpring(pressed.value ? 0.985 : 1) }]
    }));

    return (
      <Pressable
        ref={ref}
        {...rest}
        onPress={() => rest?.onPress?.()}
        onPressIn={() => (pressed.value = true)}
        onPressOut={() => (pressed.value = false)}
      >
        <Animated.View style={[styles.button, animatedStyles]}>
          <View style={styles.left}>
            {icon && <View style={styles.icon}>{icon(color)}</View>}
            <Text style={[styles.label, { color }]}>{label}</Text>
          </View>

          <Feather name="chevron-right" size={18} color={color} />
        </Animated.View>

        <View style={styles.separator} />
      </Pressable>
    );
  }
);

SettingsButton.displayName = "SettingsButton";
export { SettingsButton };

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFF",
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  icon: {
    width: 26,
    alignItems: "center"
  },

  label: {
    fontSize: 17,
    fontWeight: "600"
  },

  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginLeft: 16
  }
});