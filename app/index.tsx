import { AppBarButton } from "@/lib/components/app-bar-button";
import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Liste de tâches",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: "#0AF",
          },
        }}
      />

      <View style={styles.container}>
        {/* Liste de tâches*/}

        <View style={styles.appBar}>
          <AppBarButton onPress={() => router.push("/settings/settings")}>
            <Feather name="settings" size={24} color="#0AF" />
          </AppBarButton>

          <AppBarButton size="lg" onPress={() => router.push("/modals/addTask")}>
            <Feather name="plus" size={30} color="#0AF" />
          </AppBarButton>

          {/* Temporaire, à changer pour l'appui prolongé d'une tâche*/}
          <AppBarButton onPress={() => router.push("/modals/ViewTask")}>
            <Feather name="eye" size={24} color="#0AF" />
          </AppBarButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
});