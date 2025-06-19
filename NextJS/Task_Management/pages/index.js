import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}


// import Link from "next/link";

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: { users },
//   };
// }

// export default function Home({ users }) {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>User Directory</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link href={`/users/${user.id}`}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }