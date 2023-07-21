import "./style.css";
import { v4 as uuid } from "uuid";
import Task from "./interfaces/task";

// by default the elements are html element so they will be showing element | null

const list = document.querySelector<HTMLUListElement>("#list");
const taskForm = document.querySelector<HTMLFormElement>("#task-form");

// if using getElementById
const input = document.getElementById("task-title") as HTMLInputElement;

const tasks: Task[] = loadTasks();
console.log(tasks);

tasks.forEach(addListItem)

taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value === "" || input?.value === null) return;

  const task: Task = {
    id: uuid(),
    completed: false,
    title: input.value,
    createdAt: new Date(),
  };
  tasks.push(task);
  addListItem(task);
  saveTasks()
  input.value = "";
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    console.log(task);
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const tasks = localStorage.getItem("TASKS");
  if (tasks == null) return [];
  return JSON.parse(tasks);
}
