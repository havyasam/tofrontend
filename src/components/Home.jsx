import axios from 'axios'

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/Home.css'

export default function Home() {
    const [tasks, setTask] = useState([])
    const [name, setName] = useState('')

    useEffect(() =>{
        axios.get('https://todo-backend-bace.vercel.app/api/tasks/')
        .then((res) =>{
            
            setTask(res.data)
            
        })
        .catch((err) =>{
            console.log(err)
        })
    },[])

    const deleteTask = async (taskID) =>{

        try {
            await axios.delete(`https://todo-backend-bace.vercel.app/api/tasks/${taskID}`)
            console.log("task deleted")
           
            setTask(tasks.filter(task => task._id !== taskID))
        } catch (error) {
            console.log(error)
            
        }
    }

    const createTask = async () => {
        try {
            console.log(name)
            const res = await axios.post('https://todo-backend-bace.vercel.app/api/tasks/',{task:name})
            console.log("getting")
            setTask([...tasks, res.data])
            setName('')
            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <>
        <h1>Task Manager</h1>

        <input type="text"  value = {name} onChange = {(e) =>setName(e.target.value)}/>
        <button onClick={createTask}>create</button>
        <ul>
            {tasks.map(list =>
                <li key = {list._id}>
                    <div className='main_container'>
                        <div className='list_container'>{list.task}</div>
                        <div className='right_buttons'>
                            <div>
                            <Link to={`/edit/${list._id}`}> <button>edit</button></Link>
                            </div>
                            <div> <button onClick={() =>deleteTask(list._id)}>delete</button> </div>
                        </div>
                    </div>
                </li>)}
        </ul>
       
    </>
  )
}

