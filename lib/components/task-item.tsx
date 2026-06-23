import type { TaskItemData } from "@/lib/types";
import { useRouter } from "expo-router";
import { useEffect, type FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Checkbox } from "./checkbox";
import { TodoTitle } from "./task-title";

type Props = {
  /**
   * Les données de la tâche à afficher
   */
  task: TaskItemData;
  /**
   * Callback appelé lors d'une pression longue sur la tâche
   * @returns 
   */
  onLongPress?: () => void;
  /**
   * Callback appelé lorsque la tâche change de statut.
   * L'argment `completed` reflète l'état de la case à cocher.
   */
  onChange?: (completed: boolean) => void;
  /**
   * Utilisé pour bloquer les actions du composant lors d'un chargement par exemple 
   */
  disabled?: boolean;
};

/**
 * Affichage d'une tâche sur la page d'accueil
 */
export const TaskItem: FC<Props> = ({ task, onChange, disabled = false }) => {
  const router = useRouter();
  const completed = task.completed;

  // Gère l'animation de pression longue lorsque l'on reste appuyé sur la tâche et que cela ouvre l'écran d'édition
  const pressed = useSharedValue(false);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(pressed.value ? 0.6 : 1),
    transform: [{ scale: withTiming(pressed.value ? 0.95 : 1) }],
  }));

  const opacity = useSharedValue(completed ? 0.5 : 1);
  useEffect(() => {
    opacity.value = withTiming(completed ? 0.5 : 1);
  }, [completed]);

  return (
    <Pressable
      onPress={() => onChange?.(!completed)}
      onLongPress={() =>
        router.push({
          pathname: "/modals/editTask",
          params: { id: task.id },
        })
      }
      onPressIn={() => pressed.set(true)}
      onPressOut={() => pressed.set(false)}
      disabled={disabled}
    >
      <Animated.View style={[styles.card, animatedStyles]}>
        <Animated.View style={{ opacity }}>
          {/* Task Header */}
          <View style={styles.header}>
            {/* Case à cocher */}
            <Checkbox
              size={18}
              checked={completed}
              disabled={disabled}
              onValueChange={(v) => onChange?.(v)}
            />
            {/* Titre */}
            <TodoTitle title={task.title} completed={completed} />
          </View>

          {/* Task Description */}
          {task.description && (
            <View style={styles.descriptionContainer}>
              <Text
                style={[
                  styles.description,
                  completed && styles.descriptionCompleted,
                ]}
              >
                {task.description}
              </Text>
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  descriptionContainer: {
    marginTop: 8,
    marginLeft: 32,
  },
  description: {
    color: "#666",
    fontSize: 14,
  },
  descriptionCompleted: {
    color: "#888",
    fontStyle: "italic",
  },
});