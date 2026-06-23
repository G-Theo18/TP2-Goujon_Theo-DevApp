import { AppButton } from "@/lib/components/app-button";
import { MultilineTextField } from "@/lib/components/multiline-text-field";
import { TextField } from "@/lib/components/text-field";
import { getTaskById, updateTask } from "@/lib/database";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

export default function EditTaskModal() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();

  const id = Number(params.id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Charge la tâche à modifier
  useEffect(() => {
    if (!id) return;

    const task = getTaskById(id);
    if (task) {
      setTitle(task.title);
      setDescription(task.description ?? "");
    }
  }, [id]);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert("Erreur", "Le titre ne peut pas être vide.");
      return;
    }

    updateTask(id, title, description);
    Alert.alert("Succès", "La tâche a été mise à jour.");
    router.back();
  };

  return (
    <View style={styles.container}>

      <TextField
        placeholder="Nom de la tâche..."
        value={title}
        onChangeText={setTitle}
        color="#000"
      />

      <MultilineTextField
        placeholder="Description..."
        value={description}
        onChangeText={setDescription}
        color="#000"
      />

      <AppButton label="Sauvegarder" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    gap: 20,
    backgroundColor: "#FFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0AF",
    textAlign: "center",
    marginBottom: 10,
  },
});

