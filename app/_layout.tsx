import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="modals/addTask"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.4],
          sheetGrabberVisible: true,
          title: "Ajouter une tâche",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#0AF",
          },
        }}
      />
      <Stack.Screen
        name="modals/ViewTask"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.4],
          sheetGrabberVisible: true,
          title: "Ajouter une tâche",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#0AF",
          },
        }}
      />
    </Stack>
  );
}