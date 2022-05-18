import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"
import TaskDetails from './components/TaskDetails'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) 
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 2th at 1:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Working on task reminder",
        day: "Feb 15th at 8:00am",
        reminder: true
      },
  ])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTasks()
  // }, [])

  // Fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  // Fetch task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Delete Task
  const deleteTask = (id) =>{ // async (id) =>{
    // await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'DELETE',

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // const taskToToggle = await fetchTask(id)
    // const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    // const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(updTask)
    // })

    // const data = await res.json()


    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder:!task.reminder} : task
      )
      )
  }

  // Add Task
  const addTask = async (task) => {
    // const res = await fetch(`http://localhost:5000/tasks/`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // }) 

    // const data = await res.json()

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, task])
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Routes>
        <Route path='/React-Task-Reminder/' 
        element={
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
            : ('No Task To Show')}
          </>
        } 
        />
        <Route path='/about' element={<About />}/>
        <Route path='/task/:id' element={<TaskDetails tasks={tasks} />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
