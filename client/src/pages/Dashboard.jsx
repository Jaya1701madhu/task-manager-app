import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await API.get("/tasks", {
      headers: {
        authorization: token,
      },
    });

    setTasks(res.data);
  };

  const createTask = async () => {
    if (!title.trim()) return;

    await API.post(
      "/tasks",
      {
        title,
        stage: "Todo",
      },
      {
        headers: {
          authorization: token,
        },
      },
    );

    setTitle("");
    fetchTasks();
  };

  const updateTask = async (id, stage) => {
    await API.put(
      `/tasks/${id}`,
      { stage },
      {
        headers: {
          authorization: token,
        },
      },
    );

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`, {
      headers: {
        authorization: token,
      },
    });

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      <button onClick={logout}>Logout</button>

      <br />
      <br />

      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createTask}>Add Task</button>

      <hr />

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Todo */}
        <div
          style={{
            flex: 1,
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <h2>Todo</h2>

          {tasks
            .filter((task) => task.stage === "Todo")
            .map((task) => (
              <div key={task._id}>
                <h4>{task.title}</h4>

                <button onClick={() => updateTask(task._id, "In Progress")}>
                  Move to In Progress
                </button>

                <button onClick={() => deleteTask(task._id)}>Delete</button>

                <hr />
              </div>
            ))}
        </div>

        {/* In Progress */}
        <div
          style={{
            flex: 1,
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <h2>In Progress</h2>

          {tasks
            .filter((task) => task.stage === "In Progress")
            .map((task) => (
              <div key={task._id}>
                <h4>{task.title}</h4>

                <button onClick={() => updateTask(task._id, "Done")}>
                  Move to Done
                </button>

                <button onClick={() => deleteTask(task._id)}>Delete</button>

                <hr />
              </div>
            ))}
        </div>

        {/* Done */}
        <div
          style={{
            flex: 1,
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <h2>Done</h2>

          {tasks
            .filter((task) => task.stage === "Done")
            .map((task) => (
              <div key={task._id}>
                <h4>{task.title}</h4>

                <button onClick={() => deleteTask(task._id)}>Delete</button>

                <hr />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
