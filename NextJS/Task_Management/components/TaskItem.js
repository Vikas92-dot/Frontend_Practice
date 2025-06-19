export default function TaskItem({ task, index, toggleComplete, deleteTask }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {index + 1}. {task.title}
      </h3>
      <p>{task.desc}</p>
      <button onClick={() => toggleComplete(index)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}