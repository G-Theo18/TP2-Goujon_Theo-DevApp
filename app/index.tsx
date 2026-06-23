import { AppBarButton } from "@/lib/components/app-bar-button";
import { TaskItem } from "@/lib/components/task-item";
import { getTasks, toggleTask } from "@/lib/database";
import { TaskItemData } from "@/lib/types";
import { Feather } from "@expo/vector-icons";
import { router, Stack, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [tasks, setTasks] = useState<TaskItemData[]>([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const all = getTasks();
      setTasks(showCompleted ? all : all.filter((t) => !t.completed));
    }, [showCompleted])
  );

  const handleChange = useCallback(
    (task: TaskItemData, completed: boolean) => {
      toggleTask(task.id, completed);
      const all = getTasks();
      setTasks(showCompleted ? all : all.filter((t) => !t.completed));
    },
    [showCompleted]
  );

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
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onChange={(completed) => handleChange(item, completed)}
            />
          )}
        />

        <View style={styles.appBar}>
          <AppBarButton onPress={() => router.push("/settings/settings")}>
            <Feather name="settings" size={24} color="#0AF" />
          </AppBarButton>

          <AppBarButton size="lg" onPress={() => router.push("/modals/addTask")}>
            <Feather name="plus" size={30} color="#0AF" />
          </AppBarButton>

          <AppBarButton onPress={() => setShowCompleted((prev) => !prev)}>
            <Feather
              name={showCompleted ? "eye" : "eye-off"}
              size={24}
              color="#0AF"
            />
          </AppBarButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, paddingBottom: 100 },
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