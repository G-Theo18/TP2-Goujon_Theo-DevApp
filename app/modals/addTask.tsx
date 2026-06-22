import { AppButton } from "@/lib/components/app-button";
import { MultilineTextField } from "@/lib/components/multiline-text-field";
import { TextField } from "@/lib/components/text-field";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function AddTaskModal() {
    const [description, setDescription] = useState("");

    return (
        <View style={styles.container}>
            <TextField
                placeholder="Nom de la tâche..."
                value={description}
                onChangeText={setDescription}
                color="#000"
            />

            <MultilineTextField
                placeholder="Description..."
                value={description}
                onChangeText={setDescription}
                color="#000"
            />

            <AppButton
                label="Sauvegarder"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        gap: 20
    },
});