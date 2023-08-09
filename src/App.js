import { useState, useEffect } from 'react'
import ShowTaskList from "./components/TaskList"
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import './App.css'
import './index.css'
function App() {
  const [taskList, setTask] = useState(JSON.parse(localStorage.getItem("taskList")) || [])

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTask} />
      <ShowTaskList taskList={taskList} setTaskList={setTask} />

    </div>
  );
}

export default App;
