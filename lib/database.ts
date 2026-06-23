import { TaskItemData } from "@/lib/types";
import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("tasks.db");

// Initialise la DB + ajoute les données de test si vide
export function initDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed INTEGER NOT NULL DEFAULT 0,
      created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
    );
  `);

  // Vérifie si la table est vide
  const count = db.getFirstSync<{ count: number }>(
    "SELECT COUNT(*) as count FROM tasks"
  )?.count;

  if (count === 0) {
    insertTestTasks();
  }
}

// Récupère toutes les tâches
export function getTasks(): TaskItemData[] {
  const rows = db.getAllSync<any>(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );

  return rows.map(row => ({
    ...row,
    completed: row.completed === 1
  }));
}

// Récupère une tâche par ID
export function getTaskById(id: number): TaskItemData | null {
  const row = db.getFirstSync<any>(
    "SELECT * FROM tasks WHERE id = ?",
    id
  );

  if (!row) return null;

  return {
    ...row,
    completed: row.completed === 1
  };
}

// Ajoute une tâche
export function addTask(title: string, description?: string): void {
  db.runSync(
    "INSERT INTO tasks (title, description) VALUES (?, ?)",
    title,
    description ?? null
  );
}

// Met à jour une tâche
export function updateTask(
  id: number,
  title: string,
  description?: string,
  completed?: boolean
): void {
  const old = getTaskById(id);

  db.runSync(
    "UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?",
    title,
    description ?? null,
    completed !== undefined
      ? completed ? 1 : 0
      : old?.completed ? 1 : 0,
    id
  );
}

// Toggle completed
export function toggleTask(id: number, completed: boolean): void {
  db.runSync(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    completed ? 1 : 0,
    id
  );
}

// Supprime toutes les tâches
export function deleteAllTasks(): void {
  db.execSync("DELETE FROM tasks");
}

// Insère les données de test
export function insertTestTasks(): boolean {
  const count = db.getFirstSync<{ count: number }>(
    "SELECT COUNT(*) as count FROM tasks"
  )?.count;

  if (count && count > 0) {
    return false;
  }

  const tests = [
    ["Faire les courses", "Lait, pain, oeufs"],
    ["Apprendre React Native", "Finir le TP2"],
    ["Appeler le médecin", null],
    ["Envoyer le rapport", "Deadline avant vendredi"],
    ["Préparer le repas", "Pâtes carbonara ou salade"],
    ["Réviser les cours", "Chapitre 3 + exercices"],
    ["Faire du sport", "30 minutes de cardio"],
    ["Planifier la semaine", "Objectifs + tâches importantes"],
    ["Lire un chapitre", "Livre en cours"],
    ["Arroser les plantes", null],
  ];

  for (const [title, description] of tests) {
    db.runSync(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      title,
      description
    );
  }

  return true;
}