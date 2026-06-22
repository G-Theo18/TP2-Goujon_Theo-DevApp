import { TaskItemData } from "@/lib/types";
import { TaskItem } from "@/lib/components/task-item";
import { useCallback, useState } from "react";

export function TaskItemDemo() {
  const [task, setTask] = useState<TaskItemData>({
    id: 0,
    title: "Titre de ma tâche",
    description: "Ma description", // Nullable
    completed: false
  });

  const handleChange = useCallback((completed: boolean) => {
    setTask(function (current) {
      return {
        ...current, 
        completed: completed
      }
    });
  }, []);

  return <TaskItem
    task={task}
    onChange={handleChange}
    onLongPress={() => console.log("Tâche long press")}
    disabled={false}
  />
}