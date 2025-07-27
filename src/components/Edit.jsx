import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Edit() {
    const navigate = useNavigate();
    const {id} = useParams()
    console.log(id)

   
    const [name, setName] = useState('')
    useEffect(() =>{
        axios.get(`https://todo-backend-bace.vercel.app/api/tasks/${id}`)
        .then((res) =>{
            setName(res.data.task)
            console.log(res.data.task)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[id]) 

    const updateTask = async() =>{
        console.log(name)
        console.log(id)
        try {
            await axios.put(`https://todo-backend-bace.vercel.app/api/tasks/${id}`,{task:name})
            navigate('/');
            console.log("done")

            
        } catch (error) {
            console.log('ere')
            
        }
    }

  return (
    <div>
        <h1>Edit the task</h1>
        <input type="text"  value = {name} onChange = {(e) =>setName(e.target.value)}/>
        <button onClick={updateTask}>update</button>
        
        


    </div>
  )
}
