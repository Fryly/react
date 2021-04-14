import React from 'react'
import axios from 'axios'
import { useAuth } from '../../hooks/auth.hook';
import { useHistory } from 'react-router';
import { Sidebar, TodoTask } from '../index';


function Main() {
      const hist = useHistory()
      const [folder, setFolder] = React.useState([])
      const [idFolder, setId] = React.useState(null)
      const { userId, isLoad } = useAuth()
      React.useEffect( () => {
        if (isLoad){
          const url = `http://localhost:3001/users/${userId}`
          axios.get(url)
            .then(({data}) => {
                setFolder(data.folders)
            })
        }
      },[userId])

      React.useEffect(() => {
        const id = folder.length > 0 ? Math.max(...folder.map(fol => fol.id)) + 1 : 1
        setId(id)
      },[folder])

      const handleEditText = (ids, name) => {
        const newTitle = folder.map(item => {
          if(item.id === ids){
            item.name = name
          }
          return item
        })
        const url = `http://localhost:3001/users/changetitle/${userId}`
        axios.patch(url, {ids, name})
            .then(({data}) => {
              setFolder(newTitle)
          })
      }
      
      const handleDeleteTask = (ids,index) => {
          if (window.confirm('Вы действительно хотите удалить задачу')){
              const newTask = folder.map(item => {
                if(item.id === ids){
                  item.tasks = item.tasks.filter((_,curInd) => curInd !== index)
                }
                return item
              })
              console.log(newTask)
              const url = `http://localhost:3001/users/deletetask/${userId}`
                axios.put(url, {newTask, ids})
                  .then(({data}) => {
                    setFolder(newTask)
                })
          }
      }
      
      const handleDeleteFolder = (ids) => {
        if (window.confirm('Вы действительно хотите удалить папку')){
            const newFolder = folder.filter(item =>  item.id !== ids );
            const url = `http://localhost:3001/users/deletefolder/${userId}`
            axios.put(url, newFolder)
              .then(({data}) => {
                setFolder(newFolder)
                hist.push('/main')
              })
        }
      }
      
      const handleAddTask = (ids,obj) => {
        const newTodo = folder.map(item => {
          if(item.id === ids){
            item.tasks = [...item.tasks, obj]
          }
          return item
        })
        const url = `http://localhost:3001/users/addtask/${userId}`
        axios.put(url, {obj, ids})
           .then(({data}) => {
            setFolder(newTodo)
          })
      }
      
      const handleAddFolder = (obj) => {
        const newFolder = [...folder,obj]
        const url = `http://localhost:3001/users/addfolder/${userId}`
        axios.put(url, obj)
           .then(({data}) => {
            setFolder(newFolder)
        })
      }
      
      const handleCompliteTask = (id,index,complite) => {
        const newComnlit = folder.map((item) => {
          if(item.id === id){
            item.tasks = item.tasks.map( (task,curInd) => {
                if(curInd === index){
                  task.completed = !complite
                }
                return task
            })
          }
          return item
        })
        setFolder(newComnlit)
      }

      const handleEditTask = (obj, index, ids) => {
        const editTask = folder.map( item => {
          if(item.id === ids){
            item.tasks = item.tasks.map( (task, curInd) => {
              if(curInd === index){
                task = obj
              }
              return task
            })
          }
          return item
        })
        console.log(editTask)
        const url = `http://localhost:3001/users/edittask/${userId}`
        axios.put(url, {ids, obj, index})
            .then(({data}) => {
              setFolder(editTask)
          })
      }

    return (
        <>
            <Sidebar  
                folder={folder} 
                setFolder={setFolder} 
                handleDeleteFolder={handleDeleteFolder}
                handleAddFolder={handleAddFolder}
                idFolder={idFolder}
              />
              <TodoTask  
                items={folder} 
                handleEditText={handleEditText}
                handleDeleteTask={handleDeleteTask}
                handleCompliteTask={handleCompliteTask}
                handleAddTask={handleAddTask}
                handleEditTask={handleEditTask}
              />
        </>
    )
}

export default Main
