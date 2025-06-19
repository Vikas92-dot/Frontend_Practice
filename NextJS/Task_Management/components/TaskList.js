import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks yet.</p>}
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}