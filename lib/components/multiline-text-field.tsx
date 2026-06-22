import { FC, useMemo } from "react";
import { TextInput, View } from "react-native";
import { useAdaptiveColors } from "../hooks/use-adaptive-colors";
import { FieldErrors } from "./field-errors";
import { buildInputStyles, InputProps } from "./text-field";

/**
 * Un champ de formulaire multiligne
 */
export const MultilineTextField: FC<InputProps> = function({disabled, value, onChangeText, errors, placeholder, backgroundColor, color}) {
  const styles = useMemo(() => buildInputStyles(backgroundColor, color), [backgroundColor, color]);
  const colors = useAdaptiveColors();

  return <View style={styles.inputContainer}>
    <TextInput
      style={[styles.inputField, {height: 100}]}
      placeholder={placeholder}
      numberOfLines={4}
      textAlignVertical="top"
      multiline
      editable={!disabled}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.placeholderText}
    />
    {errors && <FieldErrors errors={errors} />}
  </View>
}