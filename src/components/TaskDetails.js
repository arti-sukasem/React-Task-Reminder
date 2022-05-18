import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import Button from './Button'

const TaskDetails = ({tasks}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    const taskId = params.id - 1
    const task = tasks[taskId]

    
    // (task === undefined) ? setLoading(true) : setLoading(false)
    // const { pathname } = useLocation()

    // useEffect(() => {
    //     const fetchTask = async () => {
    //         const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
    //         const data =await res.json()

    //         if (res.status === 404){
    //             setError('Task not found')
    //         }
            
    //         setTasks(data)
    //         setLoading(false)
    //     }
    // })

    // if(error) {
    //     return(<navigate to='/React-Task-Reminder' />)
    // }

    return loading ? (
        <div>
        <h3>Loading...</h3>
        <Button text="Go back" onClick={() => {navigate('/React-Task-Reminder')}}/>
        </div>
    ) : (
        <div>
            {/* <p>{pathname}</p> */}
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button text="Go back" onClick={() => {navigate('/React-Task-Reminder')}}/>
        </div>
    )
}

export default TaskDetails