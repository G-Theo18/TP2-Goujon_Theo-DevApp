import { initDatabase } from "@/lib/database";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Stack>
      {/* Écran principal */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Liste de tâches",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: "#0AF",
          },
        }}
      />

      {/* Modal : Ajouter une tâche */}
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

      {/* Modal : Modifier une tâche */}
      <Stack.Screen
        name="modals/editTask"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.4],
          sheetGrabberVisible: true,
          title: "Modifier la tâche",
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