import { SettingsButton } from "@/lib/components/settings-button";
import { deleteAllTasks, insertTestTasks } from "@/lib/database";
import { Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Alert, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const handleInsertTests = () => {
    const ok = insertTestTasks();

    if (ok) {
      Alert.alert("Succès", "Les données de test ont été insérées.");
    } else {
      Alert.alert("Échec", "Les données de test sont déjà présentes.");
    }
  };

  const handleClearDB = () => {
    deleteAllTasks();
    Alert.alert("Base vidée", "Toutes les tâches ont été supprimées.");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Paramètres",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: "#0AF",
          },
          headerBackButtonDisplayMode: "minimal",
        }}
      />

      <View style={styles.page}>
        {/* Bouton : insérer données de test */}
        <View style={styles.card}>
          <SettingsButton
            label="Insérer des données de test"
            icon={() => <Feather name="database" size={18} color="#000" />}
            color="#000"
            onPress={handleInsertTests}
          />
        </View>

        {/* Bouton : vider la base */}
        <View style={styles.card}>
          <SettingsButton
            label="Vider la base de données"
            icon={() => <Feather name="trash-2" size={18} color="red" />}
            color="red"
            onPress={handleClearDB}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F5F5F7",
    padding: 16,
    gap: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
});