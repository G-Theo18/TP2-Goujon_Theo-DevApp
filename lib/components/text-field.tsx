import { FC, useMemo } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useAdaptiveColors } from "../hooks/use-adaptive-colors";
import { FieldErrors } from "./field-errors";

export type InputProps = {
  /**
   * Indique si le champ est désactivé ou non
   */
  disabled?: boolean,

  /**
   * La valeur contenue dans le champ
   */
  value: string,

  /**
   * Callback appelé lors du changement de la valeur du champ
   * @param value
   * @returns
   */
  onChangeText: (value: string) => void,

  /**
   * Les messages d'erreurs qui seront affichés sous le champ
   */
  errors?: string[],

  /**
   * Le placeholder du champ
   */
  placeholder?: string,

  /**
   * La couleur d'arrière-plan du champ
   */
  backgroundColor?: string,

  /**
   * La couleur du texte du champ
   */
  color?: string,
}

/**
 * Un champ basique sur une ligne
 */
export const TextField: FC<InputProps> = function({disabled, value, onChangeText, errors, placeholder, backgroundColor, color}) {
  const styles = useMemo(() => buildInputStyles(backgroundColor, color), [backgroundColor, color]);
  const colors = useAdaptiveColors();

  return <View style={styles.inputContainer}>
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      editable={!disabled}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.placeholderText}
    />
    {errors && <FieldErrors errors={errors} />}
  </View>
}

export function buildInputStyles(backgroundColor: string = "#DDD", color: string = "#000") {
  return StyleSheet.create({
    inputField: {
      paddingVertical: 8,
      paddingHorizontal: 14,
      fontSize: 16,
      borderRadius: 8,
      backgroundColor,
      color,
    },
    inputContainer: {
    },
    inputLabel: {
      fontSize: 14,
      fontWeight: 400,
    },
  })
}