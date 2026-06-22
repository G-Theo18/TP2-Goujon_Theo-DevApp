import { View } from "react-native";
import { SettingsButton } from "../settings-button";
import {Feather} from "@expo/vector-icons"

export function SettingsButtonDemo() {
  return <View>
    <SettingsButton
      label={"Label"}
      icon={(color) => <Feather name="box" size={16} color={color} />}
      onPress={() => console.log("click")}
    />

    <SettingsButton
      label={"Label"}
      icon={(color) => <Feather name="box" size={16} color={color} />}
      onPress={() => console.log("click")}
      color={"red"}
    />
  </View>
}