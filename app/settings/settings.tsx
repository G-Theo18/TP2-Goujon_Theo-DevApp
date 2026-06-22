import { SettingsButton } from "@/lib/components/settings-button";
import { Feather } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SettingsScreen() {
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

            <View style={styles.container}>
                <SettingsButton
                    label="Insérer des données de test"
                    icon={(color) => <Feather name="user" size={16} color={color} />}
                />

                <SettingsButton
                    label="Vider la base de données"
                    icon={(color) => <Feather name="bell" size={16} color={color} />}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
    },
});