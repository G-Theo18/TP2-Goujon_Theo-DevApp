import { View } from "react-native";
import { AppBarButton } from "@/lib/components/app-bar-button";
import { Feather } from "@expo/vector-icons"
import { useAdaptiveColors } from "@/lib/hooks/use-adaptive-colors";

export function AppBarButtonDemo() {
  const colors = useAdaptiveColors();

  return <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", flex: 1 }}>
    <AppBarButton>
      <Feather name="box" size={18} color={colors.icon} />
    </AppBarButton>

    <AppBarButton size="lg">
      <Feather name="box" size={22} color={colors.icon} />
    </AppBarButton>
  </View>
}