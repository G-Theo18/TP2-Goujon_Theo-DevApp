import { Feather } from "@expo/vector-icons";
import { useEffect, type FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from "react-native-reanimated";

type Props = {
  /**
   * Si la case est cochée ou non
   */
  checked: boolean,

  /**
   * Callback appelé lorsque la case est cochée ou décochée
   */
  onValueChange?: (checked: boolean) => void,

  /**
   * Définit la taille de la checkbox. 
   * @default 20
   */
  size?: number,

  /**
   * Desactive ou non la case à cochée. Utile lors d'un chargement.
   * @default false
   */
  disabled?: boolean
}

/**
 * Case à cocher
 */
export const Checkbox: FC<Props> = function ({
  checked,
  onValueChange,
  size = 20,
  disabled = false
}) {
  // Valeurs de base des animations
  const checkedStatus = useSharedValue<boolean>(checked);
  const bgColor = useSharedValue(checked ? 1 : 0);

  // Déclenche l'animation du fond de la case à cocher lorsque "checked" change de valeur
  useEffect(() => {
    checkedStatus.value = checked;
    bgColor.value = withTiming(checked ? 1 : 0, {
      duration: 180,
      easing: Easing.inOut(Easing.quad)
    });
  }, [checked]);

  // Styles animés de l'icône de la case à cocher
  const iconAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(checkedStatus.value ? 1 : 0.4, {
          stiffness: 300
        })
      }
    ],
    opacity: withTiming(checkedStatus.value ? 1 : 0, {
      duration: 150
    })
  }));

  // Styles animés du fond de la case à cocher
  const backgroundAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      bgColor.value,
      [0, 1],
      ["#F0F0F0", "#0AF"]
    ),
    borderColor: interpolateColor(
      bgColor.value,
      [0, 1],
      ["#888", "#0AF"]
    )
  }));

  const handlePress = () => {
    if (!disabled) onValueChange?.(!checked);
  };

  return (
    <Pressable
      accessibilityRole="checkbox"
      disabled={disabled}
      accessibilityState={{ checked }}
      onPress={handlePress}
      style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
    >
      <Animated.View
        style={[
          styles.checkbox,
          {
            width: size,
            height: size,
            borderRadius: size * 0.25,
            borderWidth: size * 0.12
          },
          backgroundAnimatedStyles
        ]}
      >
        <Animated.View style={iconAnimatedStyles}>
          <Feather
            name="check"
            color="#FFF"
            size={size * 0.65}
            strokeWidth={3}
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    justifyContent: "center",
    alignItems: "center"
  }
});